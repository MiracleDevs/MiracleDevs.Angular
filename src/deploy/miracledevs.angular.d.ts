/// <reference path="../index.d.ts" />
/// <reference types="angular" />
/// <reference types="angular-animate" />
/// <reference types="angular-ui-router" />
/// <reference types="angular-translate" />
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
interface ArrayConstructor {
    forEach<T>(array: Array<T>, action: (element: T) => void): void;
    where<T>(array: Array<T>, predicate: (element: T) => boolean): Array<T>;
    select<T, TR>(array: Array<T>, predicate: (element: T) => TR): Array<TR>;
    firstOrDefault<T>(array: Array<T>, predicate?: (element: T) => boolean): T;
    lastOrDefault<T>(array: Array<T>, predicate?: (element: T) => boolean): T;
    first<T>(array: Array<T>, predicate?: (element: T) => boolean): T;
    last<T>(array: Array<T>, predicate?: (element: T) => boolean): T;
    any<T>(array: Array<T>, predicate?: (element: T) => boolean): boolean;
    count<T>(array: Array<T>, predicate?: (element: T) => boolean): number;
    sum<T, TI>(array: Array<T>, predicate?: (element: T) => TI): TI;
    contains<T>(array: Array<T>, value: T): boolean;
    orderBy<T, TR>(array: Array<T>, predicate?: (element: T) => TR): Array<T>;
    orderByDesc<T, TR>(array: Array<T>, predicate?: (element: T) => TR): Array<T>;
    remove<T>(array: Array<T>, element: T): boolean;
    removeAt<T>(array: Array<T>, index: number): void;
    removeAll<T>(array: Array<T>, predicate?: (element: T) => boolean): number;
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Core {
    class ArrayList<T> implements IEnumerable<T> {
        protected innerArray: Array<T>;
        constructor(array?: Array<T>);
        forEach(action: (element: T) => void): void;
        where(predicate: (element: T) => boolean): ArrayList<T>;
        select<TR>(predicate: (element: T) => TR): ArrayList<TR>;
        firstOrDefault(predicate?: (element: T) => boolean): T;
        lastOrDefault(predicate?: (element: T) => boolean): T;
        first(predicate?: (element: T) => boolean): T;
        last(predicate?: (element: T) => boolean): T;
        any(predicate?: (element: T) => boolean): boolean;
        count(predicate?: (element: T) => boolean): number;
        sum<TI>(predicate?: (element: T) => TI): TI;
        contains(value: T): boolean;
        orderBy<TR>(predicate?: (element: T) => TR): ArrayList<T>;
        orderByDesc<TR>(predicate?: (element: T) => TR): ArrayList<T>;
        getInnerArray(): Array<T>;
        get(index: number): T;
        add(value: T): void;
        addRange(value: Array<T>): any;
        addRange(value: ArrayList<T>): any;
        pop(): T;
        indexOf(element: T): number;
        remove(element: T): boolean;
        removeAt(index: number): void;
        removeAll(predicate?: (element: T) => boolean): number;
        clear(): void;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Core {
    class Dictionary<TKey, TValue> implements IEnumerable<IKeyValuePair<TKey, TValue>> {
        protected innerArray: Array<IKeyValuePair<TKey, TValue>>;
        constructor(array?: Array<IKeyValuePair<TKey, TValue>>);
        getValues(): IEnumerable<TValue>;
        getKeys(): IEnumerable<TKey>;
        containsKey(key: TKey): boolean;
        forEach(action: (element: IKeyValuePair<TKey, TValue>) => void): void;
        where(predicate: (element: IKeyValuePair<TKey, TValue>) => boolean): IEnumerable<IKeyValuePair<TKey, TValue>>;
        select<TR>(predicate: (element: IKeyValuePair<TKey, TValue>) => TR): IEnumerable<TR>;
        firstOrDefault(predicate?: (element: IKeyValuePair<TKey, TValue>) => boolean): IKeyValuePair<TKey, TValue>;
        lastOrDefault(predicate?: (element: IKeyValuePair<TKey, TValue>) => boolean): IKeyValuePair<TKey, TValue>;
        first(predicate?: (element: IKeyValuePair<TKey, TValue>) => boolean): IKeyValuePair<TKey, TValue>;
        last(predicate?: (element: IKeyValuePair<TKey, TValue>) => boolean): IKeyValuePair<TKey, TValue>;
        any(predicate?: (element: IKeyValuePair<TKey, TValue>) => boolean): boolean;
        count(predicate?: (element: IKeyValuePair<TKey, TValue>) => boolean): number;
        sum<TI>(predicate: (element: IKeyValuePair<TKey, TValue>) => TI): TI;
        orderBy<TR>(predicate: (element: IKeyValuePair<TKey, TValue>) => TR): Dictionary<TKey, TValue>;
        orderByDesc<TR>(predicate: (element: IKeyValuePair<TKey, TValue>) => TR): Dictionary<TKey, TValue>;
        getInnerArray(): Array<IKeyValuePair<TKey, TValue>>;
        get(key: TKey): TValue;
        keyOf(value: TValue): TKey;
        add(key: TKey, value: TValue): void;
        addRange(value: Array<IKeyValuePair<TKey, TValue>>): void;
        addRange(value: IEnumerable<IKeyValuePair<TKey, TValue>>): void;
        pop(): IKeyValuePair<TKey, TValue>;
        remove(key: TKey): void;
        removeAll(predicate?: (element: IKeyValuePair<TKey, TValue>) => boolean): number;
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
    isEqualTo(source: any, other: any, ignore?: Array<string>, checkObjectType?: boolean): boolean;
    getDifference(source: any, other: any, ignore?: Array<string>, checkObjectType?: boolean): string;
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
    import IModule = ng.IModule;
    import IScope = ng.IScope;
    import IHttpProvider = ng.IHttpProvider;
    import IStateProvider = ng.ui.IStateProvider;
    import IStateService = ng.ui.IStateService;
    import IUrlRouterProvider = ng.ui.IUrlRouterProvider;
    import IInjectorService = ng.auto.IInjectorService;
    import IControllerRegister = Interfaces.IControllerRegister;
    import IServiceRegister = Interfaces.IServiceRegister;
    import IFilterRegister = Interfaces.IFilterRegister;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import ILoggingService = Services.ILoggingService;
    import ITranslateProvider = ng.translate.ITranslateProvider;
    import ILocationProvider = ng.ILocationProvider;
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
        static readonly modalService: string;
        static readonly fileManagementService: string;
        static readonly loggingService: string;
        static readonly geolocationService: string;
        static readonly urlService: string;
        static readonly dateService: string;
        static readonly keyProcessorService: string;
        static readonly messageBus: string;
        static readonly modalInstance: string;
        static readonly modalParameters: string;
        static readonly asyncResourceService: string;
    }
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
    padLeft(value: string, length: number, padChar: string): string;
    padRight(value: string, length: number, padChar: string): string;
    join(separator: string, values: string[]): string;
    empty: string;
}
interface String {
    padLeft(length: number, padChar: string): string;
    padRight(length: number, padChar: string): string;
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare enum DayOfWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
}
interface DateConstructor {
    fromIso8601(value: string): Date;
}
interface Date {
    fromIso8601(value: string): Date;
    getNextWeekDay(dayOfWeek: DayOfWeek): Date;
    getPreviousWeekDay(dayOfWeek: DayOfWeek): Date;
    addMilliseconds(ms: number): Date;
    addSeconds(seconds: number): Date;
    addMinutes(minutes: number): Date;
    addHours(hours: number): Date;
    addDays(days: number): Date;
    addMonths(months: number): Date;
    addYears(years: number): Date;
    getTwoDigitYear(): string;
    getTwoDigitUTCYear(): string;
    format(format: string): string;
    formatUTC(format: string): string;
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Services {
    import IServiceRegister = Interfaces.IServiceRegister;
    abstract class LoggingServiceBase extends ServiceBase implements ILoggingService {
        writeMessage(message: string): void;
        writeWarning(message: string): void;
        writeError(message: string): void;
        protected getString(message: string): string;
    }
    class DummyLoggingService extends LoggingServiceBase {
        writeError(message: string): void;
    }
    class LoggingService extends LoggingServiceBase {
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
    import IScope = ng.IScope;
    import IInjectorService = ng.auto.IInjectorService;
    import IHttpProvider = ng.IHttpProvider;
    import IStateProvider = ng.ui.IStateProvider;
    import IStateService = ng.ui.IStateService;
    import IUrlRouterProvider = ng.ui.IUrlRouterProvider;
    import ILocationProvider = ng.ILocationProvider;
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
    import IStateService = ng.ui.IStateService;
    import IInjectorService = ng.auto.IInjectorService;
    import ILoggingService = Services.ILoggingService;
    import IScope = ng.IScope;
    import IPromise = ng.IPromise;
    import IModalInstance = Services.IModalInstance;
    abstract class ControllerBase {
        protected scope: IScope;
        protected injector: IInjectorService;
        protected alertService: IAlertService;
        protected stateService: IStateService;
        protected logger: ILoggingService;
        protected constructor(scope: IScope, injector: IInjectorService);
        protected dispose(): void;
        protected getService<T>(service: string): T;
        protected open(controller: Function, parameters?: any, staticDialog?: boolean, keyboard?: boolean): IModalInstance;
        protected call<T>(call: () => IPromise<T>, success?: (result: T) => void, loading?: (loading: boolean) => void, fail?: (reason: any) => void): void;
        protected showErrors(messages: string[]): void;
        protected showWarnings(messages: string[]): void;
        protected showError(message: string): void;
        protected showWarning(message: string): void;
        protected showMessage(message: string): void;
        protected handleException(ex: any): void;
        protected changeState(state: string, params?: any, reload?: boolean): IPromise<any>;
    }
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
declare module MiracleDevs.Angular.Core {
    interface IKeyValuePair<TKey, TValue> {
        key: TKey;
        value: TValue;
    }
    interface IEnumerable<TElement> {
        forEach(action: (element: TElement) => void): void;
        where(predicate: (element: TElement) => boolean): IEnumerable<TElement>;
        select<TR>(predicate: (element: TElement) => TR): IEnumerable<TR>;
        firstOrDefault(predicate?: (element: TElement) => boolean): TElement;
        lastOrDefault(predicate?: (element: TElement) => boolean): TElement;
        first(predicate?: (element: TElement) => boolean): TElement;
        last(predicate?: (element: TElement) => boolean): TElement;
        any(predicate?: (element: TElement) => boolean): boolean;
        count(predicate?: (element: TElement) => boolean): number;
        sum<TI>(predicate?: (element: TElement) => TI): TI;
        orderBy<TR>(predicate?: (element: TElement) => TR): IEnumerable<TElement>;
        orderByDesc<TR>(predicate?: (element: TElement) => TR): IEnumerable<TElement>;
        getInnerArray(): Array<TElement>;
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
        static getAllContent(): Dictionary<string, string>;
        static clear(): void;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
interface Math {
    clamp(value: number, min: number, max: number): number;
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
declare module MiracleDevs.Angular.Core {
    class TimeSpan {
        milliseconds: number;
        /**
         * Retrieves the number of milliseconds in one second.
         * @return {Number} Number of milliseconds in one second.
         * @static
         */
        static readonly millisecondsPerSecond: number;
        /**
         * Retrieves the number of milliseconds in one minute.
         * @return {Number} Number of milliseconds in one minute.
         * @static
         */
        static readonly millisecondsPerMinute: number;
        /**
         * Retrieves the number of milliseconds in one hour.
         * @return {Number} Number of milliseconds in one hour.
         * @static
         */
        static readonly millisecondsPerHour: number;
        /**
         * Retrieves the number of milliseconds in one day.
         * @return {Number} Number of milliseconds in one day.
         * @static
         */
        static readonly millisecondsPerDay: number;
        /**
         * Creates a new time span with the number of milliseconds
         * elapsed to the present time.
         * @return {TimeSpan} Time span representing the current UTC time.
         * @static
         */
        static readonly now: TimeSpan;
        /**
         * Creates a new time span with the number of milliseconds
         * elapsed since the aplication started.
         * @return {TimeSpan} Time elapsed sirce the Application started.
         * @static
         */
        static sinceTheApplicationStarted(): TimeSpan;
        /**
         * A time span without milliseconds.
         * @type TimeSpan
         * @static
         */
        static readonly zero: TimeSpan;
        /**
         * A time span which represents one millisecond.
         * @type TimeSpan
         * @static
         */
        static oneMillisecond(): TimeSpan;
        /**
         * A time span which represents ten milliseconds.
         * @type TimeSpan
         * @static
         */
        static tenMilliseconds(): TimeSpan;
        /**
         * A time span which represents hundred milliseconds.
         * @type TimeSpan
         * @static
         */
        static hundredMilliseconds(): TimeSpan;
        /**
         * A time span which represents five hundred millisencods, or half a second.
         * @type TimeSpan
         * @static
         */
        static halfSecond(): TimeSpan;
        /**
         * A time span which represents one second.
         * @type TimeSpan
         * @static
         */
        static oneSecond(): TimeSpan;
        /**
         * A time span which represents thirty seconds or half a minute.
         * @type TimeSpan
         * @static
         */
        static halfMinute(): TimeSpan;
        /**
         * A time span which represents one minute.
         * @type TimeSpan
         * @static
         */
        static oneMinute(): TimeSpan;
        /**
         * A time span which represents thirty minutes or half an hour.
         * @type TimeSpan
         * @static
         */
        static halfHour(): TimeSpan;
        /**
         * A time span which represents an hour.
         * @type TimeSpan
         * @static
         */
        static oneHour(): TimeSpan;
        /**
         * A time span which represents tweleve hours or half a day.
         * @type TimeSpan
         * @static
         */
        static halfDay(): TimeSpan;
        /**
         * A time span which represents on day.
         * @type TimeSpan
         * @static
         */
        static oneDay(): TimeSpan;
        constructor(milliseconds: number);
        /**
        * Adds the milliseconds of the parameter to the current timespan.
         * @param {TimeSpan} timeSpan TimeSpan to be added to the current one.
         * @return {TimeSpan} A reference to the time span.
         */
        add(timeSpan: TimeSpan): TimeSpan;
        /**
         * Adds milliseconds to the current time span.
         * @param {Number} milliseconds Milliseconds to be added.
         * @return {TimeSpan} A reference to the time span.
         */
        addMilliseconds(milliseconds: number): TimeSpan;
        /**
         * Adds secods to the current time span.
         * @param {Number} seconds Seconds to be added.
         * @return {TimeSpan} A reference to the time span.
         */
        addSeconds(seconds: number): TimeSpan;
        /**
         * Adds minutes to the current time span.
         * @param {Number} minutes Minutes to be added.
         * @return {TimeSpan} A reference to the time span.
         */
        addMintures(minutes: number): TimeSpan;
        /**
         * Adds hours to the current time span.
         * @param {Number} hours Hours to be added.
         * @return {TimeSpan} A reference to the time span.
         */
        addHours(hours: number): TimeSpan;
        /**
         * Adds days to the current time span.
         * @param {Number} days Days to be added.
         * @return {TimeSpan} A reference to the time span.
         */
        addDays(days: number): TimeSpan;
        /**
         * Subtracts the milliseconds of the parameter to the current timespan.
         * @param {TimeSpan} timeSpan TimeSpan to be added to the current one.
         * @return {TimeSpan} A reference to the time span.
         */
        subtract(timeSpan: TimeSpan): TimeSpan;
        /**
         * Subtracts milliseconds to the current time span.
         * @param {Number} milliseconds Milliseconds to be subtracted.
         * @return {TimeSpan} A reference to the time span.
         */
        subtractMilliseconds(milliseconds: number): TimeSpan;
        /**
         * Subtracts seconds to the current time span.
         * @param {Number} seconds Seconds to be subtracted.
         * @return {TimeSpan} A reference to the time span.
         */
        subtractSeconds(seconds: number): TimeSpan;
        /**
         * Subtracts minutes to the current time span.
         * @param {Number} minutes Minutes to be subtracted.
         * @return {TimeSpan} A reference to the time span.
         */
        subtractMintures(minutes: number): TimeSpan;
        /**
         * Subtracts hours to the current time span.
         * @param {Number} hours Hours to be subtracted.
         * @return {TimeSpan} A reference to the time span.
         */
        subtractHours(hours: number): TimeSpan;
        /**
         * Subtracts days to the current time span.
         * @param {Number} days Days to be subtracted.
         * @return {TimeSpan} A reference to the time span.
         */
        subtractDays(days: number): TimeSpan;
        /**
         * Converts the timespan into seconds.
         * @return {Number} Number of seconds.
         */
        toSeconds(): number;
        /**
         * Converts the timespan into minutes.
         * @return {Number} Number of minutes.
         */
        toMinutes(): number;
        /**
         * Converts the timespan into hours.
         * @return {Number} Number of hours.
         */
        toHours(): number;
        /**
         * Converts the timespan into days.
         * @return {Number} Number of days.
         */
        toDays(): number;
        /**
         * Returns a new instance copy of the current time span.
         * @return {TimeSpan} New instance copied from this one.
         */
        copy(): TimeSpan;
        /**
         * Retrieves the difference with the current time span in milliseconds.
         * @param {TimeSpan} timeSpan Time span to calculate the difference.
         * @return {Number} difference between the two time span in milliseconds.
         */
        difference(timeSpan: TimeSpan): number;
        /**
         * Retrieves the percentage relation between the current time and the
         * given one. This takes as the total value the given time span, so if
         * this time span is greater than the parameter the percentage will be
         * greater than one. The percentage is expressed between[0-1] being 1
         * 100%.
         * @param {TimeSpan} timeSpan Time considered the total time in the percentage relation.
         * @return {Number} A Number greater or equal than 0, when 1 is 100%.
         */
        percentage(timeSpan: TimeSpan): number;
        /**
         * Converts the object into a string.
         * @return {String} String representation of the object.
         */
        toString(): string;
        /**
         * Creates a new time span from a number of seconds.
         * @param {Number} second Number of seconds.
         * @return {TimeSpan} A time span representing the number of seconds.
         * @static
         */
        static fromSeconds(seconds: any): TimeSpan;
        /**
         * Creates a new time span from a number of minutes.
         * @param {Number} second Number of minutes.
         * @return {TimeSpan} A time span representing the number of minutes.
         * @static
         */
        static fromMinutes(minutes: any): TimeSpan;
        /**
         * Creates a new time span from a number of hours.
         * @param {Number} second Number of hours.
         * @return {TimeSpan} A time span representing the number of hours.
         * @static
         */
        static fromHours(hours: any): TimeSpan;
        /**
         * Creates a new time span from a number of days.
         * @param {Number} second Number of days.
         * @return {TimeSpan} A time span representing the number of days.
         * @static
         */
        static fromDays(days: any): TimeSpan;
        /**
         * The exact time when the application started.
         * On reality holds the time when this script was loaded.
         * @type TimeSpan
         * @static
         */
        private static applicationStarted;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import IController = ng.IController;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirective = ng.IDirective;
    abstract class DirectiveBase implements IDirective {
        link: (scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction) => void;
        constructor();
        protected abstract create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): any;
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
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IController = ng.IController;
    class AddClass extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
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
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import ITimeoutService = ng.ITimeoutService;
    import IController = ng.IController;
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
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
        static factory(timeout: ITimeoutService): Alert;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IController = ng.IController;
    class BackgroundImage extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
        static factory(): BackgroundImage;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IController = ng.IController;
    class CommentArea extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        scope: {
            ngModel: string;
        };
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
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
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IController = ng.IController;
    class ConvertToNumber extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        require: string;
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
        static factory(): ConvertToNumber;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IFilterService = ng.IFilterService;
    import IController = ng.IController;
    class DateTimePicker extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        require: string;
        private filter;
        constructor(filter: IFilterService);
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
        static factory(filter: IFilterService): DateTimePicker;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import ITimeoutService = ng.ITimeoutService;
    import IController = ng.IController;
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
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
        static factory(timeout: ITimeoutService): FileButton;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IController = ng.IController;
    class FileDragAndDrop extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
        static factory(): FileDragAndDrop;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = ng.IScope;
    import IAugmentedJQuery = ng.IAugmentedJQuery;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
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
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import ITimeoutService = ng.ITimeoutService;
    import IController = ng.IController;
    class FocusWhen extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        private timeout;
        constructor(timeout: ITimeoutService);
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
        static factory(timeout: ITimeoutService): FocusWhen;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IController = ng.IController;
    class FormatAsNumber extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        require: string;
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
        static factory(): FormatAsNumber;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IController = ng.IController;
    class FullSelect extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
        static factory(): FullSelect;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = ng.IScope;
    import IAugmentedJQuery = ng.IAugmentedJQuery;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IInterpolateService = ng.IInterpolateService;
    import IController = ng.IController;
    class HorizontalScroller extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        interpolate: IInterpolateService;
        constructor(interpolate: IInterpolateService);
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
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
declare module MiracleDevs.Angular.Services {
    import IScope = ng.IScope;
    import ArrayList = Core.ArrayList;
    import ICompiledExpression = ng.ICompiledExpression;
    interface IKeyProcessorService {
        evaluateKeyActions(keyActions: ArrayList<KeyAction>, eventType: string, scope: IScope, e: JQueryKeyEventObject): void;
        parseActions(text: string): ArrayList<KeyAction>;
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
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IKeyProcessorService = Services.IKeyProcessorService;
    import IScope = ng.IScope;
    import IController = ng.IController;
    class KeyboardListener extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        scope: {
            disabled: string;
            attachTo: string;
        };
        private readonly keyProcessor;
        private readonly actions;
        constructor(keyProcessor: IKeyProcessorService);
        protected create(scope: IKeyboardListenerScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
        static factory(keyProcessor: IKeyProcessorService): KeyboardListener;
    }
    interface IKeyboardListenerScope extends IScope {
        disabled: boolean;
        attachTo: string;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IInterpolateService = ng.IInterpolateService;
    import IStateService = ng.ui.IStateService;
    import IController = ng.IController;
    class MdUiSrefActive extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        private interpolate;
        private state;
        constructor(interpolate: IInterpolateService, state: IStateService);
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
        static factory(interpolate: IInterpolateService, state: IStateService): MdUiSrefActive;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IKeyProcessorService = Services.IKeyProcessorService;
    import IController = ng.IController;
    class OnKeyboard extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        private readonly keyProcessor;
        constructor(keyProcessor: IKeyProcessorService);
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
        static factory(keyProcessor: IKeyProcessorService): OnKeyboard;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import ITimeoutService = ng.ITimeoutService;
    import IController = ng.IController;
    class PreventEventIf extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        scope: {
            preventEventIf: string;
            preventEvent: string;
        };
        private timeout;
        constructor(timeout: ITimeoutService);
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
        static factory(timeout: ITimeoutService): PreventEventIf;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IController = ng.IController;
    class RemoveClass extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
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
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IRootScope = ng.IRootScopeService;
    import IController = ng.IController;
    class ScrollToBottom extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        private rootScope;
        constructor(rootScope: IRootScope);
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
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
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IController = ng.IController;
    class ScrollToggleClass extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
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
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IRootScope = ng.IRootScopeService;
    import IController = ng.IController;
    class ScrollToTop extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        private rootScope;
        constructor(rootScope: IRootScope);
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
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
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IController = ng.IController;
    class SelectToggleClass extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
        static factory(): SelectToggleClass;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IController = ng.IController;
    class ToggleClass extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
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
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IController = ng.IController;
    class ToggleClassOnClick extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
        static factory(): ToggleClassOnClick;
    }
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
declare module MiracleDevs.Angular.Directives {
    import IScope = ng.IScope;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IController = ng.IController;
    class Tooltip extends DirectiveBase {
        static register: IDirectiveRegister;
        restrict: string;
        scope: {
            tooltipOptions: string;
            tooltipCose: string;
            tooltipParameter: string;
        };
        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void;
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
    import IHttpPromiseCallbackArg = ng.IHttpPromiseCallbackArg;
    import IPromise = ng.IPromise;
    import IRequestConfig = ng.IRequestConfig;
    import IHttpInterceptor = ng.IHttpInterceptor;
    import IqService = ng.IQService;
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
    import IPromise = ng.IPromise;
    interface IAsyncResourceService {
        loadScript(url: string): IPromise<void>;
        loadImage(url: string): IPromise<void>;
        loadVieo(url: string): IPromise<void>;
    }
}
declare module MiracleDevs.Angular.Services {
    import IServiceRegister = Interfaces.IServiceRegister;
    import ISCEService = ng.ISCEService;
    import IQService = ng.IQService;
    import IDocumentService = ng.IDocumentService;
    import IPromise = ng.IPromise;
    class AsyncResourceService extends ServiceBase implements IAsyncResourceService {
        static register: IServiceRegister;
        private readonly sce;
        private readonly q;
        private readonly document;
        private readonly deferredRequests;
        constructor(sce: ISCEService, q: IQService, document: IDocumentService);
        loadScript(url: string): IPromise<void>;
        loadImage(url: string): IPromise<void>;
        loadVieo(url: string): IPromise<void>;
        private loadResource(type, url);
        static factory(sce: ISCEService, q: IQService, document: IDocumentService): IAsyncResourceService;
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
        "August" = 7,
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
    import ITimeoutService = ng.ITimeoutService;
    class FileManagementService extends ServiceBase implements IFileManagementService {
        static register: IServiceRegister;
        timeout: ITimeoutService;
        constructor(timeout: ITimeoutService);
        read(file: File, completed: (file: File, content: string) => void, progress?: (p: number) => void, error?: (e: string) => void): void;
        download(fileName: string, content: string): void;
        open(fileName: string, content: string): void;
        getBlobUrl(fileName: string, content: string): string;
        private getBlob(fileName, content64);
        private getError(e);
        static factory(timeout: ITimeoutService): FileManagementService;
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
        private getStringValue(value);
        private getUrl(url, params?);
        post<T>(url: string, params?: any, data?: any, queryString?: any): ng.IHttpPromise<T>;
        patch<T>(url: string, params?: any, data?: any, queryString?: any): ng.IHttpPromise<T>;
        put<T>(url: string, params?: any, data?: any, queryString?: any): ng.IHttpPromise<T>;
        get<T>(url: string, params?: any, data?: any, queryString?: any): ng.IHttpPromise<T>;
        delete<T>(url: string, params?: any, data?: any, queryString?: any): ng.IHttpPromise<T>;
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
    import IDeferred = ng.IDeferred;
    import IPromise = ng.IPromise;
    import Dictionary = Core.Dictionary;
    interface IModalService {
        readonly modals: Dictionary<IModalInstance, ng.IAugmentedJQuery>;
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
    import IScope = ng.IScope;
    import IParseService = ng.IParseService;
    import ArrayList = Core.ArrayList;
    import IServiceRegister = Interfaces.IServiceRegister;
    class KeyProcessorService extends ServiceBase implements IKeyProcessorService {
        static register: IServiceRegister;
        private readonly parse;
        constructor(parse: IParseService);
        evaluateKeyActions(keyActions: ArrayList<KeyAction>, eventType: string, scope: IScope, e: JQueryKeyEventObject): void;
        parseActions(text: string): ArrayList<KeyAction>;
        static factory(parse: IParseService): IKeyProcessorService;
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
    import Dictionary = Core.Dictionary;
    class ModalService extends ServiceBase implements IModalService {
        static register: IServiceRegister;
        private readonly $rootScope;
        private readonly $q;
        private readonly $http;
        private readonly $templateCache;
        private readonly $compile;
        private readonly $controller;
        readonly modals: Dictionary<IModalInstance, ng.IAugmentedJQuery>;
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $http: ng.IHttpService, $templateCache: ng.ITemplateCacheService, $compile: ng.ICompileService, $controller: ng.IControllerService);
        open(dialog: IModalCreationParameter, parameters?: any, staticDialog?: boolean, keyboard?: boolean): IModalInstance;
        close(modalInstance: IModalInstance, reason?: string): void;
        resolve<T>(modalInstance: IModalInstance, result: T): void;
        private openModal(register, controllerAs, parameters, modalInstance, template, staticDialog, keyboard);
        private removeModal(modalInstance, modal);
        static factory($rootScope: ng.IRootScopeService, $q: ng.IQService, $http: ng.IHttpService, $templateCache: ng.ITemplateCacheService, $compile: ng.ICompileService, $controller: ng.IControllerService): ModalService;
    }
    class ModalInstance implements IModalInstance {
        private readonly modalService;
        deferred: ng.IDeferred<any>;
        promise: ng.IPromise<any>;
        dispose: () => void;
        constructor(modalService: IModalService, deferred: ng.IDeferred<any>);
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
    import ISCEService = ng.ISCEService;
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
    import IInjectorService = ng.auto.IInjectorService;
    import IModalInstance = Services.IModalInstance;
    import IScope = ng.IScope;
    abstract class DialogControllerBase extends ControllerBase {
        protected modalInstance: IModalInstance;
        protected constructor(scope: IScope, modalInstance: IModalInstance, injector: IInjectorService);
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
