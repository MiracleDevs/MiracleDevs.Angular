var FrameworkServices = MiracleDevs.Angular.Services.FrameworkServices;
var FrameworkModule = MiracleDevs.Angular.FrameworkModule;
///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/angularjs/angular.d.ts" />
///<reference path="../typings/angularjs/angular-mocks.d.ts" />
///<reference path="../typings/miracledevs.angular/miracledevs.angular.d.ts" />
///<reference path="imports.ts"/>
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
///<reference path="../../typings/jasmine/jasmine.d.ts" />
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../../typings/angularjs/angular-mocks.d.ts" />
///<reference path="../../typings/miracledevs.angular/miracledevs.angular.d.ts" />
///<reference path="../imports.ts" />
describe("AlertService", function () {
    var injector;
    var alertService;
    beforeEach(angular.mock.module(FrameworkModule.instance.getModuleName()));
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
        it("001 - should add an alert", function () {
            alertService.addMessage("Adding an alert");
            expect(alertService.getAlerts().count()).toBe(1);
        });
    });
});
