module MiracleDevs.Angular.Interfaces
{
    export interface IServiceRegister
    {
        name: string;

        factory: Function;

        dependencies?: Array<string>;
    }
}