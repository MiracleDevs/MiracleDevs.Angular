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
    import AngularServices = Angular.Services.AngularServices;

    export class FocusWhen extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "focusWhen",
            factory: FocusWhen.factory,
            dependencies: [AngularServices.timeout]
        };

        restrict = "A";

        private timeout: ITimeoutService;

        constructor(timeout: ITimeoutService)
        {
            super();
            this.timeout = timeout;       
        }

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);
            var focusDelay = 100;

            if (instanceAttributes["focus-delay"])
                focusDelay = parseInt(instanceAttributes["focus-delay"]);

            scope.$watch(() => instanceAttributes[FocusWhen.register.name], (value: string) => 
            {
                try
                {
                    const model = scope.$eval(value);

                    if (model)
                    {
                        this.timeout(() =>control.focus(), focusDelay);
                    }
                }
                catch (e)
                {
                    
                }
            });
            
            scope.$on("$destroy", () => control.remove());
        }

        static factory(timeout: ITimeoutService): FocusWhen
        {
            return new FocusWhen(timeout);
        }
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(FocusWhen.register);
}