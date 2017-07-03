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

    export class AddClass extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "addClass",
            factory: AddClass.factory
        };

        restrict = "A";

        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void
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