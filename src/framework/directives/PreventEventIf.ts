/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
module MiracleDevs.Angular.Directives
{
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import ITimeoutService = angular.ITimeoutService;
    import AngularServices = Services.AngularServices;

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

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
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