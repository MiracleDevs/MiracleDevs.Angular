/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
module MiracleDevs.Angular.Directives
{
    import IScope = ng.IScope;
    import IAugmentedJQuery = ng.IAugmentedJQuery;
    import IAttributes = ng.IAttributes;
    import ITranscludeFunction = ng.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import ITimeoutService = ng.ITimeoutService;
    import AngularServices = Services.AngularServices;
    import IController = ng.IController;

    export class FileButton extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "fileButton",
            factory: FileButton.factory,
            dependencies: [ AngularServices.timeout ]
        };

        restrict = "E";

        scope = {
            title: "@",
            ariaLabel: "@",
            accept: "@",
            caption: "@",
            cssClass: "@",
            fileSelected: "&"
        }

        template = '<input type="file" style="display: none" title="{{title}}" accept="{{accept}}" aria-label="{{ariaLabel}}" />' +
                   '<button type="button" class="{{cssClass}}">{{caption}}</button>';

        private timeout: ITimeoutService;

        constructor(timeout: ITimeoutService)
        {
            super();
            this.timeout = timeout;
        }

        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void
        {
            var element = $(instanceElement);
            const button = element.find("button");
            var file = element.find("input");

            button.on("click", () => file.trigger("click"));
            file.on("change", e =>
            {
                this.timeout(() =>
                {
                    if (Object.isNull(e) || Object.isNull(e.target) || Object.isNull(e.target["files"]))
                        return;

                    scope["fileSelected"]({ files: e.target["files"] });
                });
            });
            scope.$on("$destroy", () => element.remove());
        }

        static factory(timeout: ITimeoutService): FileButton
        {
            return new FileButton(timeout);
        }
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(FileButton.register);
}