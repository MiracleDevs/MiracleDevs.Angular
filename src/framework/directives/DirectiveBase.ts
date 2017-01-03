/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../../typings/angularjs/angular.d.ts" />

module MiracleDevs.Angular.Directives
{
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirective = angular.IDirective;

    export abstract class DirectiveBase implements IDirective
    {
        link: (scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction) => void;

        constructor()
        {
            this.link = (s, e, a, c, t) => this.create(s, e, a, c, t);
        }

        protected abstract create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction);

        protected getOptions<T>(instanceAttributes: IAttributes, optionsParameter: string): T
        {
            if (String.isNullOrWhiteSpace(instanceAttributes[optionsParameter]))
                return null;

            return JSON.parse(instanceAttributes[optionsParameter]) as T;
        }

        protected tryGetInt(options: any, instanceAttributes: IAttributes, optionFrom: string, optionTo?: string): number
        {
            optionTo = optionTo || optionFrom;

            if (!Object.isNull(instanceAttributes[optionFrom]))
                options[optionTo] = parseInt(instanceAttributes[optionFrom]);

            return options[optionTo];
        }

        protected tryGetNumber(options: any, instanceAttributes: IAttributes, optionFrom: string, optionTo?: string): number
        {
            optionTo = optionTo || optionFrom;

            if (!Object.isNull(instanceAttributes[optionFrom]))
                options[optionTo] = parseFloat(instanceAttributes[optionFrom]);

            return options[optionTo];
        }

        protected tryGetDate(options: any, instanceAttributes: IAttributes, optionFrom: string, optionTo?: string): number
        {
            optionTo = optionTo || optionFrom;

            if (!Object.isNull(instanceAttributes[optionFrom]))
                options[optionTo] = new Date(instanceAttributes[optionFrom]);

            return options[optionTo];
        }

        protected tryGetBoolean(options: any, instanceAttributes: IAttributes, optionFrom: string, optionTo?: string): boolean
        {
            optionTo = optionTo || optionFrom;

            if (!Object.isNull(instanceAttributes[optionFrom]))
            {
                const value = instanceAttributes[optionFrom].toLowerCase();
                options[optionTo] =  value === "yes" ||
                    value === "true" ||
                    value === "1";
            }

            return options[optionTo];
        }

        protected tryGet(options: any, instanceAttributes: IAttributes, optionFrom: string, optionTo?: string): string
        {
            optionTo = optionTo || optionFrom;

            if (!Object.isNull(instanceAttributes[optionFrom]))
                options[optionTo] = instanceAttributes[optionFrom];

            return options[optionTo];
        }

    }
} 