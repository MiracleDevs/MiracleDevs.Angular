/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../Imports.ts" />

describe("AlertService", () =>
{
    var injector: IInjectorService;
    var alertService: IAlertService;
    
    beforeEach(() =>
    {
        // create a new framework module with all the configuration.
        angular.mock.module(FrameworkModule.instance.getModuleName());

        // inject a dummy logging service to prevent undesired logging.
        angular.mock.module($provide =>
        {
            $provide.value(FrameworkServices.loggingService, new DummyLoggingService());
        });
    });

    // prepare base services and classes.
    beforeEach(inject(($injector: IInjectorService) =>
    {
        injector = $injector;
        alertService = injector.get<IAlertService>(FrameworkServices.alertService);
    }));


    describe("Instantiation", () => 
    {
        it("should initialize correctly", () =>
        {
            expect(alertService).toBeDefined();
        });
        
        it("alert collection shouldn't be null", () =>
        {
            expect(alertService.getAlerts()).not.toBeNull();
            expect(alertService.getAlerts().values()).not.toBeNull();
        });
        
        it("alert collection should be empty", () =>
        {
            expect(alertService.getAlerts().count()).toBe(0);
        });      
    });
    
    describe("Messages", () =>
    {
        it("should add a Message", () =>
        {
            alertService.addMessage("testing Message");
            expect(alertService.getAlerts().count()).toBe(1);
        });

        it("should remove a Message", () =>
        {
            alertService.addMessage("testing Message");
            alertService.remove(0);
            expect(alertService.getAlerts().count()).toBe(0);
        });

        it("should get a Message", () =>
        {
            alertService.addMessage("testing Message");
            var alert = alertService.get(0);
            alertService.remove(0);
            expect(alert.type).toBe(AlertType.Message);
            expect(alert.message).toBe("testing Message");
        });
    });

    describe("Warnings", () =>
    {
        it("should add a Warning", () =>
        {
            alertService.addWarning("testing Warning");
            expect(alertService.getAlerts().count()).toBe(1);
        });

        it("should remove a Warning", () =>
        {
            alertService.addWarning("testing Warning");
            alertService.remove(0);
            expect(alertService.getAlerts().count()).toBe(0);
        });

        it("should get a Warning", () =>
        {
            alertService.addWarning("testing Warning");
            var alert = alertService.get(0);
            alertService.remove(0);
            expect(alert.type).toBe(AlertType.Warning);
            expect(alert.message).toBe("testing Warning");
        });
    });

    describe("Errors", () =>
    {
        it("should add a Error", () =>
        {
            alertService.addError("testing Error");
            expect(alertService.getAlerts().count()).toBe(1);
        });

        it("should remove a Error", () =>
        {
            alertService.addError("testing Error");
            alertService.remove(0);
            expect(alertService.getAlerts().count()).toBe(0);
        });

        it("should get a Error", () =>
        {
            alertService.addError("testing Error");
            var alert = alertService.get(0);
            alertService.remove(0);
            expect(alert.type).toBe(AlertType.Error);
            expect(alert.message).toBe("testing Error");
        });
    });
});