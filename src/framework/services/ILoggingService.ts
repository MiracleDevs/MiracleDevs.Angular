module MiracleDevs.Angular.Services
{
    export interface ILoggingService
    {
        writeMessage(message: string): void;

        writeWarning(message: string): void;

        writeError(message: string): void;
    }
}