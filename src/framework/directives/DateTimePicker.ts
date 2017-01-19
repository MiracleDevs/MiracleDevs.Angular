/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../../typings/datetimepicker/datetimepicker.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />

module MiracleDevs.Angular.Directives
{
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;
    import IFilterService = angular.IFilterService;

    export class DateTimePicker extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "dateTimePicker",
            factory: DateTimePicker.factory,
            dependencies: ["$filter"]
        };

        restrict = "A";

        require = "ngModel";

        private filter: IFilterService;

        constructor(filter: IFilterService)
        {
            super();
            this.filter = filter;
        }

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            var element = $(instanceElement);
            var options = {} as IDateTimePickerParameters;

            //////////////////////////////////////////////////////////////////
            // Own properties
            //////////////////////////////////////////////////////////////////
            this.tryGet(options, instanceAttributes, "format");
            this.tryGet(options, instanceAttributes, "dayViewHeaderFormat");
            this.tryGetBoolean(options, instanceAttributes, "extraFormats");
            this.tryGetNumber(options, instanceAttributes, "stepping");
            this.tryGetDate(options, instanceAttributes, "minDate");
            this.tryGetDate(options, instanceAttributes, "maxDate");
            this.tryGetBoolean(options, instanceAttributes, "useCurrent");
            this.tryGetBoolean(options, instanceAttributes, "collapse");
            this.tryGet(options, instanceAttributes, "locale");
            this.tryGet(options, instanceAttributes, "viewMode");
            this.tryGetDate(options, instanceAttributes, "defaultDate");
            this.tryGetBoolean(options, instanceAttributes, "disabledDates");
            this.tryGetBoolean(options, instanceAttributes, "enabledDates");
            this.tryGetBoolean(options, instanceAttributes, "disabledHours");
            this.tryGetBoolean(options, instanceAttributes, "disabledTimeIntervals");
            this.tryGetBoolean(options, instanceAttributes, "useStrict");
            this.tryGetBoolean(options, instanceAttributes, "sideBySide");
            this.tryGetBoolean(options, instanceAttributes, "calendarWeeks");
            this.tryGet(options, instanceAttributes, "toolbarPlacement");
            this.tryGetBoolean(options, instanceAttributes, "showTodayButton");
            this.tryGetBoolean(options, instanceAttributes, "showClear");
            this.tryGetBoolean(options, instanceAttributes, "showClose");
            this.tryGetBoolean(options, instanceAttributes, "keepOpen");
            this.tryGetBoolean(options, instanceAttributes, "allowInputToggle");
            this.tryGetBoolean(options, instanceAttributes, "focusOnShow");

            if (!Object.isNull(instanceAttributes["maxDateToday"]))
                options.maxDate = new Date();

            element.datetimepicker(options);

            element.on("dp.change", e =>
            {
                if (Object.isNull(options.format) || options.format === "L")
                    controller.$setViewValue(!Object.isNull(e["date"])
                        ? this.filter("date")(e["date"]._d, "MM/dd/yyyy")
                        : null);

                if (!Object.isNull(options.format) && options.format === "LT")
                    controller.$setViewValue(!Object.isNull(e["date"])
                        ? this.filter("date")(e["date"]._d, "hh:mm")
                        : null);
            });

            element.on("dp.show",
                () =>
                {
                    if (!Object.isNull(options.viewMode))
                    {
                        element.data("DateTimePicker").viewMode(options.viewMode);
                    }
                });

            scope.$on("$destroy", () => element.remove());
        }

        static factory(filter: IFilterService): DateTimePicker
        {
            return new DateTimePicker(filter);
        }
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(DateTimePicker.register);
}