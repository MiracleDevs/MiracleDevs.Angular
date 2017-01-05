/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../Imports.ts"/>

describe("Function", () =>
{
    describe("get function name", () =>
    {
        it("should get function name of number", () => expect(Number.getFunctionName()).toBe("Number"));

        it("should get function name of string", () => expect(String.getFunctionName()).toBe("String"));
        
        it("should get function name of boolean", () => expect(Boolean.getFunctionName()).toBe("Boolean"));

        it("should get function name of date", () => expect(Date.getFunctionName()).toBe("Date"));

        it("should get function name of object", () => expect(Object.getFunctionName()).toBe("Object"));

        it("should get function name of FrameworkModule", () => expect(FrameworkModule.getFunctionName()).toBe("FrameworkModule"));

        it("should get function name of DialogControllerBase", () => expect(DialogControllerBase.getFunctionName()).toBe("DialogControllerBase"));
    });
});