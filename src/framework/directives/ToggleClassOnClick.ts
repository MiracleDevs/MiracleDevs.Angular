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

    export class ToggleClassOnClick extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "toggleClassOnClick",
            factory: ToggleClassOnClick.factory
        };
        
        restrict = "A";

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
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