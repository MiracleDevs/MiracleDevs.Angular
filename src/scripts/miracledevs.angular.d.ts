/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../angular-translate/angular-translate.d.ts" />
/// <reference path="../angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../datetimepicker/datetimepicker.d.ts" />
/// <reference path="../bootstrap/bootstrap.d.ts" />
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Exceptions {
    class Exception {
        message: string;
        constructor(message: string);
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
interface ArrayConstructor {
    forEach<T>(array: Array<T>, action: (element: T) => void): void;
    where<T>(array: Array<T>, func: (element: T) => boolean): Array<T>;
    select<T, TR>(array: Array<T>, func: (element: T) => TR): Array<TR>;
    firstOrDefault<T>(array: Array<T>, func?: (element: T) => boolean): T;
    lastOrDefault<T>(array: Array<T>, func?: (element: T) => boolean): T;
    any<T>(array: Array<T>, func?: (element: T) => boolean): boolean;
    count<T>(array: Array<T>, func?: (element: T) => boolean): number;
    sum<T, TI>(array: Array<T>, func: (element: T) => TI): TI;
    contains<T>(array: Array<T>, value: T): boolean;
    orderBy<T, TR>(array: Array<T>, func: (element: T) => TR): Array<T>;
    orderByDesc<T, TR>(array: Array<T>, func: (element: T) => TR): Array<T>;
    remove<T>(array: Array<T>, element: T): any;
    removeAt<T>(array: Array<T>, index: number): any;
    removeAll<T>(array: Array<T>, func: (element: T) => boolean): void;
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Core {
    class ArrayList<T> {
        private innerList;
        constructor(array?: Array<T>);
        forEach(action: (element: T) => void): void;
        where(func: (element: T) => boolean): ArrayList<T>;
        select<TR>(func: (element: T) => TR): ArrayList<TR>;
        firstOrDefault(func?: (element: T) => boolean): T;
        lastOrDefault(func?: (element: T) => boolean): T;
        any(func?: (element: T) => boolean): boolean;
        count(func?: (element: T) => boolean): number;
        sum<TI>(func?: (element: T) => TI): TI;
        contains(value: T): boolean;
        orderBy<TR>(func: (element: T) => TR): ArrayList<T>;
        orderByDesc<TR>(func: (element: T) => TR): ArrayList<T>;
        values(): Array<T>;
        get(index: number): T;
        add(value: T): void;
        addRange(value: Array<T>): any;
        addRange(value: ArrayList<T>): any;
        pop(): T;
        indexOf(element: T): number;
        remove(element: T): void;
        removeAt(index: number): void;
        removeAll(func: (element: T) => boolean): void;
        clear(): void;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Core {
    interface IDictionary<TKey, TValue> {
        getKeys(): ArrayList<TKey>;
        getValues(): ArrayList<TValue>;
        add(key: TKey, value: TValue): any;
        remove(key: TKey): any;
        get(key: TKey): any;
        containsKey(key: TKey): any;
    }
    interface IKeyValuePair<TKey, TValue> {
        key: TKey;
        value: TValue;
    }
    class Dictionary<TKey, TValue> implements IDictionary<TKey, TValue> {
        private dictionary;
        constructor(init?: Array<IKeyValuePair<TKey, TValue>>);
        getKeys(): ArrayList<TKey>;
        getValues(): ArrayList<TValue>;
        add(key: TKey, value: TValue): void;
        remove(key: TKey): void;
        removeAll(func: (element: IKeyValuePair<TKey, TValue>) => boolean): void;
        get(key: TKey): TValue;
        containsKey(key: TKey): boolean;
        clear(): void;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular {
    class BuildInfo {
        version: string;
        company: string;
        configuration: string;
        private data;
        readonly isDebug: boolean;
        readonly isRelease: boolean;
        private static internalInstance;
        static readonly instance: BuildInfo;
        constructor();
        getData<T>(key: string): T;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
interface Function {
    getFunctionName(): string;
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
interface ObjectConstructor {
    getTypeName(obj: any): string;
    isEqualTo(source: any, other: any, ignore?: Array<string>): boolean;
    clone(object: any, ignore?: Array<string>): any;
    extendInstance<T>(object: any, classType: {
        new (): T;
    }): T;
    isNull(obj: any): boolean;
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    class AngularServices {
        static readonly translateProvider: string;
        static readonly translate: string;
        static readonly anchorScrollProvider: string;
        static readonly animateProvider: string;
        static readonly compileProvider: string;
        static readonly controllerProvider: string;
        static readonly filterProvider: string;
        static readonly httpProvider: string;
        static readonly interpolateProvider: string;
        static readonly locationProvider: string;
        static readonly logProvider: string;
        static readonly modelOptionsProvider: string;
        static readonly parseProvider: string;
        static readonly qProvider: string;
        static readonly rootScopeProvider: string;
        static readonly sceDelegateProvider: string;
        static readonly sceProvider: string;
        static readonly templateRequestProvider: string;
        static readonly ervice: string;
        static readonly anchorScroll: string;
        static readonly animate: string;
        static readonly animateCss: string;
        static readonly cacheFactory: string;
        static readonly compile: string;
        static readonly controller: string;
        static readonly document: string;
        static readonly exceptionHandler: string;
        static readonly filter: string;
        static readonly http: string;
        static readonly httpBackend: string;
        static readonly httpParamSerializer: string;
        static readonly httpParamSerializerJQLike: string;
        static readonly interpolate: string;
        static readonly interval: string;
        static readonly jsonpCallbacks: string;
        static readonly locale: string;
        static readonly location: string;
        static readonly log: string;
        static readonly modelOptions: string;
        static readonly parse: string;
        static readonly q: string;
        static readonly rootElement: string;
        static readonly rootScope: string;
        static readonly scope: string;
        static readonly sce: string;
        static readonly sceDelegate: string;
        static readonly templateCache: string;
        static readonly templateRequest: string;
        static readonly timeout: string;
        static readonly window: string;
        static readonly xhrFactory: string;
        static readonly injector: string;
        static readonly provide: string;
        static readonly rootRouter: string;
        static readonly routerRootComponent: string;
        static readonly routeProvider: string;
        static readonly route: string;
        static readonly routeParams: string;
        static readonly sanitize: string;
        static readonly sanitizeProvider: string;
        static readonly touchProvider: string;
        static readonly state: string;
        static readonly stateProvider: string;
        static readonly stateParams: string;
        static readonly urlRouterProvider: string;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Interfaces {
    interface IControllerRegister {
        name: string;
        stateName?: string;
        stateUrl?: string;
        viewUrl?: string;
        authenticate?: boolean;
        controller: Function;
        resolve?: Object;
        dependencies?: Array<string>;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Interfaces {
    interface IServiceRegister {
        name: string;
        factory: Function;
        dependencies?: Array<string>;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Interfaces {
    interface IDirectiveRegister {
        name: string;
        factory: Function;
        dependencies?: Array<string>;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Interfaces {
    interface IFilterRegister {
        name: string;
        factory: Function;
        dependencies?: Array<string>;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Interfaces {
    interface IInterceptorRegister {
        name: string;
        factory: Function;
        dependencies?: Array<string>;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    interface ILoggingService {
        writeMessage(message: string): void;
        writeWarning(message: string): void;
        writeError(message: string): void;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular {
    import IModule = angular.IModule;
    import IScope = angular.IScope;
    import IHttpProvider = angular.IHttpProvider;
    import IStateProvider = angular.ui.IStateProvider;
    import IStateService = angular.ui.IStateService;
    import IUrlRouterProvider = angular.ui.IUrlRouterProvider;
    import IInjectorService = angular.auto.IInjectorService;
    import IControllerRegister = Interfaces.IControllerRegister;
    import IServiceRegister = Interfaces.IServiceRegister;
    import IFilterRegister = Interfaces.IFilterRegister;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import ILoggingService = Services.ILoggingService;
    import ITranslateProvider = angular.translate.ITranslateProvider;
    import ILocationProvider = angular.ILocationProvider;
    import IInterceptorRegister = Interfaces.IInterceptorRegister;
    abstract class ModuleBase {
        protected httpProvider: IHttpProvider;
        protected stateProvider: IStateProvider;
        protected interceptorsQueue: Array<IInterceptorRegister>;
        protected controllersQueue: Array<IControllerRegister>;
        protected module: IModule;
        protected logger: ILoggingService;
        constructor();
        getModule(): IModule;
        getModuleName(): string;
        registerController(register: IControllerRegister): void;
        registerService(register: IServiceRegister): void;
        registerLoggingService(register: IServiceRegister): void;
        registerInterceptor(register: IInterceptorRegister): void;
        registerFilter(register: IFilterRegister): void;
        registerDirective(register: IDirectiveRegister): void;
        private registerStates(stateProvider);
        private registerInterceptors(httpProvider);
        private registerControllerState(register);
        protected configureRoutes(stateProvider: IStateProvider, urlRouterProvider: IUrlRouterProvider, httpProvider: IHttpProvider, locationProvider: ILocationProvider): void;
        protected authorizeRoute(rootScope: IScope, state: IStateService, injector: IInjectorService): void;
        protected configureTranslator(translateProvider: ITranslateProvider): void;
        protected getModuleDependencies(): Array<string>;
        protected preRegister(): void;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    class ServiceBase {
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    class FrameworkServices {
        static readonly alertService: string;
        static readonly loadingService: string;
        static readonly modalService: string;
        static readonly fileManagementService: string;
        static readonly loggingService: string;
        static readonly geolocationService: string;
        static readonly urlService: string;
        static readonly dateService: string;
        static readonly messageBus: string;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    import IServiceRegister = Interfaces.IServiceRegister;
    class DummyLoggingService extends ServiceBase implements ILoggingService {
        writeMessage(message: string): void;
        writeWarning(message: string): void;
        writeError(message: string): void;
    }
    class LoggingService extends ServiceBase implements ILoggingService {
        static register: IServiceRegister;
        writeMessage(message: string): void;
        writeWarning(message: string): void;
        writeError(message: string): void;
        static factory(): ILoggingService;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular {
    import IScope = angular.IScope;
    import IInjectorService = angular.auto.IInjectorService;
    import IHttpProvider = angular.IHttpProvider;
    import IStateProvider = angular.ui.IStateProvider;
    import IStateService = angular.ui.IStateService;
    import IUrlRouterProvider = angular.ui.IUrlRouterProvider;
    import ILocationProvider = angular.ILocationProvider;
    class FrameworkModule extends ModuleBase {
        private static internalInstance;
        static readonly instance: FrameworkModule;
        constructor();
        getModuleName(): string;
        protected preRegister(): void;
        protected configureRoutes(stateProvider: IStateProvider, urlRouterProvider: IUrlRouterProvider, httpProvider: IHttpProvider, location: ILocationProvider): void;
        protected authorizeRoute(rootScope: IScope, state: IStateService, injector: IInjectorService): void;
        protected getModuleDependencies(): string[];
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Controllers {
    import IAlertService = Services.IAlertService;
    import ILoadingService = Services.ILoadingService;
    import IStateService = angular.ui.IStateService;
    import IInjectorService = angular.auto.IInjectorService;
    import ILoggingService = Services.ILoggingService;
    import IScope = angular.IScope;
    import IHttpPromise = angular.IHttpPromise;
    import IPromise = angular.IPromise;
    import IModalInstance = Services.IModalInstance;
    class ControllerBase {
        protected scope: IScope;
        protected injector: IInjectorService;
        protected alertService: IAlertService;
        protected loadingService: ILoadingService;
        protected stateService: IStateService;
        protected logger: ILoggingService;
        constructor(scope: IScope, injector: IInjectorService);
        protected dispose(): void;
        protected getService<T>(service: string): T;
        protected open(controller: Function, parameters: any, staticDialog?: boolean, keyboard?: boolean): IModalInstance;
        protected call<T>(call: () => IPromise<T>, success?: (result: T) => void, loading?: (loading: boolean) => void, fail?: (error: Error) => void): void;
        protected callEx<T>(call: () => IHttpPromise<T>, success?: (t: T) => void, fail?: (e: Error) => void, showLoading?: boolean): void;
        protected showErrors(messages: string[]): void;
        protected showWarnings(messages: string[]): void;
        protected showError(message: string): void;
        protected showWarning(message: string): void;
        protected showMessage(message: string): void;
        protected showLoading(): void;
        protected hideLoading(): void;
        protected handleException(ex: any): void;
        protected changeState(state: string, params?: any, reload?: boolean): IPromise<any>;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
interface Date {
    fromIso8601(value: string): void;
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Core {
    class FileMimeType {
        private extensions;
        constructor();
        get(file: string): string;
    }
    var mimeType: FileMimeType;
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Core {
    class Guid {
        value: string;
        constructor(value: string);
        private static s4();
        static new(): Guid;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Core {
    class LocalStorage {
        static set<T>(name: string, value: T): void;
        static get<T>(type: {
            new (): T;
        }, name: string): T;
        static getInt(name: string): Number;
        static getNumber(name: string): Number;
        static getBoolean(name: string): Boolean;
        static getDate(name: string): Date;
        static remove(name: string): void;
        static clear(): void;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Core {
    class Md5 {
        static computeHash(value: string): string;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
interface NumberConstructor {
    isNumber(value: any): boolean;
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
interface StringConstructor {
    isString(value: any): boolean;
    isNullOrEmpty(value: string): boolean;
    isNullOrWhiteSpace(value: string): boolean;
    format(format: string, ...args: any[]): string;
    formatArray(format: string, arguments: any[]): string;
    empty: string;
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirective = angular.IDirective;
    abstract class DirectiveBase implements IDirective {
        link: (scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction) => void;
        constructor();
        protected abstract create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): any;
        protected getOptions<T>(instanceAttributes: IAttributes, optionsParameter: string): T;
        protected tryGetInt(options: any, instanceAttributes: IAttributes, optionFrom: string, optionTo?: string): number;
        protected tryGetNumber(options: any, instanceAttributes: IAttributes, optionFrom: string, optionTo?: string): number;
        protected tryGetDate(options: any, instanceAttributes: IAttributes, optionFrom: string, optionTo?: string): number;
        protected tryGetBoolean(options: any, instanceAttributes: IAttributes, optionFrom: string, optionTo?: string): boolean;
        protected tryGet(options: any, instanceAttributes: IAttributes, optionFrom: string, optionTo?: string): string;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    class AddClass extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        static factory(): AddClass;
    }
    interface IAddClassParameters {
        addClass: string;
        element: string;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import ITimeoutService = angular.ITimeoutService;
    class Alert extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        scope: {
            alertType: string;
            timeout: string;
            close: string;
        };
        private timeout;
        constructor(timeout: ITimeoutService);
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        static factory(timeout: ITimeoutService): Alert;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    class BackgroundImage extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        static factory(): BackgroundImage;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    class CommentArea extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        scope: {
            ngModel: string;
        };
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        private restrictEntry(event, options, element, cancel);
        private showCharacterLeft(options, element, cancel);
        private checkSize(options, element);
        static factory(): CommentArea;
    }
    interface ICommentAreaParameters {
        defaultHeight?: number;
        maxSize?: number;
        showAlways?: boolean;
        maxSizeField?: string;
        maxSizeText?: string;
        resize?: boolean;
        restrictEntry?: boolean;
        negativeClass?: string;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    class ConvertToNumber extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        require: string;
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        static factory(): ConvertToNumber;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IFilterService = angular.IFilterService;
    class DateTimePicker extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        require: string;
        private filter;
        constructor(filter: IFilterService);
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        static factory(filter: IFilterService): DateTimePicker;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import ITimeoutService = angular.ITimeoutService;
    class FileButton extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        scope: {
            title: string;
            ariaLabel: string;
            accept: string;
            caption: string;
            cssClass: string;
            fileSelected: string;
        };
        template: string;
        private timeout;
        constructor(timeout: ITimeoutService);
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        static factory(timeout: ITimeoutService): FileButton;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    class FileDragAndDrop extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        scope: {
            fileSelected: string;
        };
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        static factory(): FileDragAndDrop;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    class FocusInvalidField extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        static factory(): FocusInvalidField;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IInterpolateService = angular.IInterpolateService;
    class HorizontalScroller extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        interpolate: IInterpolateService;
        constructor(interpolate: IInterpolateService);
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        static factory(interpolate: IInterpolateService): HorizontalScroller;
    }
    interface IHorizontalScrollerParameters {
        element: IAugmentedJQuery;
        container: string;
        content: string;
        leftArrow: string;
        rightArrow: string;
        speed: number;
        friction: number;
        minVelocity: number;
        fps: number;
    }
    class HorizontalScrollerInstance {
        element: JQuery;
        container: JQuery;
        content: JQuery;
        leftArrow: JQuery;
        rightArrow: JQuery;
        position: number;
        velocity: number;
        speed: number;
        friction: number;
        pressing: boolean;
        direction: number;
        millisecondsPerFrame: number;
        minVelocity: number;
        intervalId: number;
        lastTime: number;
        constructor(options: IHorizontalScrollerParameters);
        enableScroll(): void;
        private applyPosition();
        private checkConstraints();
        private killInterval();
        private getMilliseconds();
        private moveLeft();
        private moveRight();
        private move();
        dispose(): void;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IInterpolateService = angular.IInterpolateService;
    import IStateService = angular.ui.IStateService;
    class MdUiSrefActive extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        private interpolate;
        private state;
        constructor(interpolate: IInterpolateService, state: IStateService);
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        static factory(interpolate: IInterpolateService, state: IStateService): MdUiSrefActive;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import ICompiledExpression = angular.ICompiledExpression;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IParseService = angular.IParseService;
    class OnKeyboard extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        private parse;
        constructor(parse: IParseService);
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        private checkKeys(keyActions, eventType, scope, e);
        private parseActions(text);
        static factory(parse: IParseService): OnKeyboard;
    }
    class KeyAction {
        eventType: string;
        keyCode: number;
        shift: boolean;
        ctrl: boolean;
        alt: boolean;
        action: ICompiledExpression;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    class PaginationBar extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        template: string;
        scope: {
            cssClass: string;
            firstText: string;
            previousText: string;
            nextText: string;
            lastText: string;
            pages: string;
            currentPage: string;
            totalLinks: string;
            links: string;
            itemClicked: string;
            autoScroll: string;
        };
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        static factory(): PaginationBar;
    }
    interface IPaginationBarParameters {
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import ITimeoutService = angular.ITimeoutService;
    class PreventEventIf extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        scope: {
            preventEventIf: string;
            preventEvent: string;
        };
        private timeout;
        constructor(timeout: ITimeoutService);
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        static factory(timeout: ITimeoutService): PreventEventIf;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    class RemoveClass extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        static factory(): RemoveClass;
    }
    interface IRemoveClassParameters {
        removeClass: string;
        element: string;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IRootScope = angular.IRootScopeService;
    class ScrollToBottom extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        private rootScope;
        constructor(rootScope: IRootScope);
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        static factory(rootScope: IRootScope): ScrollToBottom;
    }
    interface IScrollToBottomParameters {
        onClick: boolean;
        onContentChange: boolean;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    class ScrollToggleClass extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        private updateElement(element, instanceAttributes);
        static factory(): ScrollToggleClass;
    }
    interface IScrollToggleClassParameters {
        forceAdd: boolean;
        forceRemove: boolean;
        minPos: number;
        maxPos: number;
        cssClass: string;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IRootScope = angular.IRootScopeService;
    class ScrollToTop extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        private rootScope;
        constructor(rootScope: IRootScope);
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        static factory(rootScope: IRootScope): ScrollToTop;
    }
    interface IScrollToTopParameters {
        onStateChange: boolean;
        onClick: boolean;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    class SelectToggleClass extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        static factory(): SelectToggleClass;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    class ToggleClass extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        static factory(): ToggleClass;
    }
    interface IToggleClassParameters {
        toggleClass: string;
        element: string;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    class ToggleClassOnClick extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        static factory(): ToggleClassOnClick;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    class Tooltip extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        scope: {
            tooltipOptions: string;
            tooltipCose: string;
            tooltipParameter: string;
        };
        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void;
        private normalTooltip(control, scope, instanceAttributes);
        static factory(): Tooltip;
    }
    interface ITooltipOptions {
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
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Exceptions {
    class WrongTypeException extends Exception {
        constructor(message: string);
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Filters {
    class AngularFilters {
        static readonly currency: string;
        static readonly number: string;
        static readonly date: string;
        static readonly json: string;
        static readonly lowercase: string;
        static readonly uppercase: string;
        static readonly limitTo: string;
        static readonly orderBy: string;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Filters {
    class FrameworkFilters {
        static readonly reverse: string;
        static readonly trim: string;
        static readonly lowercase: string;
        static readonly uppercase: string;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Filters {
    import FilterRegister = Interfaces.IFilterRegister;
    class LowercaseFilter {
        static register: FilterRegister;
        static factory(): (value: string) => string;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Filters {
    import FilterRegister = Interfaces.IFilterRegister;
    class ReverseFilter {
        static register: FilterRegister;
        static factory(): (items: any[]) => any[];
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Filters {
    import FilterRegister = Interfaces.IFilterRegister;
    class TrimFilter {
        static register: FilterRegister;
        private static trim(value, maxChars);
        static factory(): (value: string, maxChars: number) => string;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Filters {
    import FilterRegister = Interfaces.IFilterRegister;
    class UppercaseFilter {
        static register: FilterRegister;
        static factory(): (value: string) => string;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Interceptors {
    import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;
    import IPromise = angular.IPromise;
    import IRequestConfig = angular.IRequestConfig;
    import IHttpInterceptor = angular.IHttpInterceptor;
    import IqService = angular.IQService;
    class InterceptorBase implements IHttpInterceptor {
        request: (config: IRequestConfig) => IRequestConfig;
        response: (response: IHttpPromiseCallbackArg<any>) => IPromise<any>;
        requestError: (rejection: ng.IHttpPromiseCallbackArg<any>) => IPromise<any>;
        responseError: (rejection: ng.IHttpPromiseCallbackArg<any>) => IPromise<any>;
        protected q: IqService;
        constructor(q: IqService);
        onRequest(config: IRequestConfig): IRequestConfig;
        onResponse(response: IHttpPromiseCallbackArg<any>): IPromise<any>;
        onRequestError(rejection: IHttpPromiseCallbackArg<any>): IPromise<any>;
        onResponseError(rejection: IHttpPromiseCallbackArg<any>): IPromise<any>;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Models {
    class ModelBase {
        private original;
        startTracking(): void;
        stopTracking(): void;
        isDirty(): boolean;
        isTracking(): boolean;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    import ArrayList = Core.ArrayList;
    interface IAlertService {
        add(alertType: AlertType, message: string): void;
        addError(message: string): void;
        addWarning(message: string): void;
        addMessage(message: string): void;
        remove(index: number | Alert): void;
        get(index: number): Alert;
        getAlerts(): ArrayList<Alert>;
    }
    enum AlertType {
        Message = 0,
        Warning = 1,
        Error = 2,
    }
    class Alert {
        private alertType;
        private innerMessage;
        readonly type: AlertType;
        readonly typeName: string;
        readonly message: string;
        constructor(alertType: AlertType, message: string);
        private static getTypeName(alertType);
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    import IServiceRegister = Interfaces.IServiceRegister;
    import ArrayList = Core.ArrayList;
    class AlertService extends ServiceBase implements IAlertService {
        static register: IServiceRegister;
        private logger;
        private alerts;
        constructor(logger: ILoggingService);
        add(alertType: AlertType, message: string): void;
        addError(message: string): void;
        addWarning(message: string): void;
        addMessage(message: string): void;
        remove(index: number | Alert): void;
        get(index: number): Alert;
        getAlerts(): ArrayList<Alert>;
        static factory(logger: ILoggingService): IAlertService;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    interface IDateService {
        getDate(value: Date | string): Date;
        getDateRangeValue(date: Date | string): DateRangeValue;
    }
    enum DateRange {
        Unknown = 0,
        Seconds = 1,
        Minutes = 2,
        Hours = 3,
        Days = 4,
        Months = 5,
        Years = 6,
    }
    enum MonthName {
        "January" = 0,
        "February" = 1,
        "March" = 2,
        "April" = 3,
        "May" = 4,
        "June" = 5,
        "July" = 6,
        "August" = 8,
        "September" = 8,
        "October" = 9,
        "November" = 10,
        "December" = 11,
    }
    enum DayName {
        "Sunday" = 0,
        "Monday" = 1,
        "Tuesday" = 2,
        "Wednesday" = 3,
        "Thursday" = 4,
        "Friday" = 5,
        "Saturday" = 6,
    }
    class DateRangeValue {
        value: number;
        range: DateRange;
        constructor(value: number, range: DateRange);
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    import IServiceRegister = Interfaces.IServiceRegister;
    class DateService extends ServiceBase implements IDateService {
        static register: IServiceRegister;
        getDate(value: Date | string): Date;
        getDateRangeValue(value: Date | string): DateRangeValue;
        private getMonthDifference(d1, d2);
        static factory(): IDateService;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    import IServiceRegister = Interfaces.IServiceRegister;
    class ExceptionService extends ServiceBase implements IExceptionService {
        static register: IServiceRegister;
        private alertService;
        private logger;
        constructor(alertService: IAlertService, logger: ILoggingService);
        processException(exception: Error, cause: string): void;
        static factory(alertService: IAlertService, logger: ILoggingService): (exception: Error, cause: string) => void;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    import IServiceRegister = Interfaces.IServiceRegister;
    class FileManagementService extends ServiceBase implements IFileManagementService {
        static register: IServiceRegister;
        read(file: File, completed: (file: File, content: string) => void, progress?: (p: number) => void, error?: (e: string) => void): void;
        download(fileName: string, content: string): void;
        open(fileName: string, content: string): void;
        getBlobUrl(fileName: string, content: string): string;
        private getBlob(fileName, content64);
        private getError(e);
        static factory(): FileManagementService;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    import IServiceRegister = Interfaces.IServiceRegister;
    class GeolocationService extends ServiceBase implements IGeolocationService {
        static register: IServiceRegister;
        getPosition(callback: (info: IGeolocationInformation) => void, onError?: (error: PositionError) => void, options?: IPositionOptions): void;
        watchPosition(callback: (info: IGeolocationInformation) => void, onError?: (error: PositionError) => void, options?: IPositionOptions): number;
        clearWatch(watchId: number): void;
        isAvailable(): boolean;
        private getGeolocator();
        static factory(): GeolocationService;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    class HttpServiceBase extends ServiceBase {
        $http: ng.IHttpService;
        host: string;
        constructor($http: ng.IHttpService, host: string);
        post<T>(url: string, params?: any, data?: any): ng.IHttpPromise<T>;
        patch<T>(url: string, params?: any, data?: any): ng.IHttpPromise<T>;
        put<T>(url: string, params?: any, data?: any): ng.IHttpPromise<T>;
        get<T>(url: string, params?: any, data?: any): ng.IHttpPromise<T>;
        delete<T>(url: string, params?: any, data?: any): ng.IHttpPromise<T>;
        protected getHeaders(): any;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    interface IExceptionService {
        processException(exception: Error, cause: string): void;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    interface IFileManagementService {
        read(file: File, completed: (file: File, content: string) => void, progress?: (p: number) => void, error?: (e: string) => void): void;
        download(fileName: string, content: string): any;
        open(fileName: string, content: string): any;
        getBlobUrl(fileName: string, content: string): string;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    interface IGeolocationService {
        getPosition(callback: (info: IGeolocationInformation) => void, onError?: (error: PositionError) => void, options?: IPositionOptions): void;
        watchPosition(callback: (info: IGeolocationInformation) => void, onError?: (error: PositionError) => void, options?: IPositionOptions): number;
        clearWatch(watchId: number): void;
        isAvailable(): boolean;
    }
    interface ICoordinates {
        latitude: number;
        longitude: number;
        accuracy: number;
        altitude: number;
        altitudeAccuracy: number;
        heading: number;
        speed: number;
    }
    interface IGeolocationInformation {
        coords: ICoordinates;
        timestamp: number;
    }
    interface IPositionOptions {
        enableHighAccuracy?: boolean;
        timeout?: number;
        maximumAge?: number;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    interface ILoadingService {
        show(): void;
        hide(): void;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    import Dictionary = Core.Dictionary;
    import ArrayList = Core.ArrayList;
    import Guid = Core.Guid;
    interface IMessageBus {
        handlers: Dictionary<string, ArrayList<MessageBusHandler>>;
        register<T>(messageType: {
            new (): T;
        }, handler: Function): RegistrationToken;
        unregister(token: RegistrationToken): void;
        send<T>(messageType: {
            new (): T;
        }, message: T, token?: RegistrationToken): boolean;
    }
    class MessageBusHandler {
        private innerToken;
        private innerHandler;
        readonly token: RegistrationToken;
        readonly handler: Function;
        constructor(type: Function, handler: Function);
    }
    class RegistrationToken {
        private innerType;
        private innerGuid;
        readonly type: Function;
        readonly guid: Guid;
        constructor(type: Function);
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    import IControllerRegister = Interfaces.IControllerRegister;
    import IDeferred = angular.IDeferred;
    import IPromise = angular.IPromise;
    interface IModalService {
        open<T>(dialog: IModalCreationParameter, parameters?: any, staticDialog?: boolean, keyboard?: boolean): IModalInstance;
        open<T>(dialog: any, parameters?: any, staticDialog?: boolean, keyboard?: boolean): IModalInstance;
        close(modalInstance: any, reason?: string): any;
        resolve<T>(modalInstance: any, result: T): any;
    }
    interface IModalCreationParameter {
        register: IControllerRegister;
        controllerAs?: string;
    }
    interface IModalInstance {
        deferred: IDeferred<any>;
        promise: IPromise<any>;
        close(reason?: string): any;
        resolve(result: any): any;
        dispose: () => void;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    interface IUrlService {
        getParsedUrl(url: string): string;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    import IServiceRegister = Interfaces.IServiceRegister;
    import Dictionary = Core.Dictionary;
    import ArrayList = Core.ArrayList;
    class MessageBus extends ServiceBase implements IMessageBus {
        static register: IServiceRegister;
        handlers: Dictionary<string, ArrayList<MessageBusHandler>>;
        constructor();
        register<T>(messageType: {
            new (): T;
        }, handler: Function): RegistrationToken;
        unregister(token: RegistrationToken): void;
        send<T>(messageType: {
            new (): T;
        }, message: T, token?: RegistrationToken): boolean;
        static factory(): MessageBus;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    import IServiceRegister = Interfaces.IServiceRegister;
    class ModalService extends ServiceBase implements IModalService {
        static register: IServiceRegister;
        private $rootScope;
        private $q;
        private $http;
        private $templateCache;
        private $compile;
        private $controller;
        private modals;
        constructor($rootScope: angular.IRootScopeService, $q: angular.IQService, $http: angular.IHttpService, $templateCache: angular.ITemplateCacheService, $compile: angular.ICompileService, $controller: angular.IControllerService);
        open(dialog: IModalCreationParameter, parameters?: any, staticDialog?: boolean, keyboard?: boolean): IModalInstance;
        close(modalInstance: IModalInstance, reason?: string): void;
        resolve<T>(modalInstance: IModalInstance, result: T): void;
        private openModal(register, controllerAs, parameters, modalInstance, template, staticDialog, keyboard);
        private removeModal(modalInstance, modal);
        static factory($rootScope: angular.IRootScopeService, $q: angular.IQService, $http: angular.IHttpService, $templateCache: angular.ITemplateCacheService, $compile: angular.ICompileService, $controller: angular.IControllerService): ModalService;
    }
    class ModalInstance implements IModalInstance {
        private modalService;
        deferred: angular.IDeferred<any>;
        promise: angular.IPromise<any>;
        dispose: () => void;
        constructor(modalService: IModalService, deferred: angular.IDeferred<any>);
        close(reason?: string): void;
        resolve(result: any): void;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    import IServiceRegister = Interfaces.IServiceRegister;
    import ISCEService = angular.ISCEService;
    class UrlService extends ServiceBase implements IUrlService {
        static register: IServiceRegister;
        private sce;
        constructor(sce: ISCEService);
        getParsedUrl(url: string): string;
        static factory(sce: ISCEService): IUrlService;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Session {
    class ObjectSession {
        static save<T>(name: string, data: T): void;
        static restore<T>(name: string): T;
        static clear(name: string): void;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Controllers.Dialogs {
    import IInjectorService = angular.auto.IInjectorService;
    import IModalInstance = Services.IModalInstance;
    import IScope = angular.IScope;
    class DialogControllerBase extends ControllerBase {
        protected modalInstance: IModalInstance;
        constructor(scope: IScope, modalInstance: IModalInstance, injector: IInjectorService);
        cancel(): void;
        protected close(result?: any): void;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Core.Mapping {
    class PropertyMapping<TSource, TDest> {
        property: string;
        method: (o: TSource) => any;
        constructor(property: string, method: (o: TSource) => any);
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Core.Mapping {
    class TypeMapping<TSource, TDest> {
        properties: Dictionary<string, PropertyMapping<TSource, TDest>>;
        constructor(source: TSource, destination: TDest);
        private getValue(property);
        forMember(destProperty: string, method: (o: TSource) => any): TypeMapping<TSource, TDest>;
        ignore(destProperty: string): TypeMapping<TSource, TDest>;
        run(source: TSource, destination: TDest): void;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Core.Mapping {
    class AutoMapper {
        private static types;
        static createMap<TSource, TDest>(source: {
            new (): TSource;
        }, destination: {
            new (): TDest;
        }): TypeMapping<TSource, TDest>;
        static createMapByName<TSource, TDest>(name: string, source: {
            new (): TSource;
        }, destination: {
            new (): TDest;
        }): TypeMapping<TSource, TDest>;
        static clear(): void;
        static map<TSource, TDest>(source: TSource, destination: {
            new (): TDest;
        }): TDest;
        static mapTo<TSource, TDest>(source: TSource, destination: TDest): void;
        static mapToByName<TSource, TDest>(name: string, source: TSource, destination: TDest): void;
        static dynamicMap(source: any, destination: any): void;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Scopes.Directives.PaginationBar {
    import IScope = angular.IScope;
    interface IPaginationBarScope extends IScope {
        cssClass: string;
        firstText: string;
        previousText: string;
        nextText: string;
        lastText: string;
        pages: number;
        currentPage: number;
        totalLinks: number;
        itemClicked: Function;
        links: PaginationBarItem[];
    }
    class PaginationBarItem {
        name: string;
        tag: any;
        enabled: boolean;
        selected: boolean;
        constructor(name: string, tag: any, enabled?: boolean, selected?: boolean);
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Controllers.Directives.PaginationBar {
    import IControllerRegister = Interfaces.IControllerRegister;
    import IInjectorService = angular.auto.IInjectorService;
    import IPaginationBarScope = Scopes.Directives.PaginationBar.IPaginationBarScope;
    import PaginationBarItem = Scopes.Directives.PaginationBar.PaginationBarItem;
    class PaginationBarController extends ControllerBase {
        static register: IControllerRegister;
        protected scope: IPaginationBarScope;
        constructor(scope: IPaginationBarScope, injector: IInjectorService);
        private create();
        navigate(link: PaginationBarItem): void;
    }
}
