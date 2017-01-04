/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="Imports.ts"/>

//import FrameworkModule = MiracleDevs.Angular.FrameworkModule;

describe("Framework Module", () =>
{
    it("Framework shoulnd't be null", () =>
    {
        expect(angular.mock.module("miracledevs-framework")).not.toBeNull();
    });

    it("Singleton shouldn't be null", () =>
    {
        expect(FrameworkModule.instance).not.toBeNull();
    });

    it("FrameworkModule should have a name", () =>
    {
        expect(FrameworkModule.instance.getModuleName()).not.toBeNull();
    });
});