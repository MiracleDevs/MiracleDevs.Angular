﻿/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

module MiracleDevs.Angular.Interfaces
{
    export interface IFilterRegister
    {
        name: string;

        factory: Function;

        dependencies?: Array<string>;
    }
}