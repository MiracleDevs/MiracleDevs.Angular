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