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

    export class AddClass extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "addClass",
            factory: AddClass.factory
        };

        restrict = "A";

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);
            const options = {} as IAddClassParameters;

            this.tryGet(options, instanceAttributes, "element");
            this.tryGet(options, instanceAttributes, "addClass");

            if (!Object.isNull(options.element))
            {
                const element = $(options.element);

                if (!element.hasClass(options.addClass))
                {
                    element.addClass(options.addClass);
                }
            }

            scope.$on("$destroy", () => control.remove());
        }

        static factory(): AddClass
        {
            return new AddClass();
        }
    }

    export interface IAddClassParameters
    {
        addClass: string;

        element: string;
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(AddClass.register);
}