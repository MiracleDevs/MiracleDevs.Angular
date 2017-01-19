/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="../core/String.ts" />
///<reference path="DirectiveBase.ts" />

module MiracleDevs.Angular.Directives
{
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;

    export class Tooltip extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "tooltipster",
            factory: Tooltip.factory
        };

        restrict = "A";

        scope = {
            tooltipOptions: "@",
            tooltipCose: "&",
            tooltipParameter: "="
        };

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);
            const options = this.getOptions<ITooltipOptions>(instanceAttributes, Tooltip.register.name + "Options");

            if (Object.isNull(options) || Object.isNull(options.content))
            {
                this.normalTooltip(control, scope, instanceAttributes);
            }

            (control as any).tooltipster(options);

            scope.$on("$destroy", () => control.remove());
        }

        private normalTooltip(control: JQuery, scope: IScope, instanceAttributes: IAttributes): void
        {
            scope.$watch(() => instanceAttributes["title"], newValue =>
            {
                if (String.isNullOrWhiteSpace(newValue))
                    return;

                var tooltipsterData = control.data("tooltipster-ns");

                if (!Object.isNull(tooltipsterData))
                {
                    control.removeAttr("title");
                    (control as any).tooltipster("content", newValue);
                }
            });
            
        }

        static factory(): Tooltip
        {
            return new Tooltip();
        }
    }

    export interface ITooltipOptions
    {
        animation: "fade" | "grow" | "swing" | "slide" | "fall";
        animationDuration: number | number[];
        arrow: boolean;
        content: string | JQuery | any;
        contentAsHTML: boolean;
        contentCloning: boolean;
        debug: boolean;
        delay: number | number[];
        delayTouch: number | number[];
        distance: number | number[];
        IEmin: number;
        interactive: boolean;
        maxWidth: number;
        minIntersection: number;
        minWidth: number;
        multiple: boolean;
        plugins: string[];
        repositionOnScroll: boolean;
        restoration: "none" | "previous" | "current";
        selfDestruction: boolean;
        side: string | string[];
        timer: number;
        theme: string | string[];
        trackerInterval: number;
        trackOrigin: boolean;
        trackTooltip: boolean;
        trigger: "hover" | "click" | "custom";
        triggerClose: any;
        triggerOpen: any;
        updateAnimation: "fade" | "rotate" | "scale";
        viewportAware: boolean;
        zIndex: number;
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(Tooltip.register);
}