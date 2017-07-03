/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
///<reference path="../services/IKeyProcessorService.ts" />
///<reference path="../scopes/directives/IKeyboardListenerScope.ts" />

module MiracleDevs.Angular.Directives
{
    import IAugmentedJQuery = ng.IAugmentedJQuery;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IKeyProcessorService = Services.IKeyProcessorService;
    import FrameworkServices = Services.FrameworkServices;
    import ArrayList = Angular.Core.ArrayList;
    import KeyAction = Services.KeyAction;
    import IKeyboardListenerScope = Scopes.Directives.IKeyboardListenerScope;
    import IController = ng.IController;

    export class KeyboardListener extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "keyboardListener",
            factory: KeyboardListener.factory,
            dependencies: [FrameworkServices.keyProcessorService]
        };

        restrict = "E";

        scope = {
            disabled: "=",
            attachTo: "@"
        }

        private readonly keyProcessor: IKeyProcessorService;

        private readonly actions: ArrayList<KeyAction>;

        constructor(keyProcessor: IKeyProcessorService)
        {
            super();
            this.keyProcessor = keyProcessor;
        }

        protected create(scope: IKeyboardListenerScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);
            var actions = String.empty;
            var attachTo = $(scope.attachTo || document);

            control.find("listener").each((index, element) =>
            {
                actions += element.getAttribute("action") + "|";
            });

            if (actions[actions.length - 1] === "|")
                actions = actions.substr(0, actions.length - 1);

            var keyActions = this.keyProcessor.parseActions(actions);
            var keyProcessor = this.keyProcessor;

            function evaluateKeyPress(e: JQueryKeyEventObject): void
            {
                if (scope.disabled)
                    return;

                keyProcessor.evaluateKeyActions(keyActions, "keypress", scope.$parent, e);
            }

            function evaluateKeyDown(e: JQueryKeyEventObject): void
            {
                if (scope.disabled)
                    return;

                keyProcessor.evaluateKeyActions(keyActions, "keydown", scope.$parent, e);
            }

            function evaluateKeyUp(e: JQueryKeyEventObject): void
            {
                if (scope.disabled)
                    return;

                keyProcessor.evaluateKeyActions(keyActions, "keyup", scope.$parent, e);
            }

            if (keyActions.any(x => x.eventType === "keypress"))
                attachTo.on("keypress.documentKeyboard", evaluateKeyPress);

            if (keyActions.any(x => x.eventType === "keydown"))
                attachTo.on("keydown.documentKeyboard", evaluateKeyDown);

            if (keyActions.any(x => x.eventType === "keyup"))
                attachTo.on("keyup.documentKeyboard", evaluateKeyUp);

            scope.$on("$destroy", () =>
            {
                attachTo.off("keypress.documentKeyboard", evaluateKeyPress);
                attachTo.off("keydown.documentKeyboard", evaluateKeyDown);
                attachTo.off("keyup.documentKeyboard", evaluateKeyUp);
                control.remove();
            });
        }

        static factory(keyProcessor: IKeyProcessorService): KeyboardListener
        {
            return new KeyboardListener(keyProcessor);
        }
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(KeyboardListener.register);
}