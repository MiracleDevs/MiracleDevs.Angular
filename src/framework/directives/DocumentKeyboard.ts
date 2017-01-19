/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="../core/ArrayList.ts"/>
///<reference path="DirectiveBase.ts" />
///<reference path="../services/IKeyProcessorService.ts" />

module MiracleDevs.Angular.Directives
{
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IKeyProcessorService = Services.IKeyProcessorService;
    import FrameworkServices = Services.FrameworkServices;
    import ArrayList = Angular.Core.ArrayList;
    import KeyAction = Services.KeyAction;

    export class DocumentKeyboard extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "documentKeyboard",
            factory: DocumentKeyboard.factory,
            dependencies: [ FrameworkServices.keyProcessorService ]
        };

        restrict = "E";

        private readonly keyProcessor: IKeyProcessorService;

        private readonly actions: ArrayList<KeyAction>;

        constructor(keyProcessor: IKeyProcessorService)
        {
            super();
            this.keyProcessor = keyProcessor;
        }

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            const mainDocument = $(document);
            var control = $(instanceElement);
            var actions = String.empty;

            control.find("listener").each((index, element) =>
            {
                actions += element.getAttribute("action") + "|";
            });

            if (actions[actions.length - 1] === "|")
                actions = actions.substr(0, actions.length - 1);

            var keyActions = this.keyProcessor.parseActions(actions);
            var keyProcessor = this.keyProcessor;

            function evaluateKeyActions(e: JQueryKeyEventObject): void
            {
                keyProcessor.evaluateKeyActions(keyActions, "keypress", scope, e);
            }

            if (keyActions.any(x => x.eventType === "keypress"))
                mainDocument.on("keypress.documentKeyboard", evaluateKeyActions);
            
            if (keyActions.any(x => x.eventType === "keydown"))
                mainDocument.on("keydown.documentKeyboard", evaluateKeyActions);
            
            if (keyActions.any(x => x.eventType === "keyup"))
                mainDocument.on("keyup.documentKeyboard", evaluateKeyActions);    

            scope.$on("$destroy", () =>
            {
                mainDocument.off("keypress.documentKeyboard", evaluateKeyActions);
                mainDocument.off("keydown.documentKeyboard", evaluateKeyActions);
                mainDocument.off("keyup.documentKeyboard", evaluateKeyActions);
                control.remove();
            });
        }
      
        static factory(keyProcessor: IKeyProcessorService): DocumentKeyboard
        {
            return new DocumentKeyboard(keyProcessor);
        }
    } 

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(DocumentKeyboard.register);
}