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