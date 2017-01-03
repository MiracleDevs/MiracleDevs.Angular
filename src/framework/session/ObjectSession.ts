///<reference path="../core/Object.ts"/>
///<reference path="../core/LocalStorage.ts"/>

module MiracleDevs.Angular.Session
{
    import LocalStorage = Core.LocalStorage;

    export class ObjectSession 
    {
        static save<T>(name: string, data: T): void
        {
            LocalStorage.set<String>(name, JSON.stringify(data));
        }

        static restore<T>(name: string): T 
        {
            const content = LocalStorage.get<String>(String, name);

            if (Object.isNull(content))
                return null;

            return JSON.parse(content.valueOf()) as T;
        }

        static clear(name: string): void
        {
            LocalStorage.remove(name);
        }
    }
}