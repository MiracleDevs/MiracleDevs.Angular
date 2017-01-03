/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

module MiracleDevs.Angular.Services
{
    export interface IFileManagementService
    {
        read(file: File, completed: (file: File, content: string) => void, progress?: (p: number) => void, error?: (e: string) => void): void;

        download(fileName: string, content: string);

        open(fileName: string, content: string);

        getBlobUrl(fileName: string, content: string): string;
    }
}