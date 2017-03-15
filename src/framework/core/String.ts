/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

interface StringConstructor
{
    isString(value: any): boolean;

    isNullOrEmpty(value: string): boolean;

    isNullOrWhiteSpace(value: string): boolean;

    format(format: string, ...args: any[]): string;

    formatArray(format: string, arguments: any[]): string;

    padLeft(value: string, length: number, padChar: string): string;

    padRight(value: string, length: number, padChar: string): string;

    join(separator: string, values: string[]): string;

    empty: string;
}

interface String
{
    padLeft(length: number, padChar: string): string;

    padRight(length: number, padChar: string): string;
};

String.empty = "";

String.padLeft = (value: string, length: number, padChar: string): string =>
{
    while (value.length < length)
    {
        value += padChar;
    }

    return value;
};

String.padRight = (value: string, length: number, padChar: string): string =>
{
    while (value.length < length)
    {
        value = padChar + value;
    }

    return value;
};

String.isString = (value: any): boolean =>
{
    return (typeof (value) === "string" || value instanceof String);
};

String.isNullOrEmpty = (value: string): boolean =>
{
    return value == null || value === "";
};

String.isNullOrWhiteSpace = (value: string): boolean =>
{
    return value == null || value.replace(/ /g, "") === "";
};

String.format = (format: string, ...args: any[]): string =>
{
    if (Object.isNull(format))
        throw new Error("Format string can not be null.");

    return String(format).replace(/\{([0-9]+)\}/g, (match, index) =>
    {
        index = parseInt(index, 10);

        if (index < 0 || index >= args.length)
        {
            throw new Error(`Index is zero based. Must be greater than 0 and less than ${args.length - 1}.`);
        }

        return args[index];
    });
};

String.formatArray = (format: string, args: any[]) =>
{
    if (Object.isNull(format))
        throw new Error("Format string can not be null.");

    return String(format).replace(/\{([0-9]+)\}/g, (match, index) =>
    {
        index = parseInt(index, 10);

        if (index < 0 || index >= args.length)
        {
            throw new Error(`Index is zero based. Must be greater than 0 and less than ${args.length - 1}.`);
        }

        return args[index];
    });
};

String.join = (separator: string, values: string[]): string =>
{
    if (Object.isNull(values))
        return null;

    var finalText = String.empty;
    var finalIndex = values.length - 1;

    values.forEach((value, index) =>
    {
        finalText += value;

        if (index !== finalIndex)
        {
            finalText += separator;
        }
    });

    return finalText;
};


String.prototype.padLeft = function (length: number, padChar: string): string 
{
    return String.padLeft(this, length, padChar);
};

String.prototype.padRight = function (length: number, padChar: string): string 
{
    return String.padRight(this, length, padChar);
};