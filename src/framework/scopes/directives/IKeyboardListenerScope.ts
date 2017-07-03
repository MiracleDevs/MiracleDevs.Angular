///<reference path="../../../typings/index.d.ts" />
module MiracleDevs.Angular.Scopes.Directives
{
    import IScope = ng.IScope;

    export interface IKeyboardListenerScope extends IScope
    {
        disabled: boolean;

        attachTo: string;
    }
}