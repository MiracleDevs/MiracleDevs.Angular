/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../Imports.ts"/>

describe("Local Storage", () =>
{
    it("should store and retrieve booleans", () =>
    {
        expect(() => LocalStorage.set("boolean", true)).not.toThrow();
        expect(LocalStorage.get(Boolean, "boolean")).toBe(true);
        expect(LocalStorage.getBoolean("boolean")).toBe(true);
    });

    it("should store and retrieve numbers", () =>
    {
        expect(() => LocalStorage.set("number", 1.1)).not.toThrow();
        expect(LocalStorage.get(Number, "number")).toBe(1.1);
        expect(LocalStorage.getNumber("number")).toBe(1.1);
    });

    it("should store and retrieve integer", () =>
    {
        expect(() => LocalStorage.set("int", 1)).not.toThrow();
        expect(LocalStorage.getInt("int")).toBe(1);
    });

    it("should store and retrieve dates", () =>
    {
        expect(() => LocalStorage.set("date", new Date(12, 12, 12))).not.toThrow();
        expect(LocalStorage.get(Date, "date").getTime()).toBe(new Date(12, 12, 12).getTime());
        expect(LocalStorage.getDate("date").getTime()).toBe(new Date(12, 12, 12).getTime());
    });

    it("should get all content", () =>
    {
        expect(() => LocalStorage.clear()).not.toThrow();

        LocalStorage.set("element 1", "value 1");
        LocalStorage.set("element 2", "value 2");
        LocalStorage.set("element 3", "value 3");

        var allContent = LocalStorage.getAllContent();

        expect(allContent).not.toBeNull();
        expect(allContent.count()).toBe(3);
        expect(allContent.get("element 1")).toBe("value 1");
        expect(allContent.get("element 2")).toBe("value 2");
        expect(allContent.get("element 3")).toBe("value 3");
    });
});