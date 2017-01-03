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
    }
}