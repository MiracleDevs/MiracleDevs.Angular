var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
Array.forEach = function (array, action) {
    for (var index = 0; index < array.length; index++) {
        action(array[index]);
    }
};
Array.where = function (array, predicate) {
    var temp = Array();
    for (var index = 0; index < array.length; index++) {
        if (predicate(array[index]))
            temp.push(array[index]);
    }
    return temp;
};
Array.select = function (array, predicate) {
    var temp = Array();
    for (var index = 0; index < array.length; index++) {
        temp.push(predicate(array[index]));
    }
    return temp;
};
Array.firstOrDefault = function (array, predicate) {
    if (predicate == null) {
        if (array.length > 0)
            return array[0];
        return null;
    }
    for (var index = 0; index < array.length; index++) {
        if (predicate(array[index]))
            return array[index];
    }
    return null;
};
Array.lastOrDefault = function (array, predicate) {
    if (predicate == null) {
        if (array.length > 0)
            return array[array.length - 1];
        return null;
    }
    for (var index = array.length - 1; index >= 0; index--) {
        if (predicate(array[index]))
            return array[index];
    }
    return null;
};
Array.first = function (array, predicate) {
    var element = Array.firstOrDefault(array, predicate);
    if (Object.isNull(element))
        throw new Error("The source sequence is empty.");
    return element;
};
Array.last = function (array, predicate) {
    var element = Array.lastOrDefault(array, predicate);
    if (Object.isNull(element))
        throw new Error("The source sequence is empty.");
    return element;
};
Array.any = function (array, predicate) {
    if (predicate == null)
        return array.length > 0;
    for (var index = 0; index < array.length; index++) {
        if (predicate(array[index]))
            return true;
    }
    return false;
};
Array.count = function (array, predicate) {
    if (predicate == null)
        return array.length;
    var count = 0;
    for (var index = 0; index < array.length; index++) {
        if (predicate(array[index]))
            count++;
    }
    return count;
};
Array.sum = function (array, predicate) {
    var sum = null;
    for (var index = 0; index < array.length; index++) {
        var value = Object.isNull(predicate) ? array[index] : predicate(array[index]);
        if (sum == null)
            sum = value;
        else
            sum += value;
    }
    if (sum === undefined)
        return null;
    return sum;
};
Array.contains = function (array, value) {
    for (var index = 0; index < array.length; index++) {
        if (array[index] === value)
            return true;
    }
    return false;
};
Array.orderBy = function (array, predicate) {
    var onlyValues = Object.isNull(predicate);
    var newArray = array.slice();
    return newArray.sort(function (a, b) {
        var valueA = onlyValues ? a : predicate(a);
        var valueB = onlyValues ? b : predicate(b);
        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    });
};
Array.orderByDesc = function (array, predicate) {
    var onlyValues = Object.isNull(predicate);
    var newArray = array.slice();
    return newArray.sort(function (a, b) {
        var valueA = onlyValues ? a : predicate(a);
        var valueB = onlyValues ? b : predicate(b);
        return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
    });
};
Array.remove = function (array, element) {
    try {
        Array.removeAt(array, array.indexOf(element));
        return true;
    }
    catch (e) {
        return false;
    }
};
Array.removeAt = function (array, index) {
    if (index < 0)
        throw new Error("index is less than 0.");
    if (index >= array.length)
        throw new Error("index is equal to or greater than length.");
    delete array[index];
    array.splice(index, 1);
};
Array.removeAll = function (array, predicate) {
    var elements = Object.isNull(predicate) ? array.slice() : Array.where(array, predicate);
    var count = 0;
    for (var i = 0; i < elements.length; i++) {
        Array.remove(array, elements[i]);
        count++;
    }
    return count;
};
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="Array.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Core;
        (function (Core) {
            var ArrayList = (function () {
                function ArrayList(array) {
                    this.innerArray = array || new Array();
                }
                ArrayList.prototype.forEach = function (action) {
                    Array.forEach(this.innerArray, action);
                };
                ArrayList.prototype.where = function (predicate) {
                    return new ArrayList(Array.where(this.innerArray, predicate));
                };
                ArrayList.prototype.select = function (predicate) {
                    return new ArrayList(Array.select(this.innerArray, predicate));
                };
                ArrayList.prototype.firstOrDefault = function (predicate) {
                    return Array.firstOrDefault(this.innerArray, predicate);
                };
                ArrayList.prototype.lastOrDefault = function (predicate) {
                    return Array.lastOrDefault(this.innerArray, predicate);
                };
                ArrayList.prototype.first = function (predicate) {
                    return Array.first(this.innerArray, predicate);
                };
                ArrayList.prototype.last = function (predicate) {
                    return Array.last(this.innerArray, predicate);
                };
                ArrayList.prototype.any = function (predicate) {
                    return Array.any(this.innerArray, predicate);
                };
                ArrayList.prototype.count = function (predicate) {
                    return Array.count(this.innerArray, predicate);
                };
                ArrayList.prototype.sum = function (predicate) {
                    return Array.sum(this.innerArray, predicate);
                };
                ArrayList.prototype.contains = function (value) {
                    return Array.contains(this.innerArray, value);
                };
                ArrayList.prototype.orderBy = function (predicate) {
                    return new ArrayList(Array.orderBy(this.innerArray, predicate));
                };
                ArrayList.prototype.orderByDesc = function (predicate) {
                    return new ArrayList(Array.orderByDesc(this.innerArray, predicate));
                };
                ArrayList.prototype.getInnerArray = function () {
                    return this.innerArray;
                };
                ArrayList.prototype.get = function (index) {
                    if (index < 0)
                        throw new Error("index is less than 0.");
                    if (index >= this.innerArray.length)
                        throw new Error("index is equal to or greater than length.");
                    return this.innerArray[index];
                };
                ArrayList.prototype.add = function (value) {
                    this.innerArray.push(value);
                };
                ArrayList.prototype.addRange = function (value) {
                    var i;
                    if (value instanceof ArrayList) {
                        for (i = 0; i < value.count(); i++)
                            this.innerArray.push(value.get(i));
                    }
                    else if (value instanceof Array) {
                        for (i = 0; i < value.length; i++)
                            this.innerArray.push(value[i]);
                    }
                };
                ArrayList.prototype.pop = function () {
                    return this.innerArray.pop();
                };
                ArrayList.prototype.indexOf = function (element) {
                    return this.innerArray.indexOf(element);
                };
                ArrayList.prototype.remove = function (element) {
                    return Array.remove(this.innerArray, element);
                };
                ArrayList.prototype.removeAt = function (index) {
                    Array.removeAt(this.innerArray, index);
                };
                ArrayList.prototype.removeAll = function (predicate) {
                    return Array.removeAll(this.innerArray, predicate);
                };
                ArrayList.prototype.clear = function () {
                    // we prefer to execute remove all and not create a new array, to
                    // preserve the reference to the original array, if someone used the
                    // getInnerArray method.
                    this.removeAll();
                };
                return ArrayList;
            }());
            Core.ArrayList = ArrayList;
        })(Core = Angular.Core || (Angular.Core = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="ArrayList.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Core;
        (function (Core) {
            var Dictionary = (function () {
                function Dictionary(array) {
                    this.innerArray = new Array();
                    if (!Object.isNull(array)) {
                        this.addRange(array);
                    }
                }
                Dictionary.prototype.getValues = function () {
                    return this.select(function (x) { return x.value; });
                };
                Dictionary.prototype.getKeys = function () {
                    return this.select(function (x) { return x.key; });
                };
                Dictionary.prototype.containsKey = function (key) {
                    return this.any(function (x) { return x.key === key; });
                };
                Dictionary.prototype.forEach = function (action) {
                    Array.forEach(this.innerArray, action);
                };
                Dictionary.prototype.where = function (predicate) {
                    return new Dictionary(Array.where(this.innerArray, predicate));
                };
                Dictionary.prototype.select = function (predicate) {
                    return new Core.ArrayList(Array.select(this.innerArray, predicate));
                };
                Dictionary.prototype.firstOrDefault = function (predicate) {
                    return Array.firstOrDefault(this.innerArray, predicate);
                };
                Dictionary.prototype.lastOrDefault = function (predicate) {
                    return Array.lastOrDefault(this.innerArray, predicate);
                };
                Dictionary.prototype.first = function (predicate) {
                    return Array.first(this.innerArray, predicate);
                };
                Dictionary.prototype.last = function (predicate) {
                    return Array.last(this.innerArray, predicate);
                };
                Dictionary.prototype.any = function (predicate) {
                    return Array.any(this.innerArray, predicate);
                };
                Dictionary.prototype.count = function (predicate) {
                    return Array.count(this.innerArray, predicate);
                };
                Dictionary.prototype.sum = function (predicate) {
                    if (Object.isNull(predicate))
                        throw new Error("Predicate can not be null.");
                    return Array.sum(this.innerArray, predicate);
                };
                Dictionary.prototype.orderBy = function (predicate) {
                    if (Object.isNull(predicate))
                        throw new Error("Predicate can not be null.");
                    return new Dictionary(Array.orderBy(this.innerArray, predicate));
                };
                Dictionary.prototype.orderByDesc = function (predicate) {
                    if (Object.isNull(predicate))
                        throw new Error("Predicate can not be null.");
                    return new Dictionary(Array.orderByDesc(this.innerArray, predicate));
                };
                Dictionary.prototype.getInnerArray = function () {
                    return this.innerArray;
                };
                Dictionary.prototype.get = function (key) {
                    var pair = this.firstOrDefault(function (x) { return x.key === key; });
                    if (Object.isNull(pair))
                        throw new Error("The given key was not present in the dictionary.");
                    return pair.value;
                };
                Dictionary.prototype.keyOf = function (value) {
                    var pair = this.firstOrDefault(function (x) { return x.value === value; });
                    if (Object.isNull(pair))
                        throw new Error("The given value was not present in the dictionary.");
                    return pair.key;
                };
                Dictionary.prototype.add = function (key, value) {
                    if (Object.isNull(key))
                        throw new Error("Key can not be null.");
                    if (this.containsKey(key))
                        throw new Error("An element with the same key already exists in the Dictionary<TKey, TValue>.");
                    this.innerArray.push({ key: key, value: value });
                };
                Dictionary.prototype.addRange = function (value) {
                    var i;
                    if (!Object.isNull(value) && !Object.isNull(value.getInnerArray))
                        value = value.getInnerArray();
                    if (!(value instanceof Array))
                        throw new Error("value is must be an array or an IEnumerable class.");
                    for (i = 0; i < value.length; i++) {
                        var innerValue = value[i];
                        if (Object.isNull(innerValue))
                            throw new Error("Item can not be null");
                        this.add(innerValue.key, innerValue.value);
                    }
                    ;
                };
                Dictionary.prototype.pop = function () {
                    return this.innerArray.pop();
                };
                Dictionary.prototype.remove = function (key) {
                    var pair = this.firstOrDefault(function (x) { return x.key === key; });
                    if (Object.isNull(pair))
                        throw new Error("The given key was not present in the dictionary.");
                    Array.remove(this.innerArray, pair);
                };
                Dictionary.prototype.removeAll = function (predicate) {
                    return Array.removeAll(this.innerArray, predicate);
                };
                Dictionary.prototype.clear = function () {
                    // we prefer to execute remove all and not create a new array, to
                    // preserve the reference to the original array, if someone used the
                    // getInnerArray method.
                    this.removeAll();
                };
                return Dictionary;
            }());
            Core.Dictionary = Dictionary;
        })(Core = Angular.Core || (Angular.Core = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="core/Dictionary.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Dictionary = Angular.Core.Dictionary;
        var BuildInfo = (function () {
            function BuildInfo() {
                if (BuildInfo.internalInstance != null)
                    throw new Error("The program does not allow more than one instance of BuildInfo.");
                if (MiracleDevs != null && MiracleDevs["BuildInfo"] != null) {
                    this.version = MiracleDevs["BuildInfo"].version;
                    this.company = MiracleDevs["BuildInfo"].company;
                    this.configuration = MiracleDevs["BuildInfo"].configuration;
                    var data = MiracleDevs["BuildInfo"].data;
                    if (data != null) {
                        this.data = new Dictionary();
                        for (var property in data) {
                            if (data.hasOwnProperty(property)) {
                                this.data.add(property, data[property]);
                            }
                        }
                    }
                }
                this.version = this.version || "1.0.0.0";
                this.company = this.company || "Miracle Devs";
                this.configuration = this.configuration || "debug";
                this.data = this.data || new Dictionary();
            }
            Object.defineProperty(BuildInfo.prototype, "isDebug", {
                get: function () { return this.configuration.toLowerCase() === "debug"; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuildInfo.prototype, "isRelease", {
                get: function () { return this.configuration.toLowerCase() === "release"; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuildInfo, "instance", {
                get: function () {
                    return BuildInfo.internalInstance || (BuildInfo.internalInstance = new BuildInfo());
                },
                enumerable: true,
                configurable: true
            });
            BuildInfo.prototype.getData = function (key) {
                if (!this.data.containsKey(key))
                    return null;
                return this.data.get(key);
            };
            return BuildInfo;
        }());
        Angular.BuildInfo = BuildInfo;
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
Function.prototype.getFunctionName = function () {
    var f = typeof this == "function";
    var s = f && ((this.name && ["", this.name]) || this.toString().match(/function ([^\(]+)/));
    return (!f && "not a function") || (s && s[1] || "anonymous");
};
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
Object.getTypeName = function (obj) {
    if (Object.isNull(obj))
        throw new Error("Object can not be null.");
    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec((obj).constructor.toString());
    return (results && results.length > 1) ? results[1] : "";
};
Object.isEqualTo = function (source, other, ignore, checkObjectType) {
    if (ignore === void 0) { ignore = null; }
    if (checkObjectType === void 0) { checkObjectType = true; }
    if (Object.isNull(source) && Object.isNull(other))
        return true;
    if ((!Object.isNull(source) && Object.isNull(other)) ||
        (Object.isNull(source) && !Object.isNull(other)))
        return false;
    if (checkObjectType && Object.getTypeName(source) !== Object.getTypeName(other))
        return false;
    if ((Object.getTypeName(source) === "Number" && Object.getTypeName(other) === "Number") ||
        (Object.getTypeName(source) === "String" && Object.getTypeName(other) === "String") ||
        (Object.getTypeName(source) === "Boolean" && Object.getTypeName(other) === "Boolean")) {
        return (source === other);
    }
    if (Object.getTypeName(source) === "Date" && Object.getTypeName(other) === "Date") {
        return source.getTime() === other.getTime();
    }
    if (source instanceof Array && other instanceof Array) {
        if (source.length !== other.length)
            return false;
        for (var arrayIndex = 0; arrayIndex < source.length; arrayIndex++) {
            if (!Object.isEqualTo(source[arrayIndex], other[arrayIndex], ignore, checkObjectType)) {
                return false;
            }
        }
    }
    else {
        var sourceKeys = Object.keys(source);
        for (var index in sourceKeys) {
            if (sourceKeys.hasOwnProperty(index)) {
                var key = sourceKeys[index];
                if (!source.hasOwnProperty(key))
                    continue;
                if (!Object.isNull(ignore) && Array.contains(ignore, key))
                    continue;
                var sourceValue = source[key];
                var otherValue = other[key];
                if (!Object.isEqualTo(sourceValue, otherValue, ignore, checkObjectType)) {
                    return false;
                }
            }
        }
    }
    return true;
};
Object.getDifference = function (source, other, ignore, checkObjectType) {
    if (ignore === void 0) { ignore = null; }
    if (checkObjectType === void 0) { checkObjectType = true; }
    var difference;
    if (Object.isNull(source) && Object.isNull(other))
        return null;
    if ((!Object.isNull(source) && Object.isNull(other)) ||
        (Object.isNull(source) && !Object.isNull(other)))
        return "different value";
    if (checkObjectType && Object.getTypeName(source) !== Object.getTypeName(other))
        return "different type";
    if ((Object.getTypeName(source) === "Number" && Object.getTypeName(other) === "Number") ||
        (Object.getTypeName(source) === "String" && Object.getTypeName(other) === "String") ||
        (Object.getTypeName(source) === "Boolean" && Object.getTypeName(other) === "Boolean")) {
        return source !== other ? "different value" : null;
    }
    if (Object.getTypeName(source) === "Date" && Object.getTypeName(other) === "Date") {
        return source.getTime() !== other.getTime() ? "different value" : null;
    }
    if (source instanceof Array && other instanceof Array) {
        if (source.length !== other.length)
            return "different lengths";
        for (var arrayIndex = 0; arrayIndex < source.length; arrayIndex++) {
            difference = Object.getDifference(source[arrayIndex], other[arrayIndex], ignore, checkObjectType);
            if (!String.isNullOrEmpty(difference)) {
                return difference + " for " + (arrayIndex + 1) + "th element";
            }
        }
    }
    else {
        var sourceKeys = Object.keys(source);
        for (var index in sourceKeys) {
            if (sourceKeys.hasOwnProperty(index)) {
                var key = sourceKeys[index];
                if (!source.hasOwnProperty(key))
                    continue;
                if (!Object.isNull(ignore) && Array.contains(ignore, key))
                    continue;
                var sourceValue = source[key];
                var otherValue = other[key];
                difference = Object.getDifference(sourceValue, otherValue, ignore, checkObjectType);
                if (!String.isNullOrEmpty(difference)) {
                    return difference + " in " + key;
                }
            }
        }
    }
    return null;
};
Object.clone = function (object, ignore) {
    if (Object.getTypeName(object) === "Number" ||
        Object.getTypeName(object) === "String" ||
        Object.getTypeName(object) === "Boolean") {
        return object;
    }
    if (Object.getTypeName(object) === "Date") {
        return new Date(object.getTime());
    }
    var newObject = object instanceof Array ? [] : {};
    function clone(source, destination) {
        var isArray = source instanceof Array;
        var sourceKeys = (isArray) ? source : Object.keys(source);
        for (var index in sourceKeys) {
            if (sourceKeys.hasOwnProperty(index)) {
                var key = (isArray) ? index : sourceKeys[index];
                if (!isArray && !source.hasOwnProperty(key))
                    continue;
                if (!isArray && !Object.isNull(ignore) && Array.contains(ignore, key))
                    continue;
                var thisValue = source[key];
                if (typeof (thisValue) == "number" || typeof (thisValue) == "string" || typeof (thisValue) == "boolean" || thisValue == null) {
                    destination[key] = thisValue;
                }
                else if (thisValue instanceof Date) {
                    destination[key] = new Date(thisValue.valueOf());
                }
                else if (thisValue instanceof Array) {
                    destination[key] = new Array();
                    clone(thisValue, destination[key]);
                }
                else {
                    destination[key] = new Object();
                    clone(thisValue, destination[key]);
                }
            }
        }
    }
    clone(object, newObject);
    return newObject;
};
Object.extendInstance = function (object, classType) {
    if (object instanceof classType)
        return object;
    object.__proto__ = classType.prototype;
    classType.call(object);
    return object;
};
Object.isNull = function (obj) {
    return obj === null || obj === undefined;
};
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
    Object.keys = (function () {
        "use strict";
        var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = !({ toString: null }).propertyIsEnumerable("toString"), dontEnums = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor"
        ], dontEnumsLength = dontEnums.length;
        return function (obj) {
            if (typeof obj !== "object" && (typeof obj !== "function" || obj === null)) {
                throw new TypeError("Object.keys called on non-object");
            }
            var result = [], prop, i;
            for (prop in obj) {
                if (hasOwnProperty.call(obj, prop)) {
                    result.push(prop);
                }
            }
            if (hasDontEnumBug) {
                for (i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i])) {
                        result.push(dontEnums[i]);
                    }
                }
            }
            return result;
        };
    })();
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Services;
        (function (Services) {
            var AngularServices = (function () {
                function AngularServices() {
                }
                Object.defineProperty(AngularServices, "translateProvider", {
                    get: function () { return "$translateProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "translate", {
                    get: function () { return "$translate"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "anchorScrollProvider", {
                    get: function () { return "$anchorScrollProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "animateProvider", {
                    get: function () { return "$animateProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "compileProvider", {
                    get: function () { return "$compileProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "controllerProvider", {
                    get: function () { return "$controllerProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "filterProvider", {
                    get: function () { return "$filterProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "httpProvider", {
                    get: function () { return "$httpProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "interpolateProvider", {
                    get: function () { return "$interpolateProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "locationProvider", {
                    get: function () { return "$locationProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "logProvider", {
                    get: function () { return "$logProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "modelOptionsProvider", {
                    get: function () { return "$modelOptionsProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "parseProvider", {
                    get: function () { return "$parseProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "qProvider", {
                    get: function () { return "$qProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "rootScopeProvider", {
                    get: function () { return "$rootScopeProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "sceDelegateProvider", {
                    get: function () { return "$sceDelegateProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "sceProvider", {
                    get: function () { return "$sceProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "templateRequestProvider", {
                    get: function () { return "$templateRequestProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "ervice", {
                    get: function () { return "$ervice"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "anchorScroll", {
                    get: function () { return "$anchorScroll"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "animate", {
                    get: function () { return "$animate"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "animateCss", {
                    get: function () { return "$animateCss"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "cacheFactory", {
                    get: function () { return "$cacheFactory"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "compile", {
                    get: function () { return "$compile"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "controller", {
                    get: function () { return "$controller"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "document", {
                    get: function () { return "$document"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "exceptionHandler", {
                    get: function () { return "$exceptionHandler"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "filter", {
                    get: function () { return "$filter"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "http", {
                    get: function () { return "$http"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "httpBackend", {
                    get: function () { return "$httpBackend"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "httpParamSerializer", {
                    get: function () { return "$httpParamSerializer"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "httpParamSerializerJQLike", {
                    get: function () { return "$httpParamSerializerJQLike"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "interpolate", {
                    get: function () { return "$interpolate"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "interval", {
                    get: function () { return "$interval"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "jsonpCallbacks", {
                    get: function () { return "$jsonpCallbacks"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "locale", {
                    get: function () { return "$locale"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "location", {
                    get: function () { return "$location"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "log", {
                    get: function () { return "$log"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "modelOptions", {
                    get: function () { return "$modelOptions"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "parse", {
                    get: function () { return "$parse"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "q", {
                    get: function () { return "$q"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "rootElement", {
                    get: function () { return "$rootElement"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "rootScope", {
                    get: function () { return "$rootScope"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "scope", {
                    get: function () { return "$scope"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "sce", {
                    get: function () { return "$sce"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "sceDelegate", {
                    get: function () { return "$sceDelegate"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "templateCache", {
                    get: function () { return "$templateCache"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "templateRequest", {
                    get: function () { return "$templateRequest"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "timeout", {
                    get: function () { return "$timeout"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "window", {
                    get: function () { return "$window"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "xhrFactory", {
                    get: function () { return "$xhrFactory"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "injector", {
                    get: function () { return "$injector"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "provide", {
                    get: function () { return "$provide"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "rootRouter", {
                    get: function () { return "$rootRouter"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "routerRootComponent", {
                    get: function () { return "$routerRootComponent"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "routeProvider", {
                    get: function () { return "$routeProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "route", {
                    get: function () { return "$route"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "routeParams", {
                    get: function () { return "$routeParams"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "sanitize", {
                    get: function () { return "$sanitize"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "sanitizeProvider", {
                    get: function () { return "$sanitizeProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "touchProvider", {
                    get: function () { return "$touchProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "state", {
                    get: function () { return "$state"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "stateProvider", {
                    get: function () { return "$stateProvider"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "stateParams", {
                    get: function () { return "$stateParams"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularServices, "urlRouterProvider", {
                    get: function () { return "$urlRouterProvider"; },
                    enumerable: true,
                    configurable: true
                });
                return AngularServices;
            }());
            Services.AngularServices = AngularServices;
        })(Services = Angular.Services || (Angular.Services = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="core/Function.ts"/>
///<reference path="core/Object.ts"/>
///<reference path="services/AngularServices.ts"/>
///<reference path="../typings/angularjs/angular.d.ts"/>
///<reference path="../typings/angular-translate/angular-translate.d.ts"/>
///<reference path="../typings/angular-ui-router/angular-ui-router.d.ts"/>
///<reference path="interfaces/IControllerRegister.ts"/>
///<reference path="interfaces/IServiceRegister.ts"/>
///<reference path="interfaces/IDirectiveRegister.ts"/>
///<reference path="interfaces/IFilterRegister.ts"/>
///<reference path="interfaces/IInterceptorRegister.ts"/>
///<reference path="services/ILoggingService.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var AngularServices = Angular.Services.AngularServices;
        var ModuleBase = (function () {
            function ModuleBase() {
                var _this = this;
                this.controllersQueue = new Array();
                this.interceptorsQueue = new Array();
                this.module = angular.module(this.getModuleName(), this.getModuleDependencies());
                this.preRegister();
                this.module.config([AngularServices.stateProvider, AngularServices.urlRouterProvider, AngularServices.httpProvider, AngularServices.locationProvider, function (stateProvider, urlRouterProvider, httpProvider, location) { return _this.configureRoutes(stateProvider, urlRouterProvider, httpProvider, location); }]);
                this.module.config([AngularServices.translateProvider, function (translateProvider) { return _this.configureTranslator(translateProvider); }]);
                this.module.config([AngularServices.compileProvider, function (compileProvider) { return compileProvider.debugInfoEnabled(false); }]);
                this.module.config([AngularServices.httpProvider, function (provider) { return _this.registerInterceptors(provider); }]);
                this.module.config([AngularServices.stateProvider, function (provider) { return _this.registerStates(provider); }]);
                this.module.run([AngularServices.rootScope, AngularServices.state, AngularServices.injector, function (rootScope, state, injector) { return _this.authorizeRoute(rootScope, state, injector); }]);
            }
            ModuleBase.prototype.getModule = function () {
                return this.module;
            };
            ModuleBase.prototype.getModuleName = function () {
                throw new Error("Please override getModuleName method and provide a name for the module.");
            };
            ModuleBase.prototype.registerController = function (register) {
                if (register == null)
                    throw new Error("Problems registering the controller.");
                if (!Object.isNull(register.dependencies))
                    register.controller.$inject = register.dependencies;
                this.module.controller(register.name, register.controller);
                this.logger.writeMessage("registering " + register.name);
                if (this.stateProvider == null)
                    this.controllersQueue.push(register);
                else
                    this.registerControllerState(register);
            };
            ModuleBase.prototype.registerService = function (register) {
                if (register == null)
                    throw new Error("Problems registering the service.");
                var parameters = (register.dependencies || new Array());
                parameters.push(register.factory);
                this.module.factory(register.name, parameters);
                this.logger.writeMessage("registering " + register.name);
            };
            ModuleBase.prototype.registerLoggingService = function (register) {
                if (register == null)
                    throw new Error("Problems registering the logging service.");
                var parameters = (register.dependencies || new Array());
                parameters.push(register.factory);
                this.module.factory(register.name, parameters);
                this.logger = register.factory();
                this.logger.writeMessage("registering " + register.name);
            };
            ModuleBase.prototype.registerInterceptor = function (register) {
                if (register == null)
                    throw new Error("Problems registering the Interceptor.");
                if (this.httpProvider == null)
                    this.interceptorsQueue.push(register);
                else {
                    var parameters = (register.dependencies || new Array());
                    parameters.push(register.factory);
                    this.httpProvider.interceptors.push(parameters);
                }
                this.logger.writeMessage("registering " + register.name);
            };
            ModuleBase.prototype.registerFilter = function (register) {
                if (register == null)
                    throw new Error("Problems registering the filter.");
                var parameters = (register.dependencies || new Array());
                parameters.push(register.factory);
                this.module.filter(register.name, parameters);
                this.logger.writeMessage("registering " + register.name);
            };
            ModuleBase.prototype.registerDirective = function (register) {
                if (register == null)
                    throw new Error("Problems registering the directive.");
                var parameters = (register.dependencies || new Array());
                parameters.push(register.factory);
                this.module.directive(register.name, parameters);
                this.logger.writeMessage("registering " + register.name);
            };
            ModuleBase.prototype.registerStates = function (stateProvider) {
                this.stateProvider = stateProvider;
                if (!Object.isNull(this.controllersQueue)) {
                    for (var i = 0; i < this.controllersQueue.length; i++) {
                        this.registerControllerState(this.controllersQueue[i]);
                    }
                    this.controllersQueue = null;
                }
            };
            ModuleBase.prototype.registerInterceptors = function (httpProvider) {
                this.httpProvider = httpProvider;
                if (!Object.isNull(this.interceptorsQueue)) {
                    for (var i = 0; i < this.interceptorsQueue.length; i++) {
                        this.registerInterceptor(this.interceptorsQueue[i]);
                    }
                    this.interceptorsQueue = null;
                }
            };
            ModuleBase.prototype.registerControllerState = function (register) {
                if (register.stateName == null)
                    return;
                this.stateProvider.state(register.stateName, {
                    url: register.stateUrl,
                    templateUrl: register.viewUrl,
                    authenticate: register.authenticate,
                    resolve: register.resolve
                });
            };
            ModuleBase.prototype.configureRoutes = function (stateProvider, urlRouterProvider, httpProvider, locationProvider) {
            };
            ModuleBase.prototype.authorizeRoute = function (rootScope, state, injector) {
            };
            ModuleBase.prototype.configureTranslator = function (translateProvider) {
            };
            ModuleBase.prototype.getModuleDependencies = function () {
                throw new Error("Please override getModuleDependencies method and provide other required modules or an empty array.");
            };
            ModuleBase.prototype.preRegister = function () {
            };
            return ModuleBase;
        }());
        Angular.ModuleBase = ModuleBase;
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Services;
        (function (Services) {
            var ServiceBase = (function () {
                function ServiceBase() {
                }
                return ServiceBase;
            }());
            Services.ServiceBase = ServiceBase;
        })(Services = Angular.Services || (Angular.Services = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Services;
        (function (Services) {
            var FrameworkServices = (function () {
                function FrameworkServices() {
                }
                Object.defineProperty(FrameworkServices, "alertService", {
                    get: function () { return "AlertService"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FrameworkServices, "modalService", {
                    get: function () { return "ModalService"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FrameworkServices, "fileManagementService", {
                    get: function () { return "FileManagementService"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FrameworkServices, "loggingService", {
                    get: function () { return "LoggingService"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FrameworkServices, "geolocationService", {
                    get: function () { return "GeolocationService"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FrameworkServices, "urlService", {
                    get: function () { return "urlService"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FrameworkServices, "dateService", {
                    get: function () { return "dateService"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FrameworkServices, "messageBus", {
                    get: function () { return "MessageBus"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FrameworkServices, "keyProcessorService", {
                    get: function () { return "KeyProcessorService"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FrameworkServices, "modalInstance", {
                    get: function () { return "$modalInstance"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FrameworkServices, "modalParameters", {
                    get: function () { return "$modalParameters"; },
                    enumerable: true,
                    configurable: true
                });
                return FrameworkServices;
            }());
            Services.FrameworkServices = FrameworkServices;
        })(Services = Angular.Services || (Angular.Services = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
;
String.empty = "";
String.padLeft = function (value, length, padChar) {
    while (value.length < length) {
        value += padChar;
    }
    return value;
};
String.padRight = function (value, length, padChar) {
    while (value.length < length) {
        value = padChar + value;
    }
    return value;
};
String.isString = function (value) {
    return (typeof (value) === "string" || value instanceof String);
};
String.isNullOrEmpty = function (value) {
    return value == null || value === "";
};
String.isNullOrWhiteSpace = function (value) {
    return value == null || value.replace(/ /g, "") === "";
};
String.format = function (format) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (Object.isNull(format))
        throw new Error("Format string can not be null.");
    return String(format).replace(/\{([0-9]+)\}/g, function (match, index) {
        index = parseInt(index, 10);
        if (index < 0 || index >= args.length) {
            throw new Error("Index is zero based. Must be greater than 0 and less than " + (args.length - 1) + ".");
        }
        return args[index];
    });
};
String.formatArray = function (format, args) {
    if (Object.isNull(format))
        throw new Error("Format string can not be null.");
    return String(format).replace(/\{([0-9]+)\}/g, function (match, index) {
        index = parseInt(index, 10);
        if (index < 0 || index >= args.length) {
            throw new Error("Index is zero based. Must be greater than 0 and less than " + (args.length - 1) + ".");
        }
        return args[index];
    });
};
String.join = function (separator, values) {
    if (Object.isNull(values))
        return null;
    var finalText = String.empty;
    var finalIndex = values.length - 1;
    values.forEach(function (value, index) {
        finalText += value;
        if (index !== finalIndex) {
            finalText += separator;
        }
    });
    return finalText;
};
String.prototype.padLeft = function (length, padChar) {
    return String.padLeft(this, length, padChar);
};
String.prototype.padRight = function (length, padChar) {
    return String.padRight(this, length, padChar);
};
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="String.ts" />
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
    DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
})(DayOfWeek || (DayOfWeek = {}));
Date.prototype.getNextWeekDay = function (dayOfWeek) {
    var from = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    var daysUntil = (dayOfWeek - from.getDay() + 7) % 7;
    return from.addDays(daysUntil);
};
Date.prototype.getPreviousWeekDay = function (dayOfWeek) {
    var from = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    var daysUntil = (from.getDay() - dayOfWeek + 7) % 7;
    return from.addDays(-daysUntil);
};
Date.prototype.getTwoDigitYear = function () {
    var year = this.getFullYear().toString();
    return (year.length < 2) ? year.padRight(2, "0") : year.substr(year.length - 2, 2);
};
Date.prototype.getTwoDigitUTCYear = function () {
    var year = this.getUTCFullYear().toString();
    return (year.length < 2) ? year.padRight(2, "0") : year.substr(year.length - 2, 2);
};
Date.prototype.format = function (format) {
    return format.replace(/yyyy/g, this.getFullYear().toString())
        .replace(/yy/g, this.getTwoDigitYear())
        .replace(/MM/g, (this.getMonth() + 1).toString().padRight(2, "0"))
        .replace(/M/g, (this.getMonth() + 1).toString())
        .replace(/dd/g, this.getDate().toString().padRight(2, "0"))
        .replace(/d/g, this.getDate().toString())
        .replace(/ww/g, this.getDay().toString().padRight(2, "0"))
        .replace(/w/g, this.getDay().toString())
        .replace(/hh/g, this.getHours().toString().padRight(2, "0"))
        .replace(/h/g, this.getHours().toString())
        .replace(/mm/g, this.getMinutes().toString().padRight(2, "0"))
        .replace(/m/g, this.getMinutes().toString())
        .replace(/ss/g, this.getSeconds().toString().padRight(2, "0"))
        .replace(/s/g, this.getSeconds().toString())
        .replace(/fff/g, this.getMilliseconds().toString().padRight(3, "0"))
        .replace(/ff/g, this.getMilliseconds().toString().padRight(2, "0"))
        .replace(/f/g, this.getMilliseconds().toString());
};
Date.prototype.formatUTC = function (format) {
    return format.replace(/yyyy/g, this.getUTCFullYear().toString())
        .replace(/yy/g, this.getTwoDigitUTCYear())
        .replace(/MM/g, (this.getUTCMonth() + 1).toString().padRight(2, "0"))
        .replace(/M/g, (this.getUTCMonth() + 1).toString())
        .replace(/dd/g, this.getUTCDate().toString().padRight(2, "0"))
        .replace(/d/g, this.getUTCDate().toString())
        .replace(/ww/g, this.getUTCDay().toString().padRight(2, "0"))
        .replace(/w/g, this.getUTCDay().toString())
        .replace(/hh/g, this.getUTCHours().toString().padRight(2, "0"))
        .replace(/h/g, this.getUTCHours().toString())
        .replace(/mm/g, this.getUTCMinutes().toString().padRight(2, "0"))
        .replace(/m/g, this.getUTCMinutes().toString())
        .replace(/ss/g, this.getUTCSeconds().toString().padRight(2, "0"))
        .replace(/s/g, this.getUTCSeconds().toString())
        .replace(/fff/g, this.getUTCMilliseconds().toString().padRight(3, "0"))
        .replace(/ff/g, this.getUTCMilliseconds().toString().padRight(2, "0"))
        .replace(/f/g, this.getUTCMilliseconds().toString());
};
Date.prototype.addMilliseconds = function (ms) {
    var date = new Date(this.valueOf());
    date.setMilliseconds(date.getMilliseconds() + ms);
    return date;
};
Date.prototype.addSeconds = function (seconds) {
    var date = new Date(this.valueOf());
    date.setSeconds(date.getSeconds() + seconds);
    return date;
};
Date.prototype.addMinutes = function (minutes) {
    var date = new Date(this.valueOf());
    date.setMinutes(date.getMinutes() + minutes);
    return date;
};
Date.prototype.addHours = function (hours) {
    var date = new Date(this.valueOf());
    date.setHours(date.getHours() + hours);
    return date;
};
Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};
Date.prototype.addMonths = function (months) {
    var date = new Date(this.valueOf());
    date.setMonth(date.getMonth() + months);
    return date;
};
Date.prototype.addYears = function (years) {
    var date = new Date(this.valueOf());
    date.setFullYear(date.getFullYear() + years);
    return date;
};
Date.fromIso8601 = function (value) {
    var date = new Date();
    date.fromIso8601(value);
    return date;
};
Date.prototype.fromIso8601 = function (value) {
    try {
        var regexp = "([0-9]{2,4})(-([0-9]{1,2})(-([0-9]{1,2})" +
            "(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?" +
            "(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?";
        var d = value.match(new RegExp(regexp));
        var date = new Date(parseInt(d[1]), 0, 1);
        var offset = 0;
        if (d[3])
            date.setMonth(parseInt(d[3]) - 1);
        if (d[5])
            date.setDate(parseInt(d[5]));
        if (d[7])
            date.setHours(parseInt(d[7]));
        if (d[8])
            date.setMinutes(parseInt(d[8]));
        if (d[10])
            date.setSeconds(parseInt(d[10]));
        if (d[12])
            date.setMilliseconds(Number("0." + d[12]) * 1000);
        if (d[14]) {
            offset = (Number(d[16]) * 60) + Number(d[17]);
            offset *= ((d[15] === "-") ? 1 : -1);
        }
        offset -= date.getTimezoneOffset();
        var time = (Number(date) + (offset * 60 * 1000));
        this.setTime(Number(time));
    }
    catch (e) {
        throw new Error("String is not recognized as a valid ISO 8601 date.");
    }
    return this;
};
if (!Date.prototype.toISOString) {
    Date.prototype.toISOString = function () {
        return this.getUTCFullYear()
            + "-" + String.padRight((this.getUTCMonth() + 1).toString(), 2, "0")
            + "-" + String.padRight(this.getUTCDate().toString(), 2, "0")
            + "T" + String.padRight(this.getUTCHours().toString(), 2, "0")
            + ":" + String.padRight(this.getUTCMinutes().toString(), 2, "0")
            + ":" + String.padRight(this.getUTCSeconds().toString(), 2, "0")
            + "." + String((this.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5)
            + "Z";
    };
}
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="ServiceBase.ts" />
///<reference path="FrameworkServices.ts"/>
///<reference path="../core/Date.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Services;
        (function (Services) {
            var LoggingServiceBase = (function (_super) {
                __extends(LoggingServiceBase, _super);
                function LoggingServiceBase() {
                    _super.apply(this, arguments);
                }
                LoggingServiceBase.prototype.writeMessage = function (message) { };
                LoggingServiceBase.prototype.writeWarning = function (message) { };
                LoggingServiceBase.prototype.writeError = function (message) { };
                LoggingServiceBase.prototype.getString = function (message) {
                    return "[" + new Date().format("MM/dd/yy hh:mm:ss.fff") + "] - " + message;
                };
                return LoggingServiceBase;
            }(Services.ServiceBase));
            Services.LoggingServiceBase = LoggingServiceBase;
            var DummyLoggingService = (function (_super) {
                __extends(DummyLoggingService, _super);
                function DummyLoggingService() {
                    _super.apply(this, arguments);
                }
                DummyLoggingService.prototype.writeError = function (message) { console.error(this.getString(message)); };
                return DummyLoggingService;
            }(LoggingServiceBase));
            Services.DummyLoggingService = DummyLoggingService;
            var LoggingService = (function (_super) {
                __extends(LoggingService, _super);
                function LoggingService() {
                    _super.apply(this, arguments);
                }
                LoggingService.prototype.writeMessage = function (message) {
                    console.info(this.getString(message));
                };
                LoggingService.prototype.writeWarning = function (message) {
                    console.warn(this.getString(message));
                };
                LoggingService.prototype.writeError = function (message) {
                    console.error(this.getString(message));
                };
                LoggingService.factory = function () {
                    return Angular.BuildInfo.instance.isDebug ? new LoggingService() : new DummyLoggingService();
                };
                LoggingService.register = {
                    name: Services.FrameworkServices.loggingService,
                    factory: LoggingService.factory
                };
                return LoggingService;
            }(LoggingServiceBase));
            Services.LoggingService = LoggingService;
        })(Services = Angular.Services || (Angular.Services = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="ModuleBase.ts"/>
///<reference path="services/LoggingService.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var LoggingService = Angular.Services.LoggingService;
        var FrameworkModule = (function (_super) {
            __extends(FrameworkModule, _super);
            function FrameworkModule() {
                if (FrameworkModule.internalInstance != null)
                    throw new Error("The program does not allow more than one instance of the ModuleBase.");
                _super.call(this);
                FrameworkModule.internalInstance = this;
                this.logger.writeMessage("creating application");
            }
            Object.defineProperty(FrameworkModule, "instance", {
                get: function () { return FrameworkModule.internalInstance; },
                enumerable: true,
                configurable: true
            });
            FrameworkModule.prototype.getModuleName = function () {
                return "miracledevs-framework";
            };
            FrameworkModule.prototype.preRegister = function () {
                this.registerLoggingService(LoggingService.register);
            };
            FrameworkModule.prototype.configureRoutes = function (stateProvider, urlRouterProvider, httpProvider, location) {
            };
            FrameworkModule.prototype.authorizeRoute = function (rootScope, state, injector) {
            };
            FrameworkModule.prototype.getModuleDependencies = function () {
                return ["ui.router", "ngAnimate", "pascalprecht.translate"];
            };
            FrameworkModule.internalInstance = new FrameworkModule();
            return FrameworkModule;
        }(Angular.ModuleBase));
        Angular.FrameworkModule = FrameworkModule;
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../services/FrameworkServices.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Controllers;
        (function (Controllers) {
            var FrameworkServices = Angular.Services.FrameworkServices;
            var ControllerBase = (function () {
                function ControllerBase(scope, injector) {
                    var _this = this;
                    this.scope = scope;
                    this.injector = injector;
                    this.scope.$on("$destroy", function () { return _this.dispose(); });
                }
                ControllerBase.prototype.dispose = function () {
                    this.logger.writeMessage("Disposing " + Object.getTypeName(this));
                };
                ControllerBase.prototype.getService = function (service) {
                    if (service == null)
                        return null;
                    return this.injector.get(service, null);
                };
                ControllerBase.prototype.open = function (controller, parameters, staticDialog, keyboard) {
                    return this.getService(FrameworkServices.modalService).open(controller, parameters, staticDialog, keyboard);
                };
                ControllerBase.prototype.call = function (call, success, loading, fail) {
                    var _this = this;
                    if (!Object.isNull(loading))
                        loading(true);
                    call()
                        .then(function (result) {
                        if (!Object.isNull(loading))
                            loading(false);
                        if (!Object.isNull(success)) {
                            success(result);
                        }
                    })
                        .catch(function (error) {
                        if (!Object.isNull(loading))
                            loading(false);
                        if (!Object.isNull(fail))
                            fail(error);
                        _this.handleException(error);
                    });
                };
                ControllerBase.prototype.showErrors = function (messages) {
                    if (messages.length === 0)
                        return;
                    for (var i = 0; i < messages.length; i++) {
                        this.showError(messages[i]);
                    }
                };
                ControllerBase.prototype.showWarnings = function (messages) {
                    if (messages.length === 0)
                        return;
                    for (var i = 0; i < messages.length; i++) {
                        this.showWarning(messages[i]);
                    }
                };
                ControllerBase.prototype.showError = function (message) {
                    this.alertService.addError(message);
                };
                ControllerBase.prototype.showWarning = function (message) {
                    this.alertService.addWarning(message);
                };
                ControllerBase.prototype.showMessage = function (message) {
                    this.alertService.addMessage(message);
                };
                ControllerBase.prototype.handleException = function (ex) {
                    if (Object.isNull(ex))
                        return;
                    // if ex.data is not null, it's probably a 
                    // an http promise exception.
                    if (!Object.isNull(ex.data))
                        ex = ex.data;
                    if (!Object.isNull(ex.message)) {
                        this.showError(ex.message);
                    }
                    else if (!Object.isNull(ex.Message)) {
                        this.showError(ex.Message);
                    }
                    else if (!Object.isNull(ex.ExceptionMessage)) {
                        this.showError(ex.ExceptionMessage);
                    }
                    else if (!Object.isNull(ex.error) && !Object.isNull(ex.error.message)) {
                        this.showError(ex.error.message);
                    }
                };
                ControllerBase.prototype.changeState = function (state, params, reload) {
                    if (reload === void 0) { reload = false; }
                    return this.stateService.go(state, params, { reload: reload });
                };
                return ControllerBase;
            }());
            Controllers.ControllerBase = ControllerBase;
        })(Controllers = Angular.Controllers || (Angular.Controllers = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Core;
        (function (Core) {
            var FileMimeType = (function () {
                function FileMimeType() {
                    this.extensions = new Core.Dictionary();
                    this.extensions.add(".ez", "application/andrew-inset");
                    this.extensions.add(".aw", "application/applixware");
                    this.extensions.add(".atom", "application/atom+xml");
                    this.extensions.add(".atomcat", "application/atomcat+xml");
                    this.extensions.add(".atomsvc", "application/atomsvc+xml");
                    this.extensions.add(".ccxml", "application/ccxml+xml");
                    this.extensions.add(".cu", "application/cu-seeme");
                    this.extensions.add(".davmount", "application/davmount+xml");
                    this.extensions.add(".ecma", "application/ecmascript");
                    this.extensions.add(".emma", "application/emma+xml");
                    this.extensions.add(".epub", "application/epub+zip");
                    this.extensions.add(".pfr", "application/font-tdpfr");
                    this.extensions.add(".stk", "application/hyperstudio");
                    this.extensions.add(".jar", "application/java-archive");
                    this.extensions.add(".ser", "application/java-serialized-object");
                    this.extensions.add(".class", "application/java-vm");
                    this.extensions.add(".js", "application/javascript");
                    this.extensions.add(".json", "application/json");
                    this.extensions.add(".lostxml", "application/lost+xml");
                    this.extensions.add(".hqx", "application/mac-binhex40");
                    this.extensions.add(".cpt", "application/mac-compactpro");
                    this.extensions.add(".mrc", "application/marc");
                    this.extensions.add(".ma", "application/mathematica");
                    this.extensions.add(".nb", "application/mathematica");
                    this.extensions.add(".mb", "application/mathematica");
                    this.extensions.add(".mathml", "application/mathml+xml");
                    this.extensions.add(".mbox", "application/mbox");
                    this.extensions.add(".mscml", "application/mediaservercontrol+xml");
                    this.extensions.add(".mp4s", "application/mp4");
                    this.extensions.add(".doc", "application/msword");
                    this.extensions.add(".dot", "application/msword");
                    this.extensions.add(".mxf", "application/mxf");
                    this.extensions.add(".oda", "application/oda");
                    this.extensions.add(".opf", "application/oebps-package+xml");
                    this.extensions.add(".ogx", "application/ogg");
                    this.extensions.add(".onetoc", "application/onenote");
                    this.extensions.add(".onetoc2", "application/onenote");
                    this.extensions.add(".onetmp", "application/onenote");
                    this.extensions.add(".onepkg", "application/onenote");
                    this.extensions.add(".xer", "application/patch-ops-error+xml");
                    this.extensions.add(".pdf", "application/pdf");
                    this.extensions.add(".pgp", "application/pgp-encrypted");
                    this.extensions.add(".asc", "application/pgp-signature");
                    this.extensions.add(".sig", "application/pgp-signature");
                    this.extensions.add(".prf", "application/pics-rules");
                    this.extensions.add(".p10", "application/pkcs10");
                    this.extensions.add(".p7m", "application/pkcs7-mime");
                    this.extensions.add(".p7c", "application/pkcs7-mime");
                    this.extensions.add(".p7s", "application/pkcs7-signature");
                    this.extensions.add(".cer", "application/pkix-cert");
                    this.extensions.add(".crl", "application/pkix-crl");
                    this.extensions.add(".pkipath", "application/pkix-pkipath");
                    this.extensions.add(".pki", "application/pkixcmp");
                    this.extensions.add(".pls", "application/pls+xml");
                    this.extensions.add(".ai", "application/postscript");
                    this.extensions.add(".eps", "application/postscript");
                    this.extensions.add(".ps", "application/postscript");
                    this.extensions.add(".cww", "application/prs.cww");
                    this.extensions.add(".rdf", "application/rdf+xml");
                    this.extensions.add(".rif", "application/reginfo+xml");
                    this.extensions.add(".rnc", "application/relax-ng-compact-syntax");
                    this.extensions.add(".rl", "application/resource-lists+xml");
                    this.extensions.add(".rld", "application/resource-lists-diff+xml");
                    this.extensions.add(".rs", "application/rls-services+xml");
                    this.extensions.add(".rsd", "application/rsd+xml");
                    this.extensions.add(".rss", "application/rss+xml");
                    this.extensions.add(".rtf", "application/rtf");
                    this.extensions.add(".sbml", "application/sbml+xml");
                    this.extensions.add(".scq", "application/scvp-cv-request");
                    this.extensions.add(".scs", "application/scvp-cv-response");
                    this.extensions.add(".spq", "application/scvp-vp-request");
                    this.extensions.add(".spp", "application/scvp-vp-response");
                    this.extensions.add(".sdp", "application/sdp");
                    this.extensions.add(".setpay", "application/set-payment-initiation");
                    this.extensions.add(".setreg", "application/set-registration-initiation");
                    this.extensions.add(".shf", "application/shf+xml");
                    this.extensions.add(".smi", "application/smil+xml");
                    this.extensions.add(".smil", "application/smil+xml");
                    this.extensions.add(".rq", "application/sparql-query");
                    this.extensions.add(".srx", "application/sparql-results+xml");
                    this.extensions.add(".gram", "application/srgs");
                    this.extensions.add(".grxml", "application/srgs+xml");
                    this.extensions.add(".ssml", "application/ssml+xml");
                    this.extensions.add(".plb", "application/vnd.3gpp.pic-bw-large");
                    this.extensions.add(".psb", "application/vnd.3gpp.pic-bw-small");
                    this.extensions.add(".pvb", "application/vnd.3gpp.pic-bw-var");
                    this.extensions.add(".tcap", "application/vnd.3gpp2.tcap");
                    this.extensions.add(".pwn", "application/vnd.3m.post-it-notes");
                    this.extensions.add(".aso", "application/vnd.accpac.simply.aso");
                    this.extensions.add(".imp", "application/vnd.accpac.simply.imp");
                    this.extensions.add(".acu", "application/vnd.acucobol");
                    this.extensions.add(".atc", "application/vnd.acucorp");
                    this.extensions.add(".acutc", "application/vnd.acucorp");
                    this.extensions.add(".air", "application/vnd.adobe.air-application-installer-package+zip");
                    this.extensions.add(".xdp", "application/vnd.adobe.xdp+xml");
                    this.extensions.add(".xfdf", "application/vnd.adobe.xfdf");
                    this.extensions.add(".azf", "application/vnd.airzip.filesecure.azf");
                    this.extensions.add(".azs", "application/vnd.airzip.filesecure.azs");
                    this.extensions.add(".azw", "application/vnd.amazon.ebook");
                    this.extensions.add(".acc", "application/vnd.americandynamics.acc");
                    this.extensions.add(".ami", "application/vnd.amiga.ami");
                    this.extensions.add(".apk", "application/vnd.android.package-archive");
                    this.extensions.add(".cii", "application/vnd.anser-web-certificate-issue-initiation");
                    this.extensions.add(".fti", "application/vnd.anser-web-funds-transfer-initiation");
                    this.extensions.add(".atx", "application/vnd.antix.game-component");
                    this.extensions.add(".mpkg", "application/vnd.apple.installer+xml");
                    this.extensions.add(".swi", "application/vnd.arastra.swi");
                    this.extensions.add(".aep", "application/vnd.audiograph");
                    this.extensions.add(".mpm", "application/vnd.blueice.multipass");
                    this.extensions.add(".bmi", "application/vnd.bmi");
                    this.extensions.add(".rep", "application/vnd.businessobjects");
                    this.extensions.add(".cdxml", "application/vnd.chemdraw+xml");
                    this.extensions.add(".mmd", "application/vnd.chipnuts.karaoke-mmd");
                    this.extensions.add(".cdy", "application/vnd.cinderella");
                    this.extensions.add(".cla", "application/vnd.claymore");
                    this.extensions.add(".c4g", "application/vnd.clonk.c4group");
                    this.extensions.add(".c4d", "application/vnd.clonk.c4group");
                    this.extensions.add(".c4f", "application/vnd.clonk.c4group");
                    this.extensions.add(".c4p", "application/vnd.clonk.c4group");
                    this.extensions.add(".c4u", "application/vnd.clonk.c4group");
                    this.extensions.add(".csp", "application/vnd.commonspace");
                    this.extensions.add(".cdbcmsg", "application/vnd.contact.cmsg");
                    this.extensions.add(".cmc", "application/vnd.cosmocaller");
                    this.extensions.add(".clkx", "application/vnd.crick.clicker");
                    this.extensions.add(".clkk", "application/vnd.crick.clicker.keyboard");
                    this.extensions.add(".clkp", "application/vnd.crick.clicker.palette");
                    this.extensions.add(".clkt", "application/vnd.crick.clicker.template");
                    this.extensions.add(".clkw", "application/vnd.crick.clicker.wordbank");
                    this.extensions.add(".wbs", "application/vnd.criticaltools.wbs+xml");
                    this.extensions.add(".pml", "application/vnd.ctc-posml");
                    this.extensions.add(".ppd", "application/vnd.cups-ppd");
                    this.extensions.add(".car", "application/vnd.curl.car");
                    this.extensions.add(".pcurl", "application/vnd.curl.pcurl");
                    this.extensions.add(".rdz", "application/vnd.data-vision.rdz");
                    this.extensions.add(".fe_launch", "application/vnd.denovo.fcselayout-link");
                    this.extensions.add(".dna", "application/vnd.dna");
                    this.extensions.add(".mlp", "application/vnd.dolby.mlp");
                    this.extensions.add(".dpg", "application/vnd.dpgraph");
                    this.extensions.add(".dfac", "application/vnd.dreamfactory");
                    this.extensions.add(".geo", "application/vnd.dynageo");
                    this.extensions.add(".mag", "application/vnd.ecowin.chart");
                    this.extensions.add(".nml", "application/vnd.enliven");
                    this.extensions.add(".esf", "application/vnd.epson.esf");
                    this.extensions.add(".msf", "application/vnd.epson.msf");
                    this.extensions.add(".qam", "application/vnd.epson.quickanime");
                    this.extensions.add(".slt", "application/vnd.epson.salt");
                    this.extensions.add(".ssf", "application/vnd.epson.ssf");
                    this.extensions.add(".es3", "application/vnd.eszigno3+xml");
                    this.extensions.add(".et3", "application/vnd.eszigno3+xml");
                    this.extensions.add(".ez2", "application/vnd.ezpix-album");
                    this.extensions.add(".ez3", "application/vnd.ezpix-package");
                    this.extensions.add(".fdf", "application/vnd.fdf");
                    this.extensions.add(".mseed", "application/vnd.fdsn.mseed");
                    this.extensions.add(".seed", "application/vnd.fdsn.seed");
                    this.extensions.add(".dataless", "application/vnd.fdsn.seed");
                    this.extensions.add(".gph", "application/vnd.flographit");
                    this.extensions.add(".ftc", "application/vnd.fluxtime.clip");
                    this.extensions.add(".fm", "application/vnd.framemaker");
                    this.extensions.add(".frame", "application/vnd.framemaker");
                    this.extensions.add(".maker", "application/vnd.framemaker");
                    this.extensions.add(".book", "application/vnd.framemaker");
                    this.extensions.add(".fnc", "application/vnd.frogans.fnc");
                    this.extensions.add(".ltf", "application/vnd.frogans.ltf");
                    this.extensions.add(".fsc", "application/vnd.fsc.weblaunch");
                    this.extensions.add(".oas", "application/vnd.fujitsu.oasys");
                    this.extensions.add(".oa2", "application/vnd.fujitsu.oasys2");
                    this.extensions.add(".oa3", "application/vnd.fujitsu.oasys3");
                    this.extensions.add(".fg5", "application/vnd.fujitsu.oasysgp");
                    this.extensions.add(".bh2", "application/vnd.fujitsu.oasysprs");
                    this.extensions.add(".ddd", "application/vnd.fujixerox.ddd");
                    this.extensions.add(".xdw", "application/vnd.fujixerox.docuworks");
                    this.extensions.add(".xbd", "application/vnd.fujixerox.docuworks.binder");
                    this.extensions.add(".fzs", "application/vnd.fuzzysheet");
                    this.extensions.add(".txd", "application/vnd.genomatix.tuxedo");
                    this.extensions.add(".ggb", "application/vnd.geogebra.file");
                    this.extensions.add(".ggt", "application/vnd.geogebra.tool");
                    this.extensions.add(".gex", "application/vnd.geometry-explorer");
                    this.extensions.add(".gre", "application/vnd.geometry-explorer");
                    this.extensions.add(".gmx", "application/vnd.gmx");
                    this.extensions.add(".kml", "application/vnd.google-earth.kml+xml");
                    this.extensions.add(".kmz", "application/vnd.google-earth.kmz");
                    this.extensions.add(".gqf", "application/vnd.grafeq");
                    this.extensions.add(".gqs", "application/vnd.grafeq");
                    this.extensions.add(".gac", "application/vnd.groove-account");
                    this.extensions.add(".ghf", "application/vnd.groove-help");
                    this.extensions.add(".gim", "application/vnd.groove-identity-message");
                    this.extensions.add(".grv", "application/vnd.groove-injector");
                    this.extensions.add(".gtm", "application/vnd.groove-tool-message");
                    this.extensions.add(".tpl", "application/vnd.groove-tool-template");
                    this.extensions.add(".vcg", "application/vnd.groove-vcard");
                    this.extensions.add(".zmm", "application/vnd.handheld-entertainment+xml");
                    this.extensions.add(".hbci", "application/vnd.hbci");
                    this.extensions.add(".les", "application/vnd.hhe.lesson-player");
                    this.extensions.add(".hpgl", "application/vnd.hp-hpgl");
                    this.extensions.add(".hpid", "application/vnd.hp-hpid");
                    this.extensions.add(".hps", "application/vnd.hp-hps");
                    this.extensions.add(".jlt", "application/vnd.hp-jlyt");
                    this.extensions.add(".pcl", "application/vnd.hp-pcl");
                    this.extensions.add(".pclxl", "application/vnd.hp-pclxl");
                    this.extensions.add(".sfd-hdstx", "application/vnd.hydrostatix.sof-data");
                    this.extensions.add(".x3d", "application/vnd.hzn-3d-crossword");
                    this.extensions.add(".mpy", "application/vnd.ibm.minipay");
                    this.extensions.add(".afp", "application/vnd.ibm.modcap");
                    this.extensions.add(".listafp", "application/vnd.ibm.modcap");
                    this.extensions.add(".list3820", "application/vnd.ibm.modcap");
                    this.extensions.add(".irm", "application/vnd.ibm.rights-management");
                    this.extensions.add(".sc", "application/vnd.ibm.secure-container");
                    this.extensions.add(".icc", "application/vnd.iccprofile");
                    this.extensions.add(".icm", "application/vnd.iccprofile");
                    this.extensions.add(".igl", "application/vnd.igloader");
                    this.extensions.add(".ivp", "application/vnd.immervision-ivp");
                    this.extensions.add(".ivu", "application/vnd.immervision-ivu");
                    this.extensions.add(".xpw", "application/vnd.intercon.formnet");
                    this.extensions.add(".xpx", "application/vnd.intercon.formnet");
                    this.extensions.add(".qbo", "application/vnd.intu.qbo");
                    this.extensions.add(".qfx", "application/vnd.intu.qfx");
                    this.extensions.add(".rcprofile", "application/vnd.ipunplugged.rcprofile");
                    this.extensions.add(".irp", "application/vnd.irepository.package+xml");
                    this.extensions.add(".xpr", "application/vnd.is-xpr");
                    this.extensions.add(".jam", "application/vnd.jam");
                    this.extensions.add(".rms", "application/vnd.jcp.javame.midlet-rms");
                    this.extensions.add(".jisp", "application/vnd.jisp");
                    this.extensions.add(".joda", "application/vnd.joost.joda-archive");
                    this.extensions.add(".ktz", "application/vnd.kahootz");
                    this.extensions.add(".ktr", "application/vnd.kahootz");
                    this.extensions.add(".karbon", "application/vnd.kde.karbon");
                    this.extensions.add(".chrt", "application/vnd.kde.kchart");
                    this.extensions.add(".kfo", "application/vnd.kde.kformula");
                    this.extensions.add(".flw", "application/vnd.kde.kivio");
                    this.extensions.add(".kon", "application/vnd.kde.kontour");
                    this.extensions.add(".kpr,.kpt", "application/vnd.kde.kpresenter");
                    this.extensions.add(".ksp", "application/vnd.kde.kspread");
                    this.extensions.add(".kwd,.kwt", "application/vnd.kde.kword");
                    this.extensions.add(".htke", "application/vnd.kenameaapp");
                    this.extensions.add(".kia", "application/vnd.kidspiration");
                    this.extensions.add(".kne", "application/vnd.kinar");
                    this.extensions.add(".knp", "application/vnd.kinar");
                    this.extensions.add(".skp", "application/vnd.koan");
                    this.extensions.add(".skd", "application/vnd.koan");
                    this.extensions.add(".skt", "application/vnd.koan");
                    this.extensions.add(".skm", "application/vnd.koan");
                    this.extensions.add(".sse", "application/vnd.kodak-descriptor");
                    this.extensions.add(".lbd", "application/vnd.llamagraphics.life-balance.desktop");
                    this.extensions.add(".lbe", "application/vnd.llamagraphics.life-balance.exchange+xml");
                    this.extensions.add(".123", "application/vnd.lotus-1-2-3");
                    this.extensions.add(".apr", "application/vnd.lotus-approach");
                    this.extensions.add(".pre", "application/vnd.lotus-freelance");
                    this.extensions.add(".nsf", "application/vnd.lotus-notes");
                    this.extensions.add(".org", "application/vnd.lotus-organizer");
                    this.extensions.add(".scm", "application/vnd.lotus-screencam");
                    this.extensions.add(".lwp", "application/vnd.lotus-wordpro");
                    this.extensions.add(".portpkg", "application/vnd.macports.portpkg");
                    this.extensions.add(".mcd", "application/vnd.mcd");
                    this.extensions.add(".mc1", "application/vnd.medcalcdata");
                    this.extensions.add(".cdkey", "application/vnd.mediastation.cdkey");
                    this.extensions.add(".mwf", "application/vnd.mfer");
                    this.extensions.add(".mfm", "application/vnd.mfmp");
                    this.extensions.add(".flo", "application/vnd.micrografx.flo");
                    this.extensions.add(".igx", "application/vnd.micrografx.igx");
                    this.extensions.add(".mif", "application/vnd.mif");
                    this.extensions.add(".daf", "application/vnd.mobius.daf");
                    this.extensions.add(".dis", "application/vnd.mobius.dis");
                    this.extensions.add(".mbk", "application/vnd.mobius.mbk");
                    this.extensions.add(".mqy", "application/vnd.mobius.mqy");
                    this.extensions.add(".msl", "application/vnd.mobius.msl");
                    this.extensions.add(".plc", "application/vnd.mobius.plc");
                    this.extensions.add(".txf", "application/vnd.mobius.txf");
                    this.extensions.add(".mpn", "application/vnd.mophun.application");
                    this.extensions.add(".mpc", "application/vnd.mophun.certificate");
                    this.extensions.add(".xul", "application/vnd.mozilla.xul+xml");
                    this.extensions.add(".cil", "application/vnd.ms-artgalry");
                    this.extensions.add(".cab", "application/vnd.ms-cab-compressed");
                    this.extensions.add(".xls", "application/vnd.ms-excel");
                    this.extensions.add(".xlm", "application/vnd.ms-excel");
                    this.extensions.add(".xla", "application/vnd.ms-excel");
                    this.extensions.add(".xlc", "application/vnd.ms-excel");
                    this.extensions.add(".xlt", "application/vnd.ms-excel");
                    this.extensions.add(".xlw", "application/vnd.ms-excel");
                    this.extensions.add(".xlam", "application/vnd.ms-excel.addin.macroenabled.12");
                    this.extensions.add(".xlsb", "application/vnd.ms-excel.sheet.binary.macroenabled.12");
                    this.extensions.add(".xlsm", "application/vnd.ms-excel.sheet.macroenabled.12");
                    this.extensions.add(".xltm", "application/vnd.ms-excel.template.macroenabled.12");
                    this.extensions.add(".eot", "application/vnd.ms-fontobject");
                    this.extensions.add(".chm", "application/vnd.ms-htmlhelp");
                    this.extensions.add(".ims", "application/vnd.ms-ims");
                    this.extensions.add(".lrm", "application/vnd.ms-lrm");
                    this.extensions.add(".cat", "application/vnd.ms-pki.seccat");
                    this.extensions.add(".stl", "application/vnd.ms-pki.stl");
                    this.extensions.add(".ppt", "application/vnd.ms-powerpoint");
                    this.extensions.add(".pps", "application/vnd.ms-powerpoint");
                    this.extensions.add(".pot", "application/vnd.ms-powerpoint");
                    this.extensions.add(".ppam", "application/vnd.ms-powerpoint.addin.macroenabled.12");
                    this.extensions.add(".pptm", "application/vnd.ms-powerpoint.presentation.macroenabled.12");
                    this.extensions.add(".sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12");
                    this.extensions.add(".ppsm", "application/vnd.ms-powerpoint.slideshow.macroenabled.12");
                    this.extensions.add(".potm", "application/vnd.ms-powerpoint.template.macroenabled.12");
                    this.extensions.add(".mpp", "application/vnd.ms-project");
                    this.extensions.add(".mpt", "application/vnd.ms-project");
                    this.extensions.add(".docm", "application/vnd.ms-word.document.macroenabled.12");
                    this.extensions.add(".dotm", "application/vnd.ms-word.template.macroenabled.12");
                    this.extensions.add(".wps", "application/vnd.ms-works");
                    this.extensions.add(".wks", "application/vnd.ms-works");
                    this.extensions.add(".wcm", "application/vnd.ms-works");
                    this.extensions.add(".wdb", "application/vnd.ms-works");
                    this.extensions.add(".wpl", "application/vnd.ms-wpl");
                    this.extensions.add(".xps", "application/vnd.ms-xpsdocument");
                    this.extensions.add(".mseq", "application/vnd.mseq");
                    this.extensions.add(".mus", "application/vnd.musician");
                    this.extensions.add(".msty", "application/vnd.muvee.style");
                    this.extensions.add(".nlu", "application/vnd.neurolanguage.nlu");
                    this.extensions.add(".nnd", "application/vnd.noblenet-directory");
                    this.extensions.add(".nns", "application/vnd.noblenet-sealer");
                    this.extensions.add(".nnw", "application/vnd.noblenet-web");
                    this.extensions.add(".ngdat", "application/vnd.nokia.n-gage.data");
                    this.extensions.add(".n-gage", "application/vnd.nokia.n-gage.symbian.install");
                    this.extensions.add(".rpst", "application/vnd.nokia.radio-preset");
                    this.extensions.add(".rpss", "application/vnd.nokia.radio-presets");
                    this.extensions.add(".edm", "application/vnd.novadigm.edm");
                    this.extensions.add(".edx", "application/vnd.novadigm.edx");
                    this.extensions.add(".ext", "application/vnd.novadigm.ext");
                    this.extensions.add(".odc", "application/vnd.oasis.opendocument.chart");
                    this.extensions.add(".otc", "application/vnd.oasis.opendocument.chart-template");
                    this.extensions.add(".odb", "application/vnd.oasis.opendocument.database");
                    this.extensions.add(".odf", "application/vnd.oasis.opendocument.formula");
                    this.extensions.add(".odft", "application/vnd.oasis.opendocument.formula-template");
                    this.extensions.add(".odg", "application/vnd.oasis.opendocument.graphics");
                    this.extensions.add(".otg", "application/vnd.oasis.opendocument.graphics-template");
                    this.extensions.add(".odi", "application/vnd.oasis.opendocument.image");
                    this.extensions.add(".oti", "application/vnd.oasis.opendocument.image-template");
                    this.extensions.add(".odp", "application/vnd.oasis.opendocument.presentation");
                    this.extensions.add(".ods", "application/vnd.oasis.opendocument.spreadsheet");
                    this.extensions.add(".ots", "application/vnd.oasis.opendocument.spreadsheet-template");
                    this.extensions.add(".odt", "application/vnd.oasis.opendocument.text");
                    this.extensions.add(".otm", "application/vnd.oasis.opendocument.text-master");
                    this.extensions.add(".ott", "application/vnd.oasis.opendocument.text-template");
                    this.extensions.add(".oth", "application/vnd.oasis.opendocument.text-web");
                    this.extensions.add(".xo", "application/vnd.olpc-sugar");
                    this.extensions.add(".dd2", "application/vnd.oma.dd2+xml");
                    this.extensions.add(".oxt", "application/vnd.openofficeorg.extension");
                    this.extensions.add(".pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation");
                    this.extensions.add(".sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide");
                    this.extensions.add(".ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow");
                    this.extensions.add(".potx", "application/vnd.openxmlformats-officedocument.presentationml.template");
                    this.extensions.add(".xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
                    this.extensions.add(".xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template");
                    this.extensions.add(".docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
                    this.extensions.add(".dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template");
                    this.extensions.add(".dp", "application/vnd.osgi.dp");
                    this.extensions.add(".pdb", "application/vnd.palm");
                    this.extensions.add(".pqa", "application/vnd.palm");
                    this.extensions.add(".oprc", "application/vnd.palm");
                    this.extensions.add(".str", "application/vnd.pg.format");
                    this.extensions.add(".ei6", "application/vnd.pg.osasli");
                    this.extensions.add(".efif", "application/vnd.picsel");
                    this.extensions.add(".plf", "application/vnd.pocketlearn");
                    this.extensions.add(".pbd", "application/vnd.powerbuilder6");
                    this.extensions.add(".box", "application/vnd.previewsystems.box");
                    this.extensions.add(".mgz", "application/vnd.proteus.magazine");
                    this.extensions.add(".qps", "application/vnd.publishare-delta-tree");
                    this.extensions.add(".ptid", "application/vnd.pvi.ptid1");
                    this.extensions.add(".qxd", "application/vnd.quark.quarkxpress");
                    this.extensions.add(".qxt", "application/vnd.quark.quarkxpress");
                    this.extensions.add(".qwd", "application/vnd.quark.quarkxpress");
                    this.extensions.add(".qwt", "application/vnd.quark.quarkxpress");
                    this.extensions.add(".qxl", "application/vnd.quark.quarkxpress");
                    this.extensions.add(".qxb", "application/vnd.quark.quarkxpress");
                    this.extensions.add(".mxl", "application/vnd.recordare.musicxml");
                    this.extensions.add(".musicxml", "application/vnd.recordare.musicxml+xml");
                    this.extensions.add(".cod", "application/vnd.rim.cod");
                    this.extensions.add(".rm", "application/vnd.rn-realmedia");
                    this.extensions.add(".link66", "application/vnd.route66.link66+xml");
                    this.extensions.add(".see", "application/vnd.seemail");
                    this.extensions.add(".sema", "application/vnd.sema");
                    this.extensions.add(".semd", "application/vnd.semd");
                    this.extensions.add(".semf", "application/vnd.semf");
                    this.extensions.add(".ifm", "application/vnd.shana.informed.formdata");
                    this.extensions.add(".itp", "application/vnd.shana.informed.formtemplate");
                    this.extensions.add(".iif", "application/vnd.shana.informed.interchange");
                    this.extensions.add(".ipk", "application/vnd.shana.informed.package");
                    this.extensions.add(".twd", "application/vnd.simtech-mindmapper");
                    this.extensions.add(".twds", "application/vnd.simtech-mindmapper");
                    this.extensions.add(".mmf", "application/vnd.smaf");
                    this.extensions.add(".teacher", "application/vnd.smart.teacher");
                    this.extensions.add(".sdkm", "application/vnd.solent.sdkm+xml");
                    this.extensions.add(".sdkd", "application/vnd.solent.sdkm+xml");
                    this.extensions.add(".dxp", "application/vnd.spotfire.dxp");
                    this.extensions.add(".sfs", "application/vnd.spotfire.sfs");
                    this.extensions.add(".sdc", "application/vnd.stardivision.calc");
                    this.extensions.add(".sda", "application/vnd.stardivision.draw");
                    this.extensions.add(".sdd", "application/vnd.stardivision.impress");
                    this.extensions.add(".smf", "application/vnd.stardivision.math");
                    this.extensions.add(".sdw", "application/vnd.stardivision.writer");
                    this.extensions.add(".vor", "application/vnd.stardivision.writer");
                    this.extensions.add(".sgl", "application/vnd.stardivision.writer-global");
                    this.extensions.add(".sxc", "application/vnd.sun.xml.calc");
                    this.extensions.add(".stc", "application/vnd.sun.xml.calc.template");
                    this.extensions.add(".sxd", "application/vnd.sun.xml.draw");
                    this.extensions.add(".std", "application/vnd.sun.xml.draw.template");
                    this.extensions.add(".sxi", "application/vnd.sun.xml.impress");
                    this.extensions.add(".sti", "application/vnd.sun.xml.impress.template");
                    this.extensions.add(".sxm", "application/vnd.sun.xml.math");
                    this.extensions.add(".sxw", "application/vnd.sun.xml.writer");
                    this.extensions.add(".sxg", "application/vnd.sun.xml.writer.global");
                    this.extensions.add(".stw", "application/vnd.sun.xml.writer.template");
                    this.extensions.add(".sus", "application/vnd.sus-calendar");
                    this.extensions.add(".susp", "application/vnd.sus-calendar");
                    this.extensions.add(".svd", "application/vnd.svd");
                    this.extensions.add(".sis", "application/vnd.symbian.install");
                    this.extensions.add(".sisx", "application/vnd.symbian.install");
                    this.extensions.add(".xsm", "application/vnd.syncml+xml");
                    this.extensions.add(".bdm", "application/vnd.syncml.dm+wbxml");
                    this.extensions.add(".xdm", "application/vnd.syncml.dm+xml");
                    this.extensions.add(".tao", "application/vnd.tao.intent-module-archive");
                    this.extensions.add(".tmo", "application/vnd.tmobile-livetv");
                    this.extensions.add(".tpt", "application/vnd.trid.tpt");
                    this.extensions.add(".mxs", "application/vnd.triscape.mxs");
                    this.extensions.add(".tra", "application/vnd.trueapp");
                    this.extensions.add(".ufd", "application/vnd.ufdl");
                    this.extensions.add(".ufdl", "application/vnd.ufdl");
                    this.extensions.add(".utz", "application/vnd.uiq.theme");
                    this.extensions.add(".umj", "application/vnd.umajin");
                    this.extensions.add(".unityweb", "application/vnd.unity");
                    this.extensions.add(".uoml", "application/vnd.uoml+xml");
                    this.extensions.add(".vcx", "application/vnd.vcx");
                    this.extensions.add(".vsd,.vst,.vss,.vsw", "application/vnd.visio");
                    this.extensions.add(".vis", "application/vnd.visionary");
                    this.extensions.add(".vsf", "application/vnd.vsf");
                    this.extensions.add(".wbxml", "application/vnd.wap.wbxml");
                    this.extensions.add(".wmlc", "application/vnd.wap.wmlc");
                    this.extensions.add(".wmlsc", "application/vnd.wap.wmlscriptc");
                    this.extensions.add(".wtb", "application/vnd.webturbo");
                    this.extensions.add(".wpd", "application/vnd.wordperfect");
                    this.extensions.add(".wqd", "application/vnd.wqd");
                    this.extensions.add(".stf", "application/vnd.wt.stf");
                    this.extensions.add(".xar", "application/vnd.xara");
                    this.extensions.add(".xfdl", "application/vnd.xfdl");
                    this.extensions.add(".hvd", "application/vnd.yamaha.hv-dic");
                    this.extensions.add(".hvs", "application/vnd.yamaha.hv-script");
                    this.extensions.add(".hvp", "application/vnd.yamaha.hv-voice");
                    this.extensions.add(".osf", "application/vnd.yamaha.openscoreformat");
                    this.extensions.add(".osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml");
                    this.extensions.add(".saf", "application/vnd.yamaha.smaf-audio");
                    this.extensions.add(".spf", "application/vnd.yamaha.smaf-phrase");
                    this.extensions.add(".cmp", "application/vnd.yellowriver-custom-menu");
                    this.extensions.add(".zir", "application/vnd.zul");
                    this.extensions.add(".zirz", "application/vnd.zul");
                    this.extensions.add(".zaz", "application/vnd.zzazz.deck+xml");
                    this.extensions.add(".vxml", "application/voicexml+xml");
                    this.extensions.add(".hlp", "application/winhlp");
                    this.extensions.add(".wsdl", "application/wsdl+xml");
                    this.extensions.add(".wspolicy", "application/wspolicy+xml");
                    this.extensions.add(".abw", "application/x-abiword");
                    this.extensions.add(".ace", "application/x-ace-compressed");
                    this.extensions.add(".aab", "application/x-authorware-bin");
                    this.extensions.add(".x32", "application/x-authorware-bin");
                    this.extensions.add(".u32", "application/x-authorware-bin");
                    this.extensions.add(".vox", "application/x-authorware-bin");
                    this.extensions.add(".aam", "application/x-authorware-map");
                    this.extensions.add(".aas", "application/x-authorware-seg");
                    this.extensions.add(".bcpio", "application/x-bcpio");
                    this.extensions.add(".torrent", "application/x-bittorrent");
                    this.extensions.add(".bz", "application/x-bzip");
                    this.extensions.add(".bz2", "application/x-bzip2");
                    this.extensions.add(".boz", "application/x-bzip2");
                    this.extensions.add(".vcd", "application/x-cdlink");
                    this.extensions.add(".chat", "application/x-chat");
                    this.extensions.add(".pgn", "application/x-chess-pgn");
                    this.extensions.add(".cpio", "application/x-cpio");
                    this.extensions.add(".csh", "application/x-csh");
                    this.extensions.add(".deb", "application/x-debian-package");
                    this.extensions.add(".udeb", "application/x-debian-package");
                    this.extensions.add(".dir", "application/x-director");
                    this.extensions.add(".dcr", "application/x-director");
                    this.extensions.add(".dxr", "application/x-director");
                    this.extensions.add(".cst", "application/x-director");
                    this.extensions.add(".cct", "application/x-director");
                    this.extensions.add(".cxt", "application/x-director");
                    this.extensions.add(".w3d", "application/x-director");
                    this.extensions.add(".fgd", "application/x-director");
                    this.extensions.add(".swa", "application/x-director");
                    this.extensions.add(".wad", "application/x-doom");
                    this.extensions.add(".ncx", "application/x-dtbncx+xml");
                    this.extensions.add(".dtb", "application/x-dtbook+xml");
                    this.extensions.add(".res", "application/x-dtbresource+xml");
                    this.extensions.add(".dvi", "application/x-dvi");
                    this.extensions.add(".bdf", "application/x-font-bdf");
                    this.extensions.add(".gsf", "application/x-font-ghostscript");
                    this.extensions.add(".psf", "application/x-font-linux-psf");
                    this.extensions.add(".otf", "application/x-font-otf");
                    this.extensions.add(".pcf", "application/x-font-pcf");
                    this.extensions.add(".snf", "application/x-font-snf");
                    this.extensions.add(".ttf", "application/x-font-ttf");
                    this.extensions.add(".ttc", "application/x-font-ttf");
                    this.extensions.add(".woff", "application/font-woff");
                    this.extensions.add(".pfa", "application/x-font-type1");
                    this.extensions.add(".pfb", "application/x-font-type1");
                    this.extensions.add(".pfm", "application/x-font-type1");
                    this.extensions.add(".afm", "application/x-font-type1");
                    this.extensions.add(".spl", "application/x-futuresplash");
                    this.extensions.add(".gnumeric", "application/x-gnumeric");
                    this.extensions.add(".gtar", "application/x-gtar");
                    this.extensions.add(".hdf", "application/x-hdf");
                    this.extensions.add(".jnlp", "application/x-java-jnlp-file");
                    this.extensions.add(".latex", "application/x-latex");
                    this.extensions.add(".prc", "application/x-mobipocket-ebook");
                    this.extensions.add(".mobi", "application/x-mobipocket-ebook");
                    this.extensions.add(".application", "application/x-ms-application");
                    this.extensions.add(".wmd", "application/x-ms-wmd");
                    this.extensions.add(".wmz", "application/x-ms-wmz");
                    this.extensions.add(".xbap", "application/x-ms-xbap");
                    this.extensions.add(".mdb", "application/x-msaccess");
                    this.extensions.add(".obd", "application/x-msbinder");
                    this.extensions.add(".crd", "application/x-mscardfile");
                    this.extensions.add(".clp", "application/x-msclip");
                    this.extensions.add(".exe", "application/x-msdownload");
                    this.extensions.add(".dll", "application/x-msdownload");
                    this.extensions.add(".com", "application/x-msdownload");
                    this.extensions.add(".bat", "application/x-msdownload");
                    this.extensions.add(".msi", "application/x-msdownload");
                    this.extensions.add(".mvb", "application/x-msmediaview");
                    this.extensions.add(".m13", "application/x-msmediaview");
                    this.extensions.add(".m14", "application/x-msmediaview");
                    this.extensions.add(".wmf", "application/x-msmetafile");
                    this.extensions.add(".mny", "application/x-msmoney");
                    this.extensions.add(".pub", "application/x-mspublisher");
                    this.extensions.add(".scd", "application/x-msschedule");
                    this.extensions.add(".trm", "application/x-msterminal");
                    this.extensions.add(".wri", "application/x-mswrite");
                    this.extensions.add(".nc", "application/x-netcdf");
                    this.extensions.add(".cdf", "application/x-netcdf");
                    this.extensions.add(".p12", "application/x-pkcs12");
                    this.extensions.add(".pfx", "application/x-pkcs12");
                    this.extensions.add(".p7b", "application/x-pkcs7-certificates");
                    this.extensions.add(".spc", "application/x-pkcs7-certificates");
                    this.extensions.add(".p7r", "application/x-pkcs7-certreqresp");
                    this.extensions.add(".rar", "application/x-rar-compressed");
                    this.extensions.add(".sh", "application/x-sh");
                    this.extensions.add(".shar", "application/x-shar");
                    this.extensions.add(".swf", "application/x-shockwave-flash");
                    this.extensions.add(".xap", "application/x-silverlight-app");
                    this.extensions.add(".sit", "application/x-stuffit");
                    this.extensions.add(".sitx", "application/x-stuffitx");
                    this.extensions.add(".sv4cpio", "application/x-sv4cpio");
                    this.extensions.add(".sv4crc", "application/x-sv4crc");
                    this.extensions.add(".tar", "application/x-tar");
                    this.extensions.add(".tcl", "application/x-tcl");
                    this.extensions.add(".tex", "application/x-tex");
                    this.extensions.add(".tfm", "application/x-tex-tfm");
                    this.extensions.add(".texinfo", "application/x-texinfo");
                    this.extensions.add(".texi", "application/x-texinfo");
                    this.extensions.add(".ustar", "application/x-ustar");
                    this.extensions.add(".src", "application/x-wais-source");
                    this.extensions.add(".der", "application/x-x509-ca-cert");
                    this.extensions.add(".crt", "application/x-x509-ca-cert");
                    this.extensions.add(".fig", "application/x-xfig");
                    this.extensions.add(".xpi", "application/x-xpinstall");
                    this.extensions.add(".xenc", "application/xenc+xml");
                    this.extensions.add(".xhtml", "application/xhtml+xml");
                    this.extensions.add(".xht", "application/xhtml+xml");
                    this.extensions.add(".xml", "application/xml");
                    this.extensions.add(".xsl", "application/xml");
                    this.extensions.add(".dtd", "application/xml-dtd");
                    this.extensions.add(".xop", "application/xop+xml");
                    this.extensions.add(".xslt", "application/xslt+xml");
                    this.extensions.add(".xspf", "application/xspf+xml");
                    this.extensions.add(".mxml", "application/xv+xml");
                    this.extensions.add(".xhvml", "application/xv+xml");
                    this.extensions.add(".xvml", "application/xv+xml");
                    this.extensions.add(".xvm", "application/xv+xml");
                    this.extensions.add(".zip", "application/zip");
                    this.extensions.add(".adp", "audio/adpcm");
                    this.extensions.add(".au", "audio/basic");
                    this.extensions.add(".snd", "audio/basic");
                    this.extensions.add(".mid", "audio/midi");
                    this.extensions.add(".midi", "audio/midi");
                    this.extensions.add(".kar", "audio/midi");
                    this.extensions.add(".rmi", "audio/midi");
                    this.extensions.add(".mp4a", "audio/mp4");
                    this.extensions.add(".m4a", "audio/mp4a-latm");
                    this.extensions.add(".m4p", "audio/mp4a-latm");
                    this.extensions.add(".mpga", "audio/mpeg");
                    this.extensions.add(".mp2", "audio/mpeg");
                    this.extensions.add(".mp2a", "audio/mpeg");
                    this.extensions.add(".mp3", "audio/mpeg");
                    this.extensions.add(".m2a", "audio/mpeg");
                    this.extensions.add(".m3a", "audio/mpeg");
                    this.extensions.add(".oga", "audio/ogg");
                    this.extensions.add(".ogg", "audio/ogg");
                    this.extensions.add(".spx", "audio/ogg");
                    this.extensions.add(".eol", "audio/vnd.digital-winds");
                    this.extensions.add(".dts", "audio/vnd.dts");
                    this.extensions.add(".dtshd", "audio/vnd.dts.hd");
                    this.extensions.add(".lvp", "audio/vnd.lucent.voice");
                    this.extensions.add(".pya", "audio/vnd.ms-playready.media.pya");
                    this.extensions.add(".ecelp4800", "audio/vnd.nuera.ecelp4800");
                    this.extensions.add(".ecelp7470", "audio/vnd.nuera.ecelp7470");
                    this.extensions.add(".ecelp9600", "audio/vnd.nuera.ecelp9600");
                    this.extensions.add(".aac", "audio/x-aac");
                    this.extensions.add(".aif", "audio/x-aiff");
                    this.extensions.add(".aiff", "audio/x-aiff");
                    this.extensions.add(".aifc", "audio/x-aiff");
                    this.extensions.add(".m3u", "audio/x-mpegurl");
                    this.extensions.add(".wax", "audio/x-ms-wax");
                    this.extensions.add(".wma", "audio/x-ms-wma");
                    this.extensions.add(".ram", "audio/x-pn-realaudio");
                    this.extensions.add(".ra", "audio/x-pn-realaudio");
                    this.extensions.add(".rmp", "audio/x-pn-realaudio-plugin");
                    this.extensions.add(".wav", "audio/x-wav");
                    this.extensions.add(".cdx", "chemical/x-cdx");
                    this.extensions.add(".cif", "chemical/x-cif");
                    this.extensions.add(".cmdf", "chemical/x-cmdf");
                    this.extensions.add(".cml", "chemical/x-cml");
                    this.extensions.add(".csml", "chemical/x-csml");
                    this.extensions.add(".xyz", "chemical/x-xyz");
                    this.extensions.add(".bmp", "image/bmp");
                    this.extensions.add(".cgm", "image/cgm");
                    this.extensions.add(".g3", "image/g3fax");
                    this.extensions.add(".gif", "image/gif");
                    this.extensions.add(".ief", "image/ief");
                    this.extensions.add(".jp2", "image/jp2");
                    this.extensions.add(".jpeg", "image/jpeg");
                    this.extensions.add(".jpg", "image/jpeg");
                    this.extensions.add(".jpe", "image/jpeg");
                    this.extensions.add(".pict", "image/pict");
                    this.extensions.add(".pic", "image/pict");
                    this.extensions.add(".pct", "image/pict");
                    this.extensions.add(".png", "image/png");
                    this.extensions.add(".btif", "image/prs.btif");
                    this.extensions.add(".svg,", "image/svg+xml");
                    this.extensions.add(".svgz", "image/svg+xml");
                    this.extensions.add(".tiff", "image/tiff");
                    this.extensions.add(".tif", "image/tiff");
                    this.extensions.add(".psd", "image/vnd.adobe.photoshop");
                    this.extensions.add(".djvu", "image/vnd.djvu");
                    this.extensions.add(".djv", "image/vnd.djvu");
                    this.extensions.add(".dwg", "image/vnd.dwg");
                    this.extensions.add(".dxf", "image/vnd.dxf");
                    this.extensions.add(".fbs", "image/vnd.fastbidsheet");
                    this.extensions.add(".fpx", "image/vnd.fpx");
                    this.extensions.add(".fst", "image/vnd.fst");
                    this.extensions.add(".mmr", "image/vnd.fujixerox.edmics-mmr");
                    this.extensions.add(".rlc", "image/vnd.fujixerox.edmics-rlc");
                    this.extensions.add(".mdi", "image/vnd.ms-modi");
                    this.extensions.add(".npx", "image/vnd.net-fpx");
                    this.extensions.add(".wbmp", "image/vnd.wap.wbmp");
                    this.extensions.add(".xif", "image/vnd.xiff");
                    this.extensions.add(".ras", "image/x-cmu-raster");
                    this.extensions.add(".cmx", "image/x-cmx");
                    this.extensions.add(".fh", "image/x-freehand");
                    this.extensions.add(".fhc", "image/x-freehand");
                    this.extensions.add(".fh4", "image/x-freehand");
                    this.extensions.add(".fh5", "image/x-freehand");
                    this.extensions.add(".fh7", "image/x-freehand");
                    this.extensions.add(".ico", "image/x-icon");
                    this.extensions.add(".pntg", "image/x-macpaint");
                    this.extensions.add(".pnt", "image/x-macpaint");
                    this.extensions.add(".mac", "image/x-macpaint");
                    this.extensions.add(".pcx", "image/x-pcx");
                    this.extensions.add(".pnm", "image/x-portable-anymap");
                    this.extensions.add(".pbm", "image/x-portable-bitmap");
                    this.extensions.add(".pgm", "image/x-portable-graymap");
                    this.extensions.add(".ppm", "image/x-portable-pixmap");
                    this.extensions.add(".qtif", "image/x-quicktime");
                    this.extensions.add(".qti", "image/x-quicktime");
                    this.extensions.add(".rgb", "image/x-rgb");
                    this.extensions.add(".xbm", "image/x-xbitmap");
                    this.extensions.add(".xpm", "image/x-xpixmap");
                    this.extensions.add(".xwd", "image/x-xwindowdump");
                    this.extensions.add(".eml", "message/rfc822");
                    this.extensions.add(".mime", "message/rfc822");
                    this.extensions.add(".igs", "model/iges");
                    this.extensions.add(".iges", "model/iges");
                    this.extensions.add(".msh", "model/mesh");
                    this.extensions.add(".mesh", "model/mesh");
                    this.extensions.add(".silo", "model/mesh");
                    this.extensions.add(".dwf", "model/vnd.dwf");
                    this.extensions.add(".gdl", "model/vnd.gdl");
                    this.extensions.add(".gtw", "model/vnd.gtw");
                    this.extensions.add(".mts", "model/vnd.mts");
                    this.extensions.add(".vtu", "model/vnd.vtu");
                    this.extensions.add(".wrl", "model/vrml");
                    this.extensions.add(".vrml", "model/vrml");
                    this.extensions.add(".ics", "text/calendar");
                    this.extensions.add(".ifb", "text/calendar");
                    this.extensions.add(".css", "text/css");
                    this.extensions.add(".csv", "text/csv");
                    this.extensions.add(".html", "text/html");
                    this.extensions.add(".htm", "text/html");
                    this.extensions.add(".txt", "text/plain");
                    this.extensions.add(".text", "text/plain");
                    this.extensions.add(".conf", "text/plain");
                    this.extensions.add(".def", "text/plain");
                    this.extensions.add(".list", "text/plain");
                    this.extensions.add(".log", "text/plain");
                    this.extensions.add(".in", "text/plain");
                    this.extensions.add(".dsc", "text/prs.lines.tag");
                    this.extensions.add(".rtx", "text/richtext");
                    this.extensions.add(".sgml", "text/sgml");
                    this.extensions.add(".sgm", "text/sgml");
                    this.extensions.add(".tsv", "text/tab-separated-values");
                    this.extensions.add(".t", "text/troff");
                    this.extensions.add(".tr", "text/troff");
                    this.extensions.add(".roff", "text/troff");
                    this.extensions.add(".man", "text/troff");
                    this.extensions.add(".me", "text/troff");
                    this.extensions.add(".ms", "text/troff");
                    this.extensions.add(".uri", "text/uri-list");
                    this.extensions.add(".uris", "text/uri-list");
                    this.extensions.add(".urls", "text/uri-list");
                    this.extensions.add(".curl", "text/vnd.curl");
                    this.extensions.add(".dcurl", "text/vnd.curl.dcurl");
                    this.extensions.add(".scurl", "text/vnd.curl.scurl");
                    this.extensions.add(".mcurl", "text/vnd.curl.mcurl");
                    this.extensions.add(".fly", "text/vnd.fly");
                    this.extensions.add(".flx", "text/vnd.fmi.flexstor");
                    this.extensions.add(".gv", "text/vnd.graphviz");
                    this.extensions.add(".3dml", "text/vnd.in3d.3dml");
                    this.extensions.add(".spot", "text/vnd.in3d.spot");
                    this.extensions.add(".jad", "text/vnd.sun.j2me.app-descriptor");
                    this.extensions.add(".wml", "text/vnd.wap.wml");
                    this.extensions.add(".wmls", "text/vnd.wap.wmlscript");
                    this.extensions.add(".s", "text/x-asm");
                    this.extensions.add(".asm", "text/x-asm");
                    this.extensions.add(".c", "text/x-c");
                    this.extensions.add(".cc", "text/x-c");
                    this.extensions.add(".cxx", "text/x-c");
                    this.extensions.add(".cpp", "text/x-c");
                    this.extensions.add(".h", "text/x-c");
                    this.extensions.add(".hh", "text/x-c");
                    this.extensions.add(".dic", "text/x-c");
                    this.extensions.add(".f", "text/x-fortran");
                    this.extensions.add(".for", "text/x-fortran");
                    this.extensions.add(".f77", "text/x-fortran");
                    this.extensions.add(".f90", "text/x-fortran");
                    this.extensions.add(".p", "text/x-pascal");
                    this.extensions.add(".pas", "text/x-pascal");
                    this.extensions.add(".java", "text/x-java-source");
                    this.extensions.add(".etx", "text/x-setext");
                    this.extensions.add(".uu", "text/x-uuencode");
                    this.extensions.add(".vcs", "text/x-vcalendar");
                    this.extensions.add(".vcf", "text/x-vcard");
                    this.extensions.add(".3gp", "video/3gpp");
                    this.extensions.add(".3g2", "video/3gpp2");
                    this.extensions.add(".h261", "video/h261");
                    this.extensions.add(".h263", "video/h263");
                    this.extensions.add(".h264", "video/h264");
                    this.extensions.add(".jpgv", "video/jpeg");
                    this.extensions.add(".jpm", "video/jpm");
                    this.extensions.add(".jpgm", "video/jpm");
                    this.extensions.add(".mj2", "video/mj2");
                    this.extensions.add(".mjp2", "video/mj2");
                    this.extensions.add(".mp4", "video/mp4");
                    this.extensions.add(".mp4v", "video/mp4");
                    this.extensions.add(".mpg4", "video/mp4");
                    this.extensions.add(".m4v", "video/mp4");
                    this.extensions.add(".webm", "video/webm");
                    this.extensions.add(".mpeg", "video/mpeg");
                    this.extensions.add(".mpg", "video/mpeg");
                    this.extensions.add(".mpe", "video/mpeg");
                    this.extensions.add(".m1v", "video/mpeg");
                    this.extensions.add(".m2v", "video/mpeg");
                    this.extensions.add(".ogv", "video/ogg");
                    this.extensions.add(".qt", "video/quicktime");
                    this.extensions.add(".mov", "video/quicktime");
                    this.extensions.add(".fvt", "video/vnd.fvt");
                    this.extensions.add(".mxu", "video/vnd.mpegurl");
                    this.extensions.add(".m4u", "video/vnd.mpegurl");
                    this.extensions.add(".pyv", "video/vnd.ms-playready.media.pyv");
                    this.extensions.add(".viv", "video/vnd.vivo");
                    this.extensions.add(".dv", "video/x-dv");
                    this.extensions.add(".dif", "video/x-dv");
                    this.extensions.add(".f4v", "video/x-f4v");
                    this.extensions.add(".fli", "video/x-fli");
                    this.extensions.add(".flv", "video/x-flv");
                    this.extensions.add(".asf", "video/x-ms-asf");
                    this.extensions.add(".asx", "video/x-ms-asf");
                    this.extensions.add(".wm", "video/x-ms-wm");
                    this.extensions.add(".wmv", "video/x-ms-wmv");
                    this.extensions.add(".wmx", "video/x-ms-wmx");
                    this.extensions.add(".wvx", "video/x-ms-wvx");
                    this.extensions.add(".avi", "video/x-msvideo");
                    this.extensions.add(".movie", "video/x-sgi-movie");
                    this.extensions.add(".ice", "x-conference/x-cooltalk");
                    this.extensions.add(".indd", "application/x-indesign");
                    this.extensions.add(".dat", "application/octet-stream");
                    this.extensions.add(".gz", "application/x-gzip");
                    this.extensions.add(".tgz", "application/x-tar");
                    this.extensions.add(".manifest", "text/cache-manifest");
                    this.extensions.add(".mf", "text/cache-manifest");
                    this.extensions.add(".appcache", "text/cache-manifest");
                }
                FileMimeType.prototype.get = function (file) {
                    var parts = file.toLowerCase().split(".");
                    if (parts.length === 0)
                        return null;
                    return this.extensions.get("." + parts[parts.length - 1]);
                };
                return FileMimeType;
            }());
            Core.FileMimeType = FileMimeType;
            Core.mimeType = new FileMimeType();
        })(Core = Angular.Core || (Angular.Core = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Core;
        (function (Core) {
            var Guid = (function () {
                function Guid(value) {
                    this.value = value;
                }
                Guid.s4 = function () {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                };
                Guid.new = function () {
                    return new Guid((Guid.s4() + Guid.s4() + "-" + Guid.s4() + "-4" + Guid.s4().substr(0, 3) + "-" + Guid.s4() + "-" + Guid.s4() + Guid.s4() + Guid.s4()).toLowerCase());
                };
                return Guid;
            }());
            Core.Guid = Guid;
        })(Core = Angular.Core || (Angular.Core = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../core/Function.ts" />
///<reference path="../core/Object.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Core;
        (function (Core) {
            var LocalStorage = (function () {
                function LocalStorage() {
                }
                LocalStorage.set = function (name, value) {
                    localStorage.setItem(name, value.toString());
                };
                LocalStorage.get = function (type, name) {
                    if (type.getFunctionName() === Number.getFunctionName())
                        return LocalStorage.getNumber(name);
                    if (type.getFunctionName() === Boolean.getFunctionName())
                        return LocalStorage.getBoolean(name);
                    if (type.getFunctionName() === Date.getFunctionName())
                        return LocalStorage.getDate(name);
                    return localStorage.getItem(name);
                };
                LocalStorage.getInt = function (name) {
                    var value = localStorage.getItem(name);
                    return Object.isNull(value) ? null : parseInt(value);
                };
                LocalStorage.getNumber = function (name) {
                    var value = localStorage.getItem(name);
                    return Object.isNull(value) ? null : parseFloat(value);
                };
                LocalStorage.getBoolean = function (name) {
                    var value = localStorage.getItem(name);
                    if (Object.isNull(value))
                        return null;
                    value = value.toLowerCase();
                    return value === "true" || value === "yes" || value === "1";
                };
                LocalStorage.getDate = function (name) {
                    var value = localStorage.getItem(name);
                    return Object.isNull(value) ? null : new Date(value);
                };
                LocalStorage.remove = function (name) {
                    localStorage.removeItem(name);
                };
                LocalStorage.getAllContent = function () {
                    var dictionary = new Core.Dictionary();
                    for (var i = 0; i < localStorage.length; i++) {
                        var key = localStorage.key(i);
                        dictionary.add(key, localStorage.getItem(key));
                    }
                    return dictionary;
                };
                LocalStorage.clear = function () {
                    localStorage.clear();
                };
                return LocalStorage;
            }());
            Core.LocalStorage = LocalStorage;
        })(Core = Angular.Core || (Angular.Core = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Core;
        (function (Core) {
            var Md5 = (function () {
                function Md5() {
                }
                Md5.computeHash = function (value) {
                    return md5(value);
                };
                return Md5;
            }());
            Core.Md5 = Md5;
            ////////////////////////////////////////////////////////////////////
            // http://www.myersdaily.org/joseph/javascript/md5-text.html
            ////////////////////////////////////////////////////////////////////
            function md5cycle(x, k) {
                var a = x[0], b = x[1], c = x[2], d = x[3];
                a = ff(a, b, c, d, k[0], 7, -680876936);
                d = ff(d, a, b, c, k[1], 12, -389564586);
                c = ff(c, d, a, b, k[2], 17, 606105819);
                b = ff(b, c, d, a, k[3], 22, -1044525330);
                a = ff(a, b, c, d, k[4], 7, -176418897);
                d = ff(d, a, b, c, k[5], 12, 1200080426);
                c = ff(c, d, a, b, k[6], 17, -1473231341);
                b = ff(b, c, d, a, k[7], 22, -45705983);
                a = ff(a, b, c, d, k[8], 7, 1770035416);
                d = ff(d, a, b, c, k[9], 12, -1958414417);
                c = ff(c, d, a, b, k[10], 17, -42063);
                b = ff(b, c, d, a, k[11], 22, -1990404162);
                a = ff(a, b, c, d, k[12], 7, 1804603682);
                d = ff(d, a, b, c, k[13], 12, -40341101);
                c = ff(c, d, a, b, k[14], 17, -1502002290);
                b = ff(b, c, d, a, k[15], 22, 1236535329);
                a = gg(a, b, c, d, k[1], 5, -165796510);
                d = gg(d, a, b, c, k[6], 9, -1069501632);
                c = gg(c, d, a, b, k[11], 14, 643717713);
                b = gg(b, c, d, a, k[0], 20, -373897302);
                a = gg(a, b, c, d, k[5], 5, -701558691);
                d = gg(d, a, b, c, k[10], 9, 38016083);
                c = gg(c, d, a, b, k[15], 14, -660478335);
                b = gg(b, c, d, a, k[4], 20, -405537848);
                a = gg(a, b, c, d, k[9], 5, 568446438);
                d = gg(d, a, b, c, k[14], 9, -1019803690);
                c = gg(c, d, a, b, k[3], 14, -187363961);
                b = gg(b, c, d, a, k[8], 20, 1163531501);
                a = gg(a, b, c, d, k[13], 5, -1444681467);
                d = gg(d, a, b, c, k[2], 9, -51403784);
                c = gg(c, d, a, b, k[7], 14, 1735328473);
                b = gg(b, c, d, a, k[12], 20, -1926607734);
                a = hh(a, b, c, d, k[5], 4, -378558);
                d = hh(d, a, b, c, k[8], 11, -2022574463);
                c = hh(c, d, a, b, k[11], 16, 1839030562);
                b = hh(b, c, d, a, k[14], 23, -35309556);
                a = hh(a, b, c, d, k[1], 4, -1530992060);
                d = hh(d, a, b, c, k[4], 11, 1272893353);
                c = hh(c, d, a, b, k[7], 16, -155497632);
                b = hh(b, c, d, a, k[10], 23, -1094730640);
                a = hh(a, b, c, d, k[13], 4, 681279174);
                d = hh(d, a, b, c, k[0], 11, -358537222);
                c = hh(c, d, a, b, k[3], 16, -722521979);
                b = hh(b, c, d, a, k[6], 23, 76029189);
                a = hh(a, b, c, d, k[9], 4, -640364487);
                d = hh(d, a, b, c, k[12], 11, -421815835);
                c = hh(c, d, a, b, k[15], 16, 530742520);
                b = hh(b, c, d, a, k[2], 23, -995338651);
                a = ii(a, b, c, d, k[0], 6, -198630844);
                d = ii(d, a, b, c, k[7], 10, 1126891415);
                c = ii(c, d, a, b, k[14], 15, -1416354905);
                b = ii(b, c, d, a, k[5], 21, -57434055);
                a = ii(a, b, c, d, k[12], 6, 1700485571);
                d = ii(d, a, b, c, k[3], 10, -1894986606);
                c = ii(c, d, a, b, k[10], 15, -1051523);
                b = ii(b, c, d, a, k[1], 21, -2054922799);
                a = ii(a, b, c, d, k[8], 6, 1873313359);
                d = ii(d, a, b, c, k[15], 10, -30611744);
                c = ii(c, d, a, b, k[6], 15, -1560198380);
                b = ii(b, c, d, a, k[13], 21, 1309151649);
                a = ii(a, b, c, d, k[4], 6, -145523070);
                d = ii(d, a, b, c, k[11], 10, -1120210379);
                c = ii(c, d, a, b, k[2], 15, 718787259);
                b = ii(b, c, d, a, k[9], 21, -343485551);
                x[0] = add32(a, x[0]);
                x[1] = add32(b, x[1]);
                x[2] = add32(c, x[2]);
                x[3] = add32(d, x[3]);
            }
            function cmn(q, a, b, x, s, t) {
                a = add32(add32(a, q), add32(x, t));
                return add32((a << s) | (a >>> (32 - s)), b);
            }
            function ff(a, b, c, d, x, s, t) {
                return cmn((b & c) | ((~b) & d), a, b, x, s, t);
            }
            function gg(a, b, c, d, x, s, t) {
                return cmn((b & d) | (c & (~d)), a, b, x, s, t);
            }
            function hh(a, b, c, d, x, s, t) {
                return cmn(b ^ c ^ d, a, b, x, s, t);
            }
            function ii(a, b, c, d, x, s, t) {
                return cmn(c ^ (b | (~d)), a, b, x, s, t);
            }
            function md51(s) {
                var txt = "";
                var n = s.length;
                var state = [1732584193, -271733879, -1732584194, 271733878];
                var i;
                for (i = 64; i <= s.length; i += 64) {
                    md5cycle(state, md5blk(s.substring(i - 64, i)));
                }
                s = s.substring(i - 64);
                var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (i = 0; i < s.length; i++)
                    tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
                tail[i >> 2] |= 0x80 << ((i % 4) << 3);
                if (i > 55) {
                    md5cycle(state, tail);
                    for (i = 0; i < 16; i++)
                        tail[i] = 0;
                }
                tail[14] = n * 8;
                md5cycle(state, tail);
                return state;
            }
            /* there needs to be support for Unicode here,
             * unless we pretend that we can redefine the MD-5
             * algorithm for multi-byte characters (perhaps
             * by adding every four 16-bit characters and
             * shortening the sum to 32 bits). Otherwise
             * I suggest performing MD-5 as if every character
             * was two bytes--e.g., 0040 0025 = @%--but then
             * how will an ordinary MD-5 sum be matched?
             * There is no way to standardize text to something
             * like UTF-8 before transformation; speed cost is
             * utterly prohibitive. The JavaScript standard
             * itself needs to look at this: it should start
             * providing access to strings as preformed UTF-8
             * 8-bit unsigned value arrays.
             */
            function md5blk(s) {
                var md5blks = [];
                var i; /* Andy King said do it this way. */
                for (i = 0; i < 64; i += 4) {
                    md5blks[i >> 2] = s.charCodeAt(i)
                        + (s.charCodeAt(i + 1) << 8)
                        + (s.charCodeAt(i + 2) << 16)
                        + (s.charCodeAt(i + 3) << 24);
                }
                return md5blks;
            }
            var hex_chr = "0123456789abcdef".split("");
            function rhex(n) {
                var s = "";
                var j = 0;
                for (; j < 4; j++)
                    s += hex_chr[(n >> (j * 8 + 4)) & 0x0F]
                        + hex_chr[(n >> (j * 8)) & 0x0F];
                return s;
            }
            function hex(x) {
                for (var i = 0; i < x.length; i++)
                    x[i] = rhex(x[i]);
                return x.join("");
            }
            function md5(s) {
                return hex(md51(s));
            }
            /* this function is much faster,
            so if possible we use it. Some IEs
            are the only ones I know of that
            need the idiotic second function,
            generated by an if clause.  */
            function add32(a, b) {
                return (a + b) & 0xFFFFFFFF;
            }
        })(Core = Angular.Core || (Angular.Core = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
Number.isNumber = function (value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
};
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Core;
        (function (Core) {
            var TimeSpan = (function () {
                function TimeSpan(milliseconds) {
                    this.milliseconds = milliseconds;
                    /**
                     * Number of milliseconds representing the time span.
                     * @type Number
                     */
                    this.milliseconds = milliseconds;
                }
                Object.defineProperty(TimeSpan, "millisecondsPerSecond", {
                    /**
                     * Retrieves the number of milliseconds in one second.
                     * @return {Number} Number of milliseconds in one second.
                     * @static
                     */
                    get: function () {
                        return 1000;
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(TimeSpan, "millisecondsPerMinute", {
                    /**
                     * Retrieves the number of milliseconds in one minute.
                     * @return {Number} Number of milliseconds in one minute.
                     * @static
                     */
                    get: function () {
                        return 60000;
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(TimeSpan, "millisecondsPerHour", {
                    /**
                     * Retrieves the number of milliseconds in one hour.
                     * @return {Number} Number of milliseconds in one hour.
                     * @static
                     */
                    get: function () {
                        return 3600000;
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(TimeSpan, "millisecondsPerDay", {
                    /**
                     * Retrieves the number of milliseconds in one day.
                     * @return {Number} Number of milliseconds in one day.
                     * @static
                     */
                    get: function () {
                        return 86400000;
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(TimeSpan, "now", {
                    /**
                     * Creates a new time span with the number of milliseconds
                     * elapsed to the present time.
                     * @return {TimeSpan} Time span representing the current UTC time.
                     * @static
                     */
                    get: function () {
                        return new TimeSpan(new Date().valueOf());
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                /**
                 * Creates a new time span with the number of milliseconds
                 * elapsed since the aplication started.
                 * @return {TimeSpan} Time elapsed sirce the Application started.
                 * @static
                 */
                TimeSpan.sinceTheApplicationStarted = function () {
                    return TimeSpan.now.subtract(TimeSpan.applicationStarted);
                };
                ;
                Object.defineProperty(TimeSpan, "zero", {
                    /**
                     * A time span without milliseconds.
                     * @type TimeSpan
                     * @static
                     */
                    get: function () { return new TimeSpan(0); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * A time span which represents one millisecond.
                 * @type TimeSpan
                 * @static
                 */
                TimeSpan.oneMillisecond = function () { return new TimeSpan(1); };
                /**
                 * A time span which represents ten milliseconds.
                 * @type TimeSpan
                 * @static
                 */
                TimeSpan.tenMilliseconds = function () { return new TimeSpan(10); };
                /**
                 * A time span which represents hundred milliseconds.
                 * @type TimeSpan
                 * @static
                 */
                TimeSpan.hundredMilliseconds = function () { return new TimeSpan(100); };
                /**
                 * A time span which represents five hundred millisencods, or half a second.
                 * @type TimeSpan
                 * @static
                 */
                TimeSpan.halfSecond = function () { return new TimeSpan(500); };
                /**
                 * A time span which represents one second.
                 * @type TimeSpan
                 * @static
                 */
                TimeSpan.oneSecond = function () { return TimeSpan.fromSeconds(1); };
                /**
                 * A time span which represents thirty seconds or half a minute.
                 * @type TimeSpan
                 * @static
                 */
                TimeSpan.halfMinute = function () { return TimeSpan.fromSeconds(30); };
                /**
                 * A time span which represents one minute.
                 * @type TimeSpan
                 * @static
                 */
                TimeSpan.oneMinute = function () { return TimeSpan.fromMinutes(1); };
                /**
                 * A time span which represents thirty minutes or half an hour.
                 * @type TimeSpan
                 * @static
                 */
                TimeSpan.halfHour = function () { return TimeSpan.fromMinutes(30); };
                /**
                 * A time span which represents an hour.
                 * @type TimeSpan
                 * @static
                 */
                TimeSpan.oneHour = function () { return TimeSpan.fromHours(1); };
                /**
                 * A time span which represents tweleve hours or half a day.
                 * @type TimeSpan
                 * @static
                 */
                TimeSpan.halfDay = function () { return TimeSpan.fromHours(12); };
                /**
                 * A time span which represents on day.
                 * @type TimeSpan
                 * @static
                 */
                TimeSpan.oneDay = function () { return TimeSpan.fromDays(1); };
                /**
                * Adds the milliseconds of the parameter to the current timespan.
                 * @param {TimeSpan} timeSpan TimeSpan to be added to the current one.
                 * @return {TimeSpan} A reference to the time span.
                 */
                TimeSpan.prototype.add = function (timeSpan) {
                    this.milliseconds += timeSpan.milliseconds;
                    return this;
                };
                ;
                /**
                 * Adds milliseconds to the current time span.
                 * @param {Number} milliseconds Milliseconds to be added.
                 * @return {TimeSpan} A reference to the time span.
                 */
                TimeSpan.prototype.addMilliseconds = function (milliseconds) {
                    this.milliseconds += milliseconds;
                    return this;
                };
                ;
                /**
                 * Adds secods to the current time span.
                 * @param {Number} seconds Seconds to be added.
                 * @return {TimeSpan} A reference to the time span.
                 */
                TimeSpan.prototype.addSeconds = function (seconds) {
                    this.addMilliseconds(seconds * 1000);
                    return this;
                };
                ;
                /**
                 * Adds minutes to the current time span.
                 * @param {Number} minutes Minutes to be added.
                 * @return {TimeSpan} A reference to the time span.
                 */
                TimeSpan.prototype.addMintures = function (minutes) {
                    this.addMilliseconds(minutes * 60000);
                    return this;
                };
                ;
                /**
                 * Adds hours to the current time span.
                 * @param {Number} hours Hours to be added.
                 * @return {TimeSpan} A reference to the time span.
                 */
                TimeSpan.prototype.addHours = function (hours) {
                    this.addMilliseconds(hours * 3600000);
                    return this;
                };
                ;
                /**
                 * Adds days to the current time span.
                 * @param {Number} days Days to be added.
                 * @return {TimeSpan} A reference to the time span.
                 */
                TimeSpan.prototype.addDays = function (days) {
                    this.addMilliseconds(days * 86400000);
                    return this;
                };
                ;
                /**
                 * Subtracts the milliseconds of the parameter to the current timespan.
                 * @param {TimeSpan} timeSpan TimeSpan to be added to the current one.
                 * @return {TimeSpan} A reference to the time span.
                 */
                TimeSpan.prototype.subtract = function (timeSpan) {
                    this.milliseconds -= timeSpan.milliseconds;
                    if (this.milliseconds < 0) {
                        this.milliseconds = 0;
                    }
                    return this;
                };
                ;
                /**
                 * Subtracts milliseconds to the current time span.
                 * @param {Number} milliseconds Milliseconds to be subtracted.
                 * @return {TimeSpan} A reference to the time span.
                 */
                TimeSpan.prototype.subtractMilliseconds = function (milliseconds) {
                    this.milliseconds -= milliseconds;
                    if (this.milliseconds < 0) {
                        this.milliseconds = 0;
                    }
                    return this;
                };
                ;
                /**
                 * Subtracts seconds to the current time span.
                 * @param {Number} seconds Seconds to be subtracted.
                 * @return {TimeSpan} A reference to the time span.
                 */
                TimeSpan.prototype.subtractSeconds = function (seconds) {
                    this.subtractMilliseconds(seconds * 1000);
                    return this;
                };
                ;
                /**
                 * Subtracts minutes to the current time span.
                 * @param {Number} minutes Minutes to be subtracted.
                 * @return {TimeSpan} A reference to the time span.
                 */
                TimeSpan.prototype.subtractMintures = function (minutes) {
                    this.subtractMilliseconds(minutes * 60000);
                    return this;
                };
                ;
                /**
                 * Subtracts hours to the current time span.
                 * @param {Number} hours Hours to be subtracted.
                 * @return {TimeSpan} A reference to the time span.
                 */
                TimeSpan.prototype.subtractHours = function (hours) {
                    this.subtractMilliseconds(hours * 3600000);
                    return this;
                };
                ;
                /**
                 * Subtracts days to the current time span.
                 * @param {Number} days Days to be subtracted.
                 * @return {TimeSpan} A reference to the time span.
                 */
                TimeSpan.prototype.subtractDays = function (days) {
                    this.subtractMilliseconds(days * 86400000);
                    return this;
                };
                ;
                /**
                 * Converts the timespan into seconds.
                 * @return {Number} Number of seconds.
                 */
                TimeSpan.prototype.toSeconds = function () { return this.milliseconds / 1000; };
                ;
                /**
                 * Converts the timespan into minutes.
                 * @return {Number} Number of minutes.
                 */
                TimeSpan.prototype.toMinutes = function () { return this.milliseconds / 60000; };
                ;
                /**
                 * Converts the timespan into hours.
                 * @return {Number} Number of hours.
                 */
                TimeSpan.prototype.toHours = function () { return this.milliseconds / 3600000; };
                ;
                /**
                 * Converts the timespan into days.
                 * @return {Number} Number of days.
                 */
                TimeSpan.prototype.toDays = function () { return this.milliseconds / 86400000; };
                ;
                /**
                 * Returns a new instance copy of the current time span.
                 * @return {TimeSpan} New instance copied from this one.
                 */
                TimeSpan.prototype.copy = function () {
                    return new TimeSpan(this.milliseconds);
                };
                ;
                /**
                 * Retrieves the difference with the current time span in milliseconds.
                 * @param {TimeSpan} timeSpan Time span to calculate the difference.
                 * @return {Number} difference between the two time span in milliseconds.
                 */
                TimeSpan.prototype.difference = function (timeSpan) {
                    return this.milliseconds - timeSpan.milliseconds;
                };
                ;
                /**
                 * Retrieves the percentage relation between the current time and the
                 * given one. This takes as the total value the given time span, so if
                 * this time span is greater than the parameter the percentage will be
                 * greater than one. The percentage is expressed between[0-1] being 1
                 * 100%.
                 * @param {TimeSpan} timeSpan Time considered the total time in the percentage relation.
                 * @return {Number} A Number greater or equal than 0, when 1 is 100%.
                 */
                TimeSpan.prototype.percentage = function (timeSpan) {
                    return this.milliseconds / timeSpan.milliseconds;
                };
                ;
                /**
                 * Converts the object into a string.
                 * @return {String} String representation of the object.
                 */
                TimeSpan.prototype.toString = function () {
                    return this.milliseconds.toString() + "ms";
                };
                ;
                /**
                 * Creates a new time span from a number of seconds.
                 * @param {Number} second Number of seconds.
                 * @return {TimeSpan} A time span representing the number of seconds.
                 * @static
                 */
                TimeSpan.fromSeconds = function (seconds) {
                    return new TimeSpan(seconds * TimeSpan.millisecondsPerSecond);
                };
                ;
                /**
                 * Creates a new time span from a number of minutes.
                 * @param {Number} second Number of minutes.
                 * @return {TimeSpan} A time span representing the number of minutes.
                 * @static
                 */
                TimeSpan.fromMinutes = function (minutes) {
                    return new TimeSpan(minutes * TimeSpan.millisecondsPerMinute);
                };
                ;
                /**
                 * Creates a new time span from a number of hours.
                 * @param {Number} second Number of hours.
                 * @return {TimeSpan} A time span representing the number of hours.
                 * @static
                 */
                TimeSpan.fromHours = function (hours) {
                    return new TimeSpan(hours * TimeSpan.millisecondsPerHour);
                };
                ;
                /**
                 * Creates a new time span from a number of days.
                 * @param {Number} second Number of days.
                 * @return {TimeSpan} A time span representing the number of days.
                 * @static
                 */
                TimeSpan.fromDays = function (days) {
                    return new TimeSpan(days * TimeSpan.millisecondsPerDay);
                };
                ;
                /**
                 * The exact time when the application started.
                 * On reality holds the time when this script was loaded.
                 * @type TimeSpan
                 * @static
                 */
                TimeSpan.applicationStarted = TimeSpan.now;
                return TimeSpan;
            }());
            Core.TimeSpan = TimeSpan;
        })(Core = Angular.Core || (Angular.Core = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Filters;
        (function (Filters) {
            var AngularFilters = (function () {
                function AngularFilters() {
                }
                Object.defineProperty(AngularFilters, "currency", {
                    get: function () { return "currency"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularFilters, "number", {
                    get: function () { return "number"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularFilters, "date", {
                    get: function () { return "date"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularFilters, "json", {
                    get: function () { return "json"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularFilters, "lowercase", {
                    get: function () { return "lowercase"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularFilters, "uppercase", {
                    get: function () { return "uppercase"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularFilters, "limitTo", {
                    get: function () { return "limitTo"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AngularFilters, "orderBy", {
                    get: function () { return "orderBy"; },
                    enumerable: true,
                    configurable: true
                });
                return AngularFilters;
            }());
            Filters.AngularFilters = AngularFilters;
        })(Filters = Angular.Filters || (Angular.Filters = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Filters;
        (function (Filters) {
            var FrameworkFilters = (function () {
                function FrameworkFilters() {
                }
                Object.defineProperty(FrameworkFilters, "reverse", {
                    get: function () { return "reverse"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FrameworkFilters, "trim", {
                    get: function () { return "trim"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FrameworkFilters, "lowercase", {
                    get: function () { return "lowercase"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FrameworkFilters, "uppercase", {
                    get: function () { return "uppercase"; },
                    enumerable: true,
                    configurable: true
                });
                return FrameworkFilters;
            }());
            Filters.FrameworkFilters = FrameworkFilters;
        })(Filters = Angular.Filters || (Angular.Filters = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../FrameworkModule.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Filters;
        (function (Filters) {
            var LowercaseFilter = (function () {
                function LowercaseFilter() {
                }
                LowercaseFilter.factory = function () {
                    return function (value) { return Object.isNull(value) ? null : value.toLowerCase(); };
                };
                LowercaseFilter.register = {
                    name: Filters.FrameworkFilters.lowercase,
                    factory: LowercaseFilter.factory
                };
                return LowercaseFilter;
            }());
            Filters.LowercaseFilter = LowercaseFilter;
            ////////////////////////////////////////////////////////////
            // Register filter
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerFilter(LowercaseFilter.register);
        })(Filters = Angular.Filters || (Angular.Filters = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../FrameworkModule.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Filters;
        (function (Filters) {
            var ReverseFilter = (function () {
                function ReverseFilter() {
                }
                ReverseFilter.factory = function () {
                    return function (items) { return items.slice().reverse(); };
                };
                ReverseFilter.register = {
                    name: Filters.FrameworkFilters.reverse,
                    factory: ReverseFilter.factory
                };
                return ReverseFilter;
            }());
            Filters.ReverseFilter = ReverseFilter;
            ////////////////////////////////////////////////////////////
            // Register filter
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerFilter(ReverseFilter.register);
        })(Filters = Angular.Filters || (Angular.Filters = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../FrameworkModule.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Filters;
        (function (Filters) {
            var TrimFilter = (function () {
                function TrimFilter() {
                }
                TrimFilter.trim = function (value, maxChars) {
                    if (Object.isNull(value))
                        return null;
                    if (value.length < maxChars)
                        return value;
                    return value.substr(0, maxChars) + "...";
                };
                TrimFilter.factory = function () {
                    return TrimFilter.trim;
                };
                TrimFilter.register = {
                    name: Filters.FrameworkFilters.trim,
                    factory: TrimFilter.factory
                };
                return TrimFilter;
            }());
            Filters.TrimFilter = TrimFilter;
            ////////////////////////////////////////////////////////////
            // Register filter
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerFilter(TrimFilter.register);
        })(Filters = Angular.Filters || (Angular.Filters = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../FrameworkModule.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Filters;
        (function (Filters) {
            var UppercaseFilter = (function () {
                function UppercaseFilter() {
                }
                UppercaseFilter.factory = function () {
                    return function (value) { return Object.isNull(value) ? null : value.toUpperCase(); };
                };
                UppercaseFilter.register = {
                    name: Filters.FrameworkFilters.uppercase,
                    factory: UppercaseFilter.factory
                };
                return UppercaseFilter;
            }());
            Filters.UppercaseFilter = UppercaseFilter;
            ////////////////////////////////////////////////////////////
            // Register filter
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerFilter(UppercaseFilter.register);
        })(Filters = Angular.Filters || (Angular.Filters = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var DirectiveBase = (function () {
                function DirectiveBase() {
                    var _this = this;
                    this.link = function (s, e, a, c, t) { return _this.create(s, e, a, c, t); };
                }
                DirectiveBase.prototype.getOptions = function (instanceAttributes, optionsParameter) {
                    if (String.isNullOrWhiteSpace(instanceAttributes[optionsParameter]))
                        return null;
                    return JSON.parse(instanceAttributes[optionsParameter]);
                };
                DirectiveBase.prototype.tryGetInt = function (options, instanceAttributes, optionFrom, optionTo) {
                    optionTo = optionTo || optionFrom;
                    if (!Object.isNull(instanceAttributes[optionFrom]))
                        options[optionTo] = parseInt(instanceAttributes[optionFrom]);
                    return options[optionTo];
                };
                DirectiveBase.prototype.tryGetNumber = function (options, instanceAttributes, optionFrom, optionTo) {
                    optionTo = optionTo || optionFrom;
                    if (!Object.isNull(instanceAttributes[optionFrom]))
                        options[optionTo] = parseFloat(instanceAttributes[optionFrom]);
                    return options[optionTo];
                };
                DirectiveBase.prototype.tryGetDate = function (options, instanceAttributes, optionFrom, optionTo) {
                    optionTo = optionTo || optionFrom;
                    if (!Object.isNull(instanceAttributes[optionFrom]))
                        options[optionTo] = new Date(instanceAttributes[optionFrom]);
                    return options[optionTo];
                };
                DirectiveBase.prototype.tryGetBoolean = function (options, instanceAttributes, optionFrom, optionTo) {
                    optionTo = optionTo || optionFrom;
                    if (!Object.isNull(instanceAttributes[optionFrom])) {
                        var value = instanceAttributes[optionFrom].toLowerCase();
                        options[optionTo] = value === "yes" ||
                            value === "true" ||
                            value === "1";
                    }
                    return options[optionTo];
                };
                DirectiveBase.prototype.tryGet = function (options, instanceAttributes, optionFrom, optionTo) {
                    optionTo = optionTo || optionFrom;
                    if (!Object.isNull(instanceAttributes[optionFrom]))
                        options[optionTo] = instanceAttributes[optionFrom];
                    return options[optionTo];
                };
                return DirectiveBase;
            }());
            Directives.DirectiveBase = DirectiveBase;
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var AddClass = (function (_super) {
                __extends(AddClass, _super);
                function AddClass() {
                    _super.apply(this, arguments);
                    this.restrict = "A";
                }
                AddClass.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var control = $(instanceElement);
                    var options = {};
                    this.tryGet(options, instanceAttributes, "element");
                    this.tryGet(options, instanceAttributes, "addClass");
                    if (!Object.isNull(options.element)) {
                        var element = $(options.element);
                        if (!element.hasClass(options.addClass)) {
                            element.addClass(options.addClass);
                        }
                    }
                    scope.$on("$destroy", function () { return control.remove(); });
                };
                AddClass.factory = function () {
                    return new AddClass();
                };
                AddClass.register = {
                    name: "addClass",
                    factory: AddClass.factory
                };
                return AddClass;
            }(Directives.DirectiveBase));
            Directives.AddClass = AddClass;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(AddClass.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var AngularServices = Angular.Services.AngularServices;
            var Alert = (function (_super) {
                __extends(Alert, _super);
                function Alert(timeout) {
                    _super.call(this);
                    this.restrict = "A";
                    this.scope = {
                        alertType: "@",
                        timeout: "@",
                        close: "&"
                    };
                    this.timeout = timeout;
                }
                Alert.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var control = $(instanceElement);
                    var alertType = scope["alertType"];
                    var timeout = parseInt(scope["timeout"]);
                    control.addClass("alert");
                    if (!Object.isNull(alertType))
                        control.addClass(alertType);
                    if (!Object.isNull(timeout))
                        this.timeout(function () { return scope["close"](); }, timeout);
                    scope.$on("$destroy", function () { return control.remove(); });
                };
                Alert.factory = function (timeout) {
                    return new Alert(timeout);
                };
                Alert.register = {
                    name: "alert",
                    factory: Alert.factory,
                    dependencies: [AngularServices.timeout]
                };
                return Alert;
            }(Directives.DirectiveBase));
            Directives.Alert = Alert;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(Alert.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var AngularServices = Angular.Services.AngularServices;
            var BackgroundImage = (function (_super) {
                __extends(BackgroundImage, _super);
                function BackgroundImage() {
                    _super.apply(this, arguments);
                    this.restrict = "A";
                }
                BackgroundImage.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var element = $(instanceElement);
                    scope.$watch(function () { return instanceAttributes[BackgroundImage.register.name]; }, function (newValue) {
                        if (String.isNullOrWhiteSpace(newValue))
                            return;
                        element.css("background-image", String.format("url({0})", newValue));
                    });
                    scope.$on("$destroy", function () { return element.remove(); });
                };
                BackgroundImage.factory = function () {
                    return new BackgroundImage();
                };
                BackgroundImage.register = {
                    name: "backgroundImage",
                    factory: BackgroundImage.factory,
                    dependencies: [AngularServices.interpolate]
                };
                return BackgroundImage;
            }(Directives.DirectiveBase));
            Directives.BackgroundImage = BackgroundImage;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(BackgroundImage.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var CommentArea = (function (_super) {
                __extends(CommentArea, _super);
                function CommentArea() {
                    _super.apply(this, arguments);
                    this.restrict = "A";
                    this.scope = {
                        ngModel: "="
                    };
                }
                CommentArea.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var _this = this;
                    var element = $(instanceElement);
                    var options = {};
                    this.tryGetNumber(options, instanceAttributes, "defaultHeight");
                    this.tryGetNumber(options, instanceAttributes, "maxSize");
                    this.tryGet(options, instanceAttributes, "maxSizeField");
                    this.tryGet(options, instanceAttributes, "maxSizeText");
                    this.tryGetBoolean(options, instanceAttributes, "resize");
                    this.tryGetBoolean(options, instanceAttributes, "showAlways");
                    this.tryGetBoolean(options, instanceAttributes, "restrictEntry");
                    this.tryGet(options, instanceAttributes, "negativeClass");
                    if (options.restrictEntry) {
                        element.on("keydown", function (event) { return _this.restrictEntry(event, options, element, false); });
                        element.on("keypress", function (event) { return _this.restrictEntry(event, options, element, true); });
                        element.on("keyup", function (event) { return _this.restrictEntry(event, options, element, false); });
                        scope.$watch(function () { return scope["ngModel"]; }, function () { return _this.restrictEntry(null, options, element, false); });
                    }
                    else {
                        element.on("keypress", function () { return _this.showCharacterLeft(options, element, true); });
                        scope.$watch(function () { return scope["ngModel"]; }, function () { return _this.showCharacterLeft(options, element, false); });
                    }
                    scope.$on("$destroy", function () { return element.remove(); });
                };
                CommentArea.prototype.restrictEntry = function (event, options, element, cancel) {
                    if (!Object.isNull(options.maxSize)) {
                        var value = element.val();
                        var length_1 = value.length;
                        var available = options.maxSize - length_1;
                        if (available < 0)
                            available = -1;
                        if (available === -1) {
                            if (cancel) {
                                event.stopPropagation();
                                event.preventDefault();
                            }
                            element.val(value.substr(0, options.maxSize));
                            available = 0;
                        }
                        if (!Object.isNull(options.maxSizeText)) {
                            $(options.maxSizeField).text((available === options.maxSize && !options.showAlways) ? String.empty : String.format(options.maxSizeText, available));
                        }
                        if (!Object.isNull(options.resize) && options.resize) {
                            this.checkSize(options, element);
                        }
                    }
                };
                CommentArea.prototype.showCharacterLeft = function (options, element, cancel) {
                    if (!Object.isNull(options.maxSize)) {
                        var value = element.val();
                        var length_2 = value.length;
                        var available = options.maxSize - length_2;
                        if (!Object.isNull(options.maxSizeText)) {
                            var field = $(options.maxSizeField);
                            if (!Object.isNull(options.negativeClass)) {
                                if (available < 0)
                                    field.addClass(options.negativeClass);
                                else
                                    field.removeClass(options.negativeClass);
                            }
                            $(options.maxSizeField).text((available === options.maxSize && !options.showAlways) ? String.empty : String.format(options.maxSizeText, available));
                        }
                        if (!Object.isNull(options.resize) && options.resize) {
                            this.checkSize(options, element);
                        }
                    }
                    else {
                        if (!Object.isNull(options.resize) && options.resize) {
                            this.checkSize(options, element);
                        }
                    }
                };
                CommentArea.prototype.checkSize = function (options, element) {
                    var control = element[0];
                    var defaultHeight = options.defaultHeight || 0;
                    control.style.height = "1px";
                    if (control.scrollHeight > control.clientHeight) {
                        if (control.scrollHeight > defaultHeight)
                            control.style.height = control.scrollHeight + "px";
                        else
                            control.style.height = defaultHeight + "px";
                    }
                    else if (!Object.isNull(options.defaultHeight)) {
                        control.style.height = defaultHeight + "px";
                    }
                };
                CommentArea.factory = function () {
                    return new CommentArea();
                };
                CommentArea.register = {
                    name: "commentArea",
                    factory: CommentArea.factory
                };
                return CommentArea;
            }(Directives.DirectiveBase));
            Directives.CommentArea = CommentArea;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(CommentArea.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var ConvertToNumber = (function (_super) {
                __extends(ConvertToNumber, _super);
                function ConvertToNumber() {
                    _super.apply(this, arguments);
                    this.restrict = "A";
                    this.require = "ngModel";
                }
                ConvertToNumber.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    controller.$parsers.push(function (val) { return Object.isNull(val) ? parseInt(val, 10) : null; });
                    controller.$formatters.push(function (val) { return val != null ? "" + val : null; });
                    var element = $(instanceElement);
                    scope.$on("$destroy", function () { return element.remove(); });
                };
                ConvertToNumber.factory = function () {
                    return new ConvertToNumber();
                };
                ConvertToNumber.register = {
                    name: "convertToNumber",
                    factory: ConvertToNumber.factory
                };
                return ConvertToNumber;
            }(Directives.DirectiveBase));
            Directives.ConvertToNumber = ConvertToNumber;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(ConvertToNumber.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../../typings/datetimepicker/datetimepicker.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var DateTimePicker = (function (_super) {
                __extends(DateTimePicker, _super);
                function DateTimePicker(filter) {
                    _super.call(this);
                    this.restrict = "A";
                    this.require = "ngModel";
                    this.filter = filter;
                }
                DateTimePicker.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var _this = this;
                    var element = $(instanceElement);
                    var options = {};
                    //////////////////////////////////////////////////////////////////
                    // Own properties
                    //////////////////////////////////////////////////////////////////
                    this.tryGet(options, instanceAttributes, "format");
                    this.tryGet(options, instanceAttributes, "dayViewHeaderFormat");
                    this.tryGetBoolean(options, instanceAttributes, "extraFormats");
                    this.tryGetNumber(options, instanceAttributes, "stepping");
                    this.tryGetDate(options, instanceAttributes, "minDate");
                    this.tryGetDate(options, instanceAttributes, "maxDate");
                    this.tryGetBoolean(options, instanceAttributes, "useCurrent");
                    this.tryGetBoolean(options, instanceAttributes, "collapse");
                    this.tryGet(options, instanceAttributes, "locale");
                    this.tryGet(options, instanceAttributes, "viewMode");
                    this.tryGetDate(options, instanceAttributes, "defaultDate");
                    this.tryGetBoolean(options, instanceAttributes, "disabledDates");
                    this.tryGetBoolean(options, instanceAttributes, "enabledDates");
                    this.tryGetBoolean(options, instanceAttributes, "disabledHours");
                    this.tryGetBoolean(options, instanceAttributes, "disabledTimeIntervals");
                    this.tryGetBoolean(options, instanceAttributes, "useStrict");
                    this.tryGetBoolean(options, instanceAttributes, "sideBySide");
                    this.tryGetBoolean(options, instanceAttributes, "calendarWeeks");
                    this.tryGet(options, instanceAttributes, "toolbarPlacement");
                    this.tryGetBoolean(options, instanceAttributes, "showTodayButton");
                    this.tryGetBoolean(options, instanceAttributes, "showClear");
                    this.tryGetBoolean(options, instanceAttributes, "showClose");
                    this.tryGetBoolean(options, instanceAttributes, "keepOpen");
                    this.tryGetBoolean(options, instanceAttributes, "allowInputToggle");
                    this.tryGetBoolean(options, instanceAttributes, "focusOnShow");
                    if (!Object.isNull(instanceAttributes["maxDateToday"]))
                        options.maxDate = new Date();
                    element.datetimepicker(options);
                    element.on("dp.change", function (e) {
                        if (Object.isNull(options.format) || options.format === "L")
                            controller.$setViewValue(!Object.isNull(e["date"])
                                ? _this.filter("date")(e["date"]._d, "MM/dd/yyyy")
                                : null);
                        if (!Object.isNull(options.format) && options.format === "LT")
                            controller.$setViewValue(!Object.isNull(e["date"])
                                ? _this.filter("date")(e["date"]._d, "hh:mm")
                                : null);
                    });
                    element.on("dp.show", function () {
                        if (!Object.isNull(options.viewMode)) {
                            element.data("DateTimePicker").viewMode(options.viewMode);
                        }
                    });
                    scope.$on("$destroy", function () { return element.remove(); });
                };
                DateTimePicker.factory = function (filter) {
                    return new DateTimePicker(filter);
                };
                DateTimePicker.register = {
                    name: "dateTimePicker",
                    factory: DateTimePicker.factory,
                    dependencies: ["$filter"]
                };
                return DateTimePicker;
            }(Directives.DirectiveBase));
            Directives.DateTimePicker = DateTimePicker;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(DateTimePicker.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var AngularServices = Angular.Services.AngularServices;
            var FileButton = (function (_super) {
                __extends(FileButton, _super);
                function FileButton(timeout) {
                    _super.call(this);
                    this.restrict = "E";
                    this.scope = {
                        title: "@",
                        ariaLabel: "@",
                        accept: "@",
                        caption: "@",
                        cssClass: "@",
                        fileSelected: "&"
                    };
                    this.template = '<input type="file" style="display: none" title="{{title}}" accept="{{accept}}" aria-label="{{ariaLabel}}" />' +
                        '<button type="button" class="{{cssClass}}">{{caption}}</button>';
                    this.timeout = timeout;
                }
                FileButton.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var _this = this;
                    var element = $(instanceElement);
                    var button = element.find("button");
                    var file = element.find("input");
                    button.on("click", function () { return file.trigger("click"); });
                    file.on("change", function (e) {
                        _this.timeout(function () {
                            if (Object.isNull(e) || Object.isNull(e.target) || Object.isNull(e.target["files"]))
                                return;
                            scope["fileSelected"]({ files: e.target["files"] });
                        });
                    });
                    scope.$on("$destroy", function () { return element.remove(); });
                };
                FileButton.factory = function (timeout) {
                    return new FileButton(timeout);
                };
                FileButton.register = {
                    name: "fileButton",
                    factory: FileButton.factory,
                    dependencies: [AngularServices.timeout]
                };
                return FileButton;
            }(Directives.DirectiveBase));
            Directives.FileButton = FileButton;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(FileButton.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var FileDragAndDrop = (function (_super) {
                __extends(FileDragAndDrop, _super);
                function FileDragAndDrop() {
                    _super.apply(this, arguments);
                    this.restrict = "A";
                }
                FileDragAndDrop.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var element = $(instanceElement);
                    instanceElement[0].addEventListener("dragenter", function () { return element.addClass("file-drag-enter"); }, false);
                    instanceElement[0].addEventListener("dragexit", function () { return element.removeClass("file-drag-enter"); }, false);
                    instanceElement[0].addEventListener("dragend", function () { return element.removeClass("file-drag-enter"); }, false);
                    instanceElement[0].addEventListener("dragleave", function () { return element.removeClass("file-drag-enter"); }, false);
                    instanceElement[0].addEventListener("dragover", function (e) {
                        element.addClass("file-drag-enter");
                        e.dataTransfer.dropEffect = "copy";
                        e.stopPropagation();
                        e.preventDefault();
                    }, false);
                    instanceElement[0].addEventListener("drop", function (e) {
                        scope.$eval(instanceAttributes["fileSelected"], { files: e.dataTransfer.files });
                        element.removeClass("file-drag-enter");
                        e.stopPropagation();
                        e.preventDefault();
                    }, false);
                    scope.$on("$destroy", function () { return element.remove(); });
                };
                FileDragAndDrop.factory = function () {
                    return new FileDragAndDrop();
                };
                FileDragAndDrop.register = {
                    name: "fileDragAndDrop",
                    factory: FileDragAndDrop.factory
                };
                return FileDragAndDrop;
            }(Directives.DirectiveBase));
            Directives.FileDragAndDrop = FileDragAndDrop;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(FileDragAndDrop.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var FocusInvalidField = (function (_super) {
                __extends(FocusInvalidField, _super);
                function FocusInvalidField() {
                    _super.apply(this, arguments);
                    this.restrict = "A";
                }
                FocusInvalidField.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var control = $(instanceElement);
                    control.on("submit", function () {
                        var invalid = control.find(".ng-invalid");
                        if (!Object.isNull(invalid) && invalid.length > 0) {
                            invalid[0].focus();
                        }
                    });
                    scope.$on("$destroy", function () { return control.remove(); });
                };
                FocusInvalidField.factory = function () {
                    return new FocusInvalidField();
                };
                FocusInvalidField.register = {
                    name: "focusInvalidField",
                    factory: FocusInvalidField.factory
                };
                return FocusInvalidField;
            }(Directives.DirectiveBase));
            Directives.FocusInvalidField = FocusInvalidField;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(FocusInvalidField.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var AngularServices = Angular.Services.AngularServices;
            var FocusWhen = (function (_super) {
                __extends(FocusWhen, _super);
                function FocusWhen(timeout) {
                    _super.call(this);
                    this.restrict = "A";
                    this.timeout = timeout;
                }
                FocusWhen.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var _this = this;
                    var control = $(instanceElement);
                    var focusDelay = 100;
                    if (instanceAttributes["focus-delay"])
                        focusDelay = parseInt(instanceAttributes["focus-delay"]);
                    scope.$watch(function () { return instanceAttributes[FocusWhen.register.name]; }, function (value) {
                        try {
                            var model = scope.$eval(value);
                            if (model) {
                                _this.timeout(function () { return control.focus(); }, focusDelay);
                            }
                        }
                        catch (e) {
                        }
                    });
                    scope.$on("$destroy", function () { return control.remove(); });
                };
                FocusWhen.factory = function (timeout) {
                    return new FocusWhen(timeout);
                };
                FocusWhen.register = {
                    name: "focusWhen",
                    factory: FocusWhen.factory,
                    dependencies: [AngularServices.timeout]
                };
                return FocusWhen;
            }(Directives.DirectiveBase));
            Directives.FocusWhen = FocusWhen;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(FocusWhen.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var AngularServices = Angular.Services.AngularServices;
            var FormatAsNumber = (function (_super) {
                __extends(FormatAsNumber, _super);
                function FormatAsNumber(filter) {
                    _super.call(this);
                    this.restrict = "A";
                    this.require = "?ngModel";
                    this.filter = filter;
                }
                FormatAsNumber.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var _this = this;
                    var control = $(instanceElement);
                    if (!Object.isNull(controller)) {
                        controller.$formatters.unshift(function (value) { return _this.filter("number")(value, instanceAttributes["decimalPlaces"] || 2); });
                        controller.$parsers.unshift(function (value) { return parseFloat(value); });
                        control.blur(function () { return control.val(_this.filter("number")(control.val(), instanceAttributes["decimalPlaces"] || 2)); });
                    }
                    scope.$on("$destroy", function () { return control.remove(); });
                };
                FormatAsNumber.factory = function (filter) {
                    return new FormatAsNumber(filter);
                };
                FormatAsNumber.register = {
                    name: "formatAsNumber",
                    factory: FormatAsNumber.factory,
                    dependencies: [AngularServices.filter]
                };
                return FormatAsNumber;
            }(Directives.DirectiveBase));
            Directives.FormatAsNumber = FormatAsNumber;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(FormatAsNumber.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var FullSelect = (function (_super) {
                __extends(FullSelect, _super);
                function FullSelect() {
                    _super.apply(this, arguments);
                    this.restrict = "A";
                }
                FullSelect.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var control = $(instanceElement);
                    control.on("focus", function () { return instanceElement.select(); });
                    scope.$on("$destroy", function () { return control.remove(); });
                };
                FullSelect.factory = function () {
                    return new FullSelect();
                };
                FullSelect.register = {
                    name: "fullSelect",
                    factory: FullSelect.factory
                };
                return FullSelect;
            }(Directives.DirectiveBase));
            Directives.FullSelect = FullSelect;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(FullSelect.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var AngularServices = Angular.Services.AngularServices;
            var HorizontalScroller = (function (_super) {
                __extends(HorizontalScroller, _super);
                function HorizontalScroller(interpolate) {
                    _super.call(this);
                    this.restrict = "A";
                    this.interpolate = interpolate;
                }
                HorizontalScroller.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var options = {};
                    options.element = instanceElement;
                    this.tryGet(options, instanceAttributes, "container");
                    this.tryGet(options, instanceAttributes, "content");
                    this.tryGet(options, instanceAttributes, "leftArrow");
                    this.tryGet(options, instanceAttributes, "rightArrow");
                    this.tryGetNumber(options, instanceAttributes, "speed");
                    this.tryGetNumber(options, instanceAttributes, "friction");
                    this.tryGetNumber(options, instanceAttributes, "fps");
                    this.tryGetNumber(options, instanceAttributes, "minVelocity");
                    if (String.isNullOrWhiteSpace(options.container) ||
                        String.isNullOrWhiteSpace(options.content) ||
                        String.isNullOrWhiteSpace(options.leftArrow) ||
                        String.isNullOrWhiteSpace(options.rightArrow))
                        return;
                    instanceElement[0]["scrollerInstance"] = new HorizontalScrollerInstance(options);
                    scope.$watch(function () { return instanceElement[0].innerHTML; }, function () { return instanceElement[0]["scrollerInstance"].enableScroll(); });
                    scope.$on("$destroy", function () {
                        instanceElement[0]["scrollerInstance"].dispose();
                    });
                };
                HorizontalScroller.factory = function (interpolate) {
                    return new HorizontalScroller(interpolate);
                };
                HorizontalScroller.register = {
                    name: "horizontalScroller",
                    factory: HorizontalScroller.factory,
                    dependencies: [AngularServices.interpolate]
                };
                return HorizontalScroller;
            }(Directives.DirectiveBase));
            Directives.HorizontalScroller = HorizontalScroller;
            var HorizontalScrollerInstance = (function () {
                function HorizontalScrollerInstance(options) {
                    var _this = this;
                    this.element = $(options.element);
                    this.container = this.element.find(options.container);
                    this.content = this.element.find(options.content);
                    this.leftArrow = this.element.find(options.leftArrow);
                    this.rightArrow = this.element.find(options.rightArrow);
                    this.position = 0;
                    this.velocity = 0;
                    this.speed = options.speed || 140;
                    this.friction = options.friction || 0.95;
                    this.millisecondsPerFrame = 1000 / (options.fps || 60);
                    this.minVelocity = options.minVelocity || 10;
                    this.enableScroll();
                    $(window).on("resize", function () { return _this.enableScroll(); });
                    this.leftArrow.on("mousedown touchstart", function () { return _this.moveLeft(); });
                    this.leftArrow.on("mouseup mouseleave touchend touchcancel", function () { return _this.pressing = false; });
                    this.rightArrow.on("mousedown touchstart", function () { return _this.moveRight(); });
                    this.rightArrow.on("mouseup mouseleave touchend touchcancel", function () { return _this.pressing = false; });
                }
                HorizontalScrollerInstance.prototype.enableScroll = function () {
                    var wContainer = this.container.width();
                    var wContent = this.content.width();
                    if (wContent < wContainer) {
                        this.leftArrow.css("display", "none");
                        this.rightArrow.css("display", "none");
                        this.position = 0;
                    }
                    else {
                        this.leftArrow.css("display", "inline-block");
                        this.rightArrow.css("display", "inline-block");
                    }
                    this.checkConstraints();
                    this.applyPosition();
                };
                HorizontalScrollerInstance.prototype.applyPosition = function () {
                    var translate = "translate(" + this.position + "px, 0)";
                    var translate3D = "translate3d(" + this.position + "px, 0, 0)";
                    this.content.css({
                        '-ms-transform': translate,
                        '-moz-transform': translate3D,
                        '-webkit-transform': translate3D,
                        'transform': translate3D
                    });
                };
                HorizontalScrollerInstance.prototype.checkConstraints = function () {
                    var wContainer = this.container.width();
                    var wContent = this.content.width();
                    var minMovement = wContainer - wContent;
                    if (wContent <= wContainer || this.position >= 0)
                        this.position = 0;
                    if (wContent >= wContainer && this.position <= minMovement)
                        this.position = minMovement;
                };
                HorizontalScrollerInstance.prototype.killInterval = function () {
                    if (Object.isNull(this.intervalId))
                        return;
                    window.clearInterval(this.intervalId);
                };
                HorizontalScrollerInstance.prototype.getMilliseconds = function () {
                    return (new Date()).getTime();
                };
                HorizontalScrollerInstance.prototype.moveLeft = function () {
                    var _this = this;
                    this.pressing = true;
                    this.direction = 1;
                    this.lastTime = this.getMilliseconds();
                    this.killInterval();
                    this.intervalId = window.setInterval(function () { return _this.move(); }, this.millisecondsPerFrame);
                };
                HorizontalScrollerInstance.prototype.moveRight = function () {
                    var _this = this;
                    this.pressing = true;
                    this.direction = -1;
                    this.lastTime = this.getMilliseconds();
                    this.killInterval();
                    this.intervalId = window.setInterval(function () { return _this.move(); }, this.millisecondsPerFrame);
                };
                HorizontalScrollerInstance.prototype.move = function () {
                    var deltaTime = (this.getMilliseconds() - this.lastTime) / 1000;
                    if (this.pressing) {
                        this.velocity = this.speed;
                    }
                    this.velocity *= this.friction;
                    this.position = this.position + (this.direction * this.velocity * deltaTime);
                    this.checkConstraints();
                    this.applyPosition();
                    if (this.velocity <= this.minVelocity) {
                        this.killInterval();
                    }
                    this.lastTime = this.getMilliseconds();
                };
                HorizontalScrollerInstance.prototype.dispose = function () {
                    this.container.remove();
                    this.content.remove();
                    this.leftArrow.remove();
                    this.rightArrow.remove();
                };
                return HorizontalScrollerInstance;
            }());
            Directives.HorizontalScrollerInstance = HorizontalScrollerInstance;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(HorizontalScroller.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts"/>
///<reference path="../core/ArrayList.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Services;
        (function (Services) {
            var KeyAction = (function () {
                function KeyAction() {
                }
                return KeyAction;
            }());
            Services.KeyAction = KeyAction;
        })(Services = Angular.Services || (Angular.Services = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
///<reference path="../../../typings/angularjs/angular.d.ts" />
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="../core/ArrayList.ts"/>
///<reference path="DirectiveBase.ts" />
///<reference path="../services/IKeyProcessorService.ts" />
///<reference path="../scopes/directives/IKeyboardListenerScope.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var FrameworkServices = Angular.Services.FrameworkServices;
            var KeyboardListener = (function (_super) {
                __extends(KeyboardListener, _super);
                function KeyboardListener(keyProcessor, logger) {
                    _super.call(this);
                    this.restrict = "E";
                    this.scope = {
                        disabled: "=",
                        attachTo: "@"
                    };
                    this.keyProcessor = keyProcessor;
                    this.logger = logger;
                }
                KeyboardListener.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var _this = this;
                    var control = $(instanceElement);
                    var actions = String.empty;
                    var attachTo = $(scope.attachTo || document);
                    control.find("listener").each(function (index, element) {
                        actions += element.getAttribute("action") + "|";
                    });
                    if (actions[actions.length - 1] === "|")
                        actions = actions.substr(0, actions.length - 1);
                    var keyActions = this.keyProcessor.parseActions(actions);
                    var keyProcessor = this.keyProcessor;
                    var logger = this.logger;
                    keyActions.forEach(function (x) { return _this.logger.writeMessage("action for key=" + x.keyCode + " alt=" + x.alt + " ctrl=" + x.ctrl + " shift=" + x.shift); });
                    function evaluateKeyPress(e) {
                        if (scope.disabled)
                            return;
                        logger.writeMessage("keypress for key=" + e.keyCode + " alt=" + e.altKey + " ctrl=" + e.ctrlKey + " shift=" + e.shiftKey);
                        keyProcessor.evaluateKeyActions(keyActions, "keypress", scope.$parent, e);
                    }
                    function evaluateKeyDown(e) {
                        if (scope.disabled)
                            return;
                        logger.writeMessage("keydown for key=" + e.keyCode + " alt=" + e.altKey + " ctrl=" + e.ctrlKey + " shift=" + e.shiftKey);
                        keyProcessor.evaluateKeyActions(keyActions, "keydown", scope.$parent, e);
                    }
                    function evaluateKeyUp(e) {
                        if (scope.disabled)
                            return;
                        logger.writeMessage("keyup for key=" + e.keyCode + " alt=" + e.altKey + " ctrl=" + e.ctrlKey + " shift=" + e.shiftKey);
                        keyProcessor.evaluateKeyActions(keyActions, "keyup", scope.$parent, e);
                    }
                    if (keyActions.any(function (x) { return x.eventType === "keypress"; }))
                        attachTo.on("keypress.documentKeyboard", evaluateKeyPress);
                    if (keyActions.any(function (x) { return x.eventType === "keydown"; }))
                        attachTo.on("keydown.documentKeyboard", evaluateKeyDown);
                    if (keyActions.any(function (x) { return x.eventType === "keyup"; }))
                        attachTo.on("keyup.documentKeyboard", evaluateKeyUp);
                    scope.$on("$destroy", function () {
                        attachTo.off("keypress.documentKeyboard", evaluateKeyPress);
                        attachTo.off("keydown.documentKeyboard", evaluateKeyDown);
                        attachTo.off("keyup.documentKeyboard", evaluateKeyUp);
                        control.remove();
                    });
                };
                KeyboardListener.factory = function (keyProcessor, logger) {
                    return new KeyboardListener(keyProcessor, logger);
                };
                KeyboardListener.register = {
                    name: "keyboardListener",
                    factory: KeyboardListener.factory,
                    dependencies: [FrameworkServices.keyProcessorService, FrameworkServices.loggingService]
                };
                return KeyboardListener;
            }(Directives.DirectiveBase));
            Directives.KeyboardListener = KeyboardListener;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(KeyboardListener.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var AngularServices = Angular.Services.AngularServices;
            var MdUiSrefActive = (function (_super) {
                __extends(MdUiSrefActive, _super);
                function MdUiSrefActive(interpolate, state) {
                    _super.call(this);
                    this.restrict = "A";
                    this.interpolate = interpolate;
                    this.state = state;
                }
                MdUiSrefActive.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var control = $(instanceElement);
                    var cssClass = instanceAttributes[MdUiSrefActive.register.name];
                    var state = this.interpolate(instanceAttributes["mdUiSref"] || instanceAttributes["uiSref"])(scope);
                    function update(toState) {
                        if (Object.isNull(toState) || Object.isNull(toState.name))
                            return;
                        if (toState.name.indexOf(state) !== -1) {
                            control.addClass(cssClass);
                        }
                        else {
                            control.removeClass(cssClass);
                        }
                    }
                    update(this.state.current);
                    scope.$on("$stateChangeSuccess", function (event, toState) { return update(toState); });
                    scope.$on("$destroy", function () { return control.remove(); });
                };
                MdUiSrefActive.factory = function (interpolate, state) {
                    return new MdUiSrefActive(interpolate, state);
                };
                MdUiSrefActive.register = {
                    name: "mdUiSrefActive",
                    factory: MdUiSrefActive.factory,
                    dependencies: [AngularServices.interpolate, AngularServices.state]
                };
                return MdUiSrefActive;
            }(Directives.DirectiveBase));
            Directives.MdUiSrefActive = MdUiSrefActive;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(MdUiSrefActive.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="../core/ArrayList.ts"/>
///<reference path="DirectiveBase.ts" />
///<reference path="../services/IKeyProcessorService.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var FrameworkServices = Angular.Services.FrameworkServices;
            var OnKeyboard = (function (_super) {
                __extends(OnKeyboard, _super);
                function OnKeyboard(keyProcessor) {
                    _super.call(this);
                    this.restrict = "A";
                    this.keyProcessor = keyProcessor;
                }
                OnKeyboard.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var _this = this;
                    var control = $(instanceElement);
                    var keyActions = this.keyProcessor.parseActions(instanceAttributes[OnKeyboard.register.name]);
                    if (keyActions.any(function (x) { return x.eventType === "keypress"; }))
                        control.keypress(function (e) { return _this.keyProcessor.evaluateKeyActions(keyActions, "keypress", scope, e); });
                    if (keyActions.any(function (x) { return x.eventType === "keydown"; }))
                        control.keydown(function (e) { return _this.keyProcessor.evaluateKeyActions(keyActions, "keydown", scope, e); });
                    if (keyActions.any(function (x) { return x.eventType === "keyup"; }))
                        control.keyup(function (e) { return _this.keyProcessor.evaluateKeyActions(keyActions, "keyup", scope, e); });
                    scope.$on("$destroy", function () { return control.remove(); });
                };
                OnKeyboard.factory = function (keyProcessor) {
                    return new OnKeyboard(keyProcessor);
                };
                OnKeyboard.register = {
                    name: "onKeyboard",
                    factory: OnKeyboard.factory,
                    dependencies: [FrameworkServices.keyProcessorService]
                };
                return OnKeyboard;
            }(Directives.DirectiveBase));
            Directives.OnKeyboard = OnKeyboard;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(OnKeyboard.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var PaginationBar = (function (_super) {
                __extends(PaginationBar, _super);
                function PaginationBar() {
                    _super.apply(this, arguments);
                    this.restrict = "E";
                    this.template = '<div class="pagination-bar" ng-controller="PaginationBarController as controller"><ul class="pagination"><li ng-repeat="link in links" ng-class="{ \'active\': link.selected }"><a ng-click="link.enabled && controller.navigate(link)" tooltip title="Go to page {{link.tag}}" ng-bind-html="link.name"></a></li></ul></div>';
                    this.scope = {
                        cssClass: "@",
                        firstText: "@",
                        previousText: "@",
                        nextText: "@",
                        lastText: "@",
                        pages: "=",
                        currentPage: "=",
                        totalLinks: "@",
                        links: "=",
                        itemClicked: "&",
                        autoScroll: "@"
                    };
                }
                PaginationBar.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var control = $(instanceElement);
                    scope.$on("$destroy", function () { return control.remove(); });
                };
                PaginationBar.factory = function () {
                    return new PaginationBar();
                };
                PaginationBar.register = {
                    name: "paginationBar",
                    factory: PaginationBar.factory
                };
                return PaginationBar;
            }(Directives.DirectiveBase));
            Directives.PaginationBar = PaginationBar;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(PaginationBar.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var AngularServices = Angular.Services.AngularServices;
            var PreventEventIf = (function (_super) {
                __extends(PreventEventIf, _super);
                function PreventEventIf(timeout) {
                    _super.call(this);
                    this.restrict = "A";
                    this.scope = {
                        preventEventIf: "&",
                        preventEvent: "@"
                    };
                    this.timeout = timeout;
                }
                PreventEventIf.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var control = $(instanceElement);
                    control.on(scope["preventEvent"], function (e) {
                        if (scope["preventEventIf"]()) {
                            event.preventDefault();
                            e.stopPropagation();
                        }
                    });
                    scope.$on("$destroy", function () { return control.remove(); });
                };
                PreventEventIf.factory = function (timeout) {
                    return new PreventEventIf(timeout);
                };
                PreventEventIf.register = {
                    name: "preventEventIf",
                    factory: PreventEventIf.factory,
                    dependencies: [AngularServices.timeout]
                };
                return PreventEventIf;
            }(Directives.DirectiveBase));
            Directives.PreventEventIf = PreventEventIf;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(PreventEventIf.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var RemoveClass = (function (_super) {
                __extends(RemoveClass, _super);
                function RemoveClass() {
                    _super.apply(this, arguments);
                    this.restrict = "A";
                }
                RemoveClass.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var control = $(instanceElement);
                    var options = {};
                    this.tryGet(options, instanceAttributes, "element");
                    this.tryGet(options, instanceAttributes, "removeClass");
                    if (!Object.isNull(options.element)) {
                        var element = $(options.element);
                        if (element.hasClass(options.removeClass))
                            element.removeClass(options.removeClass);
                    }
                    scope.$on("$destroy", function () { return control.remove(); });
                };
                RemoveClass.factory = function () {
                    return new RemoveClass();
                };
                RemoveClass.register = {
                    name: "removeClass",
                    factory: RemoveClass.factory
                };
                return RemoveClass;
            }(Directives.DirectiveBase));
            Directives.RemoveClass = RemoveClass;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(RemoveClass.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var AngularServices = Angular.Services.AngularServices;
            var ScrollToBottom = (function (_super) {
                __extends(ScrollToBottom, _super);
                function ScrollToBottom(rootScope) {
                    _super.call(this);
                    this.restrict = "A";
                    this.rootScope = rootScope;
                }
                ScrollToBottom.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var control = $(instanceElement);
                    var options = {};
                    this.tryGetBoolean(options, instanceAttributes, "onContentChange");
                    this.tryGetBoolean(options, instanceAttributes, "onClick");
                    if (options.onContentChange) {
                        scope.$watch(function () { return instanceElement[0].innerHTML; }, function () {
                            control.scrollTop(control[0].scrollHeight);
                        });
                    }
                    if (options.onClick) {
                        control.on("click", function () {
                            control.scrollTop(0);
                        });
                    }
                    scope.$on("$destroy", function () { return control.remove(); });
                };
                ScrollToBottom.factory = function (rootScope) {
                    return new ScrollToBottom(rootScope);
                };
                ScrollToBottom.register = {
                    name: "scrollToBottom",
                    factory: ScrollToBottom.factory,
                    dependencies: [AngularServices.rootScope]
                };
                return ScrollToBottom;
            }(Directives.DirectiveBase));
            Directives.ScrollToBottom = ScrollToBottom;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(ScrollToBottom.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var ScrollToggleClass = (function (_super) {
                __extends(ScrollToggleClass, _super);
                function ScrollToggleClass() {
                    _super.apply(this, arguments);
                    this.restrict = "A";
                }
                ScrollToggleClass.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var element = $(instanceElement);
                    var self = this;
                    function updateElement() {
                        self.updateElement(element, instanceAttributes);
                    }
                    $(window).on("scroll.scrollToggleClass", updateElement);
                    scope.$on("$destroy", function () {
                        $(window).unbind("scroll.scrollToggleClass", updateElement);
                        element.remove();
                    });
                    this.updateElement(element, instanceAttributes);
                };
                ScrollToggleClass.prototype.updateElement = function (element, instanceAttributes) {
                    var options = {};
                    this.tryGetNumber(options, instanceAttributes, "minPos");
                    this.tryGetNumber(options, instanceAttributes, "maxPos");
                    this.tryGet(options, instanceAttributes, "cssClass");
                    options.minPos = options.minPos || Number.MIN_VALUE;
                    options.maxPos = options.maxPos || Number.MAX_VALUE;
                    var scroll = $(window).scrollTop();
                    if (scroll >= options.minPos && scroll <= options.maxPos)
                        element.addClass(options.cssClass);
                    else
                        element.removeClass(options.cssClass);
                };
                ScrollToggleClass.factory = function () {
                    return new ScrollToggleClass();
                };
                ScrollToggleClass.register = {
                    name: "scrollToggleClass",
                    factory: ScrollToggleClass.factory
                };
                return ScrollToggleClass;
            }(Directives.DirectiveBase));
            Directives.ScrollToggleClass = ScrollToggleClass;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(ScrollToggleClass.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var AngularServices = Angular.Services.AngularServices;
            var ScrollToTop = (function (_super) {
                __extends(ScrollToTop, _super);
                function ScrollToTop(rootScope) {
                    _super.call(this);
                    this.restrict = "A";
                    this.rootScope = rootScope;
                }
                ScrollToTop.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var _this = this;
                    var control = $(instanceElement);
                    var options = {};
                    this.tryGetBoolean(options, instanceAttributes, "onStateChange");
                    this.tryGetBoolean(options, instanceAttributes, "onClick");
                    scope.$watch(function () { return instanceAttributes["onStateChange"]; }, function (newValue) {
                        if (newValue === "true") {
                            if (Object.isNull(control[0]["stateChangeEvent"])) {
                                control[0]["stateChangeEvent"] = _this.rootScope.$on("$stateChangeSuccess", function () {
                                    $("body").scrollTop(0);
                                });
                            }
                        }
                        else {
                            if (!Object.isNull(control[0]["stateChangeEvent"])) {
                                control[0]["stateChangeEvent"]();
                                control[0]["stateChangeEvent"] = null;
                            }
                        }
                    });
                    if (options.onClick) {
                        control.on("click", function () {
                            $("body").scrollTop(0);
                        });
                    }
                    scope.$on("$destroy", function () { return control.remove(); });
                };
                ScrollToTop.factory = function (rootScope) {
                    return new ScrollToTop(rootScope);
                };
                ScrollToTop.register = {
                    name: "scrollToTop",
                    factory: ScrollToTop.factory,
                    dependencies: [AngularServices.rootScope]
                };
                return ScrollToTop;
            }(Directives.DirectiveBase));
            Directives.ScrollToTop = ScrollToTop;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(ScrollToTop.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var SelectToggleClass = (function (_super) {
                __extends(SelectToggleClass, _super);
                function SelectToggleClass() {
                    _super.apply(this, arguments);
                    this.restrict = "A";
                }
                SelectToggleClass.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var element = $(instanceElement);
                    var className = instanceAttributes[SelectToggleClass.register.name];
                    function documentClick() {
                        element.removeClass(className);
                    }
                    $("html").on("click.selectToggleClass", documentClick);
                    element.on("click", function (e) {
                        e.stopPropagation();
                        element.toggleClass(className);
                    });
                    scope.$on("$destroy", function () {
                        $("html").unbind("click.selectToggleClass", documentClick);
                        element.remove();
                    });
                };
                SelectToggleClass.factory = function () {
                    return new SelectToggleClass();
                };
                SelectToggleClass.register = {
                    name: "selectToggleClass",
                    factory: SelectToggleClass.factory
                };
                return SelectToggleClass;
            }(Directives.DirectiveBase));
            Directives.SelectToggleClass = SelectToggleClass;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(SelectToggleClass.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var ToggleClass = (function (_super) {
                __extends(ToggleClass, _super);
                function ToggleClass() {
                    _super.apply(this, arguments);
                    this.restrict = "A";
                }
                ToggleClass.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var control = $(instanceElement);
                    var options = {};
                    this.tryGet(options, instanceAttributes, "element");
                    this.tryGet(options, instanceAttributes, "toggleClass");
                    if (!Object.isNull(options.element)) {
                        var element = $(options.element);
                        if (!element.hasClass(options.toggleClass))
                            element.addClass(options.toggleClass);
                        else
                            element.removeClass(options.toggleClass);
                    }
                    scope.$on("$destroy", function () { return control.remove(); });
                };
                ToggleClass.factory = function () {
                    return new ToggleClass();
                };
                ToggleClass.register = {
                    name: "toggleClass",
                    factory: ToggleClass.factory
                };
                return ToggleClass;
            }(Directives.DirectiveBase));
            Directives.ToggleClass = ToggleClass;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(ToggleClass.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var ToggleClassOnClick = (function (_super) {
                __extends(ToggleClassOnClick, _super);
                function ToggleClassOnClick() {
                    _super.apply(this, arguments);
                    this.restrict = "A";
                }
                ToggleClassOnClick.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var element = $(instanceElement);
                    var toggleElement = $(instanceAttributes["toggleElement"] || instanceElement);
                    var toggleClass = instanceAttributes["toggleClass"];
                    element.on("click touch", function () { return $(toggleElement).toggleClass(toggleClass); });
                    scope.$on("$destroy", function () { return element.remove(); });
                };
                ToggleClassOnClick.factory = function () {
                    return new ToggleClassOnClick();
                };
                ToggleClassOnClick.register = {
                    name: "toggleClassOnClick",
                    factory: ToggleClassOnClick.factory
                };
                return ToggleClassOnClick;
            }(Directives.DirectiveBase));
            Directives.ToggleClassOnClick = ToggleClassOnClick;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(ToggleClassOnClick.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="DirectiveBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Directives;
        (function (Directives) {
            var Tooltip = (function (_super) {
                __extends(Tooltip, _super);
                function Tooltip() {
                    _super.apply(this, arguments);
                    this.restrict = "A";
                    this.scope = {
                        tooltipOptions: "@",
                        tooltipCose: "&",
                        tooltipParameter: "="
                    };
                }
                Tooltip.prototype.create = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var control = $(instanceElement);
                    var options = this.getOptions(instanceAttributes, Tooltip.register.name + "Options");
                    if (Object.isNull(options) || Object.isNull(options.content)) {
                        this.normalTooltip(control, scope, instanceAttributes);
                    }
                    control.tooltipster(options);
                    scope.$on("$destroy", function () { return control.remove(); });
                };
                Tooltip.prototype.normalTooltip = function (control, scope, instanceAttributes) {
                    scope.$watch(function () { return instanceAttributes["title"]; }, function (newValue) {
                        if (String.isNullOrWhiteSpace(newValue))
                            return;
                        var tooltipsterData = control.data("tooltipster-ns");
                        if (!Object.isNull(tooltipsterData)) {
                            control.removeAttr("title");
                            control.tooltipster("content", newValue);
                        }
                    });
                };
                Tooltip.factory = function () {
                    return new Tooltip();
                };
                Tooltip.register = {
                    name: "tooltipster",
                    factory: Tooltip.factory
                };
                return Tooltip;
            }(Directives.DirectiveBase));
            Directives.Tooltip = Tooltip;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerDirective(Tooltip.register);
        })(Directives = Angular.Directives || (Angular.Directives = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Interceptors;
        (function (Interceptors) {
            var InterceptorBase = (function () {
                function InterceptorBase(q) {
                    var _this = this;
                    this.q = q;
                    this.request = function (c) { return _this.onRequest(c); };
                    this.response = function (r) { return _this.onResponse(r); };
                    this.requestError = function (r) { return _this.onRequestError(r); };
                    this.responseError = function (r) { return _this.onResponseError(r); };
                }
                InterceptorBase.prototype.onRequest = function (config) {
                    return config;
                };
                InterceptorBase.prototype.onResponse = function (response) {
                    return this.q.resolve(response);
                };
                InterceptorBase.prototype.onRequestError = function (rejection) {
                    return this.q.reject(rejection);
                };
                InterceptorBase.prototype.onResponseError = function (rejection) {
                    return this.q.reject(rejection);
                };
                return InterceptorBase;
            }());
            Interceptors.InterceptorBase = InterceptorBase;
        })(Interceptors = Angular.Interceptors || (Angular.Interceptors = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Models;
        (function (Models) {
            var ModelBase = (function () {
                function ModelBase() {
                }
                ModelBase.prototype.startTracking = function () {
                    this.original = Object.clone(this, ["original"]);
                };
                ModelBase.prototype.stopTracking = function () {
                    this.original = null;
                };
                ModelBase.prototype.isDirty = function () {
                    return !Object.isEqualTo(this, this.original, ["original"]);
                };
                ModelBase.prototype.isTracking = function () {
                    return this.original != null;
                };
                return ModelBase;
            }());
            Models.ModelBase = ModelBase;
        })(Models = Angular.Models || (Angular.Models = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../core/Object.ts"/>
///<reference path="../core/LocalStorage.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Session;
        (function (Session) {
            var LocalStorage = Angular.Core.LocalStorage;
            var ObjectSession = (function () {
                function ObjectSession() {
                }
                ObjectSession.save = function (name, data) {
                    LocalStorage.set(name, JSON.stringify(data));
                };
                ObjectSession.restore = function (name) {
                    var content = LocalStorage.get(String, name);
                    if (Object.isNull(content))
                        return null;
                    return JSON.parse(content.valueOf());
                };
                ObjectSession.clear = function (name) {
                    LocalStorage.remove(name);
                };
                return ObjectSession;
            }());
            Session.ObjectSession = ObjectSession;
        })(Session = Angular.Session || (Angular.Session = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Core/ArrayList.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Services;
        (function (Services) {
            (function (AlertType) {
                AlertType[AlertType["Message"] = 0] = "Message";
                AlertType[AlertType["Warning"] = 1] = "Warning";
                AlertType[AlertType["Error"] = 2] = "Error";
            })(Services.AlertType || (Services.AlertType = {}));
            var AlertType = Services.AlertType;
            var Alert = (function () {
                function Alert(alertType, message) {
                    this.alertType = alertType;
                    this.innerMessage = message;
                }
                Object.defineProperty(Alert.prototype, "type", {
                    get: function () { return this.alertType; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Alert.prototype, "typeName", {
                    get: function () { return Alert.getTypeName(this.alertType); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Alert.prototype, "message", {
                    get: function () { return this.innerMessage; },
                    enumerable: true,
                    configurable: true
                });
                Alert.getTypeName = function (alertType) {
                    switch (alertType) {
                        case AlertType.Message:
                            return "message";
                        case AlertType.Warning:
                            return "warning";
                        case AlertType.Error:
                            return "error";
                        default:
                            return "unknown";
                    }
                };
                return Alert;
            }());
            Services.Alert = Alert;
        })(Services = Angular.Services || (Angular.Services = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../core/ArrayList.ts" />
///<reference path="../interfaces/IServiceRegister.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="IAlertService.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Services;
        (function (Services) {
            var ArrayList = Angular.Core.ArrayList;
            var AlertService = (function (_super) {
                __extends(AlertService, _super);
                function AlertService(logger) {
                    _super.call(this);
                    this.logger = logger;
                    this.alerts = new ArrayList();
                }
                AlertService.prototype.add = function (alertType, message) {
                    this.alerts.add(new Services.Alert(alertType, message));
                };
                AlertService.prototype.addError = function (message) {
                    this.add(Services.AlertType.Error, message);
                    this.logger.writeError(message);
                };
                AlertService.prototype.addWarning = function (message) {
                    this.add(Services.AlertType.Warning, message);
                    this.logger.writeWarning(message);
                };
                AlertService.prototype.addMessage = function (message) {
                    this.add(Services.AlertType.Message, message);
                    this.logger.writeMessage(message);
                };
                AlertService.prototype.remove = function (index) {
                    if (index instanceof Services.Alert)
                        this.alerts.remove(index);
                    else
                        this.alerts.removeAt(index);
                };
                AlertService.prototype.get = function (index) {
                    return this.alerts.get(index);
                };
                AlertService.prototype.getAlerts = function () {
                    return this.alerts;
                };
                AlertService.factory = function (logger) {
                    return new AlertService(logger);
                };
                AlertService.register = {
                    name: Services.FrameworkServices.alertService,
                    factory: AlertService.factory,
                    dependencies: [Services.FrameworkServices.loggingService]
                };
                return AlertService;
            }(Services.ServiceBase));
            Services.AlertService = AlertService;
            Angular.FrameworkModule.instance.registerService(AlertService.register);
        })(Services = Angular.Services || (Angular.Services = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Services;
        (function (Services) {
            (function (DateRange) {
                DateRange[DateRange["Unknown"] = 0] = "Unknown";
                DateRange[DateRange["Seconds"] = 1] = "Seconds";
                DateRange[DateRange["Minutes"] = 2] = "Minutes";
                DateRange[DateRange["Hours"] = 3] = "Hours";
                DateRange[DateRange["Days"] = 4] = "Days";
                DateRange[DateRange["Months"] = 5] = "Months";
                DateRange[DateRange["Years"] = 6] = "Years";
            })(Services.DateRange || (Services.DateRange = {}));
            var DateRange = Services.DateRange;
            (function (MonthName) {
                MonthName[MonthName["January"] = 0] = "January";
                MonthName[MonthName["February"] = 1] = "February";
                MonthName[MonthName["March"] = 2] = "March";
                MonthName[MonthName["April"] = 3] = "April";
                MonthName[MonthName["May"] = 4] = "May";
                MonthName[MonthName["June"] = 5] = "June";
                MonthName[MonthName["July"] = 6] = "July";
                MonthName[MonthName["August"] = 7] = "August";
                MonthName[MonthName["September"] = 8] = "September";
                MonthName[MonthName["October"] = 9] = "October";
                MonthName[MonthName["November"] = 10] = "November";
                MonthName[MonthName["December"] = 11] = "December";
            })(Services.MonthName || (Services.MonthName = {}));
            var MonthName = Services.MonthName;
            (function (DayName) {
                DayName[DayName["Sunday"] = 0] = "Sunday";
                DayName[DayName["Monday"] = 1] = "Monday";
                DayName[DayName["Tuesday"] = 2] = "Tuesday";
                DayName[DayName["Wednesday"] = 3] = "Wednesday";
                DayName[DayName["Thursday"] = 4] = "Thursday";
                DayName[DayName["Friday"] = 5] = "Friday";
                DayName[DayName["Saturday"] = 6] = "Saturday";
            })(Services.DayName || (Services.DayName = {}));
            var DayName = Services.DayName;
            var DateRangeValue = (function () {
                function DateRangeValue(value, range) {
                    this.value = value;
                    this.range = range;
                }
                return DateRangeValue;
            }());
            Services.DateRangeValue = DateRangeValue;
        })(Services = Angular.Services || (Angular.Services = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="IDateService.ts" />
///<reference path="FrameworkServices.ts" />
///<reference path="ServiceBase.ts" />
///<reference path="../interfaces/IServiceRegister.ts"/>
///<reference path="../core/String.ts"/>
///<reference path="../core/Object.ts"/>
///<reference path="../core/Date.ts"/>
///<reference path="../FrameworkModule.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Services;
        (function (Services) {
            var DateService = (function (_super) {
                __extends(DateService, _super);
                function DateService() {
                    _super.apply(this, arguments);
                }
                DateService.prototype.getDate = function (value) {
                    if (value instanceof Date)
                        return value;
                    var date = new Date();
                    if (String.isString(value))
                        date = new Date(value);
                    if (Object.isNull(date) || isNaN(date.getTime())) {
                        date = new Date();
                        date.fromIso8601(value);
                    }
                    return date;
                };
                DateService.prototype.getDateRangeValue = function (value) {
                    var oneSecond = 1000;
                    var oneMinute = oneSecond * 60;
                    var oneHour = oneMinute * 60;
                    var oneDay = oneHour * 24;
                    var oneYear = 12;
                    var now = new Date(Date.now());
                    var nowMiliseconds = now.getMilliseconds();
                    var nowSeconds = now.getSeconds();
                    var nowMinutes = now.getMinutes();
                    var nowHours = now.getHours();
                    var nowDays = now.getDate();
                    var nowMonths = now.getMonth();
                    var nowYears = now.getFullYear();
                    // var oneSecondAgo = new Date(nowYears, nowMonths, nowDays, nowHours, nowMinutes, nowSeconds - 1, nowMiliseconds);
                    var oneMinuteAgo = new Date(nowYears, nowMonths, nowDays, nowHours, nowMinutes - 1, nowSeconds, nowMiliseconds);
                    var oneHourAgo = new Date(nowYears, nowMonths, nowDays, nowHours - 1, nowMinutes, nowSeconds, nowMiliseconds);
                    var oneDayAgo = new Date(nowYears, nowMonths, nowDays - 1, nowHours, nowMinutes, nowSeconds, nowMiliseconds);
                    var oneMonthAgo = new Date(nowYears, nowMonths - 1, nowDays, nowHours, nowMinutes, nowSeconds, nowMiliseconds);
                    var oneYearAgo = new Date(nowYears - 1, nowMonths, nowDays, nowHours, nowMinutes, nowSeconds, nowMiliseconds);
                    if (Object.isNull(value))
                        return new Services.DateRangeValue(0, Services.DateRange.Unknown);
                    var date = this.getDate(value);
                    var rangeSeconds = Math.floor((now.valueOf() - date.valueOf()) / oneSecond);
                    var rangeMinutes = Math.floor((now.valueOf() - date.valueOf()) / oneMinute);
                    var rangeHours = Math.floor((now.valueOf() - date.valueOf()) / oneHour);
                    var rangeDays = Math.floor((now.valueOf() - date.valueOf()) / oneDay);
                    var rangeMonths = this.getMonthDifference(date, now);
                    var rangeYears = Math.floor(rangeMonths / oneYear);
                    if (date > oneMinuteAgo) {
                        return new Services.DateRangeValue(rangeSeconds, Services.DateRange.Seconds);
                    }
                    else if (date > oneHourAgo && date <= oneMinuteAgo) {
                        return new Services.DateRangeValue(rangeMinutes, Services.DateRange.Minutes);
                    }
                    if (date > oneDayAgo && date <= oneHourAgo) {
                        return new Services.DateRangeValue(rangeHours, Services.DateRange.Hours);
                    }
                    else if (date > oneMonthAgo && date <= oneDayAgo) {
                        return new Services.DateRangeValue(rangeDays, Services.DateRange.Days);
                    }
                    else if (date > oneYearAgo && date <= oneMonthAgo) {
                        return new Services.DateRangeValue(rangeMonths, Services.DateRange.Months);
                    }
                    return new Services.DateRangeValue(rangeYears, Services.DateRange.Years);
                };
                DateService.prototype.getMonthDifference = function (d1, d2) {
                    var months;
                    months = (d2.getFullYear() - d1.getFullYear()) * 12;
                    months -= d1.getMonth();
                    months += d2.getMonth();
                    return months <= 0 ? 0 : months;
                };
                DateService.factory = function () {
                    return new DateService();
                };
                DateService.register = {
                    name: Services.FrameworkServices.dateService,
                    factory: DateService.factory
                };
                return DateService;
            }(Services.ServiceBase));
            Services.DateService = DateService;
            ////////////////////////////////////////////////////////////
            // Register service
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerService(DateService.register);
        })(Services = Angular.Services || (Angular.Services = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="ServiceBase.ts" />
///<reference path="FrameworkServices.ts"/>
///<reference path="../FrameworkModule.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Services;
        (function (Services) {
            var ExceptionService = (function (_super) {
                __extends(ExceptionService, _super);
                function ExceptionService(alertService, logger) {
                    _super.call(this);
                    this.alertService = alertService;
                    this.logger = logger;
                }
                ExceptionService.prototype.processException = function (exception, cause) {
                    this.alertService.addError(exception.message);
                    this.logger.writeError("Error: " + exception + "\n\nCause:" + cause);
                };
                /* @ngInject */
                ExceptionService.factory = function (alertService, logger) {
                    return function (exception, cause) { return new ExceptionService(alertService, logger).processException(exception, cause); };
                };
                ExceptionService.register = {
                    name: Services.AngularServices.exceptionHandler,
                    factory: ExceptionService.factory,
                    dependencies: [Services.FrameworkServices.alertService, Services.FrameworkServices.loggingService]
                };
                return ExceptionService;
            }(Services.ServiceBase));
            Services.ExceptionService = ExceptionService;
            ////////////////////////////////////////////////////////////
            // Register service
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerService(ExceptionService.register);
        })(Services = Angular.Services || (Angular.Services = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="ServiceBase.ts" />
///<reference path="../FrameworkModule.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Services;
        (function (Services) {
            var FileManagementService = (function (_super) {
                __extends(FileManagementService, _super);
                function FileManagementService(timeout) {
                    _super.call(this);
                    this.timeout = timeout;
                }
                FileManagementService.prototype.read = function (file, completed, progress, error) {
                    var _this = this;
                    var reader = new FileReader();
                    reader.onload = function (e) { return _this.timeout(function () { return completed(file, btoa(e.target["result"])); }); };
                    if (!Object.isNull(progress))
                        reader.onprogress = function (e) {
                            if (e.lengthComputable) {
                                var percentLoaded = Math.round((e.loaded / e.total) * 100);
                                progress(percentLoaded);
                            }
                        };
                    if (!Object.isNull(error)) {
                        reader.onabort = function (e) { return error(_this.getError(e)); };
                        reader.onerror = function (e) { return error(_this.getError(e)); };
                    }
                    reader.readAsBinaryString(file);
                };
                FileManagementService.prototype.download = function (fileName, content) {
                    var a = window.document.createElement("a");
                    a.href = window.URL.createObjectURL(this.getBlob(fileName, content));
                    a.download = fileName;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                };
                FileManagementService.prototype.open = function (fileName, content) {
                    var blob = this.getBlob(fileName, content);
                    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                        window.navigator.msSaveOrOpenBlob(blob, fileName);
                    }
                    else {
                        var url = window.URL.createObjectURL(blob);
                        window.open(url);
                    }
                };
                FileManagementService.prototype.getBlobUrl = function (fileName, content) {
                    return window.URL.createObjectURL(this.getBlob(fileName, content));
                };
                FileManagementService.prototype.getBlob = function (fileName, content64) {
                    var content = atob(content64);
                    var byteArray = new Uint8Array(content.length);
                    for (var i = 0; i < byteArray.length; i++)
                        byteArray[i] = content.charCodeAt(i);
                    return new Blob([byteArray], { type: Angular.Core.mimeType.get(fileName) });
                };
                FileManagementService.prototype.getError = function (e) {
                    switch (e.target["error"].code) {
                        case e.target["error"].NOT_FOUND_ERR:
                            return "File not found.";
                        case e.target["error"].NOT_READABLE_ERR:
                            return "File is not readable.";
                        case e.target["error"].ABORT_ERR:
                            return "Read operation was aborted.";
                        case e.target["error"].SECURITY_ERR:
                            return "File is in a locked state.";
                        case e.target["error"].ENCODING_ERR:
                            return "The file is too long to encode.";
                        default:
                            return "Can not read the file.";
                    }
                };
                FileManagementService.factory = function (timeout) {
                    return new FileManagementService(timeout);
                };
                FileManagementService.register = {
                    name: Services.FrameworkServices.fileManagementService,
                    factory: FileManagementService.factory,
                    dependencies: [Services.AngularServices.timeout]
                };
                return FileManagementService;
            }(Services.ServiceBase));
            Services.FileManagementService = FileManagementService;
            ////////////////////////////////////////////////////////////
            // Register service
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerService(FileManagementService.register);
        })(Services = Angular.Services || (Angular.Services = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="ServiceBase.ts" />
///<reference path="../FrameworkModule.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Services;
        (function (Services) {
            var GeolocationService = (function (_super) {
                __extends(GeolocationService, _super);
                function GeolocationService() {
                    _super.apply(this, arguments);
                }
                GeolocationService.prototype.getPosition = function (callback, onError, options) {
                    if (!this.isAvailable())
                        return;
                    this.getGeolocator().getCurrentPosition(callback, onError, options);
                };
                GeolocationService.prototype.watchPosition = function (callback, onError, options) {
                    if (!this.isAvailable())
                        return -1;
                    return this.getGeolocator().watchPosition(callback, onError, options);
                };
                GeolocationService.prototype.clearWatch = function (watchId) {
                    if (!this.isAvailable())
                        return;
                    this.getGeolocator().clearWatch(watchId);
                };
                GeolocationService.prototype.isAvailable = function () {
                    return !Object.isNull(navigator.geolocation);
                };
                GeolocationService.prototype.getGeolocator = function () {
                    return navigator.geolocation;
                };
                GeolocationService.factory = function () {
                    return new GeolocationService();
                };
                GeolocationService.register = {
                    name: Services.FrameworkServices.geolocationService,
                    factory: GeolocationService.factory
                };
                return GeolocationService;
            }(Services.ServiceBase));
            Services.GeolocationService = GeolocationService;
            ////////////////////////////////////////////////////////////
            // Register service
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerService(GeolocationService.register);
        })(Services = Angular.Services || (Angular.Services = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Services;
        (function (Services) {
            var HttpServiceBase = (function (_super) {
                __extends(HttpServiceBase, _super);
                function HttpServiceBase($http, host) {
                    _super.call(this);
                    this.$http = $http;
                    this.host = host;
                }
                HttpServiceBase.prototype.post = function (url, params, data) {
                    return this.$http.post(this.host + url, data, { headers: this.getHeaders(), params: params });
                };
                HttpServiceBase.prototype.patch = function (url, params, data) {
                    return this.$http.patch(this.host + url, data, { headers: this.getHeaders(), params: params });
                };
                HttpServiceBase.prototype.put = function (url, params, data) {
                    return this.$http.put(this.host + url, data, { headers: this.getHeaders(), params: params });
                };
                HttpServiceBase.prototype.get = function (url, params, data) {
                    return this.$http.get(this.host + url, { headers: this.getHeaders(), params: params });
                };
                HttpServiceBase.prototype.delete = function (url, params, data) {
                    return this.$http.delete(this.host + url, { headers: this.getHeaders(), params: params });
                };
                HttpServiceBase.prototype.getHeaders = function () {
                    return { "Content-Type": "application/json; charset=utf-8" };
                };
                return HttpServiceBase;
            }(Services.ServiceBase));
            Services.HttpServiceBase = HttpServiceBase;
        })(Services = Angular.Services || (Angular.Services = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Core/Dictionary.ts" />
///<reference path="../Core/Guid.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Services;
        (function (Services) {
            var Guid = Angular.Core.Guid;
            var MessageBusHandler = (function () {
                function MessageBusHandler(type, handler) {
                    this.innerHandler = handler;
                    this.innerToken = new RegistrationToken(type);
                }
                Object.defineProperty(MessageBusHandler.prototype, "token", {
                    get: function () { return this.innerToken; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MessageBusHandler.prototype, "handler", {
                    get: function () { return this.innerHandler; },
                    enumerable: true,
                    configurable: true
                });
                return MessageBusHandler;
            }());
            Services.MessageBusHandler = MessageBusHandler;
            var RegistrationToken = (function () {
                function RegistrationToken(type) {
                    this.innerType = type;
                    this.innerGuid = Guid.new();
                }
                Object.defineProperty(RegistrationToken.prototype, "type", {
                    get: function () {
                        return this.innerType;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RegistrationToken.prototype, "guid", {
                    get: function () {
                        return this.innerGuid;
                    },
                    enumerable: true,
                    configurable: true
                });
                return RegistrationToken;
            }());
            Services.RegistrationToken = RegistrationToken;
        })(Services = Angular.Services || (Angular.Services = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
/// <reference path="../../typings/angularjs/angular.d.ts" />
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts"/>
///<reference path="../core/ArrayList.ts" />
///<reference path="../interfaces/IServiceRegister.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Services;
        (function (Services) {
            var ArrayList = Angular.Core.ArrayList;
            var KeyProcessorService = (function (_super) {
                __extends(KeyProcessorService, _super);
                function KeyProcessorService(parse) {
                    _super.call(this);
                    this.parse = parse;
                }
                KeyProcessorService.prototype.evaluateKeyActions = function (keyActions, eventType, scope, e) {
                    keyActions.where(function (x) { return x.eventType === eventType; }).forEach(function (keyAction) {
                        if (e.keyCode === keyAction.keyCode &&
                            ((Object.isNull(keyAction.shift)) ||
                                (!Object.isNull(keyAction.shift) && keyAction.shift && e.shiftKey) ||
                                (!Object.isNull(keyAction.shift) && !keyAction.shift && !e.shiftKey)) &&
                            ((Object.isNull(keyAction.alt)) ||
                                (!Object.isNull(keyAction.alt) && keyAction.alt && e.altKey) ||
                                (!Object.isNull(keyAction.alt) && !keyAction.alt && !e.altKey)) &&
                            ((Object.isNull(keyAction.ctrl)) ||
                                (!Object.isNull(keyAction.ctrl) && keyAction.ctrl && e.ctrlKey) ||
                                (!Object.isNull(keyAction.ctrl) && !keyAction.ctrl && !e.ctrlKey))) {
                            scope.$apply(function () {
                                keyAction.action(scope, null);
                                e.stopPropagation();
                                e.preventDefault();
                            });
                        }
                    });
                };
                KeyProcessorService.prototype.parseActions = function (text) {
                    var keyActions = new ArrayList();
                    var actionStrings = text.split("|");
                    for (var i = 0; i < actionStrings.length; i++) {
                        var keyAction = new Services.KeyAction();
                        var actionString = actionStrings[i];
                        var parts = actionString.split(":");
                        if (parts.length !== 2)
                            throw new Error("The key-submit expression number " + i + " is incorrect. Should be event(keycode,[shift],[alt],[ctrl]): action");
                        var firstParenthesis = parts[0].indexOf("(");
                        var lastParenthesis = parts[0].indexOf(")");
                        if (firstParenthesis < 0 || lastParenthesis < 0)
                            throw new Error("The key-submit expression number " + i + " is incorrect. Should be event(keycode,[shift],[alt],[ctrl]): action");
                        var eventType = parts[0].substr(0, firstParenthesis);
                        if (eventType !== "keypress" &&
                            eventType !== "keydown" &&
                            eventType !== "keyup")
                            throw new Error("Only keypress, keydown and keyup events are allowed on action strings.");
                        var keys = parts[0].substr(firstParenthesis + 1, lastParenthesis - firstParenthesis - 1);
                        var parameters = new ArrayList(keys.split(","));
                        try {
                            keyAction.eventType = eventType;
                            keyAction.action = this.parse(parts[1]);
                            keyAction.keyCode = parseInt(parameters.get(0));
                        }
                        catch (error) {
                            throw new Error("The key-submit expression number " + i + " is incorrect. Should be event(keycode,[shift],[alt],[ctrl]): action.");
                        }
                        if (parameters.any(function (x) { return x === "shift"; }))
                            keyAction.shift = true;
                        else if (parameters.any(function (x) { return x === "!shift"; }))
                            keyAction.shift = false;
                        if (parameters.any(function (x) { return x === "ctrl"; }))
                            keyAction.ctrl = true;
                        else if (parameters.any(function (x) { return x === "!ctrl"; }))
                            keyAction.ctrl = false;
                        if (parameters.any(function (x) { return x === "alt"; }))
                            keyAction.alt = true;
                        else if (parameters.any(function (x) { return x === "!alt"; }))
                            keyAction.alt = false;
                        keyActions.add(keyAction);
                    }
                    return keyActions;
                };
                KeyProcessorService.factory = function (parse) {
                    return new KeyProcessorService(parse);
                };
                KeyProcessorService.register = {
                    name: Services.FrameworkServices.keyProcessorService,
                    factory: KeyProcessorService.factory,
                    dependencies: [Services.AngularServices.parse]
                };
                return KeyProcessorService;
            }(Services.ServiceBase));
            Services.KeyProcessorService = KeyProcessorService;
            ////////////////////////////////////////////////////////////
            // Register directive
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerService(KeyProcessorService.register);
        })(Services = Angular.Services || (Angular.Services = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Core/Dictionary.ts" />
///<reference path="../Core/Guid.ts" />
///<reference path="ServiceBase.ts" />
///<reference path="IMessageBus.ts" />
///<reference path="../interfaces/IServiceRegister.ts" />
///<reference path="../FrameworkModule.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Services;
        (function (Services) {
            var Dictionary = Angular.Core.Dictionary;
            var ArrayList = Angular.Core.ArrayList;
            var MessageBus = (function (_super) {
                __extends(MessageBus, _super);
                function MessageBus() {
                    _super.call(this);
                    this.handlers = new Dictionary();
                }
                MessageBus.prototype.register = function (messageType, handler) {
                    var type = messageType["messageType"];
                    if (!this.handlers.containsKey(type))
                        this.handlers.add(type, new ArrayList());
                    var messageBusHandler = new Services.MessageBusHandler(messageType, handler);
                    this.handlers.get(type).add(messageBusHandler);
                    return messageBusHandler.token;
                };
                MessageBus.prototype.unregister = function (token) {
                    var type = token.type["messageType"];
                    if (!this.handlers.containsKey(type))
                        return;
                    var handler = this.handlers.get(type);
                    handler.removeAll(function (x) { return x.token.guid === token.guid; });
                    if (!handler.any())
                        this.handlers.remove(type);
                };
                MessageBus.prototype.send = function (messageType, message, token) {
                    var type = messageType["messageType"];
                    if (!this.handlers.containsKey(type))
                        return false;
                    var handlers = this.handlers.get(type)
                        .where(function (x) { return token == null || token.guid === x.token.guid; })
                        .select(function (x) { return x.handler; });
                    var accepted = false;
                    for (var i = (handlers.count() - 1); i >= 0; i--) {
                        var handler = handlers.get(i);
                        if (handler == null)
                            continue;
                        accepted = true;
                        handler(message);
                    }
                    return accepted;
                };
                MessageBus.factory = function () {
                    return new MessageBus();
                };
                MessageBus.register = {
                    name: Services.FrameworkServices.messageBus,
                    factory: MessageBus.factory
                };
                return MessageBus;
            }(Services.ServiceBase));
            Services.MessageBus = MessageBus;
            ////////////////////////////////////////////////////////////
            // Register service
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerService(MessageBus.register);
        })(Services = Angular.Services || (Angular.Services = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../../typings/bootstrap/bootstrap.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="../core/Dictionary.ts"/>
///<reference path="../core/Guid.ts"/>
///<reference path="IModalService.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Services;
        (function (Services) {
            var Dictionary = Angular.Core.Dictionary;
            var Guid = Angular.Core.Guid;
            var ModalService = (function (_super) {
                __extends(ModalService, _super);
                function ModalService($rootScope, $q, $http, $templateCache, $compile, $controller) {
                    _super.call(this);
                    this.$rootScope = $rootScope;
                    this.$q = $q;
                    this.$http = $http;
                    this.$templateCache = $templateCache;
                    this.$compile = $compile;
                    this.$controller = $controller;
                    this.modals = new Dictionary();
                }
                ModalService.prototype.open = function (dialog, parameters, staticDialog, keyboard) {
                    var _this = this;
                    if (staticDialog === void 0) { staticDialog = false; }
                    if (keyboard === void 0) { keyboard = true; }
                    if (dialog.register == null)
                        throw new Error("The modal controller registration information is missing.");
                    var register = dialog.register;
                    var controllerAs = dialog.controllerAs || "controller";
                    var modalInstance = new ModalInstance(this, this.$q.defer());
                    var template = this.$templateCache.get(dialog.register.viewUrl);
                    // TODO: search for a better way to handle templateCache. $http probably have a handler to store the result on cache instead of storning the whole result object.
                    if (template == null)
                        this.$http.get(dialog.register.viewUrl, { cache: this.$templateCache }).success(function (template) { return _this.openModal(register, controllerAs, parameters, modalInstance, template, staticDialog, keyboard); });
                    else
                        this.openModal(register, controllerAs, parameters, modalInstance, Object.getTypeName(template).toLowerCase() === "string" ? template : template[1], staticDialog, keyboard);
                    return modalInstance;
                };
                ModalService.prototype.close = function (modalInstance, reason) {
                    var modal = this.modals.get(modalInstance);
                    if (modal == null)
                        return;
                    $(modal).modal("hide");
                    modalInstance.deferred.reject(reason);
                };
                ModalService.prototype.resolve = function (modalInstance, result) {
                    var modal = this.modals.get(modalInstance);
                    if (modal == null)
                        return;
                    $(modal).modal("hide");
                    modalInstance.deferred.resolve(result);
                };
                ModalService.prototype.openModal = function (register, controllerAs, parameters, modalInstance, template, staticDialog, keyboard) {
                    var _this = this;
                    // create a new scope for the modal dialog.
                    var scope = this.$rootScope.$new(true);
                    var controllerParameters = {};
                    controllerParameters[Services.AngularServices.scope] = scope;
                    controllerParameters[Services.FrameworkServices.modalInstance] = modalInstance;
                    controllerParameters[Services.FrameworkServices.modalParameters] = parameters;
                    // instantiate the modal controller.
                    var controller = this.$controller(register.controller, controllerParameters);
                    // set the controller alias (by default will be controller).
                    scope[controllerAs] = controller;
                    // create the modal DOM elements.
                    var id = Guid.new().value;
                    var modalBody = angular.element("<div class=\"modal fade\" id=\"" + id + "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"login-title\"></div>");
                    modalBody.html(template);
                    // compile the modal DOM for angular to resolve bindings and elements.
                    var code = this.$compile(modalBody)(scope);
                    // add the modal DOM to the page body.
                    $("body").append(code);
                    // register the modal inside the service.
                    this.modals.add(modalInstance, code);
                    // setup the destroy event to clean the DOM.
                    scope.$on("$destroy", function () {
                        code.remove();
                    });
                    var dialogOptions = {};
                    if (staticDialog)
                        dialogOptions["backdrop"] = "static";
                    if (keyboard)
                        dialogOptions["keyboard"] = keyboard;
                    // open the MaterializeCSS modal.
                    code.modal(dialogOptions);
                    // set the z-index of modal and backdrop
                    var zIndex = this.modals.getValues().count() * 1050;
                    code.css("z-index", zIndex);
                    $(code[0].nextElementSibling).css("z-index", zIndex - 10);
                    $(code).on("hidden.bs.modal", function () {
                        modalInstance.deferred.reject("cancelled");
                        _this.removeModal(modalInstance, $(code));
                    });
                };
                ModalService.prototype.removeModal = function (modalInstance, modal) {
                    var scope = modal.scope();
                    if (modalInstance.dispose != null)
                        modalInstance.dispose();
                    this.modals.remove(modalInstance);
                    if (!Object.isNull(scope) && !Object.isNull(scope["controllerAs"])) {
                        delete scope["controllerAs"];
                        scope.$destroy();
                    }
                    if (!Object.isNull(modal))
                        modal.remove();
                };
                ModalService.factory = function ($rootScope, $q, $http, $templateCache, $compile, $controller) {
                    return new ModalService($rootScope, $q, $http, $templateCache, $compile, $controller);
                };
                ModalService.register = {
                    name: Services.FrameworkServices.modalService,
                    factory: ModalService.factory,
                    dependencies: [Services.AngularServices.rootScope, Services.AngularServices.q, Services.AngularServices.http, Services.AngularServices.templateCache, Services.AngularServices.compile, Services.AngularServices.controller]
                };
                return ModalService;
            }(Services.ServiceBase));
            Services.ModalService = ModalService;
            var ModalInstance = (function () {
                function ModalInstance(modalService, deferred) {
                    this.modalService = modalService;
                    this.deferred = deferred;
                    this.promise = deferred.promise;
                }
                ModalInstance.prototype.close = function (reason) {
                    this.modalService.close(this, reason);
                };
                ModalInstance.prototype.resolve = function (result) {
                    this.modalService.resolve(this, result);
                };
                return ModalInstance;
            }());
            Services.ModalInstance = ModalInstance;
            ////////////////////////////////////////////////////////////
            // Register service
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerService(ModalService.register);
        })(Services = Angular.Services || (Angular.Services = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../FrameworkModule.ts" />
///<reference path="IModalService.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Services;
        (function (Services) {
            var UrlService = (function (_super) {
                __extends(UrlService, _super);
                function UrlService(sce) {
                    _super.call(this);
                    this.sce = sce;
                }
                UrlService.prototype.getParsedUrl = function (url) {
                    if (!String.isString(url))
                        return url;
                    if (String.isNullOrEmpty(url))
                        return url;
                    if (url.indexOf("http://") < 0 && url.indexOf("https://") < 0)
                        url = "http://" + url;
                    return this.sce.trustAsUrl(url);
                };
                UrlService.factory = function (sce) {
                    return new UrlService(sce);
                };
                UrlService.register = {
                    name: Services.FrameworkServices.urlService,
                    factory: UrlService.factory,
                    dependencies: [Services.AngularServices.sce]
                };
                return UrlService;
            }(Services.ServiceBase));
            Services.UrlService = UrlService;
            ////////////////////////////////////////////////////////////
            // Register service
            ////////////////////////////////////////////////////////////
            Angular.FrameworkModule.instance.registerService(UrlService.register);
        })(Services = Angular.Services || (Angular.Services = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../ControllerBase.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Controllers;
        (function (Controllers) {
            var Dialogs;
            (function (Dialogs) {
                var DialogControllerBase = (function (_super) {
                    __extends(DialogControllerBase, _super);
                    function DialogControllerBase(scope, modalInstance, injector) {
                        _super.call(this, scope, injector);
                        this.modalInstance = modalInstance;
                    }
                    DialogControllerBase.prototype.cancel = function () {
                        this.modalInstance.close();
                    };
                    DialogControllerBase.prototype.close = function (result) {
                        if (result === void 0) { result = null; }
                        this.modalInstance.resolve(result);
                    };
                    return DialogControllerBase;
                }(Controllers.ControllerBase));
                Dialogs.DialogControllerBase = DialogControllerBase;
            })(Dialogs = Controllers.Dialogs || (Controllers.Dialogs = {}));
        })(Controllers = Angular.Controllers || (Angular.Controllers = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Core;
        (function (Core) {
            var Mapping;
            (function (Mapping) {
                var PropertyMapping = (function () {
                    function PropertyMapping(property, method) {
                        this.property = property;
                        this.method = method;
                    }
                    return PropertyMapping;
                }());
                Mapping.PropertyMapping = PropertyMapping;
            })(Mapping = Core.Mapping || (Core.Mapping = {}));
        })(Core = Angular.Core || (Angular.Core = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Dictionary.ts"/>
///<reference path="PropertyMapping.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Core;
        (function (Core) {
            var Mapping;
            (function (Mapping) {
                var TypeMapping = (function () {
                    function TypeMapping(source, destination) {
                        this.properties = new Core.Dictionary();
                        for (var key in destination) {
                            if (source.hasOwnProperty(key) && destination.hasOwnProperty(key)) {
                                this.properties.add(key, new Mapping.PropertyMapping(key, this.getValue(key)));
                            }
                        }
                    }
                    TypeMapping.prototype.getValue = function (property) {
                        return function (o) { return o[property]; };
                    };
                    TypeMapping.prototype.forMember = function (destProperty, method) {
                        if (this.properties.containsKey(destProperty))
                            this.properties.remove(destProperty);
                        this.properties.add(destProperty, new Mapping.PropertyMapping(destProperty, method));
                        return this;
                    };
                    TypeMapping.prototype.ignore = function (destProperty) {
                        if (this.properties.containsKey(destProperty))
                            this.properties.remove(destProperty);
                        return this;
                    };
                    TypeMapping.prototype.run = function (source, destination) {
                        var values = this.properties.getValues();
                        for (var index in values) {
                            if (values.hasOwnProperty(index)) {
                                var property = values[index];
                                destination[property.property] = property.method(source);
                            }
                        }
                    };
                    return TypeMapping;
                }());
                Mapping.TypeMapping = TypeMapping;
            })(Mapping = Core.Mapping || (Core.Mapping = {}));
        })(Core = Angular.Core || (Angular.Core = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Dictionary.ts"/>
///<reference path="TypeMapping.ts"/>
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Core;
        (function (Core) {
            var Mapping;
            (function (Mapping) {
                var AutoMapper = (function () {
                    function AutoMapper() {
                    }
                    AutoMapper.createMap = function (source, destination) {
                        var key = source.getFunctionName() + "." + destination.getFunctionName();
                        if (AutoMapper.types.containsKey(key))
                            AutoMapper.types.remove(key);
                        var typeMapping = new Mapping.TypeMapping(new source(), new destination());
                        AutoMapper.types.add(key, typeMapping);
                        return typeMapping;
                    };
                    AutoMapper.createMapByName = function (name, source, destination) {
                        if (AutoMapper.types.containsKey(name))
                            AutoMapper.types.remove(name);
                        var typeMapping = new Mapping.TypeMapping(new source(), new destination());
                        AutoMapper.types.add(name, typeMapping);
                        return typeMapping;
                    };
                    AutoMapper.clear = function () {
                        AutoMapper.types.clear();
                    };
                    AutoMapper.map = function (source, destination) {
                        if (source == null)
                            return null;
                        var key = Object.getTypeName(source) + "." + destination.getFunctionName();
                        var typeMapping = AutoMapper.types.get(key);
                        var destObject = new destination();
                        typeMapping.run(source, destObject);
                        return destObject;
                    };
                    AutoMapper.mapTo = function (source, destination) {
                        if (source == null || destination == null)
                            return;
                        var key = Object.getTypeName(source) + "." + Object.getTypeName(destination);
                        var typeMapping = AutoMapper.types.get(key);
                        typeMapping.run(source, destination);
                    };
                    AutoMapper.mapToByName = function (name, source, destination) {
                        if (source == null || destination == null)
                            return;
                        var typeMapping = AutoMapper.types.get(name);
                        typeMapping.run(source, destination);
                    };
                    AutoMapper.dynamicMap = function (source, destination) {
                        if (source == null || destination == null)
                            return;
                        for (var key in destination) {
                            if (source.hasOwnProperty(key) && destination.hasOwnProperty(key)) {
                                destination[key] = source[key];
                            }
                        }
                    };
                    AutoMapper.types = new Core.Dictionary();
                    return AutoMapper;
                }());
                Mapping.AutoMapper = AutoMapper;
            })(Mapping = Core.Mapping || (Core.Mapping = {}));
        })(Core = Angular.Core || (Angular.Core = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../../../typings/angularjs/angular.d.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Scopes;
        (function (Scopes) {
            var Directives;
            (function (Directives) {
                var PaginationBar;
                (function (PaginationBar) {
                    var PaginationBarItem = (function () {
                        function PaginationBarItem(name, tag, enabled, selected) {
                            if (enabled === void 0) { enabled = true; }
                            if (selected === void 0) { selected = false; }
                            this.name = name;
                            this.tag = tag;
                            this.enabled = enabled;
                            this.selected = selected;
                        }
                        return PaginationBarItem;
                    }());
                    PaginationBar.PaginationBarItem = PaginationBarItem;
                })(PaginationBar = Directives.PaginationBar || (Directives.PaginationBar = {}));
            })(Directives = Scopes.Directives || (Scopes.Directives = {}));
        })(Scopes = Angular.Scopes || (Angular.Scopes = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../FrameworkModule.ts"/>
///<reference path="../../ControllerBase.ts"/>
///<reference path="../../../session/ObjectSession.ts" />
///<reference path="../../../scopes/directives/pagination/IPaginationBarScope.ts" />
///<reference path="../../../directives/PaginationBar.ts" />
var MiracleDevs;
(function (MiracleDevs) {
    var Angular;
    (function (Angular) {
        var Controllers;
        (function (Controllers) {
            var Directives;
            (function (Directives) {
                var PaginationBar;
                (function (PaginationBar) {
                    var AngularServices = Angular.Services.AngularServices;
                    var PaginationBarItem = Angular.Scopes.Directives.PaginationBar.PaginationBarItem;
                    var PaginationBarController = (function (_super) {
                        __extends(PaginationBarController, _super);
                        function PaginationBarController(scope, injector) {
                            var _this = this;
                            _super.call(this, scope, injector);
                            this.logger.writeMessage("Starting Pagination Bar Controller..");
                            scope.$watch(function () { return scope.pages; }, function () { return _this.create(); });
                            scope.$watch(function () { return scope.currentPage; }, function () { return _this.create(); });
                        }
                        PaginationBarController.prototype.create = function () {
                            if (Object.isNull(this.scope.pages) || this.scope.pages <= 1) {
                                this.scope.links = null;
                                return;
                            }
                            var sce = this.getService(AngularServices.sce);
                            var current = this.scope.currentPage;
                            var first = 1;
                            var previous = current - 1;
                            var next = current + 1;
                            var last = this.scope.pages;
                            if (previous < first)
                                previous = first;
                            if (next > last)
                                next = last;
                            var totalLinks = this.scope.totalLinks;
                            var halfLinks = totalLinks / 2;
                            var linkFrom = current - halfLinks;
                            var linkTo = current + halfLinks;
                            if (linkFrom < first)
                                linkTo += first - linkFrom;
                            if (linkTo > last)
                                linkFrom += last - linkTo;
                            if (linkFrom < first)
                                linkFrom = first;
                            if (linkTo > last)
                                linkTo = last;
                            this.scope.links = [];
                            this.scope.links.push(new PaginationBarItem(sce.trustAsHtml(this.scope["firstText"]), first, current !== first));
                            this.scope.links.push(new PaginationBarItem(sce.trustAsHtml(this.scope["previousText"]), previous, current !== first));
                            for (var i = linkFrom; i <= linkTo; i++)
                                this.scope.links.push(new PaginationBarItem(i.toString(), i, true, current === i));
                            this.scope.links.push(new PaginationBarItem(sce.trustAsHtml(this.scope["nextText"]), next, current !== last));
                            this.scope.links.push(new PaginationBarItem(sce.trustAsHtml(this.scope["lastText"]), last, current !== last));
                        };
                        PaginationBarController.prototype.navigate = function (link) {
                            if (Object.isNull(this.scope["autoScroll"]) || this.scope["autoScroll"] === "true") {
                                $("body").scrollTop(0);
                            }
                            if (Object.isNull(this.scope["itemClicked"]))
                                return;
                            this.scope["itemClicked"]({ tag: link.tag });
                        };
                        PaginationBarController.register = {
                            name: "PaginationBarController",
                            controller: PaginationBarController,
                            dependencies: [AngularServices.scope, AngularServices.injector]
                        };
                        return PaginationBarController;
                    }(Controllers.ControllerBase));
                    PaginationBar.PaginationBarController = PaginationBarController;
                    ////////////////////////////////////////////////////////////
                    // Register controller
                    ////////////////////////////////////////////////////////////
                    Angular.FrameworkModule.instance.registerController(PaginationBarController.register);
                })(PaginationBar = Directives.PaginationBar || (Directives.PaginationBar = {}));
            })(Directives = Controllers.Directives || (Controllers.Directives = {}));
        })(Controllers = Angular.Controllers || (Angular.Controllers = {}));
    })(Angular = MiracleDevs.Angular || (MiracleDevs.Angular = {}));
})(MiracleDevs || (MiracleDevs = {}));
