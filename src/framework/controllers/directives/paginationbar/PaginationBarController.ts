/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../FrameworkModule.ts"/>
///<reference path="../../ControllerBase.ts"/>
///<reference path="../../../session/ObjectSession.ts" />
///<reference path="../../../scopes/directives/pagination/IPaginationBarScope.ts" />
///<reference path="../../../directives/PaginationBar.ts" />

module MiracleDevs.Angular.Controllers.Directives.PaginationBar
{
    import IControllerRegister = Interfaces.IControllerRegister;
    import IInjectorService = angular.auto.IInjectorService;
    import AngularServices = Services.AngularServices;
    import IPaginationBarScope = Scopes.Directives.PaginationBar.IPaginationBarScope;
    import PaginationBarItem = Scopes.Directives.PaginationBar.PaginationBarItem;
    import ISCEService = angular.ISCEService;

    export class PaginationBarController extends ControllerBase 
    {
        static register: IControllerRegister = {
            name: "PaginationBarController",
            controller: PaginationBarController,
            dependencies: [AngularServices.scope, AngularServices.injector]
        };

        protected scope: IPaginationBarScope;

        constructor(scope: IPaginationBarScope, injector: IInjectorService)
        {
            super(scope, injector);
            this.logger.writeMessage("Starting Pagination Bar Controller..");

            scope.$watch(() => scope.pages, () => this.create());
            scope.$watch(() => scope.currentPage, () => this.create());
        }

        private create(): void
        {
            if (Object.isNull(this.scope.pages) || this.scope.pages <= 1)
            {
                this.scope.links = null;
                return;
            }

            const sce = this.getService<ISCEService>(AngularServices.sce);

            const current = this.scope.currentPage;
            const first = 1;
            let previous = current - 1;
            let next = current + 1;
            const last = this.scope.pages;

            if (previous < first)
                previous = first;

            if (next > last)
                next = last;

            const totalLinks = this.scope.totalLinks;
            const halfLinks = totalLinks / 2;
            let linkFrom = current - halfLinks;
            let linkTo = current + halfLinks;

            if (linkFrom < first)
                linkTo += first - linkFrom;

            if (linkTo > last)
                linkFrom += last - linkTo;

            if (linkFrom < first)
                linkFrom = first;

            if (linkTo > last)
                linkTo = last;

            this.scope.links = [];
            this.scope.links.push(new PaginationBarItem(sce.trustAsHtml(this.scope["firstText"]), first, current !== first));
            this.scope.links.push(new PaginationBarItem(sce.trustAsHtml(this.scope["previousText"]), previous, current !== first));

            for (let i = linkFrom; i <= linkTo; i++)
                this.scope.links.push(new PaginationBarItem(i.toString(), i, true, current === i));

            this.scope.links.push(new PaginationBarItem(sce.trustAsHtml(this.scope["nextText"]), next, current !== last));
            this.scope.links.push(new PaginationBarItem(sce.trustAsHtml(this.scope["lastText"]), last, current !== last));
        }

        navigate(link: PaginationBarItem): void
        {
            if (Object.isNull(this.scope["autoScroll"]) || this.scope["autoScroll"] === "true")
            {
                $("body").scrollTop(0);
            }

            if (Object.isNull(this.scope["itemClicked"]))
                return;

            this.scope["itemClicked"]({ tag: link.tag });
        }
    }

    ////////////////////////////////////////////////////////////
    // Register controller
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerController(PaginationBarController.register);
} 