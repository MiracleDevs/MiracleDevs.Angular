///<reference path="../../../typings/angularjs/angular.d.ts" />
module MiracleDevs.Angular.Scopes.Directives
{
    import IScope = angular.IScope;

    export interface IKeyboardListenerScope extends IScope
    {
        disabled: boolean;

        attachTo: string;
    }
}