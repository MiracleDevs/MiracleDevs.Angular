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

    constructor(q: ng.IQService, timeout: ITimeoutService)
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

    numberPromise(): ng.IPromise<number>
    {
        return this.q.resolve(this.numberResult);
    }

    booleanPromise(): ng.IPromise<boolean>
    {
        return this.q.resolve(this.booleanResult);
    }

    stringPromise(): ng.IPromise<string>
    {
        return this.q.resolve(this.stringResult);
    }

    datePromise(): ng.IPromise<Date>
    {
        return this.q.resolve(this.dateResult);
    }

    objectPromise(): ng.IPromise<Object>
    {
        return this.q.resolve(this.objectResult);
    }

    arrayPromise(): ng.IPromise<number[]>
    {
        return this.q.resolve(this.arrayResult);
    }

    rejectPromise(): ng.IPromise<number>
    {
        return this.q.reject(this.rejectionReason);
    }

    static factory(q: IQService, timeout: ITimeoutService): ITestPromiseService
    {
        return new TestPromiseService(q, timeout);
    }
}

FrameworkModule.instance.registerService(TestPromiseService.register);

