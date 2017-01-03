/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../../typings/jasmine/jasmine.d.ts" />
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../../typings/angularjs/angular-mocks.d.ts" />
///<reference path="../../typings/miracledevs.angular/miracledevs.angular.d.ts" />
///<reference path="../imports.ts" />

describe("AlertService", () =>
{
    var injector: IInjectorService;
    var alertService: IAlertService;
    
    beforeEach(angular.mock.module(FrameworkModule.instance.getModuleName()));
    
    beforeEach(inject(($injector: IInjectorService) =>
    {
        injector = $injector;
        alertService = injector.get<IAlertService>(FrameworkServices.alertService);
    }));

    describe("Instantiation", () => 
    {
        it("001 - should initialize correctly", () =>
        {
            expect(alertService).toBeDefined();
        });

        it("002 - alert collection shouldn't be null", () =>
        {
            expect(alertService.getAlerts()).not.toBeNull();
            expect(alertService.getAlerts().values()).not.toBeNull();
        });

        it("003 - alert collection should be empty", () =>
        {
            expect(alertService.getAlerts().count()).toBe(0);
        });      
    });

    describe("Methods", () =>
    {
        it("001 - should add an alert", () =>
        {
            alertService.addMessage("Adding an alert");
            expect(alertService.getAlerts().count()).toBe(1);
        });
    });
});