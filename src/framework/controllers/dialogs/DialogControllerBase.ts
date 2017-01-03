/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../ControllerBase.ts" />

module MiracleDevs.Angular.Controllers.Dialogs
{
    import IInjectorService = angular.auto.IInjectorService;
    import IModalInstance = Services.IModalInstance;
    import IScope = angular.IScope;

    export class DialogControllerBase extends ControllerBase 
    {
        protected modalInstance: IModalInstance;

        constructor(scope: IScope, modalInstance: IModalInstance,  injector: IInjectorService)
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