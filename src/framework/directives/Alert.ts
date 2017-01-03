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
    import ITimeoutService = angular.ITimeoutService;
    import AngularServices = Services.AngularServices;

    export class Alert extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "alert",
            factory: Alert.factory,
            dependencies: [AngularServices.timeout]
        };

        restrict = "A";

        scope = {
            alertType: "@",
            timeout: "@",
            close: "&"
        };

        private timeout: ITimeoutService;

        constructor(timeout: ITimeoutService)
        {
            super();
            this.timeout = timeout;
        }

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);
            const alertType = scope["alertType"];
            const timeout = scope["timeout"];

            control.addClass("alert");

            if (!Object.isNull(alertType))
                control.addClass(alertType);

            if (!Object.isNull(timeout))
                this.timeout(() => scope["close"](), timeout);
            
            scope.$on("$destroy", () => control.remove());
        }

        static factory(timeout: ITimeoutService): Alert
        {
            return new Alert(timeout);
        }
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(Alert.register);
}