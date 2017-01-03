///<reference path="../Core/Dictionary.ts" />
///<reference path="../Core/Guid.ts" />

module MiracleDevs.Angular.Services
{
    import Dictionary = Core.Dictionary;
    import ArrayList = Core.ArrayList;
    import Guid = Core.Guid;

    export interface IMessageBus
    {
        handlers: Dictionary<string, ArrayList<MessageBusHandler>>;

        register<T>(messageType: { new (): T }, handler: Function): RegistrationToken;

        unregister(token: RegistrationToken): void; 

        send<T>(messageType: { new (): T }, message: T, token?: RegistrationToken): boolean;
    }

    export class MessageBusHandler
    {
        private innerToken: RegistrationToken;

        private innerHandler: Function;

        get token(): RegistrationToken { return this.innerToken; }

        get handler(): Function { return this.innerHandler; }

        constructor(type: Function, handler: Function)
        {
            this.innerHandler = handler;
            this.innerToken = new RegistrationToken(type);
        }
    }

    export class RegistrationToken
    {
        private innerType: Function;

        private innerGuid: Guid;

        get type(): Function
        {
            return this.innerType;
        }

        get guid(): Guid
        {
            return this.innerGuid;
        }

        constructor(type: Function)
        {
            this.innerType = type;
            this.innerGuid = Guid.new();
        }
    }
}