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

    export class RemoveClass extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "removeClass",
            factory: RemoveClass.factory
        };

        restrict = "A";

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);
            const options = {} as IRemoveClassParameters;

            this.tryGet(options, instanceAttributes, "element");
            this.tryGet(options, instanceAttributes, "removeClass");

            if (!Object.isNull(options.element))
            {
                const element = $(options.element);

                if (element.hasClass(options.removeClass))
                    element.removeClass(options.removeClass);
            }

            scope.$on("$destroy", () => control.remove());
        }

        static factory(): RemoveClass
        {
            return new RemoveClass();
        }
    }

    export interface IRemoveClassParameters
    {
        removeClass: string;

        element: string;
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(RemoveClass.register);
}