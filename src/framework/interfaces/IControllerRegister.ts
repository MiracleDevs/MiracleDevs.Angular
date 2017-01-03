/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

module MiracleDevs.Angular.Interfaces
{
    export interface IControllerRegister
    {
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