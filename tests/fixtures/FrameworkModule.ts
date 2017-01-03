///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/angularjs/angular.d.ts" />
///<reference path="../typings/angularjs/angular-mocks.d.ts" />
///<reference path="../typings/miracledevs.angular/miracledevs.angular.d.ts" />
///<reference path="imports.ts"/>

//import FrameworkModule = MiracleDevs.Angular.FrameworkModule;

describe("Framework Module", () =>
{
    it("001 - Framework shoulnd't be null", () =>
    {
        expect(angular.mock.module("miracledevs-framework")).not.toBeNull();
    });

    it("002 - Singleton shouldn't be null", () =>
    {
        expect(FrameworkModule.instance).not.toBeNull();
    });

    it("003 - FrameworkModule should have a name", () =>
    {
        expect(FrameworkModule.instance.getModuleName()).not.toBeNull();
    });
});