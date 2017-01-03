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
    import IInterpolateService = angular.IInterpolateService;
    import AngularServices = Services.AngularServices;

    export class HorizontalScroller extends DirectiveBase
    {
        static register: IDirectiveRegister = {
            name: "horizontalScroller",
            factory: HorizontalScroller.factory,
            dependencies: [AngularServices.interpolate]
        };

        restrict = "A";

        interpolate: IInterpolateService;

        constructor(interpolate: IInterpolateService)
        {
            super();
            this.interpolate = interpolate;
        }

        protected create(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
        {
            const options = {} as IHorizontalScrollerParameters;

            options.element = instanceElement;
            this.tryGet(options, instanceAttributes, "container");
            this.tryGet(options, instanceAttributes, "content");
            this.tryGet(options, instanceAttributes, "leftArrow");
            this.tryGet(options, instanceAttributes, "rightArrow");
            this.tryGetNumber(options, instanceAttributes, "speed");
            this.tryGetNumber(options, instanceAttributes, "friction");
            this.tryGetNumber(options, instanceAttributes, "fps");
            this.tryGetNumber(options, instanceAttributes, "minVelocity");

            if (String.isNullOrWhiteSpace(options.container) ||
                String.isNullOrWhiteSpace(options.content) ||
                String.isNullOrWhiteSpace(options.leftArrow) ||
                String.isNullOrWhiteSpace(options.rightArrow))
                return;

            instanceElement[0]["scrollerInstance"] = new HorizontalScrollerInstance(options);

            scope.$watch(() => instanceElement[0].innerHTML, () => instanceElement[0]["scrollerInstance"].enableScroll());

            scope.$on("$destroy", () => 
            {
                instanceElement[0]["scrollerInstance"].dispose();
            });
        }

        static factory(interpolate: IInterpolateService): HorizontalScroller
        {
            return new HorizontalScroller(interpolate);
        }
    }

    export interface IHorizontalScrollerParameters 
    {
        element: IAugmentedJQuery;

        container: string;

        content: string;

        leftArrow: string;

        rightArrow: string;

        speed: number;

        friction: number;

        minVelocity: number;

        fps: number;
    }

    export class HorizontalScrollerInstance
    {
        element: JQuery;

        container: JQuery;

        content: JQuery;

        leftArrow: JQuery;

        rightArrow: JQuery;

        position: number;

        velocity: number;

        speed: number;

        friction: number;

        pressing: boolean;

        direction: number;

        millisecondsPerFrame: number;

        minVelocity: number;

        intervalId: number;

        lastTime: number;

        constructor(options: IHorizontalScrollerParameters)
        {
            this.element = $(options.element);
            this.container = this.element.find(options.container);
            this.content = this.element.find(options.content);
            this.leftArrow = this.element.find(options.leftArrow);
            this.rightArrow = this.element.find(options.rightArrow);

            this.position = 0;
            this.velocity = 0;
            this.speed = options.speed || 140;
            this.friction = options.friction || 0.95;
            this.millisecondsPerFrame = 1000 / (options.fps || 60);
            this.minVelocity = options.minVelocity || 10;

            this.enableScroll();
            $(window).on("resize", () => this.enableScroll());

            this.leftArrow.on("mousedown touchstart", () => this.moveLeft());
            this.leftArrow.on("mouseup mouseleave touchend touchcancel", () => this.pressing = false);

            this.rightArrow.on("mousedown touchstart", () => this.moveRight());
            this.rightArrow.on("mouseup mouseleave touchend touchcancel", () => this.pressing = false);

        }

        enableScroll(): void 
        {
            const wContainer = this.container.width();
            const wContent = this.content.width();

            if (wContent < wContainer)
            {                
                this.leftArrow.css("display", "none");
                this.rightArrow.css("display", "none");
                this.position = 0;
            }
            else
            {
                this.leftArrow.css("display", "inline-block");
                this.rightArrow.css("display", "inline-block");
            }

            this.checkConstraints();
            this.applyPosition();
        }

        private applyPosition(): void 
        {
            const translate = `translate(${this.position}px, 0)`;
            const translate3D = `translate3d(${this.position}px, 0, 0)`;

            this.content.css({
                '-ms-transform': translate,
                '-moz-transform': translate3D,
                '-webkit-transform': translate3D,
                'transform': translate3D
            });
        }

        private checkConstraints(): void {
            const wContainer = this.container.width();
            const wContent = this.content.width();
            const minMovement = wContainer - wContent;

            if (wContent <= wContainer || this.position >= 0)
                this.position = 0;

            if (wContent >= wContainer && this.position <= minMovement)
                this.position = minMovement;
        }

        private killInterval(): void
        {
            if (Object.isNull(this.intervalId))
                return;

            window.clearInterval(this.intervalId);
        }

        private getMilliseconds(): number
        {
            return (new Date()).getTime();
        }

        private moveLeft(): void
        {
            this.pressing = true;
            this.direction = 1;
            this.lastTime = this.getMilliseconds();

            this.killInterval();
            this.intervalId = window.setInterval(() => this.move(), this.millisecondsPerFrame);
        }

        private moveRight(): void 
        {
            this.pressing = true;
            this.direction = -1;
            this.lastTime = this.getMilliseconds();

            this.killInterval();
            this.intervalId = window.setInterval(() => this.move(), this.millisecondsPerFrame);
        }

        private move(): void
        {
            const deltaTime = (this.getMilliseconds() - this.lastTime) / 1000;

            if (this.pressing)
            {
                this.velocity = this.speed;
            }

            this.velocity *= this.friction;
            this.position = this.position + (this.direction * this.velocity * deltaTime);

            this.checkConstraints();
            this.applyPosition();
            
            if (this.velocity <= this.minVelocity)
            {
                this.killInterval();
            }

            this.lastTime = this.getMilliseconds();
        }

        dispose(): void
        {
            this.container.remove();
            this.content.remove();
            this.leftArrow.remove();
            this.rightArrow.remove();
        }
    }

    ////////////////////////////////////////////////////////////
    // Register directive
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerDirective(HorizontalScroller.register);
}