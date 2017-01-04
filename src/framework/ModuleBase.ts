/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="core/Function.ts"/>
///<reference path="core/Object.ts"/>
///<reference path="services/AngularServices.ts"/>
///<reference path="../typings/angularjs/angular.d.ts"/>
///<reference path="../typings/angular-translate/angular-translate.d.ts"/>
///<reference path="../typings/angular-ui-router/angular-ui-router.d.ts"/>
///<reference path="interfaces/IControllerRegister.ts"/>
///<reference path="interfaces/IServiceRegister.ts"/>
///<reference path="interfaces/IDirectiveRegister.ts"/>
///<reference path="interfaces/IFilterRegister.ts"/>
///<reference path="interfaces/IInterceptorRegister.ts"/>
///<reference path="services/ILoggingService.ts"/>

module MiracleDevs.Angular
{
    import IModule = angular.IModule;
    import IScope = angular.IScope;
    import IHttpProvider = angular.IHttpProvider;
    import IStateProvider = angular.ui.IStateProvider;
    import IStateService = angular.ui.IStateService;
    import IState = angular.ui.IState;
    import IUrlRouterProvider = angular.ui.IUrlRouterProvider;   
    import IInjectorService = angular.auto.IInjectorService;
    import IControllerRegister = Interfaces.IControllerRegister;
    import IServiceRegister = Interfaces.IServiceRegister;
    import IFilterRegister = Interfaces.IFilterRegister;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import ILoggingService = Services.ILoggingService;
    import AngularServices = Services.AngularServices;
    import ITranslateProvider = angular.translate.ITranslateProvider;
    import ILocationProvider = angular.ILocationProvider;
    import IInterceptorRegister = Interfaces.IInterceptorRegister;

    export abstract class ModuleBase 
    {
        protected httpProvider: IHttpProvider;

        protected stateProvider: IStateProvider;

        protected interceptorsQueue: Array<IInterceptorRegister>;

        protected controllersQueue: Array<IControllerRegister>;

        protected module: IModule;

        protected logger: ILoggingService;

        constructor() 
        {
            this.controllersQueue = new Array<IControllerRegister>();
            this.interceptorsQueue = new Array<IInterceptorRegister>();

            this.module = angular.module(this.getModuleName(), this.getModuleDependencies());
            this.preRegister();
            this.module.config([AngularServices.stateProvider, AngularServices.urlRouterProvider, AngularServices.httpProvider, AngularServices.locationProvider, (stateProvider, urlRouterProvider, httpProvider, location) => this.configureRoutes(stateProvider, urlRouterProvider, httpProvider, location)]);
            this.module.config([AngularServices.translateProvider, translateProvider => this.configureTranslator(translateProvider)]);
            this.module.config([AngularServices.compileProvider, compileProvider => compileProvider.debugInfoEnabled(false)]);
            this.module.config([AngularServices.httpProvider, provider => this.registerInterceptors(provider)]);
            this.module.config([AngularServices.stateProvider, provider => this.registerStates(provider)]);
            this.module.run([AngularServices.rootScope, AngularServices.state, AngularServices.injector, (rootScope, state, injector) => this.authorizeRoute(rootScope, state, injector)]);
        }

        getModule(): IModule
        {
            return this.module;
        }

        getModuleName(): string
        {
            throw new Error("Please override getModuleName method and provide a name for the module.");
        }

        registerController(register: IControllerRegister): void
        {
            if (register == null)
                throw new Error("Problems registering the controller.");

            if (!Object.isNull(register.dependencies))
                register.controller.$inject = register.dependencies;

            this.module.controller(register.name, register.controller);
            this.logger.writeMessage(`registering ${register.name}`);

            if (this.stateProvider == null)
                this.controllersQueue.push(register);
            else
                this.registerControllerState(register);
        }

        registerService(register: IServiceRegister): void
        {
            if (register == null)
                throw new Error("Problems registering the service.");

            const parameters = (register.dependencies || new Array<any>()) as Array<any>;
            parameters.push(register.factory);

            this.module.factory(register.name, parameters);
            this.logger.writeMessage(`registering ${register.name}`);
        }

        registerLoggingService(register: IServiceRegister): void
        {
            if (register == null)
                throw new Error("Problems registering the logging service.");

            const parameters = (register.dependencies || new Array<any>()) as Array<any>;
            parameters.push(register.factory);

            this.module.factory(register.name, parameters);
            this.logger = register.factory();

            this.logger.writeMessage(`registering ${register.name}`);
        }

        registerInterceptor(register: IInterceptorRegister): void
        {
            if (register == null)
                throw new Error("Problems registering the Interceptor.");

            if (this.httpProvider == null)
                this.interceptorsQueue.push(register);
            else
            {
                const parameters = (register.dependencies || new Array<any>()) as Array<any>;
                parameters.push(register.factory);              
                this.httpProvider.interceptors.push(parameters);
            }

            this.logger.writeMessage(`registering ${register.name}`);
        }

        registerFilter(register: IFilterRegister)
        {
            if (register == null)
                throw new Error("Problems registering the filter.");

            const parameters = (register.dependencies || new Array<any>()) as Array<any>;
            parameters.push(register.factory);

            this.module.filter(register.name, parameters);
            this.logger.writeMessage(`registering ${register.name}`);
        }

        registerDirective(register: IDirectiveRegister)
        {
            if (register == null)
                throw new Error("Problems registering the directive.");

            const parameters = (register.dependencies || new Array<any>()) as Array<any>;
            parameters.push(register.factory);

            this.module.directive(register.name, parameters);
            this.logger.writeMessage(`registering ${register.name}`);
        }

        private registerStates(stateProvider: IStateProvider)
        {
            this.stateProvider = stateProvider;

            if (!Object.isNull(this.controllersQueue))
            {
                for (let i = 0; i < this.controllersQueue.length; i++)
                {
                    this.registerControllerState(this.controllersQueue[i]);
                }

                this.controllersQueue = null;
            }                   
        }

        private registerInterceptors(httpProvider: IHttpProvider)
        {
            this.httpProvider = httpProvider;

            if (!Object.isNull(this.interceptorsQueue))
            {
                for (let i = 0; i < this.interceptorsQueue.length; i++)
                {
                    this.registerInterceptor(this.interceptorsQueue[i]);
                }

                this.interceptorsQueue = null;
            }           
        }

        private registerControllerState(register: IControllerRegister)
        {
            if (register.stateName == null)
                return;

            this.stateProvider.state(register.stateName, <IState>
            {
                url: register.stateUrl,
                templateUrl: register.viewUrl,
                authenticate: register.authenticate,
                resolve: register.resolve
            });
        }

        protected configureRoutes(stateProvider: IStateProvider, urlRouterProvider: IUrlRouterProvider, httpProvider: IHttpProvider, locationProvider: ILocationProvider): void
        {
        }

        protected authorizeRoute(rootScope: IScope, state: IStateService, injector: IInjectorService): void
        {
        }

        protected configureTranslator(translateProvider: ITranslateProvider): void
        {           
        }

        protected getModuleDependencies(): Array<string>
        {
            throw new Error("Please override getModuleDependencies method and provide other required modules or an empty array.");
        }

        protected preRegister()
        {
        }
    }
}


