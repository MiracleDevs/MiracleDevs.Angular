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
    import AngularServices = Services.AngularServices;
    import IRootScope = angular.IRootScopeService;

    export class ScrollToBottom extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "scrollToBottom",
            factory: ScrollToBottom.factory,
            dependencies: [AngularServices.rootScope]
        };

        restrict = "A";

        private rootScope: IRootScope;

        constructor(rootScope: IRootScope)
        {
            super();
            this.rootScope = rootScope;
        }

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);
            const options = {} as IScrollToBottomParameters;

            this.tryGetBoolean(options, instanceAttributes, "onContentChange");
            this.tryGetBoolean(options, instanceAttributes, "onClick");

            if (options.onContentChange)
            {
                scope.$watch(() => instanceElement[0].innerHTML, () => 
                {
                    control.scrollTop(control[0].scrollHeight);
                });
            }

            if (options.onClick)
            {
                control.on("click", () => 
                {
                    control.scrollTop(0);
                });
            }

            scope.$on("$destroy", () => control.remove());
        }

        static factory(rootScope: IRootScope): ScrollToBottom
        {
            return new ScrollToBottom(rootScope);
        }
    }

    export interface IScrollToBottomParameters
    {
        onClick: boolean;

        onContentChange: boolean;
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(ScrollToBottom.register);
}