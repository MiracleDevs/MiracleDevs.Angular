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

    export class FormatAsNumber extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "formatAsNumber",
            factory: FormatAsNumber.factory
        };

        restrict = "A";

        require = "?ngModel";

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);

            if (!Object.isNull(controller))
            {                
                controller.$formatters.unshift(value =>
                {
                    return (Object.isNull(value) || value === "") ? null : new Number(value).toFixed(instanceAttributes["decimalPlaces"] || 2);
                });
                controller.$parsers.unshift(value =>
                {
                    return (Object.isNull(value) || value === "") ? null : new Number(value).valueOf();
                });
                control.blur(() =>
                {
                    var value = control.val();
                    return control.val((Object.isNull(value) || value === "") ? null : new Number(control.val()).toFixed(instanceAttributes["decimalPlaces"] || 2));
                });
            }
        
            scope.$on("$destroy", () => control.remove());
        }

        static factory(): FormatAsNumber
        {
            return new FormatAsNumber();
        }
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(FormatAsNumber.register);
}