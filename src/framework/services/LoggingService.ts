///<reference path="ServiceBase.ts" />
///<reference path="FrameworkServices.ts"/>

module MiracleDevs.Angular.Services
{
    import IServiceRegister = Interfaces.IServiceRegister;

    export class DummyLoggingService extends ServiceBase implements ILoggingService
    {
        writeMessage(message: string): void {}
        writeWarning(message: string): void {}
        writeError(message: string): void {}
    }

    export class LoggingService extends ServiceBase implements ILoggingService
    {
        static register: IServiceRegister = {
            name: FrameworkServices.loggingService,
            factory: LoggingService.factory
        };

        writeMessage(message: string): void
        {
            console.info(message);
        }

        writeWarning(message: string): void
        {
            console.warn(`Warning: ${message}`);
        }

        writeError(message: string): void
        {
            console.error(`Error: ${message}`);
        }

        static factory(): ILoggingService
        {
            return BuildInfo.instance.isDebug ?  new LoggingService() : new DummyLoggingService();
        }  
    }
}