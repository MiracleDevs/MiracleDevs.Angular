/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../Dictionary.ts"/>
///<reference path="PropertyMapping.ts"/>

module MiracleDevs.Angular.Core.Mapping
{
    export class TypeMapping<TSource, TDest>
    {
        properties: Dictionary<string, PropertyMapping<TSource, TDest>>;

        constructor(source: TSource, destination: TDest)
        {
            this.properties = new Dictionary<string, PropertyMapping<TSource, TDest>>();

            for (let key in destination)
            {
                if (source.hasOwnProperty(key) && destination.hasOwnProperty(key))
                {
                    this.properties.add(key, new PropertyMapping(key, this.getValue(key)));
                }
            }
        }

        private getValue(property: string)
        {
            return o => o[property];
        }

        forMember(destProperty: string, method: (o: TSource) => any): TypeMapping<TSource, TDest>
        {
            if (this.properties.containsKey(destProperty))
                this.properties.remove(destProperty);

            this.properties.add(destProperty, new PropertyMapping(destProperty, method));

            return this;
        }

        ignore(destProperty: string): TypeMapping<TSource, TDest>
        {
            if (this.properties.containsKey(destProperty))
                this.properties.remove(destProperty);

            return this;
        }

        run(source: TSource, destination: TDest): void
        {
            const values = this.properties.getValues();

            for (let index in values)
            {
                if (values.hasOwnProperty(index))
                {
                    const property = values[index];
                    destination[property.property] = property.method(source);
                }
            }
        }
    }
}