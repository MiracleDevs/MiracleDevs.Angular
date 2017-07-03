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
    import IInterpolateService = ng.IInterpolateService;
    import IStateService = ng.ui.IStateService;
    import AngularServices = Services.AngularServices;
    import IController = ng.IController;

    export class MdUiSrefActive extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "mdUiSrefActive",
            factory: MdUiSrefActive.factory,
            dependencies: [AngularServices.interpolate, AngularServices.state]
        };

        restrict = "A";

        private interpolate: IInterpolateService;

        private state: IStateService;

        constructor(interpolate: IInterpolateService, state: IStateService)
        {
            super();
            this.interpolate = interpolate;
            this.state = state;
        }

        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);
            var cssClass = instanceAttributes[MdUiSrefActive.register.name];
            var state = this.interpolate(instanceAttributes["mdUiSref"] || instanceAttributes["uiSref"])(scope);

            function update(toState): void
            {
                if (Object.isNull(toState) || Object.isNull(toState.name))
                    return;

                if ((toState.name as string).indexOf(state) !== -1)
                {
                    control.addClass(cssClass);
                }
                else
                {
                    control.removeClass(cssClass);
                }
            }

            update(this.state.current);
            scope.$on("$stateChangeSuccess", (event, toState) => update(toState));
            scope.$on("$destroy", () => control.remove());
        }

        static factory(interpolate: IInterpolateService, state: IStateService): MdUiSrefActive
        {
            return new MdUiSrefActive(interpolate, state);
        }
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(MdUiSrefActive.register);
}