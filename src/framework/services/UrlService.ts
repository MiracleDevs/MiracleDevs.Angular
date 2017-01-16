/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="../core/String.ts"/>
///<reference path="IModalService.ts"/>

module MiracleDevs.Angular.Services
{
    import IServiceRegister = Interfaces.IServiceRegister;
    import ISCEService = angular.ISCEService;

    export class UrlService extends ServiceBase implements IUrlService
    {
        static register: IServiceRegister =
        {
            name: FrameworkServices.urlService,
            factory: UrlService.factory,
            dependencies: [AngularServices.sce]
        };

        private sce: ISCEService;

        constructor(sce: ISCEService)
        {
            super();
            this.sce = sce;
        }

        getParsedUrl(url: string): string
        {        
            if (!String.isString(url))
                return url;

            if (String.isNullOrEmpty(url))
                return url;

            if (url.indexOf("http://") < 0 && url.indexOf("https://") < 0)
                url = `http://${url}`;

            return this.sce.trustAsUrl(url);
        }

        static factory(sce: ISCEService): IUrlService
        {
            return new UrlService(sce);
        }
    }

    ////////////////////////////////////////////////////////////
    // Register service
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerService(UrlService.register);
}