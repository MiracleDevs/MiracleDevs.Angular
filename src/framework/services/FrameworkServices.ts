/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

module MiracleDevs.Angular.Services
{
    export class FrameworkServices
    {
        static get alertService(): string { return "alertService"; }
       
        static get modalService(): string { return "modalService"; }

        static get fileManagementService(): string { return "fileManagementService"; }

        static get loggingService(): string { return "loggingService"; }

        static get geolocationService(): string { return "geolocationService"; }

        static get urlService(): string { return "urlService"; }

        static get dateService(): string { return "dateService"; }    

        static get keyProcessorService(): string { return "keyProcessorService"; }

        static get messageBus(): string { return "$messageBus"; }

        static get modalInstance(): string { return "$modalInstance"; }

        static get modalParameters(): string { return "$modalParameters"; }

        static get asyncResourceService(): string { return "$asyncResource"; }
    }
}