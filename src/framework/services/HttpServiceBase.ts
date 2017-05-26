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

        private getStringValue(value:any): string
        {
            if (Object.isNull(value))
                return String.empty;

            if (Object.getTypeName(value) === "Number" ||
                Object.getTypeName(value) === "String" ||
                Object.getTypeName(value) === "Boolean")
            {
                return value.toString();
            }

            if (Object.getTypeName(value) === "Date")
            {
                return (value as Date).formatUTC("yyyy-MM-ddThh:mm:ss.fff");
            }

            return String.empty;
        }

        private getUrl(url: string, params?: any): string
        {
            if (!Object.isNull(params))
            {
                for (let key in params)
                {
                    if (params.hasOwnProperty(key))
                    {
                        url = url.replace(`{${key}}`, this.getStringValue(params[key]));
                    }
                }
            }

            return `${this.host}${url}`;
        }

        post<T>(url: string, params?: any, data?: any, queryString?: any): ng.IHttpPromise<T> 
        {
            return this.$http.post<T>(this.getUrl(url, params), data, { headers: this.getHeaders(), params: queryString });
        }

        patch<T>(url: string, params?: any, data?: any, queryString?: any): ng.IHttpPromise<T> 
        {
            return this.$http.patch<T>(this.getUrl(url, params), data, { headers: this.getHeaders(), params: queryString  });
        }

        put<T>(url: string, params?: any, data?: any, queryString?: any): ng.IHttpPromise<T> 
        {
            return this.$http.put<T>(this.getUrl(url, params), data, { headers: this.getHeaders(), params: queryString  });
        }

        get<T>(url: string, params?: any, data?: any, queryString?: any): ng.IHttpPromise<T> 
        {
            return this.$http.get<T>(this.getUrl(url, params), { headers: this.getHeaders(), params: queryString  });
        }

        delete<T>(url: string, params?: any, data?: any, queryString?: any): ng.IHttpPromise<T> 
        {
            return this.$http.delete<T>(this.getUrl(url, params), { headers: this.getHeaders(), params: queryString  });
        }

        protected getHeaders(): any 
        {
            return { "Content-Type": "application/json; charset=utf-8" };
        }
    }
}