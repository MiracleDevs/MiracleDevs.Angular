/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

interface ObjectConstructor
{
    getTypeName(obj: any): string;
    isEqualTo(source: any, other: any, ignore?: Array<string>): boolean;
    clone(object: any, ignore?: Array<string>): any;
    extendInstance<T>(object: any, classType: { new (): T }): T;
    isNull(obj: any): boolean;
}

Object.getTypeName = (obj: any) =>
{
    if (Object.isNull(obj))
        throw new Error("Object can not be null.");

    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec((obj).constructor.toString());
    return (results && results.length > 1) ? results[1] : "";
};


Object.isEqualTo = (source: any, other: any, ignore?: Array<string>): boolean =>
{
    if (Object.isNull(source) && Object.isNull(other))
        return true;

    if ((!Object.isNull(source) && Object.isNull(other)) ||
        (Object.isNull(source) && !Object.isNull(other)))
        return false;

    if (other == null)
        return false;

    if (Object.getTypeName(source) !== Object.getTypeName(other))
        return false;

    if ((Object.getTypeName(source) === "Number" && Object.getTypeName(other) === "Number") ||
        (Object.getTypeName(source) === "String" && Object.getTypeName(other) === "String") ||
        (Object.getTypeName(source) === "Boolean" && Object.getTypeName(other) === "Boolean"))
    {
        return (source === other);
    }

    if (Object.getTypeName(source) === "Date" && Object.getTypeName(other) === "Date")
    {
        return source.getTime() === other.getTime();
    }

    var sourceKeys = Object.keys(source);
    var otherKeys = Object.keys(other);

    for (var index in sourceKeys)
    {
        if (sourceKeys.hasOwnProperty(index))
        {
            var key = sourceKeys[index];
            var otherKey = otherKeys[index];


            if (!source.hasOwnProperty(key))
                continue;

            if (!Object.isNull(ignore) && Array.contains(ignore, key))
                continue;

            if (key !== otherKey)
            {
                return false;
            }

            var sourceValue = source[key];
            var otherValue = other[key];

            if (sourceValue == null && otherValue == null)
                continue;

            if ((sourceValue == null && otherValue != null) ||
                (sourceValue != null && otherValue == null))
                return false;

            if (((Object.getTypeName(sourceValue) === "Number" && Object.getTypeName(otherValue) === "Number") ||
                (Object.getTypeName(sourceValue) === "String" && Object.getTypeName(otherValue) === "String") ||
                (Object.getTypeName(sourceValue) === "Boolean" && Object.getTypeName(otherValue) === "Boolean")) &&
                (sourceValue !== otherValue))
                return false;

            else if ((Object.getTypeName(source) === "Date" && Object.getTypeName(other) === "Date") && (source.getTime() !== other.getTime()))
                return false;

            else if (sourceValue instanceof Array && otherValue instanceof Array)
            {
                if (sourceValue.length !== otherValue.length)
                    return false;

                for (var arrayIndex = 0; arrayIndex < sourceValue.length; arrayIndex++)
                {
                    if (!Object.isEqualTo(sourceValue[arrayIndex], otherValue[arrayIndex]))
                        return false;
                }
            }
            else
            {
                if (!Object.isEqualTo(sourceValue, otherValue))
                    return false;
            }
        }
    }

    return true;
};

Object.clone = (object: any, ignore?: Array<string>): any =>
{
    if (Object.getTypeName(object) === "Number" ||
        Object.getTypeName(object) === "String" ||
        Object.getTypeName(object) === "Boolean")
    {
        return object;
    }

    if (Object.getTypeName(object) === "Date")
    {
        return new Date(object.getTime());
    }

    var newObject = object instanceof Array ? [] : {};

    function clone(source, destination): void
    {
        const isArray = source instanceof Array;
        const sourceKeys = (isArray) ? source : Object.keys(source);

        for (let index in sourceKeys)
        {
            if (sourceKeys.hasOwnProperty(index))
            {
                const key = (isArray) ? index : sourceKeys[index];

                if (!isArray && !source.hasOwnProperty(key))
                    continue;

                if (!isArray && !Object.isNull(ignore) && Array.contains(ignore, key))
                    continue;

                const thisValue = source[key];

                if (typeof (thisValue) == "number" || typeof (thisValue) == "string" || typeof (thisValue) == "boolean" || thisValue == null)
                {
                    destination[key] = thisValue;
                }
                else if (thisValue instanceof Date)
                {
                    destination[key] = new Date(thisValue.valueOf());
                }
                else if (thisValue instanceof Array)
                {
                    destination[key] = new Array();
                    clone(thisValue, destination[key]);
                }
                else
                {
                    destination[key] = new Object();
                    clone(thisValue, destination[key]);
                }
            }
        }
    }

    clone(object, newObject);

    return newObject;
}

Object.extendInstance = <T>(object: any, classType: { new (): T }): T => 
{
    if (object instanceof classType)
        return object;

    object.__proto__ = classType.prototype;
    classType.call(object);

    return object;
};

Object.isNull = (obj: any): boolean =>
{
    return obj === null || obj === undefined;
};

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys)
{
    Object.keys = (() =>
    {
        "use strict";
        var hasOwnProperty = Object.prototype.hasOwnProperty,
            hasDontEnumBug = !({ toString: null }).propertyIsEnumerable("toString"),
            dontEnums = [
                "toString",
                "toLocaleString",
                "valueOf",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "constructor"
            ],
            dontEnumsLength = dontEnums.length;

        return obj =>
        {
            if (typeof obj !== "object" && (typeof obj !== "function" || obj === null))
            {
                throw new TypeError("Object.keys called on non-object");
            }

            var result = [], prop, i: number;

            for (prop in obj)
            {
                if (hasOwnProperty.call(obj, prop))
                {
                    result.push(prop);
                }
            }

            if (hasDontEnumBug)
            {
                for (i = 0; i < dontEnumsLength; i++)
                {
                    if (hasOwnProperty.call(obj, dontEnums[i]))
                    {
                        result.push(dontEnums[i]);
                    }
                }
            }
            return result;
        };
    })();
}