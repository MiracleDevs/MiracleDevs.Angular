/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../Imports.ts"/>

describe("Date", () =>
{
    var wrongDateError = "String is not recognized as a valid ISO 8601 date.";

    it("should be able to parse iso string with positive timezone", () => expect(() => Date.fromIso8601("2012-10-10T12:00:00+300")).not.toThrow());
    
    it("should be able to parse iso string with negative timezone", () => expect(() => Date.fromIso8601("2012-10-10T12:00:00-300")).not.toThrow());

    it("should be able to parse iso string without timezone", () => expect(() => Date.fromIso8601("2012-10-10T12:00:00")).not.toThrow());

    it("shouldnt parse wrong formatted strings", () => expect(() => Date.fromIso8601("hello world")).toThrow(wrongDateError));
});