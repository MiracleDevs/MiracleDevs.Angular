/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../../typings/index.d.ts" />

module MiracleDevs.Angular.Services
{
    import IPromise = ng.IPromise;

    export interface IAsyncResourceService
    {
        loadScript(url: string): IPromise<void>;

        loadImage(url: string): IPromise<void>;

        loadVieo(url: string): IPromise<void>;
    }
}