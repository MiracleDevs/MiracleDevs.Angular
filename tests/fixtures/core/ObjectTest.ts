/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../Imports.ts"/>

describe("Object", () =>
{
    var objectNullError = "Object can not be null.";

    describe("get type name", () =>
    {
        it("should get type of number", () => expect(Object.getTypeName(3)).toBe("Number"));

        it("should get type of Number", () => expect(Object.getTypeName(new Number(3))).toBe("Number"));

        it("should get type of string", () => expect(Object.getTypeName("hello")).toBe("String"));

        it("should get type of String", () => expect(Object.getTypeName(new String("hello"))).toBe("String"));

        it("should get type of boolean", () => expect(Object.getTypeName(false)).toBe("Boolean"));

        it("should get type of Boolean", () => expect(Object.getTypeName(new Boolean(false))).toBe("Boolean"));

        it("should get type of array", () => expect(Object.getTypeName([])).toBe("Array"));

        it("should get type of date", () => expect(Object.getTypeName(new Date())).toBe("Date"));

        it("should get type of custom object", () => expect(Object.getTypeName({})).toBe("Object"));

        it("should get type of custom class", () => expect(Object.getTypeName(Guid.new())).toBe("Guid"));

        it("should get type of null", () => expect(() => Object.getTypeName(null)).toThrow(objectNullError));
    });

    describe("object is null", () =>
    {
        it("should be true if null", () => expect(Object.isNull(null)).toBe(true));

        it("should be true if undefined", () => expect(Object.isNull(undefined)).toBe(true));

        it("should be false if instance", () => expect(Object.isNull({})).toBe(false));

        it("should be false if number", () => expect(Object.isNull(0)).toBe(false));

        it("should be false if boolean", () => expect(Object.isNull(false)).toBe(false));

        it("should be false if date", () => expect(Object.isNull(new Date())).toBe(false));

        it("should be false if array", () => expect(Object.isNull([])).toBe(false));
    });

    describe("object is equal", () =>
    {
        it("should be true for two nulls", () => expect(Object.isEqualTo(null, null)).toBe(true));
        it("should be true for two undefined", () => expect(Object.isEqualTo(undefined, undefined)).toBe(true));
        it("should be true for null and undefined", () => expect(Object.isEqualTo(null, undefined)).toBe(true));
        it("should be false for null and any not null", () => expect(Object.isEqualTo(null, 1)).toBe(false));
        it("should be false for undefined and any not null", () => expect(Object.isEqualTo(undefined, 1)).toBe(false));

        it("should be true for two equal numbers", () => expect(Object.isEqualTo(1, 1)).toBe(true));
        it("should be false for two different numbers", () => expect(Object.isEqualTo(1, 2)).toBe(false));
        it("should be false for a number and a bool", () => expect(Object.isEqualTo(1, true)).toBe(false));
        it("should be false for a number and a string", () => expect(Object.isEqualTo(1, "1")).toBe(false));

        it("should be true for two equal strings", () => expect(Object.isEqualTo("hello", "hello")).toBe(true));
        it("should be false for two different strings", () => expect(Object.isEqualTo("hello", "world")).toBe(false));
        it("should be false for a string and a bool", () => expect(Object.isEqualTo("true", true)).toBe(false));

        it("should be true for two equal booleans", () => expect(Object.isEqualTo(true, true)).toBe(true));
        it("should be false for two different booleans", () => expect(Object.isEqualTo(true, false)).toBe(false));

        it("should be true for two equal dates", () => expect(Object.isEqualTo(new Date(2012, 12, 12, 12, 12, 12), new Date(2012, 12, 12, 12, 12, 12))).toBe(true));
        it("should be false for two different dates", () => expect(Object.isEqualTo(new Date(2014, 12, 12), new Date(2012, 12, 12))).toBe(false));

        it("should be true for two equal objects",
            () => expect(Object.isEqualTo(
                { number: 1, text: "hello", bool: true, date: new Date(2012, 12, 12, 12, 12, 12) },
                { number: 1, text: "hello", bool: true, date: new Date(2012, 12, 12, 12, 12, 12) })).toBe(true));

        it("should be false for two equal objects with different numbers",
            () => expect(Object.isEqualTo(
                { number: 1, text: "hello", bool: true, date: new Date(2012, 12, 12, 12, 12, 12) },
                { number: 2, text: "hello", bool: true, date: new Date(2012, 12, 12, 12, 12, 12) })).toBe(false));

        it("should be false for two equal objects with different strings",
            () => expect(Object.isEqualTo(
                { number: 1, text: "hello", bool: true, date: new Date(2012, 12, 12, 12, 12, 12) },
                { number: 1, text: "world", bool: true, date: new Date(2012, 12, 12, 12, 12, 12) })).toBe(false));

        it("should be false for two equal objects with different booleans",
            () => expect(Object.isEqualTo(
                { number: 1, text: "hello", bool: true, date: new Date(2012, 12, 12, 12, 12, 12) },
                { number: 1, text: "hello", bool: false, date: new Date(2012, 12, 12, 12, 12, 12) })).toBe(false));

        it("should be false for two equal objects with different dates",
            () => expect(Object.isEqualTo(
                { number: 1, text: "hello", bool: true, date: new Date(2012, 12, 12, 12, 12, 12) },
                { number: 1, text: "hello", bool: true, date: new Date(2014, 12, 12, 12, 12, 12) })).toBe(false));

        it("should be true for two equal arrays",
            () => expect(Object.isEqualTo(
                [1, 2, 3, 4, 5],
                [1, 2, 3, 4, 5])).toBe(true));

        it("should be false for two equal arrays with different values",
            () => expect(Object.isEqualTo(
                [1, 2, 3, 4, 5],
                [1, 2, 3, 4, 4])).toBe(false));

        it("should be false for two equal arrays with different length",
            () => expect(Object.isEqualTo(
                [1, 2, 3, 4, 5],
                [1, 2, 3, 4])).toBe(false));

        it("should be true for two equal complex objects",
            () => expect(Object.isEqualTo(
                { name: "object", childs: [{ name: "child1" }, { name: "child2" }], parent: { name: "parent" } },
                { name: "object", childs: [{ name: "child1" }, { name: "child2" }], parent: { name: "parent" } })).toBe(true));

        it("should be false for two equal complex objects whith different values",
            () => expect(Object.isEqualTo(
                { name: "object", childs: [{ name: "child1" }, { name: "child2" }], parent: { name: "parent 1" } },
                { name: "object", childs: [{ name: "child1" }, { name: "child2" }], parent: { name: "parent 2" } })).toBe(false));

        it("should be false for two equal complex objects whith different child values",
            () => expect(Object.isEqualTo(
                { name: "object", childs: [{ name: "child1" }, { name: "child2" }], parent: { name: "parent" } },
                { name: "object", childs: [{ name: "child1" }, { name: "child3" }], parent: { name: "parent" } })).toBe(false));

        it("should be false for two equal complex objects whith different childs",
            () => expect(Object.isEqualTo(
                { name: "object", childs: [{ name: "child1" }, { name: "child2" }], parent: { name: "parent" } },
                { name: "object", childs: [{ name: "child1" }, { name: "child2" }, { name: "child3" }], parent: { name: "parent" } })).toBe(false));


        it("should ignore properties",
            () => expect(Object.isEqualTo(
                { name: "object", childs: [{ name: "child1" }, { name: "child2" }], parent: { name: "parent" } },
                { name: "object", childs: [{ name: "child1" }, { name: "child2" }, { name: "child3" }], parent: { name: "parent" } }, [ "childs" ])).toBe(true));

        it("should ignore child properties",
            () => expect(Object.isEqualTo(
                { name: "object", childs: [{ name: "child1" }, { name: "child2", id: 1 }], parent: { name: "parent" } },
                { name: "object", childs: [{ name: "child1" }, { name: "child2", id: 2 }], parent: { name: "parent" } }, ["id"])).toBe(true));


    });

    describe("clone object", () =>
    {
        it("should clone numbers", () => expect(Object.clone(1)).toBe(1));
        it("should clone strings", () => expect(Object.clone("hello")).toBe("hello"));
        it("should clone booleans", () => expect(Object.clone(true)).toBe(true));
        it("should clone numbers", () =>
        {
            var date1 = new Date(12, 12, 12);
            var date2 = Object.clone(date1);

            expect(date1 == date2).toBe(false);
            expect(date1.getTime() === date2.getTime()).toBe(true);
        });

        it("should clone simple objects", () =>
        {
            var object1 = { number: 1, text: "hello", bool: true, date: new Date(12, 12, 12) };
            var object2 = Object.clone(object1);
            expect(Object.isEqualTo(object1, object2)).toBe(true);
        });

        it("should clone arrays", () =>
        {
            var object1 = [1, 2, 3, 4];
            var object2 = Object.clone(object1);
            expect(Object.isEqualTo(object1, object2)).toBe(true);
        });

        it("should clone complex objects", () =>
        {
            var object1 = { name: "object", childs: [{ name: "child1" }, { name: "child2" }], parent: { name: "parent" } };
            var object2 = Object.clone(object1);
            expect(Object.isEqualTo(object1, object2)).toBe(true);
        });
    });
});