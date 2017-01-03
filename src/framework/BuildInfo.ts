///<reference path="exceptions/Exception.ts" />
///<reference path="core/Dictionary.ts"/>

module MiracleDevs.Angular
{
    import Exception = Exceptions.Exception;
    import Dictionary = Core.Dictionary;

    export class BuildInfo
    {
        version: string;

        company: string;

        configuration: string;

        private data: Dictionary<string, any>;

        get isDebug(): boolean { return this.configuration.toLowerCase() === "debug"; }

        get isRelease(): boolean { return this.configuration.toLowerCase() === "release"; }

        private static internalInstance: BuildInfo;

        static get instance(): BuildInfo
        {
            return BuildInfo.internalInstance || (BuildInfo.internalInstance = new BuildInfo());
        }
       
        constructor()
        {
            if (BuildInfo.internalInstance != null)
                throw new Exception("The program does not allow more than one instance of BuildInfo.");

            if (MiracleDevs != null && MiracleDevs["BuildInfo"] != null)
            {
                this.version = MiracleDevs["BuildInfo"].version;
                this.company = MiracleDevs["BuildInfo"].company;
                this.configuration = MiracleDevs["BuildInfo"].configuration;
                const data = MiracleDevs["BuildInfo"].data;

                if (data != null)
                {
                    this.data = new Dictionary<string, any>();

                    for (let property in data) 
                    {
                        if (data.hasOwnProperty(property)) 
                        {
                            this.data.add(property, data[property]);
                        }
                    }
                }
            }

            this.version = this.version || "1.0.0.0";
            this.company = this.company || "Miracle Devs";
            this.configuration = this.configuration || "debug";
            this.data = this.data || new Dictionary<string, any>();
        }

        getData<T>(key: string): T
        {
            if (!this.data.containsKey(key))
                return null;

            return this.data.get(key) as T;
        }
    }
}