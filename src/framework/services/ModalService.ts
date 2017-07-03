/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../FrameworkModule.ts" />
///<reference path="../core/Guid.ts"/>
///<reference path="IModalService.ts"/>

module MiracleDevs.Angular.Services
{
    import IServiceRegister = Interfaces.IServiceRegister;
    import Dictionary = Core.Dictionary;
    import Guid = Core.Guid;
    import IControllerRegister = Interfaces.IControllerRegister;

    export class ModalService extends ServiceBase implements IModalService
    {
        static register: IServiceRegister = {
            name: FrameworkServices.modalService,
            factory: ModalService.factory,
            dependencies: [AngularServices.rootScope, AngularServices.q, AngularServices.http, AngularServices.templateCache, AngularServices.compile, AngularServices.controller]
        };

        private readonly $rootScope: ng.IRootScopeService;

        private readonly $q: ng.IQService;

        private readonly $http: ng.IHttpService;

        private readonly $templateCache: ng.ITemplateCacheService;

        private readonly $compile: ng.ICompileService;

        private readonly $controller: ng.IControllerService;

        public readonly modals: Dictionary<IModalInstance, ng.IAugmentedJQuery>;

        constructor(
            $rootScope: ng.IRootScopeService,
            $q: ng.IQService,
            $http: ng.IHttpService,
            $templateCache: ng.ITemplateCacheService,
            $compile: ng.ICompileService,
            $controller: ng.IControllerService
        ) 
        {
            super();
            this.$rootScope = $rootScope;
            this.$q = $q;
            this.$http = $http;
            this.$templateCache = $templateCache;
            this.$compile = $compile;
            this.$controller = $controller;
            this.modals = new Dictionary<IModalInstance, ng.IAugmentedJQuery>();
        }

        open(dialog: IModalCreationParameter, parameters?: any, staticDialog?: boolean, keyboard?: boolean): IModalInstance;
        open(dialog: any, parameters?: any, staticDialog: boolean = false, keyboard: boolean = true): IModalInstance
        {
            if (dialog.register == null)
                throw new Error("The modal controller registration information is missing.");

            var register = dialog.register;
            var controllerAs = dialog.controllerAs || "controller";

            var modalInstance = new ModalInstance(this, this.$q.defer());
            const template = this.$templateCache.get<string>(dialog.register.viewUrl);

            // TODO: search for a better way to handle templateCache. $http probably have a handler to store the result on cache instead of storning the whole result object.
            if (template == null)
                this.$http.get<string>(dialog.register.viewUrl, { cache: this.$templateCache }).then(result => this.openModal(register, controllerAs, parameters, modalInstance, result.data, staticDialog, keyboard));
            else
                this.openModal(register, controllerAs, parameters, modalInstance, Object.getTypeName(template).toLowerCase() === "string" ? template : template[1], staticDialog, keyboard);

            return modalInstance;
        }

        close(modalInstance: IModalInstance, reason?: string)
        {
            const modal = this.modals.get(modalInstance);

            if (modal == null)
                return;

            $(modal).modal("hide");
            modalInstance.deferred.reject(reason);
        }
        
        resolve<T>(modalInstance: IModalInstance, result: T)
        {
            const modal = this.modals.get(modalInstance);

            if (modal == null)
                return;

            $(modal).modal("hide");
            modalInstance.deferred.resolve(result);
        }

        private openModal(register: IControllerRegister, controllerAs: string, parameters: any, modalInstance: IModalInstance, template: string, staticDialog: boolean, keyboard: boolean)
        {
            // create a new scope for the modal dialog.
            const scope = this.$rootScope.$new(true);
            const controllerParameters = {};

            controllerParameters[AngularServices.scope] = scope;
            controllerParameters[FrameworkServices.modalInstance] = modalInstance;
            controllerParameters[FrameworkServices.modalParameters] = parameters;

            // instantiate the modal controller.
            const controller = this.$controller(register.controller, controllerParameters);

            // set the controller alias (by default will be controller).
            scope[controllerAs] = controller;

            // create the modal DOM elements.
            const id = Guid.new().value;
            const modalBody = ng.element(`<div class="modal fade" id="${id}" tabindex="-1" role="dialog" aria-labelledby="login-title"></div>`);
            modalBody.html(template);

            // compile the modal DOM for angular to resolve bindings and elements.
            var code = this.$compile(modalBody)(scope);

            // add the modal DOM to the page body.
            $("body").append(code);

            // register the modal inside the service.
            this.modals.add(modalInstance, code);

            // setup the destroy event to clean the DOM.
            scope.$on("$destroy", () => 
            {
                code.remove();
            });

            const dialogOptions = {};

            if (staticDialog)
                dialogOptions["backdrop"] = "static";

            if (keyboard)
                dialogOptions["keyboard"] = keyboard;

            // open the MaterializeCSS modal.
            code.modal(dialogOptions);

            // set the z-index of modal and backdrop
            const zIndex = this.modals.getValues().count() * 1050;

            code.css("z-index", zIndex);
            $(code[0].nextElementSibling).css("z-index", zIndex - 10);

            $(code).on("hidden.bs.modal", () =>
            {
                modalInstance.deferred.reject("cancelled");
                this.removeModal(modalInstance, $(code));
            });
        }

        private removeModal(modalInstance: IModalInstance, modal: ng.IAugmentedJQuery)
        {
            const scope = modal.scope();

            if (modalInstance.dispose != null)
                modalInstance.dispose();

            this.modals.remove(modalInstance);

            if (!Object.isNull(scope) && !Object.isNull(scope["controllerAs"]))
            {
                delete scope["controllerAs"];
                scope.$destroy();
            }

            if (!Object.isNull(modal))
                modal.remove();
        }

        static factory(
            $rootScope: ng.IRootScopeService,
            $q: ng.IQService,
            $http: ng.IHttpService,
            $templateCache: ng.ITemplateCacheService,
            $compile: ng.ICompileService,
            $controller: ng.IControllerService
        ): ModalService
        {
            return new ModalService($rootScope, $q, $http, $templateCache, $compile, $controller);
        }
    }

    export class ModalInstance implements IModalInstance
    {
        private modalService: IModalService;

        deferred: ng.IDeferred<any>;

        promise: ng.IPromise<any>;

        dispose: () => void;

        public constructor(modalService: IModalService, deferred: ng.IDeferred<any>)
        {
            this.modalService = modalService;
            this.deferred = deferred;
            this.promise = deferred.promise;
        }

        close(reason?: string)
        {
            this.modalService.close(this, reason);
        }

        resolve(result: any)
        {
            this.modalService.resolve(this, result);
        }
    }

    ////////////////////////////////////////////////////////////
    // Register service
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerService(ModalService.register);
}