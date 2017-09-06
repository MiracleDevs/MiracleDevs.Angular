/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../../typings/index.d.ts"/>
///<reference path="../core/ArrayList.ts" />
///<reference path="../interfaces/IServiceRegister.ts" />

module MiracleDevs.Angular.Services
{
    import IScope = ng.IScope;
    import IParseService = ng.IParseService;
    import ArrayList = Core.ArrayList;
    import IServiceRegister = Interfaces.IServiceRegister;

    export class KeyProcessorService extends ServiceBase implements IKeyProcessorService
    {
        static register: IServiceRegister = {
            name: FrameworkServices.keyProcessorService,
            factory: KeyProcessorService.factory,
            dependencies: [ AngularServices.parse ] 
        };

        private readonly parse: IParseService;

        constructor(parse: IParseService)
        {
            super();
            this.parse = parse;
        }

        evaluateKeyActions(keyActions: ArrayList<KeyAction>, eventType: string, scope: IScope, e: JQueryKeyEventObject): void
        {
            keyActions.where(x => x.eventType === eventType).forEach(keyAction => 
            {
                if (e.keyCode === keyAction.keyCode &&
                    ((Object.isNull(keyAction.shift)) ||
                        (!Object.isNull(keyAction.shift) && keyAction.shift && e.shiftKey) ||
                        (!Object.isNull(keyAction.shift) && !keyAction.shift && !e.shiftKey)) &&

                    ((Object.isNull(keyAction.alt)) ||
                        (!Object.isNull(keyAction.alt) && keyAction.alt && e.altKey) ||
                        (!Object.isNull(keyAction.alt) && !keyAction.alt && !e.altKey)) &&

                    ((Object.isNull(keyAction.ctrl)) ||
                        (!Object.isNull(keyAction.ctrl) && keyAction.ctrl && e.ctrlKey) ||
                        (!Object.isNull(keyAction.ctrl) && !keyAction.ctrl && !e.ctrlKey)))
                {
                    scope.$apply(() =>
                    {
                        keyAction.action(scope, { $event: e });
                    });
                }
            });
        }

        parseActions(text: string): ArrayList<KeyAction>
        {
            const keyActions = new ArrayList<KeyAction>();
            const actionStrings = text.split("|");

            for (let i = 0; i < actionStrings.length; i++)
            {
                const keyAction = new KeyAction();
                const actionString = actionStrings[i];

                const parts = actionString.split(":");

                if (parts.length !== 2)
                    throw new Error(`The key-submit expression number ${i} is incorrect. Should be event(keycode,[shift],[alt],[ctrl]): action`);

                const firstParenthesis = parts[0].indexOf("(");
                const lastParenthesis = parts[0].indexOf(")");

                if (firstParenthesis < 0 || lastParenthesis < 0)
                    throw new Error(`The key-submit expression number ${i} is incorrect. Should be event(keycode,[shift],[alt],[ctrl]): action`);

                const eventType = parts[0].substr(0, firstParenthesis);

                if (eventType !== "keypress" &&
                    eventType !== "keydown" &&
                    eventType !== "keyup")
                    throw new Error(`Only keypress, keydown and keyup events are allowed on action strings.`);

                const keys = parts[0].substr(firstParenthesis + 1, lastParenthesis - firstParenthesis - 1);
                const parameters = new ArrayList(keys.split(","));

                try
                {
                    keyAction.eventType = eventType;
                    keyAction.action = this.parse(parts[1]);
                    keyAction.keyCode = parseInt(parameters.get(0));
                }
                catch (error)
                {
                    throw new Error(`The key-submit expression number ${i} is incorrect. Should be event(keycode,[shift],[alt],[ctrl]): action.`);
                }

                if (parameters.any(x => x === "shift"))
                    keyAction.shift = true;
                else if (parameters.any(x => x === "!shift"))
                    keyAction.shift = false;

                if (parameters.any(x => x === "ctrl"))
                    keyAction.ctrl = true;
                else if (parameters.any(x => x === "!ctrl"))
                    keyAction.ctrl = false;

                if (parameters.any(x => x === "alt"))
                    keyAction.alt = true;
                else if (parameters.any(x => x === "!alt"))
                    keyAction.alt = false;

                keyActions.add(keyAction);
            }

            return keyActions;
        }

        static factory(parse: IParseService): IKeyProcessorService
        {
            return new KeyProcessorService(parse);
        }
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerService(KeyProcessorService.register);
}