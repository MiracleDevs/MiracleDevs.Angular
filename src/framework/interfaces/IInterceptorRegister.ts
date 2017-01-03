module MiracleDevs.Angular.Interfaces
{
    export interface IInterceptorRegister
    {
        name: string;

        factory: Function;

        dependencies?: Array<string>;
    }
}