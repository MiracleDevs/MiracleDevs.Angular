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
    import AngularServices = Services.AngularServices;
    import IRootScope = ng.IRootScopeService;
    import IController = ng.IController;

    export class ScrollToTop extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "scrollToTop",
            factory: ScrollToTop.factory,
            dependencies: [AngularServices.rootScope]
        };

        restrict = "A";

        private rootScope: IRootScope;

        constructor(rootScope: IRootScope)
        {
            super();
            this.rootScope = rootScope;
        }

        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);
            const options = {} as IScrollToTopParameters;

            this.tryGetBoolean(options, instanceAttributes, "onStateChange");
            this.tryGetBoolean(options, instanceAttributes, "onClick");

            scope.$watch(() => instanceAttributes["onStateChange"], (newValue) => 
            {
                if (newValue === "true")
                {
                    if (Object.isNull(control[0]["stateChangeEvent"]))
                    {
                        control[0]["stateChangeEvent"] = this.rootScope.$on("$stateChangeSuccess", () => 
                        {
                            $("body").scrollTop(0);
                        });
                    }
                }
                else
                {
                    if (!Object.isNull(control[0]["stateChangeEvent"]))
                    {
                        control[0]["stateChangeEvent"]();
                        control[0]["stateChangeEvent"] = null;
                    }
                }
            });

            if (options.onClick)
            {
                control.on("click", () => 
                {
                    $("body").scrollTop(0);
                });
            }

            scope.$on("$destroy", () => control.remove());
        }

        static factory(rootScope: IRootScope): ScrollToTop
        {
            return new ScrollToTop(rootScope);
        }
    }

    export interface IScrollToTopParameters
    {
        onStateChange: boolean;

        onClick: boolean;
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(ScrollToTop.register);
}