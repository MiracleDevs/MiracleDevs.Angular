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

    export class ConvertToNumber extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "convertToNumber",
            factory: ConvertToNumber.factory
        };

        restrict = "A";

        require = "ngModel";

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            controller.$parsers.push((val) =>  Object.isNull(val) ? parseInt(val, 10) : null);
            controller.$formatters.push((val) => val != null ? `${val}` : null);

            var element = $(instanceElement);
            scope.$on("$destroy", () => element.remove());
        }

        static factory(): ConvertToNumber
        {
            return new ConvertToNumber();
        }
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(ConvertToNumber.register);
}