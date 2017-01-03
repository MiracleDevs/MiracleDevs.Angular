/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../../typings/angularjs/angular.d.ts" />

module MiracleDevs.Angular.Interceptors
{
    import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;
    import IPromise = angular.IPromise;
    import IRequestConfig = angular.IRequestConfig;
    import IHttpInterceptor = angular.IHttpInterceptor;
    import IqService = angular.IQService;

    export class InterceptorBase implements IHttpInterceptor
    {
        request: (config: IRequestConfig) => IRequestConfig;

        response: (response: IHttpPromiseCallbackArg<any>) => IPromise<any>;

        requestError: (rejection: ng.IHttpPromiseCallbackArg<any>) => IPromise<any>;

        responseError: (rejection: ng.IHttpPromiseCallbackArg<any>) => IPromise<any>;

        protected q: IqService;

        constructor(q: IqService)
        {
            this.q = q;

            this.request = c => this.onRequest(c);

            this.response = r => this.onResponse(r);

            this.requestError = r => this.onRequestError(r);

            this.responseError = r => this.onResponseError(r);
        }

        onRequest(config: IRequestConfig): IRequestConfig
        {
            return config;
        }

        onResponse(response: IHttpPromiseCallbackArg<any>): IPromise<any>
        {
            return this.q.resolve(response);
        }

        onRequestError(rejection: IHttpPromiseCallbackArg<any>): IPromise<any>
        {
            return this.q.reject(rejection);
        }

        onResponseError(rejection: IHttpPromiseCallbackArg<any>): IPromise<any>
        {
            return this.q.reject(rejection);
        }
    }
} 