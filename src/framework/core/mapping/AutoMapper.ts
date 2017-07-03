/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="TypeMapping.ts"/>

module MiracleDevs.Angular.Core.Mapping
{
    export class AutoMapper
    {
        private static types = new Dictionary<string, TypeMapping<any, any>>();

        static createMap<TSource, TDest>(source: { new(): TSource }, destination: { new(): TDest })
        {
            const key = source.getFunctionName() + "." + destination.getFunctionName();

            if (AutoMapper.types.containsKey(key))
                AutoMapper.types.remove(key);

            const typeMapping = new TypeMapping(new source(), new destination());
            AutoMapper.types.add(key, typeMapping);

            return typeMapping;
        }

        static createMapByName<TSource, TDest>(name: string, source: { new(): TSource }, destination: { new(): TDest })
        {
            if (AutoMapper.types.containsKey(name))
                AutoMapper.types.remove(name);

            const typeMapping = new TypeMapping(new source(), new destination());
            AutoMapper.types.add(name, typeMapping);

            return typeMapping;
        }

        static clear()
        {
            AutoMapper.types.clear();
        }

        static map<TSource, TDest>(source: TSource, destination: { new(): TDest }): TDest
        {
            if (source == null)
                return null;

            const key = Object.getTypeName(source) + "." + destination.getFunctionName();
            const typeMapping = AutoMapper.types.get(key);
            const destObject = new destination();

            typeMapping.run(source, destObject);
            return destObject;
        }

        static mapTo<TSource, TDest>(source: TSource, destination: TDest): void
        {
            if (source == null || destination == null)
                return;

            const key = Object.getTypeName(source) + "." + Object.getTypeName(destination);

            const typeMapping = AutoMapper.types.get(key);
            typeMapping.run(source, destination);
        }

        static mapToByName<TSource, TDest>(name: string, source: TSource, destination: TDest): void
        {
            if (source == null || destination == null)
                return;

            const typeMapping = AutoMapper.types.get(name);
            typeMapping.run(source, destination);
        }

        static dynamicMap(source: any, destination: any): void
        {
            if (source == null || destination == null)
                return;

            for (let key in destination)
            {
                if (source.hasOwnProperty(key) && destination.hasOwnProperty(key))
                {
                    destination[key] = source[key];
                }
            }
        }
    }
}