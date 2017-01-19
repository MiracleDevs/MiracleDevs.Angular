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

    export class OnKeyboard extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "onKeyboard",
            factory: OnKeyboard.factory,
            dependencies: [FrameworkServices.keyProcessorService]
        };

        restrict = "A";

        private readonly keyProcessor: IKeyProcessorService;

        constructor(keyProcessor: IKeyProcessorService)
        {
            super();
            this.keyProcessor = keyProcessor;
        }

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);
            var keyActions = this.keyProcessor.parseActions(instanceAttributes[OnKeyboard.register.name]);

            if (keyActions.any(x => x.eventType === "keypress"))
                control.keypress(e => this.keyProcessor.evaluateKeyActions(keyActions, "keypress", scope, e));
            
            if (keyActions.any(x => x.eventType === "keydown"))
                control.keydown(e => this.keyProcessor.evaluateKeyActions(keyActions, "keydown", scope, e));
            
            if (keyActions.any(x => x.eventType === "keyup"))
                control.keyup(e => this.keyProcessor.evaluateKeyActions(keyActions, "keyup", scope, e));           

            scope.$on("$destroy", () => control.remove());
        }
      
        static factory(keyProcessor: IKeyProcessorService): OnKeyboard
        {
            return new OnKeyboard(keyProcessor);
        }
    } 

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(OnKeyboard.register);
}