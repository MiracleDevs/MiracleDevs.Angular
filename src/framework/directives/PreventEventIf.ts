/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
module MiracleDevs.Angular.Directives
{
    import IScope = ng.IScope;
    import IAugmentedJQuery = ng.IAugmentedJQuery;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import ITimeoutService = ng.ITimeoutService;
    import AngularServices = Services.AngularServices;
    import IController = ng.IController;

    export class PreventEventIf extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "preventEventIf",
            factory: PreventEventIf.factory,
            dependencies: [AngularServices.timeout]
        };

        restrict = "A";

        scope = 
        {
            preventEventIf: "&",
            preventEvent: "@"
        };

        private timeout: ITimeoutService;

        constructor(timeout: ITimeoutService)
        {
            super();
            this.timeout = timeout;
        }

        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);
           
            control.on(scope["preventEvent"], e =>
            {
                if (scope["preventEventIf"]())
                {
                    event.preventDefault();
                    e.stopPropagation();
                }
            });

            scope.$on("$destroy", () => control.remove());
        }

        static factory(timeout: ITimeoutService): PreventEventIf
        {
            return new PreventEventIf(timeout);
        }
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(PreventEventIf.register);
}