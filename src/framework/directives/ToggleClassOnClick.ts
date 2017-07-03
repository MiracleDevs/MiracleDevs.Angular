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

    export class ToggleClassOnClick extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "toggleClassOnClick",
            factory: ToggleClassOnClick.factory
        };
        
        restrict = "A";

        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void
        {
            var element = $(instanceElement);
            var toggleElement = $(instanceAttributes["toggleElement"] || instanceElement);
            var toggleClass = instanceAttributes["toggleClass"];

            element.on("click touch", () => $(toggleElement).toggleClass(toggleClass));
            scope.$on("$destroy", () => element.remove());
        }

        static factory(): ToggleClassOnClick
        {
            return new ToggleClassOnClick();
        }
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(ToggleClassOnClick.register);
}