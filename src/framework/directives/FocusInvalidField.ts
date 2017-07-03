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