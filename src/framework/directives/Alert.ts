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

        protected create(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller: IController, transclude: ITranscludeFunction): void
        {
            var control = $(instanceElement);
            const alertType = scope["alertType"];
            const timeout = parseInt(scope["timeout"]);

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