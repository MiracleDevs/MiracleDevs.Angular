///<reference path="../FrameworkModule.ts"/>

module MiracleDevs.Angular.Filters
{
    import FilterRegister = Interfaces.IFilterRegister;

    export class TrimFilter
    {
        static register: FilterRegister =
        {
            name: FrameworkFilters.trim,
            factory: TrimFilter.factory
        };

        private static trim(value: string, maxChars: number): string
        {
            if (Object.isNull(value))
                return null;

            if (value.length < maxChars)
                return value;

            return value.substr(0, maxChars) + "...";
        }

        static factory(): (value: string, maxChars: number) => string
        {
            return TrimFilter.trim;
        }
    }

    ////////////////////////////////////////////////////////////
    // Register filter
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerFilter(TrimFilter.register);
} 