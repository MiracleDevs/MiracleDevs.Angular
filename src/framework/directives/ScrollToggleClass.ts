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

    export class ScrollToggleClass extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "scrollToggleClass",
            factory: ScrollToggleClass.factory
        };

        restrict = "A";

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            var element = $(instanceElement);
            var self = this;

            function updateElement()
            {
                self.updateElement(element, instanceAttributes);
            }

            $(window).on("scroll.scrollToggleClass", updateElement);

            scope.$on("$destroy", () =>
            {
                $(window).unbind("scroll.scrollToggleClass", updateElement);
                element.remove();              
            });

            this.updateElement(element, instanceAttributes);
        }

        private updateElement(element: JQuery, instanceAttributes: IAttributes): void
        {
            const options = {} as IScrollToggleClassParameters;

            this.tryGetNumber(options, instanceAttributes, "minPos");
            this.tryGetNumber(options, instanceAttributes, "maxPos");
            this.tryGet(options, instanceAttributes, "cssClass");

            options.minPos = options.minPos || Number.MIN_VALUE;
            options.maxPos = options.maxPos || Number.MAX_VALUE;

            const scroll = $(window).scrollTop();

            if (scroll >= options.minPos && scroll <= options.maxPos)
                element.addClass(options.cssClass);
            else
                element.removeClass(options.cssClass);
        }

        static factory(): ScrollToggleClass
        {
            return new ScrollToggleClass();
        }
    }

    export interface IScrollToggleClassParameters
    {
        forceAdd: boolean;

        forceRemove: boolean;

        minPos: number;

        maxPos: number;

        cssClass: string;
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(ScrollToggleClass.register);
}