/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../FrameworkModule.ts"/>

module MiracleDevs.Angular.Filters
{
    import FilterRegister = Interfaces.IFilterRegister;

    export class ReverseFilter
    {
        static register: FilterRegister =
        {
            name: FrameworkFilters.reverse,
            factory: ReverseFilter.factory
        };

        static factory(): (items: any[]) => any[]
        {
            return items => items.slice().reverse();
        }
    }


    ////////////////////////////////////////////////////////////
    // Register filter
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerFilter(ReverseFilter.register);
} 