/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../../typings/angularjs/angular.d.ts"/>
///<reference path="../core/ArrayList.ts" />


module MiracleDevs.Angular.Services
{
    import IScope = angular.IScope;
    import ArrayList = Core.ArrayList;
    import ICompiledExpression = angular.ICompiledExpression;

    export interface IKeyProcessorService
    {
        evaluateKeyActions(keyActions: ArrayList<KeyAction>, eventType: string, scope: IScope, e: JQueryKeyEventObject): void;
       
        parseActions(text: string): ArrayList<KeyAction>;       
    }

    export class KeyAction
    {
        eventType: string;

        keyCode: number;

        shift: boolean;

        ctrl: boolean;

        alt: boolean;

        action: ICompiledExpression;
    }
}