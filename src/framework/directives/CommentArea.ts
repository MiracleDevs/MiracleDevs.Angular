///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
///<reference path="../interfaces/IDirectiveRegister.ts" />
///<reference path="../core/String.ts" />

module MiracleDevs.Angular.Directives
{
    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    import IAttributes = angular.IAttributes;
    import ITranscludeFunction = angular.ITranscludeFunction;
    import IDirectiveRegister = Interfaces.IDirectiveRegister;

    export class CommentArea extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "commentArea",
            factory: CommentArea.factory
        };

        restrict = "A";

        scope = {
            ngModel: "="
        };

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            var element = $(instanceElement);
            var options = {} as ICommentAreaParameters;

            this.tryGetNumber(options, instanceAttributes, "defaultHeight");
            this.tryGetNumber(options, instanceAttributes, "maxSize");
            this.tryGet(options, instanceAttributes, "maxSizeField");
            this.tryGet(options, instanceAttributes, "maxSizeText");
            this.tryGetBoolean(options, instanceAttributes, "resize");
            this.tryGetBoolean(options, instanceAttributes, "showAlways");
            this.tryGetBoolean(options, instanceAttributes, "restrictEntry");
            this.tryGet(options, instanceAttributes, "negativeClass");

            if (options.restrictEntry)
            {
                element.on("keydown", event => this.restrictEntry(event, options, element, false));
                element.on("keypress", event => this.restrictEntry(event, options, element, true));
                element.on("keyup", event => this.restrictEntry(event, options, element, false));
                scope.$watch(() => scope["ngModel"], () => this.restrictEntry(null, options, element, false));
            }
            else
            {
                element.on("keypress", () => this.showCharacterLeft(options, element, true));               
                scope.$watch(() => scope["ngModel"], () => this.showCharacterLeft(options, element, false));
            }

            scope.$on("$destroy", () => element.remove());
        }

        private restrictEntry(event: any, options: ICommentAreaParameters, element: JQuery, cancel: boolean): void
        {
            if (!Object.isNull(options.maxSize))
            {
                const value = element.val() as string;
                const length = value.length;
                let available = options.maxSize - length;

                if (available < 0)
                    available = -1;

                if (available === -1)
                {
                    if (cancel)
                    {
                        event.stopPropagation();
                        event.preventDefault();
                    }

                    element.val(value.substr(0, options.maxSize));
                    available = 0;
                }

                if (!Object.isNull(options.maxSizeText))
                {
                    $(options.maxSizeField).text((available === options.maxSize && !options.showAlways) ? String.empty : String.format(options.maxSizeText, available));
                }

                if (!Object.isNull(options.resize) && options.resize)
                {
                    this.checkSize(options, element);
                }
            }
        }

        private showCharacterLeft(options: ICommentAreaParameters, element: JQuery, cancel: boolean): void
        {
            if (!Object.isNull(options.maxSize))
            {
                const value = element.val() as string;
                const length = value.length;
                const available = options.maxSize - length;             
                     
                if (!Object.isNull(options.maxSizeText))
                {
                    const field = $(options.maxSizeField);

                    if (!Object.isNull(options.negativeClass))
                    {
                        if (available < 0)
                            field.addClass(options.negativeClass);
                        else
                            field.removeClass(options.negativeClass);
                    }

                    $(options.maxSizeField).text((available === options.maxSize && !options.showAlways) ? String.empty : String.format(options.maxSizeText, available));
                }

                if (!Object.isNull(options.resize) && options.resize)
                {
                    this.checkSize(options, element);
                }
            }
        }

        private checkSize(options: ICommentAreaParameters, element: JQuery): void
        {
            const control = element[0];
            const defaultHeight = options.defaultHeight || 0;
            control.style.height = "1px";

            if (control.scrollHeight > control.clientHeight)
            {
                if (control.scrollHeight > defaultHeight)
                    control.style.height = control.scrollHeight + "px";
                else
                    control.style.height = defaultHeight + "px";                
            }
            else if (!Object.isNull(options.defaultHeight))
            {
                control.style.height = defaultHeight + "px";
            }
        }

        static factory(): CommentArea
        {
            return new CommentArea();
        }
    }

    export interface ICommentAreaParameters
    {
        defaultHeight?: number;

        maxSize?: number;

        showAlways?: boolean;

        maxSizeField?: string;

        maxSizeText?: string;

        resize?: boolean;

        restrictEntry?: boolean;

        negativeClass?: string;
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(CommentArea.register);
}