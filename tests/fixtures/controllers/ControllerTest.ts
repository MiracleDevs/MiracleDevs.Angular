/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../services/TestServices.ts" />

describe("TestController", () =>
{
    var rootScopeService: IRootScopeService;
    var controllerService: IControllerService;
    var injector: IInjectorService;
    var testService: TestPromiseService;
    var alertService: IAlertService;
    var logger = new TestLoggingService();
    
    beforeEach(() =>
    {
        // create a new framework module with all the configuration.
        angular.mock.module(FrameworkModule.instance.getModuleName());

        // inject a dummy logging service to prevent undesired logging.
        angular.mock.module($provide =>
        {
            $provide.value(FrameworkServices.loggingService, logger);
        });
    });
    
    // prepare base services and classes.
    beforeEach(inject(($injector: IInjectorService) =>
    {
        injector = $injector;
        rootScopeService = injector.get<IRootScopeService>(AngularServices.rootScope);
        controllerService = injector.get<IControllerService>(AngularServices.controller);
        alertService = injector.get<IAlertService>(FrameworkServices.alertService);
        testService = injector.get<TestPromiseService>(TestPromiseService.register.name);
    }));

    function getController(): TestController
    {
        return controllerService(TestController, { scope: rootScopeService.$new(false, rootScopeService), injector: injector, testService: testService });
    }

    describe("controller construction", () =>
    {
        it("shuld instantiate test controller", () =>
        {
            var controller = getController();
            expect(controller).not.toBeNull();
            expect(controller.numberResult).toBe(0);
            expect(controller.booleanResult).toBe(false);
            expect(controller.stringResult).toBe(String.empty);
            expect(controller.dateResult).toBe(null);
            expect(controller.objectResult).toBe(null);
            expect(controller.arrayResult).toBe(null);
            expect(controller.rejectionReason).toBe(String.empty);
            expect(controller.loading).toBe(false);
        });
    });
    
    describe("base methods", () =>
    {
        it("should get services", () => expect(Object.getTypeName(getController().retrieveService<ITestPromiseService>(TestPromiseService.register.name))).toBe(TestPromiseService.getFunctionName()));
    });

    describe("promise methods", () =>
    {
        it("should respond number promises", () =>
        {
            var controller = getController();
            
            controller.testNumbers();
            rootScopeService.$apply();

            expect(controller.numberResult).toBe(testService.numberResult);

        });

        it("should respond boolean promises", () =>
        {
            var controller = getController();

            controller.testBooleans();
            rootScopeService.$apply();

            expect(controller.booleanResult).toBe(testService.booleanResult);
        });

        it("should respond string promises", () =>
        {
            var controller = getController();

            controller.testStrings();
            rootScopeService.$apply();

            expect(controller.stringResult).toBe(testService.stringResult);
        });

        it("should respond date promises", () =>
        {
            var controller = getController();

            controller.testDates();
            rootScopeService.$apply();

            expect(controller.dateResult).toBe(testService.dateResult);
        });

        it("should respond object promises", () =>
        {
            var controller = getController();

            controller.testObjects();
            rootScopeService.$apply();

            expect(Object.isEqualTo(controller.objectResult, testService.objectResult)).toBe(true);
        });

        it("should respond array promises", () =>
        {
            var controller = getController();

            controller.testArrays();
            rootScopeService.$apply();

            expect(Object.isEqualTo(controller.arrayResult, testService.arrayResult)).toBe(true);
        });

        it("should reject promises", () =>
        {
            var controller = getController();

            controller.testRejection();
            rootScopeService.$apply();

            expect(controller.rejectionReason).toBe(testService.rejectionReason);
        });
    });
});