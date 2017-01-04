/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../Imports.ts"/>

//import FrameworkModule = MiracleDevs.Angular.FrameworkModule;

describe("String", () =>
{
    var formatNullError = "Format string can not be null.";

    describe("is string", () =>
    {
        it("should be true if string literal", () => expect(String.isString("hello world")).not.toBeNull());

        it("should be false if number", () => expect(String.isString(45)).not.toBeNull());

        it("should be false if number array", () => expect(String.isString([])).not.toBeNull());

        it("should be false if number boolean", () => expect(String.isString(true)).not.toBeNull());

        it("should be false if number date", () => expect(String.isString(new Date())).not.toBeNull());

    });

    describe("is null or empty", () =>
    {
        it("should be true if empty", () => expect(String.isNullOrEmpty("")));

        it("should be true if null", () => expect(String.isNullOrEmpty(null)));

        it("should be true if undefined", () => expect(String.isNullOrEmpty(undefined)));

        it("should be false if string isn't null nor empty", () => expect(String.isNullOrEmpty("hello world")));
    });

    describe("is null or white space", () =>
    {
        it("should be true if white spaces", () => expect(String.isNullOrEmpty("    ")));

        it("should be true if empty", () => expect(String.isNullOrEmpty("")));

        it("should be true if null", () => expect(String.isNullOrEmpty(null)));

        it("should be true if undefined", () => expect(String.isNullOrEmpty(undefined)));

        it("should be false if string isn't null nor empty", () => expect(String.isNullOrEmpty("hello world")));
    });

    describe("format string", () =>
    {
        it("should format strings", () => expect(String.format("{0} {1}", "hello", "world")).toBe("hello world"));

        it("should format numbers", () => expect(String.format("Number: {0}", 10.3)).toBe("Number: 10.3"));

        it("should format booleans", () => expect(String.format("Boolean: {0}", true)).toBe("Boolean: true"));

        it("should format arrays", () => expect(String.format("Array: {0}", [1, 2, 3])).toBe("Array: 1,2,3"));

        it("should format nulls", () => expect(String.format("Null: {0}", null)).toBe("Null: null"));

        it("should format undefined", () => expect(String.format("Null: {0}", undefined)).toBe("Null: undefined"));

        it("should fail without format string", () => expect(() => String.format(null, "hello")).toThrow(formatNullError));
    });
    
    describe("format array", () =>
    {
        it("should format strings", () => expect(String.formatArray("{0} {1}", ["hello", "world"])).toBe("hello world"));

        it("should format numbers", () => expect(String.formatArray("Number: {0}", [10.3])).toBe("Number: 10.3"));

        it("should format booleans", () => expect(String.formatArray("Boolean: {0}", [true])).toBe("Boolean: true"));

        it("should format arrays", () => expect(String.formatArray("Array: {0}", [[1, 2, 3]])).toBe("Array: 1,2,3"));

        it("should format nulls", () => expect(String.formatArray("Null: {0}", [null])).toBe("Null: null"));

        it("should format undefined", () => expect(String.formatArray("Null: {0}", [undefined])).toBe("Null: undefined"));

        it("should fail without format string", () => expect(() => String.formatArray(null, ["hello"])).toThrow(formatNullError));
    });
});