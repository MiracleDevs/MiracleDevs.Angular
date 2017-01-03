module MiracleDevs.Angular.Interfaces
{
    export interface IDirectiveRegister
    {
        name: string;

        factory: Function;

        dependencies?: Array<string>;
    }
}