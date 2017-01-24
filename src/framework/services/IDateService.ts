/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

module MiracleDevs.Angular.Services
{
    export interface IDateService
    {
        getDate(value: Date | string): Date;

        getDateRangeValue(date: Date | string): DateRangeValue;
    }

    export enum DateRange
    {
        Unknown = 0,
        Seconds = 1,
        Minutes = 2,
        Hours = 3,
        Days = 4,
        Months = 5,
        Years = 6
    }

    export enum MonthName
    {
        "January" = 0,
        "February" = 1,
        "March" = 2,
        "April" = 3,
        "May" = 4,
        "June" = 5,
        "July" = 6,
        "August" = 7,
        "September" = 8,
        "October" = 9,
        "November" = 10,
        "December" = 11
    }

    export enum DayName
    {
        "Sunday" = 0,
        "Monday" = 1,
        "Tuesday" = 2,
        "Wednesday" = 3,
        "Thursday" = 4,
        "Friday" = 5,
        "Saturday" = 6
    }

    export class DateRangeValue
    {
        constructor(public value: number, public range: DateRange)
        {
        }
    }
}