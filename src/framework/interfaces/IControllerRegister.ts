module MiracleDevs.Angular.Interfaces
{
    export interface IControllerRegister
    {
        name: string;

        stateName?: string;

        stateUrl?: string;

        viewUrl?: string;

        authenticate?: boolean;

        controller: Function;

        resolve?: Object;

        dependencies?: Array<string>;
    }
}