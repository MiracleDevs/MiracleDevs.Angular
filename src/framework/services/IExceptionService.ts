﻿/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

module MiracleDevs.Angular.Services
{
    export interface IExceptionService
    {
        processException(exception: Error, cause: string) : void;
    }
}