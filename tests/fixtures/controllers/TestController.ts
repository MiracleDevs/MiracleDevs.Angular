class TestController extends ControllerBase
{
    readonly service: ITestPromiseService;

    numberResult: number;

    booleanResult: boolean;

    stringResult: string;

    dateResult: Date;

    objectResult: Object;

    arrayResult: Array<any>;

    rejectionReason: string;

    loading: boolean;

    errorShown: number;

    warningShown: number;

    messagesShown: number;

    constructor(scope: ng.IScope, injector: ng.auto.IInjectorService, testService: ITestPromiseService)
    {
        super(scope, injector);

        this.service = testService;

        this.numberResult = 0;
        this.booleanResult = false;
        this.stringResult = String.empty;
        this.dateResult = null;
        this.objectResult = null;
        this.arrayResult = null;
        this.rejectionReason = String.empty;
        this.loading = false;
    }

    retrieveService<T>(name: string): T
    {
        return this.getService<T>(name);
    }

    testNumbers(): void
    {
        this.call(() => this.service.numberPromise(), x => this.numberResult = x);
    }
    
    testBooleans(): void
    {
        this.call(() => this.service.booleanPromise(), x => this.booleanResult = x);
    }

    testStrings(): void
    {
        this.call(() => this.service.stringPromise(), x => this.stringResult = x);
    }

    testDates(): void
    {
        this.call(() => this.service.datePromise(), x => this.dateResult = x);
    }

    testObjects(): void
    {
        this.call(() => this.service.objectPromise(), x => this.objectResult = x);
    }

    testArrays(): void
    {
        this.call(() => this.service.arrayPromise(), x => this.arrayResult = x);
    }

    testRejection(): void
    {
        this.numberResult = 0;
        this.call(() => this.service.rejectPromise(), x => this.numberResult = x, null, x => this.rejectionReason = x);
    }

    testLoading(): void
    {
        this.call(() => this.service.numberPromise(), x => this.numberResult = x, x => this.isLoading(x));
    }

    private isLoading(loading: boolean): void
    {
        this.loading = loading;
    }
}
