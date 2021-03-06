﻿/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../FrameworkModule.ts"/>

module MiracleDevs.Angular.Filters
{
    import FilterRegister = Interfaces.IFilterRegister;

    export class UppercaseFilter
    {
        static register: FilterRegister =
        {
            name: FrameworkFilters.uppercase,
            factory: UppercaseFilter.factory
        };

        static factory(): (value: string) => string
        {
            return value => Object.isNull(value) ? null : value.toUpperCase();
        }
    }


    ////////////////////////////////////////////////////////////
    // Register filter
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerFilter(UppercaseFilter.register);
} 