/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

module MiracleDevs.Angular.Services
{
    export class HttpServiceBase extends ServiceBase
    {
        $http: ng.IHttpService;

        host: string;

        constructor($http: ng.IHttpService, host: string)
        {
            super();
            this.$http = $http;
            this.host = host;
        }

        post<T>(url: string, params?: any, data?: any): ng.IHttpPromise<T> 
        {
            return this.$http.post<T>(this.host + url, data, { headers: this.getHeaders(), params: params });
        }

        patch<T>(url: string, params?: any, data?: any): ng.IHttpPromise<T> 
        {
            return this.$http.patch<T>(this.host + url, data, { headers: this.getHeaders(), params: params });
        }

        put<T>(url: string, params?: any, data?: any): ng.IHttpPromise<T> 
        {
            return this.$http.put<T>(this.host + url, data, { headers: this.getHeaders(), params: params });
        }

        get<T>(url: string, params?: any, data?: any): ng.IHttpPromise<T> 
        {
            return this.$http.get<T>(this.host + url, { headers: this.getHeaders(), params: params });
        }

        delete<T>(url: string, params?: any, data?: any): ng.IHttpPromise<T> 
        {
            return this.$http.delete<T>(this.host + url, { headers: this.getHeaders(), params: params });
        }

        protected getHeaders(): any 
        {
            return { "Content-Type": "application/json; charset=utf-8" };
        }
    }
}