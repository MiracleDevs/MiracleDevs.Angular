/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../ControllerBase.ts" />

module MiracleDevs.Angular.Controllers.Dialogs
{
    import IInjectorService = ng.auto.IInjectorService;
    import IModalInstance = Services.IModalInstance;
    import IScope = ng.IScope;

    export abstract class DialogControllerBase extends ControllerBase 
    {
        protected modalInstance: IModalInstance;

        protected constructor(scope: IScope, modalInstance: IModalInstance,  injector: IInjectorService)
        {
            super(scope, injector);

            this.modalInstance = modalInstance;
        }

        cancel()
        {
            this.modalInstance.close();
        }

        protected close(result: any = null)
        {
            this.modalInstance.resolve(result);
        }
    }
} 