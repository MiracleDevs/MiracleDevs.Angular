/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../Imports.ts" />

describe("Dictionary", () =>
{
    var firstLastError = "The source sequence is empty.";

    var wrongKeyError = "The given key was not present in the dictionary.";

    var wrongValueError = "The given value was not present in the dictionary.";

    var valueNotArrayError = "value is must be an array or an IEnumerable class.";

    var keyPresentError = "An element with the same key already exists in the Dictionary<TKey, TValue>.";

    var predicateError = "Predicate can not be null.";
    
    var itemNullError = "Item can not be null";

    var keyNullError = "Key can not be null.";

    describe("instantiation", () =>
    {
        it("should be able to create an empty dictionary", () =>
        {
            var dictionary: Dictionary<string, number> = null;

            expect(() => dictionary = new Dictionary<string, number>()).not.toThrow();
            expect(dictionary).not.toBeNull();
            expect(dictionary.count()).toBe(0);
        });

        it("should be able to create an filled dictionary", () =>
        {
            var dictionary: Dictionary<string, number> = null;
            expect(() => dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }])).not.toThrow();
            expect(dictionary).not.toBeNull();
            expect(dictionary.count()).toBe(2);
            expect(dictionary.get("a")).toBe(1);
            expect(dictionary.get("b")).toBe(2);
        });

        it("should fail when creating the dictionary with duplicate keys", () =>
        {
            expect(() => new Dictionary([{ key: "a", value: 1 }, { key: "a", value: 2 }])).toThrow(new Error(keyPresentError));
        });
    });

    describe("operate over elements", () =>
    {
        it("should get elements by key", () =>
        {
            var dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }]);

            expect(dictionary.get("a")).toBe(1);
            expect(dictionary.get("b")).toBe(2);
        });

        it("should fail if when key not present", () =>
        {
            var dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }]);

            expect(() => dictionary.get("c")).toThrow(new Error(wrongKeyError));
        });

        it("should pop last element", () =>
        {
            var dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }, { key: "c", value: 3 }]);

            var popped = dictionary.pop();

            expect(popped.value).toBe(3);
            expect(dictionary.count()).toBe(2);
            expect(dictionary.get("a")).toBe(1);
            expect(dictionary.get("b")).toBe(2);
        });

        it("should retrieve key of element by value", () =>
        {
            var dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }, { key: "c", value: 3 }]);

            expect(dictionary.keyOf(1)).toBe("a");
            expect(dictionary.keyOf(2)).toBe("b");
            expect(dictionary.keyOf(3)).toBe("c");
        });

        it("should fail trying to retrieve a key of a value that is not present", () =>
        {
            var dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }, { key: "c", value: 3 }]);

            expect(() => dictionary.keyOf(-1)).toThrow(new Error(wrongValueError));
        });

        it("should add elements", () =>
        {
            var dictionary = new Dictionary<string, number>();

            dictionary.add("a", 1);
            dictionary.add("b", 2);

            expect(dictionary.count()).toBe(2);
            expect(dictionary.get("a")).toBe(1);
            expect(dictionary.get("b")).toBe(2);
        });

        it("should add range of elements", () =>
        {
            var dictionary = new Dictionary<string, number>();

            dictionary.addRange([{ key: "a", value: 1 }, { key: "b", value: 2 }]);

            expect(dictionary.count()).toBe(2);
            expect(dictionary.get("a")).toBe(1);
            expect(dictionary.get("b")).toBe(2);
        });

        it("should fail when adding duplicate keys", () =>
        {
            var dictionary = new Dictionary<string, number>();
            expect(() => dictionary.addRange([{ key: "a", value: 1 }, { key: "a", value: 2 }])).toThrow(new Error(keyPresentError));
        });

        it("should fail when adding other than key-value pairs.", () =>
        {
            var dictionary = new Dictionary<string, number>();
            expect(() => dictionary.addRange(new Object() as any)).toThrow(new Error(valueNotArrayError));
        });

        it("should fail when adding null items.", () =>
        {
            var dictionary = new Dictionary<string, number>();
            expect(() => dictionary.addRange([{ key: "element 1", value: 1 }, null])).toThrow(new Error(itemNullError));
        });

        it("should fail when adding one item with a null key.", () =>
        {
            var dictionary = new Dictionary<string, number>();
            expect(() => dictionary.add(null, 1)).toThrow(new Error(keyNullError));
        });

        it("should execute code for each element", () =>
        {
            var counter = 0;
            var dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }, { key: "c", value: 3 }]);


            dictionary.forEach(element =>
            {
                expect(element.key).not.toBeNull();
                expect(element.value).not.toBeNull();
                expect(dictionary.get(element.key)).toBe(element.value);
                expect(dictionary.keyOf(element.value)).toBe(element.key);
                counter++;
            });

            expect(counter).toBe(dictionary.count());
        });
    });

    describe("filtering elements", () =>
    {
        it("should retrieve elements where condition for key is met", () =>
        {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);

            var results = dictionary.where(x => x.key.indexOf("index") >= 0) as Dictionary<string, number>;

            expect(results.count()).toBe(2);
            expect(results.get("index 2")).toBe(2);
            expect(results.get("index 4")).toBe(4);
        });

        it("should retrieve elements where condition for value is met", () =>
        {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);

            var results = dictionary.where(x => x.value >= 4) as Dictionary<string, number>;

            expect(results.count()).toBe(2);
            expect(results.get("index 4")).toBe(4);
            expect(results.get("element 5")).toBe(5);
        });

        it("shouldnt retrieve elements where condition is not met", () =>
        {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var results = dictionary.where(x => x.value > 10);
            expect(results.count()).toBe(0);
        });

        it("shouldnt retrieve elements when dictionary is empty", () =>
        {
            var dictionary = new Dictionary<string, number>();
            var results = dictionary.where(x => x.value >= 0);
            expect(results.count()).toBe(0);
        });
    });

    describe("selecting elements", () => 
    {
        it("should select elements", () =>
        {
            var dictionary = new Dictionary([{ key: "key 1", value: 1 }, { key: "key 2", value: 2 }]);
            var results = dictionary.select(x => `element ${x.value}`);

            expect(results.count()).toBe(2);
            expect(results.first()).toBe("element 1");
            expect(results.last()).toBe("element 2");
        });

        it("shouldnt select if dictionary is empty", () =>
        {
            var dictionary = new Dictionary<string, number>();
            var results = dictionary.select(x => `element ${x.value}`);
            expect(results.count()).toBe(0);
        });
    });

    describe("first and last elements", () => 
    {
        it("should retrieve the first element or null otherwise", () =>
        {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary<string, number>();

            expect(dictionary1.firstOrDefault().key).toBe("element 1");
            expect(dictionary2.firstOrDefault()).toBeNull();
        });

        it("should retrieve the first element when condition is met or null otherwise", () =>
        {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary<string, number>();

            expect(dictionary1.firstOrDefault(x => x.key === "element 3").value).toBe(3);
            expect(dictionary1.firstOrDefault(x => x.key === "other element")).toBeNull();
            expect(dictionary2.firstOrDefault(x => x.key === "some string")).toBeNull();
        });

        it("should retrieve the last element or null otherwise", () =>
        {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary<string, number>();

            expect(dictionary1.lastOrDefault().key).toBe("element 5");
            expect(dictionary2.lastOrDefault()).toBeNull();
        });

        it("should retrieve the last element when condition is met or null otherwise", () =>
        {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary<string, number>();

            expect(dictionary1.lastOrDefault(x => x.key === "element 3").value).toBe(3);
            expect(dictionary1.lastOrDefault(x => x.key === "other element")).toBeNull();
            expect(dictionary2.lastOrDefault(x => x.key === "some string")).toBeNull();
        });

        it("should retrieve the first element or fail otherwise", () =>
        {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary<string, number>();

            expect(dictionary1.first().key).toBe("element 1");
            expect(() => dictionary2.first()).toThrow(new Error("The source sequence is empty."));
        });

        it("should retrieve the first element when condition is met or fail otherwise", () =>
        {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary<string, number>();

            expect(dictionary1.first(x => x.value === 3).key).toBe("element 3");
            expect(() => dictionary1.first(x => x.key === "other element")).toThrow(new Error(firstLastError));
            expect(() => dictionary2.first(x => x.key === "some string")).toThrow(new Error(firstLastError));
        });

        it("should retrieve the last element or fail otherwise", () =>
        {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary<string, number>();

            expect(dictionary1.last().key).toBe("element 5");
            expect(() => dictionary2.last()).toThrow(new Error(firstLastError));
        });

        it("should retrieve the last element when condition is met or fail otherwise", () =>
        {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary<string, number>();

            expect(dictionary1.last(x => x.value === 3).key).toBe("element 3");
            expect(() => dictionary1.last(x => x.key === "other element")).toThrow(new Error(firstLastError));
            expect(() => dictionary2.last(x => x.key === "some string")).toThrow(new Error(firstLastError));
        });
    });

    describe("checking elements", () => 
    {
        it("should check if any", () =>
        {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary<string, number>();

            expect(dictionary1.any()).toBe(true);
            expect(dictionary2.any()).toBe(false);
        });

        it("should check if any when condition met", () =>
        {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);

            expect(dictionary.any(x => x.key === "element 1")).toBe(true);
            expect(dictionary.any(x => x.key === "element 6")).toBe(false);
        });
    });

    describe("counting elements", () => 
    {
        it("should count elements", () =>
        {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary<string, number>();

            expect(dictionary1.count()).toBe(5);
            expect(dictionary2.count()).toBe(0);
        });

        it("should count elements when condition met", () =>
        {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);

            expect(dictionary1.count(x => x.value <= 2)).toBe(2);
            expect(dictionary1.count(x => x.value >= 10)).toBe(0);
        });

        it("should sum elements", () =>
        {
            var dictionary1 = new Dictionary([{ key: "1", value: 1 }, { key: "2", value: 2 }, { key: "3", value: 3 }, { key: "4", value: 4 }]);
            var dictionary2 = new Dictionary<string, number>();

            expect(() => dictionary1.sum(null)).toThrow(new Error(predicateError));
            expect(dictionary1.sum(x => x.value)).toBe(10);
            expect(dictionary1.sum(x => x.key)).toBe("1234");
            expect(dictionary2.sum(x => x.value)).toBe(null);
        });
    });

    describe("ordering elements", () => 
    {
        it("should order by predicate ascending", () =>
        {
            var dictionary = new Dictionary([{ key: "element 3", value: 3 }, { key: "element 4", value: 4 }, { key: "element 2", value: 2 }, { key: "element 1", value: 1 }]);

            expect(() => dictionary.orderBy(null)).toThrow(new Error(predicateError));

            var ordered1 = dictionary.orderBy(x => x.key).getInnerArray();
            var ordered2 = dictionary.orderBy(x => x.value).getInnerArray();

            expect(ordered1[0].value).toBe(1);
            expect(ordered1[1].value).toBe(2);
            expect(ordered1[2].value).toBe(3);
            expect(ordered1[3].value).toBe(4); 
                                   
            expect(ordered2[0].key).toBe("element 1");
            expect(ordered2[1].key).toBe("element 2");
            expect(ordered2[2].key).toBe("element 3");
            expect(ordered2[3].key).toBe("element 4");
        });

        it("should order elements descending", () =>
        {
            var dictionary = new Dictionary([{ key: "element 3", value: 3 }, { key: "element 4", value: 4 }, { key: "element 2", value: 2 }, { key: "element 1", value: 1 }]);

            expect(() => dictionary.orderBy(null)).toThrow(new Error(predicateError));

            var ordered1 = dictionary.orderByDesc(x => x.key).getInnerArray();
            var ordered2 = dictionary.orderByDesc(x => x.value).getInnerArray();

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

    describe("removing elements", () => 
    {
        it("should remove element", () =>
        {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "element 2", value: 2 }, { key: "element 3", value: 3 }, { key: "element 4", value: 4 }]);

            expect(() => dictionary.remove("element 2")).not.toThrow();
            expect(dictionary.count()).toBe(3);
            expect(dictionary.getInnerArray()[0].value).toBe(1);
            expect(dictionary.getInnerArray()[1].value).toBe(3);
            expect(dictionary.getInnerArray()[2].value).toBe(4);
        });

        it("should fail if tries to remove an unexisting element", () =>
        {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "element 2", value: 2 }, { key: "element 3", value: 3 }, { key: "element 4", value: 4 }]);

            expect(() => dictionary.remove("element 5")).toThrow(new Error(wrongKeyError));
            expect(dictionary.count()).toBe(4);
            expect(dictionary.get("element 1")).toBe(1);
            expect(dictionary.get("element 2")).toBe(2);
            expect(dictionary.get("element 3")).toBe(3);
            expect(dictionary.get("element 4")).toBe(4);
        });

        it("should remove all elements", () =>
        {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "element 2", value: 2 }, { key: "element 3", value: 3 }, { key: "element 4", value: 4 }]);

            expect(dictionary.removeAll()).toBe(4);
            expect(dictionary.count()).toBe(0);
        });

        it("should remove all elements under certain conditions", () =>
        {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "element 2", value: 2 }, { key: "element 3", value: 3 }, { key: "element 4", value: 4 }]);

            expect(dictionary.removeAll(x => x.value > 2)).toBe(2);
            expect(dictionary.count()).toBe(2);
            expect(dictionary.get("element 1")).toBe(1);
            expect(dictionary.get("element 2")).toBe(2);
        });

        it("shouldnt remove any elements if condition is not met", () =>
        {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "element 2", value: 2 }, { key: "element 3", value: 3 }, { key: "element 4", value: 4 }]);

            expect(dictionary.removeAll(x => x.value > 4)).toBe(0);
            expect(dictionary.count()).toBe(4);
            expect(dictionary.get("element 1")).toBe(1);
            expect(dictionary.get("element 2")).toBe(2);
            expect(dictionary.get("element 3")).toBe(3);
            expect(dictionary.get("element 4")).toBe(4);
        });

        it("should clear all elements", () =>
        {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "element 2", value: 2 }, { key: "element 3", value: 3 }, { key: "element 4", value: 4 }]);

            expect(()=> dictionary.clear()).not.toThrow();
            expect(dictionary.count()).toBe(0);
        });
    });

});