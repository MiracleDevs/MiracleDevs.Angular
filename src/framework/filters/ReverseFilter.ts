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