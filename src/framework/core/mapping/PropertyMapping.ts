module MiracleDevs.Angular.Core.Mapping
{
    export class PropertyMapping<TSource, TDest>
    {
        constructor(public property: string, public method: (o: TSource) => any)
        {
        }
    }
}