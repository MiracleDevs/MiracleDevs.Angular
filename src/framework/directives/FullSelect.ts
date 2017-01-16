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

    export class FullSelect extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "fullSelect",
            factory: FullSelect.factory
        };

        restrict = "A";

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);

            control.on("focus", () => (instanceElement as any).select());
            
            scope.$on("$destroy", () => control.remove());
        }

        static factory(): FullSelect
        {
            return new FullSelect();
        }
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(FullSelect.register);
}