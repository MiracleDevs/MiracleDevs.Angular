/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../Imports.ts" />
///<reference path="TestServices.ts"/>

describe("AlertService", () =>
{
    var injector: IInjectorService;
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
        alertService = injector.get<IAlertService>(FrameworkServices.alertService);
    }));

    describe("creating the service", () => 
    {
        it("should initialize correctly", () =>
        {
            expect(alertService).toBeDefined();
        });

        it("alert collection shouldn't be null", () =>
        {
            expect(alertService.getAlerts()).not.toBeNull();
            expect(alertService.getAlerts().getInnerArray()).not.toBeNull();
        });

        it("alert collection should be empty", () =>
        {
            expect(alertService.getAlerts().count()).toBe(0);
        });
    });

    describe("working with messages", () =>
    {
        it("should add a message", () =>
        {
            alertService.addMessage("testing message");
            expect(alertService.getAlerts().count()).toBe(1);
            expect(logger.messageWritten).toBe(1);
        });

        it("should remove a message", () =>
        {
            alertService.addMessage("testing message");
            alertService.remove(0);
            expect(alertService.getAlerts().count()).toBe(0);
        });

        it("should get a message", () =>
        {
            alertService.addMessage("testing message");
            var alert = alertService.get(0);
            alertService.remove(0);
            expect(alert.type).toBe(AlertType.Message);
            expect(alert.message).toBe("testing message");
        });
    });

    describe("working with warnings", () =>
    {
        it("should add a warning", () =>
        {
            alertService.addWarning("testing warning");
            expect(alertService.getAlerts().count()).toBe(1);
            expect(logger.warningWritten).toBe(1);
        });

        it("should remove a warning", () =>
        {
            alertService.addWarning("testing Warning");
            alertService.remove(0);
            expect(alertService.getAlerts().count()).toBe(0);
        });

        it("should get a warning", () =>
        {
            alertService.addWarning("testing warning");
            var alert = alertService.get(0);
            alertService.remove(0);
            expect(alert.type).toBe(AlertType.Warning);
            expect(alert.message).toBe("testing warning");
        });
    });
    
    describe("working with errors", () =>
    {
        it("should add an error", () =>
        {
            alertService.addError("testing error");
            expect(alertService.getAlerts().count()).toBe(1);
            expect(logger.errorWritten).toBe(1);
        });

        it("should remove an error", () =>
        {
            alertService.addError("testing error");
            alertService.remove(0);
            expect(alertService.getAlerts().count()).toBe(0);
        });

        it("should get an error", () =>
        {
            alertService.addError("testing error");
            var alert = alertService.get(0);
            alertService.remove(0);
            expect(alert.type).toBe(AlertType.Error);
            expect(alert.message).toBe("testing error");
        });
    });
});