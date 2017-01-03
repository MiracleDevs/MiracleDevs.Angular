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

    export class SelectToggleClass extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "selectToggleClass",
            factory: SelectToggleClass.factory
        };

        restrict = "A";

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            var element = $(instanceElement);
            var className = instanceAttributes[SelectToggleClass.register.name];

            function documentClick()
            {
                element.removeClass(className);
            }

            $("html").on("click.selectToggleClass", documentClick);

            element.on("click", e =>
            {
                e.stopPropagation();
                element.toggleClass(className);
            });

            scope.$on("$destroy", () =>
            {               
                $("html").unbind("click.selectToggleClass", documentClick);
                element.remove();               
            });
        }

        static factory(): SelectToggleClass
        {
            return new SelectToggleClass();
        }
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(SelectToggleClass.register);
}