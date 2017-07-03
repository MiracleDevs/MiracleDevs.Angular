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

    export class PaginationBar extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "paginationBar",
            factory: PaginationBar.factory
        };

        restrict = "E";

        template = '<div class="pagination-bar" ng-controller="PaginationBarController as controller"><ul class="pagination"><li ng-repeat="link in links" ng-class="{ \'active\': link.selected }"><a ng-click="link.enabled && controller.navigate(link)" tooltip title="Go to page {{link.tag}}" ng-bind-html="link.name"></a></li></ul></div>';

        scope = {
            cssClass: "@",
            firstText: "@",
            previousText: "@",   
            nextText: "@",
            lastText: "@",
            pages: "=",
            currentPage: "=",
            totalLinks: "@",
            links: "=",
            itemClicked: "&",
            autoScroll: "@"
        };

        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);
            scope.$on("$destroy", () => control.remove());
        }

        static factory(): PaginationBar
        {
            return new PaginationBar();
        }
    }

    export interface IPaginationBarParameters
    {
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(PaginationBar.register);
}