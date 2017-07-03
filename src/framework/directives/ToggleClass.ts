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
    import IController = ng.IController;

    export class ToggleClass extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "toggleClass",
            factory: ToggleClass.factory
        };

        restrict = "A";

        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);
            const options = <IToggleClassParameters>{};

            this.tryGet(options, instanceAttributes, "element");
            this.tryGet(options, instanceAttributes, "toggleClass");

            if (!Object.isNull(options.element))
            {
                const element = $(options.element);

                if (!element.hasClass(options.toggleClass))
                    element.addClass(options.toggleClass);
                else
                    element.removeClass(options.toggleClass);
            }

            scope.$on("$destroy", () => control.remove());
        }

        static factory(): ToggleClass
        {
            return new ToggleClass();
        }
    }

    export interface IToggleClassParameters
    {
        toggleClass: string;

        element: string;
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(ToggleClass.register);
}