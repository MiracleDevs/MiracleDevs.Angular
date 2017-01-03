/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
///<reference path="../interfaces/IDirectiveRegister.ts" />

module MiracleDevs.Angular.Directives
{
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;

    export class FileDragAndDrop extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "fileDragAndDrop",
            factory: FileDragAndDrop.factory
        };

        restrict = "A";

        scope = {
            fileSelected: "&"
        }

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            var element = $(instanceElement);

            instanceElement[0].addEventListener("dragenter", () => element.css("border", "2px dashed gray"), false);
            instanceElement[0].addEventListener("dragexit", () => element.css("border", "none"), false);
            instanceElement[0].addEventListener("dragend", () => element.css("border", "none"), false);
            instanceElement[0].addEventListener("dragover", e =>
            {
                e.stopPropagation();
                e.preventDefault();
                e.dataTransfer.dropEffect = "copy";
            }, false);
            instanceElement[0].addEventListener("drop", e =>
            {
                e.stopPropagation();
                e.preventDefault();                
                scope["fileSelected"]({ files: e.dataTransfer.files });              
            }, false);
         
            scope.$on("$destroy", () => element.remove());
        }

        static factory(): FileDragAndDrop
        {
            return new FileDragAndDrop();
        }
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(FileDragAndDrop.register);
}