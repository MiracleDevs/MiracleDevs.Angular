/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="ModuleBase.ts"/>
///<reference path="services/LoggingService.ts"/>

module MiracleDevs.Angular
{
    import IScope = angular.IScope;
    import IInjectorService = angular.auto.IInjectorService;
    import IHttpProvider = angular.IHttpProvider;
    import IStateProvider = angular.ui.IStateProvider;
    import IStateService = angular.ui.IStateService;
    import IUrlRouterProvider = angular.ui.IUrlRouterProvider;
    import LoggingService = Services.LoggingService;
    import ILocationProvider = angular.ILocationProvider;

    export class FrameworkModule extends ModuleBase
    {
        private static internalInstance = new FrameworkModule();

        static get instance(): FrameworkModule { return FrameworkModule.internalInstance; }

        constructor() 
        {
            if (FrameworkModule.internalInstance != null)
                throw new Error("The program does not allow more than one instance of the ModuleBase.");

            super();
            FrameworkModule.internalInstance = this;
            this.logger.writeMessage("creating application");
        }

        getModuleName(): string
        {
            return "miracledevs-framework";
        }

        protected preRegister(): void
        {
            this.registerLoggingService(LoggingService.register);
        }

        protected configureRoutes(stateProvider: IStateProvider, urlRouterProvider: IUrlRouterProvider, httpProvider: IHttpProvider, location: ILocationProvider): void
        {
        }

        protected authorizeRoute(rootScope: IScope, state: IStateService, injector: IInjectorService): void
        {
        }

        protected getModuleDependencies()
        {
            return ["ui.router", "ngAnimate", "pascalprecht.translate", "ngPatternRestrict", "ui.select", "ngSanitize"];
        }
    }
}