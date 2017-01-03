module MiracleDevs.Angular.Services
{
    export interface IExceptionService
    {
        processException(exception: Error, cause: string) : void;
    }
}