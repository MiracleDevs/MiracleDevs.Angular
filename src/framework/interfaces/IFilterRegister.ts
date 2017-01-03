module MiracleDevs.Angular.Interfaces
{
    export interface IFilterRegister
    {
        name: string;

        factory: Function;

        dependencies?: Array<string>;
    }
}