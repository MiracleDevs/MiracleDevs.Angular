/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../core/Function.ts" />
///<reference path="../core/Object.ts" />

module MiracleDevs.Angular.Core
{
    export class LocalStorage
    {
        static set<T>(name: string, value: T): void
        {
            localStorage.setItem(name, value.toString());
        }

        static get<T>(type: { new (): T }, name: string): T
        {
            if (type.getFunctionName() === Number.getFunctionName())
                return (LocalStorage.getNumber(name) as any) as T;

            if (type.getFunctionName() === Boolean.getFunctionName())
                return (LocalStorage.getBoolean(name) as any) as T;

            if (type.getFunctionName() === Date.getFunctionName())
                return (LocalStorage.getDate(name) as any) as T;

            return (localStorage.getItem(name) as any) as T;
        }

        static getInt(name: string): Number
        {
            const value = localStorage.getItem(name);
            return Object.isNull(value) ? null : parseInt(value);
        }

        static getNumber(name: string): Number
        {
            const value = localStorage.getItem(name);
            return Object.isNull(value) ? null : parseFloat(value);
        }

        static getBoolean(name: string): Boolean
        {
            let value = localStorage.getItem(name);

            if (Object.isNull(value))
                return null;

            value = value.toLowerCase();

            return value === "true" || value === "yes" || value === "1";
        }

        static getDate(name: string): Date
        {
            const value = localStorage.getItem(name);
            return Object.isNull(value) ? null : new Date(value);
        }


        static remove(name: string): void
        {
            localStorage.removeItem(name);
        }

        static clear(): void
        {
            localStorage.clear();
        }
    }
}