/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../Core/ArrayList.ts" />

module MiracleDevs.Angular.Services
{
    import ArrayList = Core.ArrayList;

    export interface IAlertService
    {
        add(alertType: AlertType, message: string): void;

        addError(message: string): void;

        addWarning(message: string): void;

        addMessage(message: string): void;

        remove(index: number | Alert): void;

        get(index: number): Alert;

        getAlerts(): ArrayList<Alert>;

    }

    export enum AlertType
    {
        Message,
        Warning,
        Error
    }

    export class Alert
    {
        private alertType: AlertType;

        private innerMessage: string;

        get type(): AlertType { return this.alertType; }

        get typeName(): string { return Alert.getTypeName(this.alertType); }

        get message(): string { return this.innerMessage; }

        constructor(alertType: AlertType, message: string)
        {
            this.alertType = alertType;
            this.innerMessage = message;
        }

        private static getTypeName(alertType: AlertType): string
        {
            switch (alertType)
            {
                case AlertType.Message:
                    return "message";

                case AlertType.Warning:
                    return "warning";

                case AlertType.Error:
                    return "error";

                default:
                    return "unknown";
            }
        }
    }
}