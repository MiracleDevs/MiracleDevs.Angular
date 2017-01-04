/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
var FrameworkServices = MiracleDevs.Angular.Services.FrameworkServices;
var FrameworkModule = MiracleDevs.Angular.FrameworkModule;
var DummyLoggingService = MiracleDevs.Angular.Services.DummyLoggingService;
var AlertType = MiracleDevs.Angular.Services.AlertType;
var ArrayList = MiracleDevs.Angular.Core.ArrayList;
var Dictionary = MiracleDevs.Angular.Core.Dictionary;
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="Imports.ts"/>
//import FrameworkModule = MiracleDevs.Angular.FrameworkModule;
describe("Framework Module", function () {
    it("Framework shoulnd't be null", function () {
        expect(angular.mock.module("miracledevs-framework")).not.toBeNull();
    });
    it("Singleton shouldn't be null", function () {
        expect(FrameworkModule.instance).not.toBeNull();
    });
    it("FrameworkModule should have a name", function () {
        expect(FrameworkModule.instance.getModuleName()).not.toBeNull();
    });
});
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Imports.ts" />
describe("ArrayList", function () {
    var firstLastError = "The source sequence is empty.";
    var indexLesserError = "index is less than 0.";
    var indexGreaterError = "index is equal to or greater than length.";
    describe("instantiation", function () {
        it("should be able to create an empty array list", function () {
            var array = null;
            expect(function () { return array = new ArrayList(); }).not.toThrow();
            expect(array).not.toBeNull();
            expect(array.count()).toBe(0);
        });
        it("should be able to create an filled array list", function () {
            var array = null;
            expect(function () { return array = new ArrayList([1, 2]); }).not.toThrow();
            expect(array).not.toBeNull();
            expect(array.count()).toBe(2);
            expect(array.get(0)).toBe(1);
            expect(array.get(1)).toBe(2);
        });
    });
    describe("operate over elements", function () {
        it("should get elements", function () {
            var array = new ArrayList([1, 2, 3]);
            expect(array.get(0)).toBe(1);
            expect(array.get(1)).toBe(2);
            expect(array.get(2)).toBe(3);
        });
        it("should fail if get out of bounds", function () {
            var array = new ArrayList([1, 2, 3]);
            expect(function () { return array.get(-1); }).toThrow(indexLesserError);
            expect(function () { return array.get(3); }).toThrow(indexGreaterError);
        });
        it("should pop last element", function () {
            var array = new ArrayList([1, 2, 3]);
            var popped = array.pop();
            expect(popped).toBe(3);
            expect(array.count()).toBe(2);
            expect(array.get(0)).toBe(1);
            expect(array.get(1)).toBe(2);
        });
        it("should retrieve index of element", function () {
            var array = new ArrayList([1, 2, 3]);
            expect(array.indexOf(1)).toBe(0);
            expect(array.indexOf(2)).toBe(1);
            expect(array.indexOf(3)).toBe(2);
        });
        it("should retrieve a negative index for an unexisting element", function () {
            var array = new ArrayList([1, 2, 3]);
            expect(array.indexOf(-1)).toBe(-1);
            expect(array.indexOf(4)).toBe(-1);
        });
        it("should add elements", function () {
            var array = new ArrayList();
            array.add(1);
            array.add(2);
            expect(array.count()).toBe(2);
            expect(array.get(0)).toBe(1);
            expect(array.get(1)).toBe(2);
        });
        it("should add range of elements", function () {
            var array = new ArrayList();
            array.addRange([1, 2]);
            expect(array.count()).toBe(2);
            expect(array.get(0)).toBe(1);
            expect(array.get(1)).toBe(2);
        });
        it("should execute code for each element", function () {
            var counter = 0;
            var array = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            array.forEach(function (element) {
                expect(element).toBe(array.get(counter));
                counter++;
            });
            expect(counter).toBe(array.count());
        });
    });
    describe("filtering elements", function () {
        it("should retrieve elements where condition is met", function () {
            var array = new ArrayList(["element 1", "element 2", "element 3", "index 4", "element 5", "element 6", "index 7"]);
            var results = array.where(function (x) { return x.indexOf("index") >= 0; });
            expect(results.count()).toBe(2);
            expect(results.get(0)).toBe("index 4");
            expect(results.get(1)).toBe("index 7");
        });
        it("shouldnt retrieve elements where condition is not met", function () {
            var array = new ArrayList(["element 1", "element 2", "element 3", "index 4", "element 5", "element 6", "index 7"]);
            var results = array.where(function (x) { return x.indexOf("some string") >= 0; });
            expect(results.count()).toBe(0);
        });
        it("shouldnt retrieve elements when array is empty", function () {
            var array = new ArrayList();
            var results = array.where(function (x) { return x.indexOf("some string") >= 0; });
            expect(results.count()).toBe(0);
        });
    });
    describe("selecting elements", function () {
        it("should select elements", function () {
            var array = new ArrayList(["1", "2"]);
            var results = array.select(function (x) { return "element " + x; });
            expect(results.count()).toBe(2);
            expect(results.get(0)).toBe("element 1");
            expect(results.get(1)).toBe("element 2");
        });
        it("shouldnt select if array is empty", function () {
            var array = new ArrayList();
            var results = array.select(function (x) { return "element " + x; });
            expect(results.count()).toBe(0);
        });
    });
    describe("first and last elements", function () {
        it("should retrieve the first element or null otherwise", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.firstOrDefault()).toBe("element 1");
            expect(array2.firstOrDefault()).toBeNull();
        });
        it("should retrieve the first element when condition is met or null otherwise", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.firstOrDefault(function (x) { return x.indexOf("element") >= 0; })).toBe("element 1");
            expect(array1.firstOrDefault(function (x) { return x === "other element"; })).toBeNull();
            expect(array2.firstOrDefault(function (x) { return x === "some string"; })).toBeNull();
        });
        it("should retrieve the last element or null otherwise", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.lastOrDefault()).toBe("element 4");
            expect(array2.lastOrDefault()).toBeNull();
        });
        it("should retrieve the last element when condition is met or null otherwise", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.lastOrDefault(function (x) { return x.indexOf("element") >= 0; })).toBe("element 4");
            expect(array1.lastOrDefault(function (x) { return x === "other element"; })).toBeNull();
            expect(array2.lastOrDefault(function (x) { return x === "some string"; })).toBeNull();
        });
        it("should retrieve the first element or fail otherwise", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.first()).toBe("element 1");
            expect(function () { return array2.first(); }).toThrow("The source sequence is empty.");
        });
        it("should retrieve the first element when condition is met or fail otherwise", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.first(function (x) { return x.indexOf("element") >= 0; })).toBe("element 1");
            expect(function () { return array1.first(function (x) { return x === "other element"; }); }).toThrow(firstLastError);
            expect(function () { return array2.first(function (x) { return x === "some string"; }); }).toThrow(firstLastError);
        });
        it("should retrieve the last element or fail otherwise", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.last()).toBe("element 4");
            expect(function () { return array2.last(); }).toThrow(firstLastError);
        });
        it("should retrieve the last element when condition is met or fail otherwise", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.last(function (x) { return x.indexOf("element") >= 0; })).toBe("element 4");
            expect(function () { return array1.last(function (x) { return x === "other element"; }); }).toThrow(firstLastError);
            expect(function () { return array2.last(function (x) { return x === "some string"; }); }).toThrow(firstLastError);
        });
    });
    describe("checking elements", function () {
        it("should check if any", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.any()).toBe(true);
            expect(array2.any()).toBe(false);
        });
        it("should check if any when condition met", function () {
            var array = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            expect(array.any(function (x) { return x === "element 1"; })).toBe(true);
            expect(array.any(function (x) { return x === "element 5"; })).toBe(false);
        });
        it("should check if contains element", function () {
            var array = new ArrayList(["element 1", "element 2", "index 3", "index 4"]);
            expect(array.contains("element 1")).toBe(true);
            expect(array.contains("other")).toBe(false);
        });
    });
    describe("counting elements", function () {
        it("should count elements", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.count()).toBe(4);
            expect(array2.count()).toBe(0);
        });
        it("should count elements when condition met", function () {
            var array = new ArrayList(["element 1", "element 2", "index 3", "index 4"]);
            expect(array.count(function (x) { return x.indexOf("element") >= 0; })).toBe(2);
            expect(array.count(function (x) { return x.indexOf("other") >= 0; })).toBe(0);
        });
        it("should sum elements", function () {
            var array1 = new ArrayList([1, 2, 3, 4]);
            var array2 = new ArrayList(["1", "2", "3", "4"]);
            var array3 = new ArrayList();
            expect(array1.sum()).toBe(10);
            expect(array2.sum()).toBe("1234");
            expect(array3.sum()).toBe(null);
        });
        it("should sum inner elements", function () {
            var array = new ArrayList([{ value: 1, name: "1" }, { value: 2, name: "2" }, { value: 3, name: "3" }, { value: 4, name: "4" }]);
            expect(array.sum(function (x) { return x.value; })).toBe(10);
            expect(array.sum(function (x) { return x.name; })).toBe("1234");
            expect(array.sum(function (x) { return x["other"]; })).toBe(null);
        });
    });
    describe("ordering elements", function () {
        it("should order elements ascending", function () {
            var array1 = new ArrayList([3, 1, 4, 2]);
            var array2 = new ArrayList(["element 3", "element 1", "element 4", "element 2"]);
            var ordered1 = array1.orderBy();
            var ordered2 = array2.orderBy();
            expect(ordered1.get(0)).toBe(1);
            expect(ordered1.get(1)).toBe(2);
            expect(ordered1.get(2)).toBe(3);
            expect(ordered1.get(3)).toBe(4);
            expect(ordered2.get(0)).toBe("element 1");
            expect(ordered2.get(1)).toBe("element 2");
            expect(ordered2.get(2)).toBe("element 3");
            expect(ordered2.get(3)).toBe("element 4");
        });
        it("should order by predicate ascending", function () {
            var array = new ArrayList([{ value: 2, name: "3" }, { value: 1, name: "4" }, { value: 3, name: "1" }, { value: 5, name: "2" }]);
            var ordered1 = array.orderBy(function (x) { return x.value; });
            var ordered2 = array.orderBy(function (x) { return x.name; });
            expect(ordered1.get(0).value).toBe(1);
            expect(ordered1.get(1).value).toBe(2);
            expect(ordered1.get(2).value).toBe(3);
            expect(ordered1.get(3).value).toBe(5);
            expect(ordered2.get(0).name).toBe("1");
            expect(ordered2.get(1).name).toBe("2");
            expect(ordered2.get(2).name).toBe("3");
            expect(ordered2.get(3).name).toBe("4");
        });
        it("should order elements descending", function () {
            var array1 = new ArrayList([3, 1, 4, 2]);
            var array2 = new ArrayList(["element 3", "element 1", "element 4", "element 2"]);
            var ordered1 = array1.orderByDesc();
            var ordered2 = array2.orderByDesc();
            expect(ordered1.get(3)).toBe(1);
            expect(ordered1.get(2)).toBe(2);
            expect(ordered1.get(1)).toBe(3);
            expect(ordered1.get(0)).toBe(4);
            expect(ordered2.get(3)).toBe("element 1");
            expect(ordered2.get(2)).toBe("element 2");
            expect(ordered2.get(1)).toBe("element 3");
            expect(ordered2.get(0)).toBe("element 4");
        });
        it("should order by predicate descending", function () {
            var array = new ArrayList([{ value: 2, name: "3" }, { value: 1, name: "4" }, { value: 3, name: "1" }, { value: 5, name: "2" }]);
            var ordered1 = array.orderByDesc(function (x) { return x.value; });
            var ordered2 = array.orderByDesc(function (x) { return x.name; });
            expect(ordered1.get(3).value).toBe(1);
            expect(ordered1.get(2).value).toBe(2);
            expect(ordered1.get(1).value).toBe(3);
            expect(ordered1.get(0).value).toBe(5);
            expect(ordered2.get(3).name).toBe("1");
            expect(ordered2.get(2).name).toBe("2");
            expect(ordered2.get(1).name).toBe("3");
            expect(ordered2.get(0).name).toBe("4");
        });
    });
    describe("removing elements", function () {
        it("should remove element", function () {
            var array = new ArrayList([1, 2, 3, 4]);
            expect(array.remove(1)).toBe(true);
            expect(array.count()).toBe(3);
            expect(array.get(0)).toBe(2);
            expect(array.get(1)).toBe(3);
            expect(array.get(2)).toBe(4);
        });
        it("should return false if tries to remove an unexisting element", function () {
            var array = new ArrayList([1, 2, 3, 4]);
            expect(array.remove(5)).toBe(false);
            expect(array.get(0)).toBe(1);
            expect(array.get(1)).toBe(2);
            expect(array.get(2)).toBe(3);
            expect(array.get(3)).toBe(4);
        });
        it("should remove element at index", function () {
            var array = new ArrayList([1, 2, 3, 4]);
            expect(function () { return array.removeAt(0); }).not.toThrow();
            expect(array.count()).toBe(3);
            expect(array.get(0)).toBe(2);
            expect(array.get(1)).toBe(3);
            expect(array.get(2)).toBe(4);
        });
        it("should fail if tries to remove an element at an unexising index", function () {
            var array = new ArrayList([1, 2, 3, 4]);
            expect(function () { return array.removeAt(5); }).toThrow(indexGreaterError);
            expect(function () { return array.removeAt(-1); }).toThrow(indexLesserError);
            expect(array.get(0)).toBe(1);
            expect(array.get(1)).toBe(2);
            expect(array.get(2)).toBe(3);
            expect(array.get(3)).toBe(4);
        });
        it("should remove all elements", function () {
            var array = new ArrayList([1, 2, 3, 4]);
            expect(array.removeAll()).toBe(4);
            expect(array.count()).toBe(0);
        });
        it("should remove all elements under certain conditions", function () {
            var array = new ArrayList([1, 2, 3, 4]);
            expect(array.removeAll(function (x) { return x > 2; })).toBe(2);
            expect(array.count()).toBe(2);
            expect(array.get(0)).toBe(1);
            expect(array.get(1)).toBe(2);
        });
        it("shouldnt remove any elements if condition is not met", function () {
            var array = new ArrayList([1, 2, 3, 4]);
            expect(array.removeAll(function (x) { return x > 4; })).toBe(0);
            expect(array.count()).toBe(4);
            expect(array.get(0)).toBe(1);
            expect(array.get(1)).toBe(2);
            expect(array.get(2)).toBe(3);
            expect(array.get(3)).toBe(4);
        });
        it("should clear all elements", function () {
            var array = new ArrayList([1, 2, 3, 4]);
            expect(function () { return array.clear(); }).not.toThrow();
            expect(array.count()).toBe(0);
        });
    });
});
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Imports.ts" />
describe("Array", function () {
    var firstLastError = "The source sequence is empty.";
    var indexLesserError = "index is less than 0.";
    var indexGreaterError = "index is equal to or greater than length.";
    describe("operate over elements", function () {
        it("should execute code for each element", function () {
            var counter = 0;
            var array = ["element 1", "element 2", "element 3", "element 4"];
            Array.forEach(array, function (element) {
                expect(element).toBe(array[counter]);
                counter++;
            });
            expect(counter).toBe(array.length);
        });
    });
    describe("filtering elements", function () {
        it("should retrieve elements where condition is met", function () {
            var array = ["element 1", "element 2", "element 3", "index 4", "element 5", "element 6", "index 7"];
            var results = Array.where(array, function (x) { return x.indexOf("index") >= 0; });
            expect(results.length).toBe(2);
            expect(results[0]).toBe("index 4");
            expect(results[1]).toBe("index 7");
        });
        it("shouldnt retrieve elements where condition is not met", function () {
            var array = ["element 1", "element 2", "element 3", "index 4", "element 5", "element 6", "index 7"];
            var results = Array.where(array, function (x) { return x.indexOf("some string") >= 0; });
            expect(results.length).toBe(0);
        });
        it("shouldnt retrieve elements when array is empty", function () {
            var array = [];
            var results = Array.where(array, function (x) { return x.indexOf("some string") >= 0; });
            expect(results.length).toBe(0);
        });
    });
    describe("selecting elements", function () {
        it("should select elements", function () {
            var array = ["1", "2"];
            var results = Array.select(array, function (x) { return "element " + x; });
            expect(results.length).toBe(2);
            expect(results[0]).toBe("element 1");
            expect(results[1]).toBe("element 2");
        });
        it("shouldnt select if array is empty", function () {
            var array = [];
            var results = Array.select(array, function (x) { return "element " + x; });
            expect(results.length).toBe(0);
        });
    });
    describe("first and last elements", function () {
        it("should retrieve the first element or null otherwise", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.firstOrDefault(array1)).toBe("element 1");
            expect(Array.firstOrDefault(array2)).toBeNull();
        });
        it("should retrieve the first element when condition is met or null otherwise", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.firstOrDefault(array1, function (x) { return x.indexOf("element") >= 0; })).toBe("element 1");
            expect(Array.firstOrDefault(array1, function (x) { return x === "other element"; })).toBeNull();
            expect(Array.firstOrDefault(array2, function (x) { return x === "some string"; })).toBeNull();
        });
        it("should retrieve the last element or null otherwise", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.lastOrDefault(array1)).toBe("element 4");
            expect(Array.lastOrDefault(array2)).toBeNull();
        });
        it("should retrieve the last element when condition is met or null otherwise", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.lastOrDefault(array1, function (x) { return x.indexOf("element") >= 0; })).toBe("element 4");
            expect(Array.lastOrDefault(array1, function (x) { return x === "other element"; })).toBeNull();
            expect(Array.lastOrDefault(array2, function (x) { return x === "some string"; })).toBeNull();
        });
        it("should retrieve the first element or fail otherwise", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.first(array1)).toBe("element 1");
            expect(function () { return Array.first(array2); }).toThrow("The source sequence is empty.");
        });
        it("should retrieve the first element when condition is met or fail otherwise", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.first(array1, function (x) { return x.indexOf("element") >= 0; })).toBe("element 1");
            expect(function () { return Array.first(array1, function (x) { return x === "other element"; }); }).toThrow(firstLastError);
            expect(function () { return Array.first(array2, function (x) { return x === "some string"; }); }).toThrow(firstLastError);
        });
        it("should retrieve the last element or fail otherwise", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.last(array1)).toBe("element 4");
            expect(function () { return Array.last(array2); }).toThrow(firstLastError);
        });
        it("should retrieve the last element when condition is met or fail otherwise", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.last(array1, function (x) { return x.indexOf("element") >= 0; })).toBe("element 4");
            expect(function () { return Array.last(array1, function (x) { return x === "other element"; }); }).toThrow(firstLastError);
            expect(function () { return Array.last(array2, function (x) { return x === "some string"; }); }).toThrow(firstLastError);
        });
    });
    describe("checking elements", function () {
        it("should check if any", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.any(array1)).toBe(true);
            expect(Array.any(array2)).toBe(false);
        });
        it("should check if any when condition met", function () {
            var array = ["element 1", "element 2", "element 3", "element 4"];
            expect(Array.any(array, function (x) { return x === "element 1"; })).toBe(true);
            expect(Array.any(array, function (x) { return x === "element 5"; })).toBe(false);
        });
        it("should check if contains element", function () {
            var array = ["element 1", "element 2", "index 3", "index 4"];
            expect(Array.contains(array, "element 1")).toBe(true);
            expect(Array.contains(array, "other")).toBe(false);
        });
    });
    describe("counting elements", function () {
        it("should count elements", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.count(array1)).toBe(4);
            expect(Array.count(array2)).toBe(0);
        });
        it("should count elements when condition met", function () {
            var array = ["element 1", "element 2", "index 3", "index 4"];
            expect(Array.count(array, function (x) { return x.indexOf("element") >= 0; })).toBe(2);
            expect(Array.count(array, function (x) { return x.indexOf("other") >= 0; })).toBe(0);
        });
        it("should sum elements", function () {
            var array1 = [1, 2, 3, 4];
            var array2 = ["1", "2", "3", "4"];
            var array3 = [];
            expect(Array.sum(array1)).toBe(10);
            expect(Array.sum(array2)).toBe("1234");
            expect(Array.sum(array3)).toBe(null);
        });
        it("should sum inner elements", function () {
            var array1 = [{ value: 1, name: "1" }, { value: 2, name: "2" }, { value: 3, name: "3" }, { value: 4, name: "4" }];
            expect(Array.sum(array1, function (x) { return x.value; })).toBe(10);
            expect(Array.sum(array1, function (x) { return x.name; })).toBe("1234");
            expect(Array.sum(array1, function (x) { return x["other"]; })).toBe(null);
        });
    });
    describe("ordering elements", function () {
        it("should order elements ascending", function () {
            var array1 = [3, 1, 4, 2];
            var array2 = ["element 3", "element 1", "element 4", "element 2"];
            var ordered1 = Array.orderBy(array1);
            var ordered2 = Array.orderBy(array2);
            expect(ordered1[0]).toBe(1);
            expect(ordered1[1]).toBe(2);
            expect(ordered1[2]).toBe(3);
            expect(ordered1[3]).toBe(4);
            expect(ordered2[0]).toBe("element 1");
            expect(ordered2[1]).toBe("element 2");
            expect(ordered2[2]).toBe("element 3");
            expect(ordered2[3]).toBe("element 4");
        });
        it("should order by predicate ascending", function () {
            var array = [{ value: 2, name: "3" }, { value: 1, name: "4" }, { value: 3, name: "1" }, { value: 5, name: "2" }];
            var ordered1 = Array.orderBy(array, function (x) { return x.value; });
            var ordered2 = Array.orderBy(array, function (x) { return x.name; });
            expect(ordered1[0].value).toBe(1);
            expect(ordered1[1].value).toBe(2);
            expect(ordered1[2].value).toBe(3);
            expect(ordered1[3].value).toBe(5);
            expect(ordered2[0].name).toBe("1");
            expect(ordered2[1].name).toBe("2");
            expect(ordered2[2].name).toBe("3");
            expect(ordered2[3].name).toBe("4");
        });
        it("should order elements descending", function () {
            var array1 = [3, 1, 4, 2];
            var array2 = ["element 3", "element 1", "element 4", "element 2"];
            var ordered1 = Array.orderByDesc(array1);
            var ordered2 = Array.orderByDesc(array2);
            expect(ordered1[3]).toBe(1);
            expect(ordered1[2]).toBe(2);
            expect(ordered1[1]).toBe(3);
            expect(ordered1[0]).toBe(4);
            expect(ordered2[3]).toBe("element 1");
            expect(ordered2[2]).toBe("element 2");
            expect(ordered2[1]).toBe("element 3");
            expect(ordered2[0]).toBe("element 4");
        });
        it("should order by predicate descending", function () {
            var array = [{ value: 2, name: "3" }, { value: 1, name: "4" }, { value: 3, name: "1" }, { value: 5, name: "2" }];
            var ordered1 = Array.orderByDesc(array, function (x) { return x.value; });
            var ordered2 = Array.orderByDesc(array, function (x) { return x.name; });
            expect(ordered1[3].value).toBe(1);
            expect(ordered1[2].value).toBe(2);
            expect(ordered1[1].value).toBe(3);
            expect(ordered1[0].value).toBe(5);
            expect(ordered2[3].name).toBe("1");
            expect(ordered2[2].name).toBe("2");
            expect(ordered2[1].name).toBe("3");
            expect(ordered2[0].name).toBe("4");
        });
    });
    describe("removing elements", function () {
        it("should remove element", function () {
            var array = [1, 2, 3, 4];
            expect(Array.remove(array, 1)).toBe(true);
            expect(array.length).toBe(3);
            expect(array[0]).toBe(2);
            expect(array[1]).toBe(3);
            expect(array[2]).toBe(4);
        });
        it("should return false if tries to remove an unexisting element", function () {
            var array = [1, 2, 3, 4];
            expect(Array.remove(array, 5)).toBe(false);
            expect(array[0]).toBe(1);
            expect(array[1]).toBe(2);
            expect(array[2]).toBe(3);
            expect(array[3]).toBe(4);
        });
        it("should remove element at index", function () {
            var array = [1, 2, 3, 4];
            expect(function () { return Array.removeAt(array, 0); }).not.toThrow();
            expect(array.length).toBe(3);
            expect(array[0]).toBe(2);
            expect(array[1]).toBe(3);
            expect(array[2]).toBe(4);
        });
        it("should fail if tries to remove an element at an unexising index", function () {
            var array = [1, 2, 3, 4];
            expect(function () { return Array.removeAt(array, 5); }).toThrow(indexGreaterError);
            expect(function () { return Array.removeAt(array, -1); }).toThrow(indexLesserError);
            expect(array[0]).toBe(1);
            expect(array[1]).toBe(2);
            expect(array[2]).toBe(3);
            expect(array[3]).toBe(4);
        });
        it("should remove all elements", function () {
            var array = [1, 2, 3, 4];
            expect(Array.removeAll(array)).toBe(4);
            expect(array.length).toBe(0);
        });
        it("should remove all elements under certain conditions", function () {
            var array = [1, 2, 3, 4];
            expect(Array.removeAll(array, function (x) { return x > 2; })).toBe(2);
            expect(array.length).toBe(2);
            expect(array[0]).toBe(1);
            expect(array[1]).toBe(2);
        });
        it("shouldnt remove any elements if condition is not met", function () {
            var array = [1, 2, 3, 4];
            expect(Array.removeAll(array, function (x) { return x > 4; })).toBe(0);
            expect(array.length).toBe(4);
            expect(array[0]).toBe(1);
            expect(array[1]).toBe(2);
            expect(array[2]).toBe(3);
            expect(array[3]).toBe(4);
        });
    });
});
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Imports.ts" />
describe("Dictionary", function () {
    var firstLastError = "The source sequence is empty.";
    var wrongKeyError = "The given key was not present in the dictionary.";
    var wrongValueError = "The given value was not present in the dictionary.";
    var valueNotArrayError = "value is must be an array or an IEnumerable class.";
    var keyPresentError = "An element with the same key already exists in the Dictionary<TKey, TValue>.";
    var predicateError = "Predicate can not be null.";
    var itemNullError = "Item can not be null";
    var keyNullError = "Key can not be null.";
    describe("instantiation", function () {
        it("should be able to create an empty dictionary", function () {
            var dictionary = null;
            expect(function () { return dictionary = new Dictionary(); }).not.toThrow();
            expect(dictionary).not.toBeNull();
            expect(dictionary.count()).toBe(0);
        });
        it("should be able to create an filled dictionary", function () {
            var dictionary = null;
            expect(function () { return dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }]); }).not.toThrow();
            expect(dictionary).not.toBeNull();
            expect(dictionary.count()).toBe(2);
            expect(dictionary.get("a")).toBe(1);
            expect(dictionary.get("b")).toBe(2);
        });
        it("should fail when creating the dictionary with duplicate keys", function () {
            expect(function () { return new Dictionary([{ key: "a", value: 1 }, { key: "a", value: 2 }]); }).toThrow(keyPresentError);
        });
    });
    describe("operate over elements", function () {
        it("should get elements by key", function () {
            var dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }]);
            expect(dictionary.get("a")).toBe(1);
            expect(dictionary.get("b")).toBe(2);
        });
        it("should fail if when key not present", function () {
            var dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }]);
            expect(function () { return dictionary.get("c"); }).toThrow(wrongKeyError);
        });
        it("should pop last element", function () {
            var dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }, { key: "c", value: 3 }]);
            var popped = dictionary.pop();
            expect(popped.value).toBe(3);
            expect(dictionary.count()).toBe(2);
            expect(dictionary.get("a")).toBe(1);
            expect(dictionary.get("b")).toBe(2);
        });
        it("should retrieve key of element by value", function () {
            var dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }, { key: "c", value: 3 }]);
            expect(dictionary.keyOf(1)).toBe("a");
            expect(dictionary.keyOf(2)).toBe("b");
            expect(dictionary.keyOf(3)).toBe("c");
        });
        it("should fail trying to retrieve a key of a value that is not present", function () {
            var dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }, { key: "c", value: 3 }]);
            expect(function () { return dictionary.keyOf(-1); }).toThrow(wrongValueError);
        });
        it("should add elements", function () {
            var dictionary = new Dictionary();
            dictionary.add("a", 1);
            dictionary.add("b", 2);
            expect(dictionary.count()).toBe(2);
            expect(dictionary.get("a")).toBe(1);
            expect(dictionary.get("b")).toBe(2);
        });
        it("should add range of elements", function () {
            var dictionary = new Dictionary();
            dictionary.addRange([{ key: "a", value: 1 }, { key: "b", value: 2 }]);
            expect(dictionary.count()).toBe(2);
            expect(dictionary.get("a")).toBe(1);
            expect(dictionary.get("b")).toBe(2);
        });
        it("should fail when adding duplicate keys", function () {
            var dictionary = new Dictionary();
            expect(function () { return dictionary.addRange([{ key: "a", value: 1 }, { key: "a", value: 2 }]); }).toThrow(keyPresentError);
        });
        it("should fail when adding other than key-value pairs.", function () {
            var dictionary = new Dictionary();
            expect(function () { return dictionary.addRange(new Object()); }).toThrow(valueNotArrayError);
        });
        it("should fail when adding null items.", function () {
            var dictionary = new Dictionary();
            expect(function () { return dictionary.addRange([{ key: "element 1", value: 1 }, null]); }).toThrow(itemNullError);
        });
        it("should fail when adding one item with a null key.", function () {
            var dictionary = new Dictionary();
            expect(function () { return dictionary.add(null, 1); }).toThrow(keyNullError);
        });
        it("should execute code for each element", function () {
            var counter = 0;
            var dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }, { key: "c", value: 3 }]);
            dictionary.forEach(function (element) {
                expect(element.key).not.toBeNull();
                expect(element.value).not.toBeNull();
                expect(dictionary.get(element.key)).toBe(element.value);
                expect(dictionary.keyOf(element.value)).toBe(element.key);
                counter++;
            });
            expect(counter).toBe(dictionary.count());
        });
    });
    describe("filtering elements", function () {
        it("should retrieve elements where condition for key is met", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var results = dictionary.where(function (x) { return x.key.indexOf("index") >= 0; });
            expect(results.count()).toBe(2);
            expect(results.get("index 2")).toBe(2);
            expect(results.get("index 4")).toBe(4);
        });
        it("should retrieve elements where condition for value is met", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var results = dictionary.where(function (x) { return x.value >= 4; });
            expect(results.count()).toBe(2);
            expect(results.get("index 4")).toBe(4);
            expect(results.get("element 5")).toBe(5);
        });
        it("shouldnt retrieve elements where condition is not met", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var results = dictionary.where(function (x) { return x.value > 10; });
            expect(results.count()).toBe(0);
        });
        it("shouldnt retrieve elements when dictionary is empty", function () {
            var dictionary = new Dictionary();
            var results = dictionary.where(function (x) { return x.value >= 0; });
            expect(results.count()).toBe(0);
        });
    });
    describe("selecting elements", function () {
        it("should select elements", function () {
            var dictionary = new Dictionary([{ key: "key 1", value: 1 }, { key: "key 2", value: 2 }]);
            var results = dictionary.select(function (x) { return "element " + x.value; });
            expect(results.count()).toBe(2);
            expect(results.first()).toBe("element 1");
            expect(results.last()).toBe("element 2");
        });
        it("shouldnt select if dictionary is empty", function () {
            var dictionary = new Dictionary();
            var results = dictionary.select(function (x) { return "element " + x.value; });
            expect(results.count()).toBe(0);
        });
    });
    describe("first and last elements", function () {
        it("should retrieve the first element or null otherwise", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.firstOrDefault().key).toBe("element 1");
            expect(dictionary2.firstOrDefault()).toBeNull();
        });
        it("should retrieve the first element when condition is met or null otherwise", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.firstOrDefault(function (x) { return x.key === "element 3"; }).value).toBe(3);
            expect(dictionary1.firstOrDefault(function (x) { return x.key === "other element"; })).toBeNull();
            expect(dictionary2.firstOrDefault(function (x) { return x.key === "some string"; })).toBeNull();
        });
        it("should retrieve the last element or null otherwise", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.lastOrDefault().key).toBe("element 5");
            expect(dictionary2.lastOrDefault()).toBeNull();
        });
        it("should retrieve the last element when condition is met or null otherwise", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.lastOrDefault(function (x) { return x.key === "element 3"; }).value).toBe(3);
            expect(dictionary1.lastOrDefault(function (x) { return x.key === "other element"; })).toBeNull();
            expect(dictionary2.lastOrDefault(function (x) { return x.key === "some string"; })).toBeNull();
        });
        it("should retrieve the first element or fail otherwise", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.first().key).toBe("element 1");
            expect(function () { return dictionary2.first(); }).toThrow("The source sequence is empty.");
        });
        it("should retrieve the first element when condition is met or fail otherwise", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.first(function (x) { return x.value === 3; }).key).toBe("element 3");
            expect(function () { return dictionary1.first(function (x) { return x.key === "other element"; }); }).toThrow(firstLastError);
            expect(function () { return dictionary2.first(function (x) { return x.key === "some string"; }); }).toThrow(firstLastError);
        });
        it("should retrieve the last element or fail otherwise", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.last().key).toBe("element 5");
            expect(function () { return dictionary2.last(); }).toThrow(firstLastError);
        });
        it("should retrieve the last element when condition is met or fail otherwise", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.last(function (x) { return x.value === 3; }).key).toBe("element 3");
            expect(function () { return dictionary1.last(function (x) { return x.key === "other element"; }); }).toThrow(firstLastError);
            expect(function () { return dictionary2.last(function (x) { return x.key === "some string"; }); }).toThrow(firstLastError);
        });
    });
    describe("checking elements", function () {
        it("should check if any", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.any()).toBe(true);
            expect(dictionary2.any()).toBe(false);
        });
        it("should check if any when condition met", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            expect(dictionary.any(function (x) { return x.key === "element 1"; })).toBe(true);
            expect(dictionary.any(function (x) { return x.key === "element 6"; })).toBe(false);
        });
    });
    describe("counting elements", function () {
        it("should count elements", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.count()).toBe(5);
            expect(dictionary2.count()).toBe(0);
        });
        it("should count elements when condition met", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            expect(dictionary1.count(function (x) { return x.value <= 2; })).toBe(2);
            expect(dictionary1.count(function (x) { return x.value >= 10; })).toBe(0);
        });
        it("should sum elements", function () {
            var dictionary1 = new Dictionary([{ key: "1", value: 1 }, { key: "2", value: 2 }, { key: "3", value: 3 }, { key: "4", value: 4 }]);
            var dictionary2 = new Dictionary();
            expect(function () { return dictionary1.sum(null); }).toThrow(predicateError);
            expect(dictionary1.sum(function (x) { return x.value; })).toBe(10);
            expect(dictionary1.sum(function (x) { return x.key; })).toBe("1234");
            expect(dictionary2.sum(function (x) { return x.value; })).toBe(null);
        });
    });
    describe("ordering elements", function () {
        it("should order by predicate ascending", function () {
            var dictionary = new Dictionary([{ key: "element 3", value: 3 }, { key: "element 4", value: 4 }, { key: "element 2", value: 2 }, { key: "element 1", value: 1 }]);
            expect(function () { return dictionary.orderBy(null); }).toThrow(predicateError);
            var ordered1 = dictionary.orderBy(function (x) { return x.key; }).getInnerArray();
            var ordered2 = dictionary.orderBy(function (x) { return x.value; }).getInnerArray();
            expect(ordered1[0].value).toBe(1);
            expect(ordered1[1].value).toBe(2);
            expect(ordered1[2].value).toBe(3);
            expect(ordered1[3].value).toBe(4);
            expect(ordered2[0].key).toBe("element 1");
            expect(ordered2[1].key).toBe("element 2");
            expect(ordered2[2].key).toBe("element 3");
            expect(ordered2[3].key).toBe("element 4");
        });
        it("should order elements descending", function () {
            var dictionary = new Dictionary([{ key: "element 3", value: 3 }, { key: "element 4", value: 4 }, { key: "element 2", value: 2 }, { key: "element 1", value: 1 }]);
            expect(function () { return dictionary.orderBy(null); }).toThrow(predicateError);
            var ordered1 = dictionary.orderByDesc(function (x) { return x.key; }).getInnerArray();
            var ordered2 = dictionary.orderByDesc(function (x) { return x.value; }).getInnerArray();
            expect(ordered1[3].value).toBe(1);
            expect(ordered1[2].value).toBe(2);
            expect(ordered1[1].value).toBe(3);
            expect(ordered1[0].value).toBe(4);
            expect(ordered2[3].key).toBe("element 1");
            expect(ordered2[2].key).toBe("element 2");
            expect(ordered2[1].key).toBe("element 3");
            expect(ordered2[0].key).toBe("element 4");
        });
    });
    describe("removing elements", function () {
        it("should remove element", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "element 2", value: 2 }, { key: "element 3", value: 3 }, { key: "element 4", value: 4 }]);
            expect(function () { return dictionary.remove("element 2"); }).not.toThrow();
            expect(dictionary.count()).toBe(3);
            expect(dictionary.getInnerArray()[0].value).toBe(1);
            expect(dictionary.getInnerArray()[1].value).toBe(3);
            expect(dictionary.getInnerArray()[2].value).toBe(4);
        });
        it("should fail if tries to remove an unexisting element", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "element 2", value: 2 }, { key: "element 3", value: 3 }, { key: "element 4", value: 4 }]);
            expect(function () { return dictionary.remove("element 5"); }).toThrow(wrongKeyError);
            expect(dictionary.count()).toBe(4);
            expect(dictionary.get("element 1")).toBe(1);
            expect(dictionary.get("element 2")).toBe(2);
            expect(dictionary.get("element 3")).toBe(3);
            expect(dictionary.get("element 4")).toBe(4);
        });
        it("should remove all elements", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "element 2", value: 2 }, { key: "element 3", value: 3 }, { key: "element 4", value: 4 }]);
            expect(dictionary.removeAll()).toBe(4);
            expect(dictionary.count()).toBe(0);
        });
        it("should remove all elements under certain conditions", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "element 2", value: 2 }, { key: "element 3", value: 3 }, { key: "element 4", value: 4 }]);
            expect(dictionary.removeAll(function (x) { return x.value > 2; })).toBe(2);
            expect(dictionary.count()).toBe(2);
            expect(dictionary.get("element 1")).toBe(1);
            expect(dictionary.get("element 2")).toBe(2);
        });
        it("shouldnt remove any elements if condition is not met", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "element 2", value: 2 }, { key: "element 3", value: 3 }, { key: "element 4", value: 4 }]);
            expect(dictionary.removeAll(function (x) { return x.value > 4; })).toBe(0);
            expect(dictionary.count()).toBe(4);
            expect(dictionary.get("element 1")).toBe(1);
            expect(dictionary.get("element 2")).toBe(2);
            expect(dictionary.get("element 3")).toBe(3);
            expect(dictionary.get("element 4")).toBe(4);
        });
        it("should clear all elements", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "element 2", value: 2 }, { key: "element 3", value: 3 }, { key: "element 4", value: 4 }]);
            expect(function () { return dictionary.clear(); }).not.toThrow();
            expect(dictionary.count()).toBe(0);
        });
    });
});
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Imports.ts" />
describe("AlertService", function () {
    var injector;
    var alertService;
    beforeEach(function () {
        // create a new framework module with all the configuration.
        angular.mock.module(FrameworkModule.instance.getModuleName());
        // inject a dummy logging service to prevent undesired logging.
        angular.mock.module(function ($provide) {
            $provide.value(FrameworkServices.loggingService, new DummyLoggingService());
        });
    });
    // prepare base services and classes.
    beforeEach(inject(function ($injector) {
        injector = $injector;
        alertService = injector.get(FrameworkServices.alertService);
    }));
    describe("Instantiation", function () {
        it("should initialize correctly", function () {
            expect(alertService).toBeDefined();
        });
        it("alert collection shouldn't be null", function () {
            expect(alertService.getAlerts()).not.toBeNull();
            expect(alertService.getAlerts().getInnerArray()).not.toBeNull();
        });
        it("alert collection should be empty", function () {
            expect(alertService.getAlerts().count()).toBe(0);
        });
    });
    describe("Messages", function () {
        it("should add a Message", function () {
            alertService.addMessage("testing Message");
            expect(alertService.getAlerts().count()).toBe(1);
        });
        it("should remove a Message", function () {
            alertService.addMessage("testing Message");
            alertService.remove(0);
            expect(alertService.getAlerts().count()).toBe(0);
        });
        it("should get a Message", function () {
            alertService.addMessage("testing Message");
            var alert = alertService.get(0);
            alertService.remove(0);
            expect(alert.type).toBe(AlertType.Message);
            expect(alert.message).toBe("testing Message");
        });
    });
    describe("Warnings", function () {
        it("should add a Warning", function () {
            alertService.addWarning("testing Warning");
            expect(alertService.getAlerts().count()).toBe(1);
        });
        it("should remove a Warning", function () {
            alertService.addWarning("testing Warning");
            alertService.remove(0);
            expect(alertService.getAlerts().count()).toBe(0);
        });
        it("should get a Warning", function () {
            alertService.addWarning("testing Warning");
            var alert = alertService.get(0);
            alertService.remove(0);
            expect(alert.type).toBe(AlertType.Warning);
            expect(alert.message).toBe("testing Warning");
        });
    });
    describe("Errors", function () {
        it("should add a Error", function () {
            alertService.addError("testing Error");
            expect(alertService.getAlerts().count()).toBe(1);
        });
        it("should remove a Error", function () {
            alertService.addError("testing Error");
            alertService.remove(0);
            expect(alertService.getAlerts().count()).toBe(0);
        });
        it("should get a Error", function () {
            alertService.addError("testing Error");
            var alert = alertService.get(0);
            alertService.remove(0);
            expect(alert.type).toBe(AlertType.Error);
            expect(alert.message).toBe("testing Error");
        });
    });
});
