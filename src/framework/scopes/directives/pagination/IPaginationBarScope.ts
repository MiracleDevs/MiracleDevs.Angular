/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../../../../typings/angularjs/angular.d.ts" />

module MiracleDevs.Angular.Scopes.Directives.PaginationBar
{
    import IScope = angular.IScope;
 
    export interface IPaginationBarScope extends IScope
    {
        cssClass: string;

        firstText: string;

        previousText: string;

        nextText: string;

        lastText: string;

        pages: number;

        currentPage: number;

        totalLinks: number;

        itemClicked: Function;

        ///////////////////////////////////
        // Internal element
        ///////////////////////////////////
        links: PaginationBarItem[];       
    }

    export class PaginationBarItem
    {
        constructor(public name: string, public tag: any, public enabled: boolean = true, public selected: boolean = false)
        {

        }
    }
}