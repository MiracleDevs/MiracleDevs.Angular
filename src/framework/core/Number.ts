/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

interface NumberConstructor
{
    isNumber(value: any): boolean;
}

Number.isNumber = (value: any): boolean =>
{
    return !isNaN(parseFloat(value)) && isFinite(value);
}