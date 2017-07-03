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

    export class RemoveClass extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "removeClass",
            factory: RemoveClass.factory
        };

        restrict = "A";

        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void
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