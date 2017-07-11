///<reference path="IAsyncResourceService.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="../core/Dictionary.ts"/>

module MiracleDevs.Angular.Services
{
    import IServiceRegister = Interfaces.IServiceRegister;
    import ISCEService = ng.ISCEService;
    import IQService = ng.IQService;
    import IDocumentService = ng.IDocumentService;
    import IPromise = ng.IPromise;
    import IDeferred = ng.IDeferred;
    import Dictionary = Core.Dictionary;
    
    export class AsyncResourceService extends ServiceBase implements IAsyncResourceService
    {
        static register: IServiceRegister =
        {
            name: FrameworkServices.asyncResourceService,
            factory: AsyncResourceService.factory,
            dependencies: [AngularServices.sce, AngularServices.q, AngularServices.document]
        };

        private readonly sce: ISCEService;

        private readonly q: IQService;

        private readonly document: IDocumentService;

        private readonly deferredRequests: Dictionary<string, IDeferred<void>>;

        constructor(sce: ISCEService, q: IQService, document: IDocumentService)
        {
            super();
            this.sce = sce;
            this.q = q;
            this.document = document;
            this.deferredRequests = new Dictionary<string, IDeferred<void>>();
        }

        loadScript(url: string): IPromise<void>
        {
            return this.loadResource("script", url);
        }

        loadImage(url: string): IPromise<void>
        {
            return this.loadResource("img", url);
        }

        loadVieo(url: string): IPromise<void>
        {
            return this.loadResource("video", url);
        }

        private loadResource(type: string, url: string): IPromise<void>
        {
            if (this.deferredRequests.containsKey(url))
                return this.deferredRequests.get(url).promise;

            const defer = this.q.defer<void>();
            this.deferredRequests.add(url, defer);

            this.sce.trustAsResourceUrl(url);
            const element = angular.element(`<${type}></${type}>`);
            this.document.find("body").append(element);
   
            element.on("load", () => defer.resolve());
            element.attr("id", "async script");
            element[0]["src"] = url;

            return defer.promise;
        }

        static factory(sce: ISCEService, q: IQService, document: IDocumentService): IAsyncResourceService
        {
            return new AsyncResourceService(sce, q, document);
        }
    }

    ////////////////////////////////////////////////////////////
    // Register service
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerService(AsyncResourceService.register);
}