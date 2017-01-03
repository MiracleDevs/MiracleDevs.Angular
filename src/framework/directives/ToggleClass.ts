///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
///<reference path="../interfaces/IDirectiveRegister.ts" />

module MiracleDevs.Angular.Directives
{
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;

    export class ToggleClass extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "toggleClass",
            factory: ToggleClass.factory
        };

        restrict = "A";

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
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