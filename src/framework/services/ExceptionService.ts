﻿/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../FrameworkModule.ts"/>

module MiracleDevs.Angular.Services
{
    import IServiceRegister = Interfaces.IServiceRegister;

    export class ExceptionService extends ServiceBase implements IExceptionService
    {
        static register: IServiceRegister = {
            name: AngularServices.exceptionHandler,
            factory: ExceptionService.factory,
            dependencies: [FrameworkServices.alertService, FrameworkServices.loggingService]
        };
      
        private alertService: IAlertService;

        private logger: ILoggingService;

        constructor(alertService: IAlertService, logger: ILoggingService)
        {
            super();
            this.alertService = alertService;
            this.logger = logger;
        }

        processException(exception: Error, cause: string): void
        {
            this.alertService.addError(exception.message);
            this.logger.writeError(`Error: ${exception}\n\nCause:${cause}`);
        }

        /* @ngInject */
        static factory(alertService: IAlertService, logger: ILoggingService): (exception: Error, cause: string) => void
        {           
            return (exception: Error, cause: string) => new ExceptionService(alertService, logger).processException(exception, cause);
        }
    }

    ////////////////////////////////////////////////////////////
    // Register service
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerService(ExceptionService.register);
}