/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />

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

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            var element = $(instanceElement);

            instanceElement[0].addEventListener("dragenter", () => element.addClass("file-drag-enter"), false);
            instanceElement[0].addEventListener("dragexit", () => element.removeClass("file-drag-enter"), false);
            instanceElement[0].addEventListener("dragend", () => element.removeClass("file-drag-enter"), false);
            instanceElement[0].addEventListener("dragleave", () => element.removeClass("file-drag-enter"), false);

            instanceElement[0].addEventListener("dragover", e =>
            {
                element.addClass("file-drag-enter");
                e.dataTransfer.dropEffect = "copy";

                e.stopPropagation();
                e.preventDefault();

            }, false);

            instanceElement[0].addEventListener("drop", e =>
            {
                scope.$eval(instanceAttributes["fileSelected"], { files: e.dataTransfer.files });
                element.removeClass("file-drag-enter");

                e.stopPropagation();
                e.preventDefault();

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