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

    export class SelectToggleClass extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "selectToggleClass",
            factory: SelectToggleClass.factory
        };

        restrict = "A";

        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void
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