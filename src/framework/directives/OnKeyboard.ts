/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="../core/ArrayList.ts"/>
///<reference path="DirectiveBase.ts" />

module MiracleDevs.Angular.Directives
{
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import ICompiledExpression = angular.ICompiledExpression;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import AngularServices = Services.AngularServices;
    import IParseService = angular.IParseService;
    import ArrayList = Core.ArrayList;

    export class OnKeyboard extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "onKeyboard",
            factory: OnKeyboard.factory,
            dependencies: [AngularServices.parse]
        };

        restrict = "A";

        private parse: IParseService;

        constructor(parse: IParseService)
        {
            super();
            this.parse = parse;
        }

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);
            var keyActions = this.parseActions(instanceAttributes[OnKeyboard.register.name]);

            if (keyActions.any(x => x.eventType === "keypress"))
                control.keypress(e => this.checkKeys(keyActions, "keypress", scope, e));
            
            if (keyActions.any(x => x.eventType === "keydown"))
                control.keydown(e => this.checkKeys(keyActions, "keydown", scope, e));
            
            if (keyActions.any(x => x.eventType === "keyup"))
                control.keyup(e => this.checkKeys(keyActions, "keyup", scope, e));
            

            scope.$on("$destroy", () => control.remove());
        }

        private checkKeys(keyActions: ArrayList<KeyAction>, eventType: string, scope: IScope, e: JQueryKeyEventObject): void 
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
                        (!Object.isNull(keyAction.ctrl) && keyAction.shift && e.ctrlKey) ||
                        (!Object.isNull(keyAction.ctrl) && !keyAction.shift && !e.ctrlKey)))
                {
                    scope.$apply(() =>
                    {
                        keyAction.action(scope, null);
                        e.stopPropagation();
                        e.preventDefault();
                    });
                }
            });
        }

        private parseActions(text: string): ArrayList<KeyAction>
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
                const parameters = keys.split(",");

                try
                {
                    keyAction.eventType = eventType;
                    keyAction.action = this.parse(parts[1]);
                    keyAction.keyCode = parseInt(parameters[0]);
                }
                catch (error)
                {
                    throw new Error(`The key-submit expression number ${i} is incorrect. Should be event(keycode,[shift],[alt],[ctrl]): action.`);
                }

                if (parameters.length > 1)
                    keyAction.shift = parameters[1] === "shift";

                if (parameters.length > 2)
                    keyAction.alt = parameters[2] === "alt";

                if (parameters.length > 3)
                    keyAction.ctrl = parameters[3] === "ctrl";

                keyActions.add(keyAction);
            }

            return keyActions;
        }

        static factory(parse: IParseService): OnKeyboard
        {
            return new OnKeyboard(parse);
        }
    }

    export class KeyAction
    {
        eventType: string;

        keyCode: number;

        shift: boolean;

        ctrl: boolean;

        alt: boolean;

        action: ICompiledExpression;
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(OnKeyboard.register);
}