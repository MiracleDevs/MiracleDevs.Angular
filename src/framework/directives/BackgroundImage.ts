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

    export class BackgroundImage extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "backgroundImage",
            factory: BackgroundImage.factory,
            dependencies: [AngularServices.interpolate]
        };

        restrict = "A";

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            var element = $(instanceElement);

            scope.$watch(() => instanceAttributes[BackgroundImage.register.name], (newValue) => 
            {
                if (String.isNullOrWhiteSpace(newValue))
                    return;

                element.css("background-image", String.format("url({0})", newValue));
            });
            
            scope.$on("$destroy", () => element.remove());
        }

        static factory(): BackgroundImage
        {
            return new BackgroundImage();
        }
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(BackgroundImage.register);
}