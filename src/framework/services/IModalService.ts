/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

/// <reference path="../../typings/index.d.ts" />
///<reference path="../core/Dictionary.ts"/>

module MiracleDevs.Angular.Services
{
    import IControllerRegister = Interfaces.IControllerRegister;
    import IDeferred = ng.IDeferred;
    import IPromise = ng.IPromise;
    import Dictionary = Core.Dictionary;

    export interface IModalService
    {
        readonly modals: Dictionary<IModalInstance, ng.IAugmentedJQuery>;

        open<T>(dialog: IModalCreationParameter, parameters?: any, staticDialog?: boolean, keyboard?: boolean): IModalInstance;
        open<T>(dialog: any, parameters?: any, staticDialog?: boolean, keyboard?: boolean): IModalInstance;

        close(modalInstance, reason?: string);
        resolve<T>(modalInstance, result: T);
    }

    export interface IModalCreationParameter
    {
        register: IControllerRegister;    
        controllerAs?: string;
    }

    export interface IModalInstance
    {
        deferred: IDeferred<any>;
        promise: IPromise<any>;
        close(reason?: string);
        resolve(result: any);
        dispose: () => void;     
    }
}