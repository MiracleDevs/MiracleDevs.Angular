/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../Core/Dictionary.ts" />
///<reference path="../Core/Guid.ts" />
///<reference path="ServiceBase.ts" />
///<reference path="IMessageBus.ts" />
///<reference path="../interfaces/IServiceRegister.ts" />
///<reference path="../FrameworkModule.ts" />

module MiracleDevs.Angular.Services
{
    import IServiceRegister = Interfaces.IServiceRegister;
    import Dictionary = Core.Dictionary;
    import ArrayList = Core.ArrayList;

    export class MessageBus extends ServiceBase implements IMessageBus
    {
        static register: IServiceRegister =
        {
            name: FrameworkServices.messageBus,
            factory: MessageBus.factory
        };

        handlers: Dictionary<string, ArrayList<MessageBusHandler>>;

        constructor()
        {
            super();
            this.handlers = new Dictionary<string, ArrayList<MessageBusHandler>>();
        }

        register<T>(messageType: { new (): T }, handler: Function): RegistrationToken
        {
            const type = messageType["messageType"];

            if (!this.handlers.containsKey(type))
                this.handlers.add(type, new ArrayList<MessageBusHandler>());

            const messageBusHandler = new MessageBusHandler(messageType, handler);
            this.handlers.get(type).add(messageBusHandler);

            return messageBusHandler.token;
        }

        unregister(token: RegistrationToken): void
        {
            const type = token.type["messageType"];

            if (!this.handlers.containsKey(type))
                return;

            const handler = this.handlers.get(type);
            handler.removeAll(x => x.token.guid === token.guid);

            if (!handler.any())
                this.handlers.remove(type);
        }

        send<T>(messageType: { new (): T }, message: T, token?: RegistrationToken): boolean
        {
            const type = messageType["messageType"];

            if (!this.handlers.containsKey(type))
                return false;

            const handlers = this.handlers.get(type)
                .where(x => token == null || token.guid === x.token.guid)
                .select(x => x.handler);

            let accepted = false;

            for (let i = (handlers.count() - 1); i >= 0; i--)
            {
                const handler = handlers.get(i);

                if (handler == null)
                    continue;

                accepted = true;
                handler(message);
            }

            return accepted;
        }

        static factory(): MessageBus
        {
            return new MessageBus();
        }
    }

    ////////////////////////////////////////////////////////////
    // Register service
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerService(MessageBus.register);
}