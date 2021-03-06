﻿/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../services/FrameworkServices.ts" />

module MiracleDevs.Angular.Controllers
{
    import IAlertService = Services.IAlertService;
    import IStateService = ng.ui.IStateService;
    import IInjectorService = ng.auto.IInjectorService;
    import ILoggingService = Services.ILoggingService;
    import IScope = ng.IScope;
    import IPromise = ng.IPromise;
    import IModalService = Services.IModalService;
    import FrameworkServices = Services.FrameworkServices;
    import IModalInstance = Services.IModalInstance;

    export abstract class ControllerBase
    {
        protected scope: IScope;

        protected injector: IInjectorService;

        protected alertService: IAlertService;
     
        protected stateService: IStateService;

        protected logger: ILoggingService;

        protected constructor(scope: IScope, injector: IInjectorService)
        {
            this.scope = scope;
            this.injector = injector;
            this.scope.$on("$destroy", () => this.dispose());
        }

        protected dispose(): void
        {
            this.logger.writeMessage(`Disposing ${Object.getTypeName(this)}`);
        }

        protected getService<T>(service: string): T
        {
            if (service == null)
                return null;

            return this.injector.get<T>(service, null) as T;
        }

        protected open(controller: Function, parameters?: any, staticDialog?: boolean, keyboard?: boolean): IModalInstance
        {
            return this.getService<IModalService>(FrameworkServices.modalService).open(controller, parameters, staticDialog, keyboard);
        }

        protected call<T>(
            call: () => IPromise<T>,
            success?: (result: T) => void,
            loading?: (loading: boolean) => void,
            fail?: (reason: any) => void)
        {
            if (!Object.isNull(loading))
                loading(true);

            call()
                .then(result =>               
                {
                    if (!Object.isNull(loading))
                        loading(false);

                    if (!Object.isNull(success))
                    {
                        success(result);
                    }
                })
                .catch(error =>
                {
                    if (!Object.isNull(loading))
                        loading(false);

                    if (!Object.isNull(fail))
                        fail(error);

                    this.handleException(error);
                });
        }

        protected showErrors(messages: string[])
        {
            if (messages.length === 0)
                return;

            for (let i = 0; i < messages.length; i++)
            {
                this.showError(messages[i]);
            }
        }

        protected showWarnings(messages: string[])
        {
            if (messages.length === 0)
                return;

            for (let i = 0; i < messages.length; i++)
            {
                this.showWarning(messages[i]);
            }
        }

        protected showError(message: string)
        {
            this.alertService.addError(message);
        }

        protected showWarning(message: string)
        {
            this.alertService.addWarning(message);
        }

        protected showMessage(message: string)
        {
            this.alertService.addMessage(message);
        }

        protected handleException(ex: any): void
        {
            if (Object.isNull(ex))
                return;

            // if ex.data is not null, it's probably a 
            // an http promise exception.
            if (!Object.isNull(ex.data))
                ex = ex.data;

            if (!Object.isNull(ex.message))
            {
                this.showError(ex.message);
            }
            else if (!Object.isNull(ex.Message))
            {
                this.showError(ex.Message);
            }
            else if (!Object.isNull(ex.ExceptionMessage))
            {
                this.showError(ex.ExceptionMessage);
            }
            else if (!Object.isNull(ex.error) && !Object.isNull(ex.error.message))
            {
                this.showError(ex.error.message);
            }
        }

        protected changeState(state: string, params?: any, reload: boolean = false): IPromise<any>
        {
            return this.stateService.go(state, params, { reload: reload });
        }
    }
}