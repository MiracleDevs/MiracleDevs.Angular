/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../Imports.ts"/>

describe("Number", () =>
{
    describe("is number", () =>
    {
        it("should be true if number", () => expect(Number.isNumber(1)).toBe(true));

        it("should be false if NaN", () => expect(Number.isNumber(NaN)).toBe(false));

        it("should be false if Infinite", () => expect(Number.isNumber(Infinity)).toBe(false));

        it("should be false if string", () => expect(Number.isNumber("hello")).toBe(false));

        it("should be false if boolean", () => expect(Number.isNumber(true)).toBe(false));

        it("should be false if date", () => expect(Number.isNumber(new Date(12, 12, 12))).toBe(false));

        it("should be false if null", () => expect(Number.isNumber(null)).toBe(false));

        it("should be false if array", () => expect(Number.isNumber([1, 2, 3])).toBe(false));

        it("should be false if object", () => expect(Number.isNumber({ })).toBe(false));
    });
});