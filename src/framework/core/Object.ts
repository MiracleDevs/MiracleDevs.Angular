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
    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec((obj).constructor.toString());
    return (results && results.length > 1) ? results[1] : "";
};


Object.isEqualTo = (source: any, other: any, ignore?: Array<string>): boolean =>
{
    if (other == null)
        return false;

    if ((source instanceof Number && (typeof (other) == "number" || other instanceof Number)) ||
        (source instanceof String && (typeof (other) == "string" || other instanceof String)) ||
        (source instanceof Boolean && (typeof (other) == "boolean" || other instanceof Boolean)))
    {
        if (source !== other)
            console.debug(`IsEqualTo: Property value is different: ${source} - ${other}`);

        return (source === other);
    }

    if (source instanceof Date && other instanceof Date) 
    {
        if (source.valueOf() !== other.valueOf())
            console.debug(`IsEqualTo: Property value is different: ${source} - ${other}`);

        return (source.valueOf() === other.valueOf());
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
                console.debug(`IsEqualTo: Keys do not match: ${key} != ${otherKey}`);
                return false;
            }

            var sourceValue = source[key];
            var otherValue = other[key];

            if (sourceValue == null && otherValue == null)
                continue;

            if ((sourceValue == null && otherValue != null) ||
                (sourceValue != null && otherValue == null))
            {
                console.debug(`IsEqualTo: One of the opearands is null [${key}]: ${sourceValue} - ${otherValue}`);
                return false;
            }

            if (((typeof (sourceValue) == "number" || sourceValue instanceof Number) && (typeof (otherValue) == "number" || otherValue instanceof Number)) ||
                ((typeof (sourceValue) == "string" || sourceValue instanceof String) && (typeof (otherValue) == "string" || otherValue instanceof String)) ||
                ((typeof (sourceValue) == "boolean" || sourceValue instanceof Boolean) && (typeof (otherValue) == "boolean" || otherValue instanceof Boolean)))
            {
                if (sourceValue !== otherValue)
                {
                    console.debug(`IsEqualTo: Property value is different [${key}]: ${sourceValue} != ${otherValue}`);
                    return false;
                }
            }
            else if (sourceValue instanceof Date && otherValue instanceof Date)
            {
                if (sourceValue.valueOf() !== otherValue.valueOf())
                {
                    console.debug(`IsEqualTo: Property value is different [${key}]: ${sourceValue} != ${otherValue}`);
                    return false;
                }
            }
            else if (sourceValue instanceof Array && otherValue instanceof Array)
            {
                if (sourceValue.length !== otherValue.length)
                {
                    console.debug(`IsEqualTo: Array length is different [${key}]: ${sourceValue.length} != ${otherValue.length}`);
                    return false;
                }

                for (var arrayIndex = 0; arrayIndex < sourceValue.length; arrayIndex++)
                {
                    if (!Object.isEqualTo(sourceValue[arrayIndex], otherValue[arrayIndex]))
                    {
                        console.debug(`IsEqualTo: Array value is different [${key}]: ${sourceValue[arrayIndex]} != ${otherValue[arrayIndex]}`);
                        return false;
                    }
                }
            }
            else
            {
                if (!Object.isEqualTo(sourceValue, otherValue))
                {
                    console.debug(`IsEqualTo: Object value is different [${key}]: ${sourceValue} != ${otherValue}`);
                    return false;
                }
            }
        }
    }

    return true;
};

Object.clone = (object: any, ignore?: Array<string>): any =>
{
    var newObject = {};

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

Object.isNull = (obj: any) : boolean =>
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