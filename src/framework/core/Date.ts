/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="String.ts" />

enum DayOfWeek
{
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}

interface DateConstructor
{
    fromIso8601(value: string): Date;
}

interface Date
{
    fromIso8601(value: string): Date;

    getNextWeekDay(dayOfWeek: DayOfWeek): Date;

    getPreviousWeekDay(dayOfWeek: DayOfWeek): Date;

    addMilliseconds(ms: number): Date;

    addSeconds(seconds: number): Date;

    addMinutes(minutes: number): Date;

    addHours(hours: number): Date;

    addDays(days: number): Date;

    addMonths(months: number): Date;

    addYears(years: number): Date;

    getTwoDigitYear(): string;

    getTwoDigitUTCYear(): string;

    format(format: string): string;

    formatUTC(format: string): string;
}

Date.prototype.getNextWeekDay = function (dayOfWeek: DayOfWeek): Date
{
    const from = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    const daysUntil = (dayOfWeek - from.getDay() + 7) % 7;

    return from.addDays(daysUntil);
};

Date.prototype.getPreviousWeekDay = function (dayOfWeek: DayOfWeek): Date
{
    const from = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    const daysUntil = (from.getDay() - dayOfWeek + 7) % 7;

    return from.addDays(-daysUntil);
};

Date.prototype.getTwoDigitYear = function (): string
{
    const year = this.getFullYear().toString();
    return (year.length < 2) ? year.padRight(2, "0") : year.substr(year.length - 2, 2);
};

Date.prototype.getTwoDigitUTCYear = function (): string
{
    const year = this.getUTCFullYear().toString();
    return (year.length < 2) ? year.padRight(2, "0") : year.substr(year.length - 2, 2);
};

Date.prototype.format = function (format: string): string  
{
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

Date.prototype.formatUTC = function (format: string): string
{
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

Date.prototype.addMilliseconds = function (ms: number): Date
{
    const date = new Date(this.valueOf());
    date.setMilliseconds(date.getMilliseconds() + ms);
    return date;
};

Date.prototype.addSeconds = function (seconds: number): Date
{
    const date = new Date(this.valueOf());
    date.setSeconds(date.getSeconds() + seconds);
    return date;
};

Date.prototype.addMinutes = function (minutes: number): Date
{
    const date = new Date(this.valueOf());
    date.setMinutes(date.getMinutes() + minutes);
    return date;
};

Date.prototype.addHours = function (hours: number): Date
{
    const date = new Date(this.valueOf());
    date.setHours(date.getHours() + hours);
    return date;
};

Date.prototype.addDays = function (days: number): Date
{
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

Date.prototype.addMonths = function (months: number): Date
{
    const date = new Date(this.valueOf());
    date.setMonth(date.getMonth() + months);
    return date;
};

Date.prototype.addYears = function (years: number): Date
{
    const date = new Date(this.valueOf());
    date.setFullYear(date.getFullYear() + years);
    return date;
};

Date.fromIso8601 = (value: string): Date =>
{
    const date = new Date();
    date.fromIso8601(value);
    return date;
};

Date.prototype.fromIso8601 = function (value: string): Date
{
    try
    {
        const regexp = "([0-9]{2,4})(-([0-9]{1,2})(-([0-9]{1,2})" +
            "(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?" +
            "(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?";

        const d = value.match(new RegExp(regexp));
        const date = new Date(parseInt(d[1]), 0, 1);
        let offset = 0;

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
            date.setMilliseconds(Number(`0.${d[12]}`) * 1000);

        if (d[14])
        {
            offset = (Number(d[16]) * 60) + Number(d[17]);
            offset *= ((d[15] === "-") ? 1 : -1);
        }

        offset -= date.getTimezoneOffset();
        const time = (Number(date) + (offset * 60 * 1000));
        this.setTime(Number(time));
    }
    catch (e)
    {
        throw new Error("String is not recognized as a valid ISO 8601 date.");
    }

    return this;
};

if (!Date.prototype.toISOString)
{
    Date.prototype.toISOString = function ()
    {
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