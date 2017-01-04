/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
var FrameworkServices = MiracleDevs.Angular.Services.FrameworkServices;
var FrameworkModule = MiracleDevs.Angular.FrameworkModule;
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/angularjs/angular.d.ts" />
///<reference path="../typings/angularjs/angular-mocks.d.ts" />
///<reference path="../typings/miracledevs.angular/miracledevs.angular.d.ts" />
///<reference path="Imports.ts"/>
//import FrameworkModule = MiracleDevs.Angular.FrameworkModule;
describe("Framework Module", function () {
    it("001 - Framework shoulnd't be null", function () {
        expect(angular.mock.module("miracledevs-framework")).not.toBeNull();
    });
    it("002 - Singleton shouldn't be null", function () {
        expect(FrameworkModule.instance).not.toBeNull();
    });
    it("003 - FrameworkModule should have a name", function () {
        expect(FrameworkModule.instance.getModuleName()).not.toBeNull();
    });
});
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/jasmine/jasmine.d.ts" />
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../../typings/angularjs/angular-mocks.d.ts" />
///<reference path="../../typings/miracledevs.angular/miracledevs.angular.d.ts" />
///<reference path="../Imports.ts" />
describe("AlertService", function () {
    var injector;
    var alertService;
    beforeEach(function () {
        angular.mock.module(FrameworkModule.instance.getModuleName());
    });
    beforeEach(inject(function ($injector) {
        injector = $injector;
        alertService = injector.get(FrameworkServices.alertService);
    }));
    describe("Instantiation", function () {
        it("001 - should initialize correctly", function () {
            expect(alertService).toBeDefined();
        });
        it("002 - alert collection shouldn't be null", function () {
            expect(alertService.getAlerts()).not.toBeNull();
            expect(alertService.getAlerts().values()).not.toBeNull();
        });
        it("003 - alert collection should be empty", function () {
            expect(alertService.getAlerts().count()).toBe(0);
        });
    });
    describe("Methods", function () {
        it("001 - should add a message", function () {
            alertService.addMessage("testing message");
            expect(alertService.getAlerts().count()).toBe(1);
        });
        it("002 - should remove a message", function () {
            alertService.addMessage("testing message");
            alertService.remove(0);
            expect(alertService.getAlerts().count()).toBe(0);
        });
        it("003 - should add a warning", function () {
            alertService.addWarning("testing warning");
            expect(alertService.getAlerts().count()).toBe(1);
        });
        it("004 - should remove a warning", function () {
            alertService.addWarning("testing warning");
            alertService.remove(0);
            expect(alertService.getAlerts().count()).toBe(0);
        });
    });
});
