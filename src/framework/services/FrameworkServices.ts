/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

module MiracleDevs.Angular.Services
{
    export class FrameworkServices
    {
        static get alertService(): string { return "AlertService"; }

        static get loadingService(): string { return "LoadingService"; }

        static get modalService(): string { return "ModalService"; }

        static get fileManagementService(): string { return "FileManagementService"; }

        static get loggingService(): string { return "LoggingService"; }

        static get geolocationService(): string { return "GeolocationService"; }

        static get urlService(): string { return "urlService"; }

        static get dateService(): string { return "dateService"; }

        static get messageBus(): string { return "MessageBus"; }

        static get keyProcessorService(): string { return "KeyProcessorService"; }
    }
}