///<reference path="../Imports.ts" />

class TestLoggingService extends ServiceBase implements ILoggingService
{
    messageWritten: number;

    warningWritten: number;

    errorWritten: number;

    constructor()
    {
        super();
        this.messageWritten = 0;
        this.warningWritten = 0;
        this.errorWritten = 0;
    }

    writeMessage(message: string): void
    {
        this.messageWritten++;
    }

    writeWarning(message: string): void
    {
        this.warningWritten++;
    }

    writeError(message: string): void
    {
        this.errorWritten++;
    }
}

class TestLoadingService extends ServiceBase implements ILoadingService
{
    loadingVisible: boolean;

    show(): void
    {
        this.loadingVisible = true;
    }

    hide(): void
    {
        this.loadingVisible = false;
    }
}

interface ITestPromiseService
{
    numberPromise(): IPromise<number>;

    booleanPromise(): IPromise<boolean>;

    stringPromise(): IPromise<string>;

    datePromise(): IPromise<Date>;

    objectPromise(): IPromise<Object>;

    arrayPromise(): IPromise<number[]>;

    rejectPromise(): IPromise<number>;
}

class TestPromiseService extends ServiceBase implements ITestPromiseService
{
    static register: IServiceRegister = {
        name: "TestPromiseService",
        factory: TestPromiseService.factory,
        dependencies: [AngularServices.q, AngularServices.timeout]
    }

    private readonly q: IQService;

    private readonly timeout: ITimeoutService;

    private readonly delay: number;

    readonly numberResult: number;

    readonly booleanResult: boolean;

    readonly stringResult: string;

    readonly dateResult: Date;

    readonly objectResult: Object;

    readonly arrayResult: Array<any>;

    readonly rejectionReason: string;

    constructor(q: angular.IQService, timeout: ITimeoutService)
    {
        super();
        this.q = q;
        this.timeout = timeout;
        this.delay = 500;

        this.numberResult = 1;
        this.booleanResult = true;
        this.stringResult = "hello world";
        this.dateResult = new Date(12, 12, 12);
        this.objectResult = { name: "custom object" };
        this.arrayResult = [1, 2, 3, 4];
        this.rejectionReason = "Testing promise rejection";
    }

    numberPromise(): angular.IPromise<number>
    {
        return this.q.resolve(this.numberResult);
    }

    booleanPromise(): angular.IPromise<boolean>
    {
        return this.q.resolve(this.booleanResult);
    }

    stringPromise(): angular.IPromise<string>
    {
        return this.q.resolve(this.stringResult);
    }

    datePromise(): angular.IPromise<Date>
    {
        return this.q.resolve(this.dateResult);
    }

    objectPromise(): angular.IPromise<Object>
    {
        return this.q.resolve(this.objectResult);
    }

    arrayPromise(): angular.IPromise<number[]>
    {
        return this.q.resolve(this.arrayResult);
    }

    rejectPromise(): angular.IPromise<number>
    {
        return this.q.reject(this.rejectionReason);
    }

    static factory(q: IQService, timeout: ITimeoutService): ITestPromiseService
    {
        return new TestPromiseService(q, timeout);
    }
}

FrameworkModule.instance.registerService(TestPromiseService.register);

