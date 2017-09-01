/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../core/Object.ts" />
///<reference path="../../Typings/index.d.ts" />

module MiracleDevs.Angular.Services {
    import IPromise = ng.IPromise;

    export class ServiceBase {

        protected call<T>(
            call: () => IPromise<T>,
            success?: (result: T) => void,
            loading?: (loading: boolean) => void,
            fail?: (reason: any) => void) {
            if (!Object.isNull(loading))
                loading(true);

            call()
                .then(result => {
                    if (!Object.isNull(loading))
                        loading(false);

                    if (!Object.isNull(success)) {
                        success(result);
                    }
                })
                .catch(error => {
                    if (!Object.isNull(loading))
                        loading(false);

                    if (!Object.isNull(fail))
                        fail(error);
                });
        }
    }
} 