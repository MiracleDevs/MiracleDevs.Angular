/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="ServiceBase.ts" />
///<reference path="FrameworkServices.ts"/>
///<reference path="../core/Date.ts"/>

module MiracleDevs.Angular.Services
{
    import IServiceRegister = Interfaces.IServiceRegister;

    export abstract class LoggingServiceBase extends ServiceBase implements ILoggingService
    {
        writeMessage(message: string): void { }
        writeWarning(message: string): void { }
        writeError(message: string): void { }   

        protected getString(message: string): string
        {
            return `[${new Date().format("MM/dd/yy hh:mm:ss.fff")}] - ${message}`;
        }
    }

    export class DummyLoggingService extends LoggingServiceBase
    {
        writeError(message: string): void { console.error(this.getString(message)); }
    }

    export class LoggingService extends LoggingServiceBase 
    {
        static register: IServiceRegister = {
            name: FrameworkServices.loggingService,
            factory: LoggingService.factory
        };

        writeMessage(message: string): void
        {
            console.info(this.getString(message));
        }

        writeWarning(message: string): void
        {
            console.warn(this.getString(message));
        }

        writeError(message: string): void
        {
            console.error(this.getString(message));
        }

        static factory(): ILoggingService
        {
            return BuildInfo.instance.isDebug ?  new LoggingService() : new DummyLoggingService();
        }  
    }
}