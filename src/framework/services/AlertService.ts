/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../FrameworkModule.ts" />
///<reference path="IAlertService.ts"/>

module MiracleDevs.Angular.Services
{  
    import IServiceRegister = Interfaces.IServiceRegister;
    import ArrayList = Core.ArrayList;   

    export class AlertService extends ServiceBase implements IAlertService
    {
        static register: IServiceRegister = {
            name: FrameworkServices.alertService,
            factory: AlertService.factory,
            dependencies: [FrameworkServices.loggingService]
        };
        
        private logger: ILoggingService;

        private alerts: ArrayList<Alert>;

        constructor(logger: ILoggingService)
        {
            super();
            this.logger = logger;
            this.alerts = new ArrayList<Alert>();
        }

        add(alertType: AlertType, message: string): void
        {
            this.alerts.add(new Alert(alertType, message));
        }

        addError(message: string): void
        {
            this.add(AlertType.Error, message);
            this.logger.writeError(message);
        }

        addWarning(message: string): void
        {
            this.add(AlertType.Warning, message);
            this.logger.writeWarning(message);
        }

        addMessage(message: string): void
        {
            this.add(AlertType.Message, message);
            this.logger.writeMessage(message);
        }

        remove(index: number|Alert): void
        {
            if (index instanceof Alert)
                this.alerts.remove(index);
            else
                this.alerts.removeAt(index as number);
        }

        get(index: number): Alert
        {
            return this.alerts.get(index);
        }

        getAlerts(): ArrayList<Alert>
        {
            return this.alerts;
        }

        static factory(logger: ILoggingService): IAlertService
        {
            return new AlertService(logger);
        }
    }

    FrameworkModule.instance.registerService(AlertService.register);
}