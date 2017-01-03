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
    import ITimeoutService = angular.ITimeoutService;
    import AngularServices = Services.AngularServices;

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
                   '<button class="{{cssClass}}">{{caption}}</button>';

        private timeout: ITimeoutService;

        constructor(timeout: ITimeoutService)
        {
            super();
            this.timeout = timeout;
        }

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
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