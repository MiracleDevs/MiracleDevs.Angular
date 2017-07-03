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
    import AngularServices = Angular.Services.AngularServices;
    import IController = ng.IController;

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

        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);
            var focusDelay = 100;

            if (instanceAttributes["focus-delay"])
                focusDelay = parseInt(instanceAttributes["focus-delay"]);

            scope.$watch(() => instanceAttributes[FocusWhen.register.name], () => 
            {
                this.timeout(() =>
                {
                    try
                    {
                        const model = scope.$eval(instanceAttributes[FocusWhen.register.name]);

                        if (model)
                        {
                            control.focus();
                        }
                    }
                    catch (e)
                    {

                    }
                }, focusDelay);
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