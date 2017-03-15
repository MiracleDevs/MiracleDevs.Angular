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
    import IFilterService = angular.IFilterService;
    import AngularServices = Angular.Services.AngularServices;

    export class FormatAsNumber extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "formatAsNumber",
            factory: FormatAsNumber.factory,
            dependencies: [AngularServices.filter]
        };

        restrict = "A";
        require = "?ngModel";

        private readonly filter: IFilterService;
  
        constructor(filter: IFilterService)
        {
            super();
            this.filter = filter;       
        }

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);

            if (!Object.isNull(controller))
            {                
                controller.$formatters.unshift(value => this.filter("number")(value, instanceAttributes["decimalPlaces"] || 2));
                controller.$parsers.unshift(value => parseFloat(value));
                control.blur(() => control.val(this.filter("number")(control.val(), instanceAttributes["decimalPlaces"] || 2)));
            }
        
            scope.$on("$destroy", () => control.remove());
        }

        static factory(filter: IFilterService): FormatAsNumber
        {
            return new FormatAsNumber(filter);
        }
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(FormatAsNumber.register);
}