﻿///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="../interfaces/IDirectiveRegister.ts"/>
///<reference path="DirectiveBase.ts" />

module MiracleDevs.Angular.Directives
{
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;

    export class FocusInvalidField extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "focusInvalidField",
            factory: FocusInvalidField.factory
        };

        restrict = "A";

        protected create(scope: IScope,
            instanceElement: IAugmentedJQuery,
            instanceAttributes: IAttributes,
            controller: any,
            transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);

            control.on("submit", () =>
            {
                var invalid = control.find(".ng-invalid");

                if (!Object.isNull(invalid) && invalid.length > 0)
                {
                    invalid[0].focus();
                }
            });

            scope.$on("$destroy", () => control.remove());
        }

        static factory(): FocusInvalidField
        {
            return new FocusInvalidField();
        }
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(FocusInvalidField.register);
}