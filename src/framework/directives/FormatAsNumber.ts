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

    export class FormatAsNumber extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "formatAsNumber",
            factory: FormatAsNumber.factory
        };

        restrict = "A";

        require = "?ngModel";

        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void
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