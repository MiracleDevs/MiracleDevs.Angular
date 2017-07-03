/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../Imports.ts"/>

describe("Date", () =>
{
    var wrongDateError = "String is not recognized as a valid ISO 8601 date.";

    describe("parse from iso", () =>
    {
        it("should be able to parse iso string with positive timezone", () => expect(() => Date.fromIso8601("2012-10-10T12:00:00+300")).not.toThrow());

        it("should be able to parse iso string with negative timezone", () => expect(() => Date.fromIso8601("2012-10-10T12:00:00-300")).not.toThrow());

        it("should be able to parse iso string without timezone", () => expect(() => Date.fromIso8601("2012-10-10T12:00:00")).not.toThrow());

        it("should be able to parse iso string with one month char", () => expect(() => Date.fromIso8601("2012-1-10")).not.toThrow());

        it("should be able to parse iso string with one day char", () => expect(() => Date.fromIso8601("2012-01-1")).not.toThrow());

        it("should be able to parse iso string with two year chars", () => expect(() => Date.fromIso8601("12-1-10")).not.toThrow());

        it("shouldnt parse wrong formatted strings", () => expect(() => Date.fromIso8601("hello world")).toThrow(new Error(wrongDateError)));
    });

    describe("format date", () =>
    {
        it("should be able to format two digit years", () => expect(new Date(2012, 10, 10).format("yy")).toBe("12"));

        it("should be able to format four digit years", () => expect(new Date(2012, 10, 10).format("yyyy")).toBe("2012"));

        it("should be able to format two digit years for years smaller than 10", () => expect(new Date(1908, 10, 10).format("yy")).toBe("08"));


        it("should be able to format two digit month smaller than 10", () => expect(new Date(2012, 7, 10).format("MM")).toBe("08"));

        it("should be able to format one digit month smaller than 10", () => expect(new Date(2012, 7, 10).format("M")).toBe("8"));

        it("should be able to format two digit month larger than 10", () => expect(new Date(2012, 10, 10).format("MM")).toBe("11"));

        it("should be able to format one digit month larger than 10", () => expect(new Date(2012, 10, 10).format("M")).toBe("11"));


        it("should be able to format two digit days smaller than 10", () => expect(new Date(2012, 10, 8).format("dd")).toBe("08"));

        it("should be able to format one digit days smaller than 10", () => expect(new Date(2012, 10, 8).format("d")).toBe("8"));

        it("should be able to format two digit days larger than 10", () => expect(new Date(2012, 10, 11).format("dd")).toBe("11"));

        it("should be able to format one digit days larger than 10", () => expect(new Date(2012, 10, 11).format("d")).toBe("11"));


        it("should be able to format two digit day of the week smaller than 10", () => expect(new Date(2012, 10, 8).format("ww")).toBe("04"));

        it("should be able to format one digit day of the week smaller than 10", () => expect(new Date(2012, 10, 8).format("w")).toBe("4"));

        
        it("should be able to format two digit hours smaller than 10", () => expect(new Date(2012, 10, 10, 8).format("hh")).toBe("08"));

        it("should be able to format one digit hours smaller than 10", () => expect(new Date(2012, 10, 10, 8).format("h")).toBe("8"));
        
        it("should be able to format two digit hours larger than 10", () => expect(new Date(2012, 10, 10, 11).format("hh")).toBe("11"));

        it("should be able to format one digit hours larger than 10", () => expect(new Date(2012, 10, 10, 11).format("h")).toBe("11"));


        it("should be able to format two digit minutes smaller than 10", () => expect(new Date(2012, 10, 10, 10, 8).format("mm")).toBe("08"));

        it("should be able to format one digit minutes smaller than 10", () => expect(new Date(2012, 10, 10, 10, 8).format("m")).toBe("8"));

        it("should be able to format two digit minutes larger than 10", () => expect(new Date(2012, 10, 10, 10, 11).format("mm")).toBe("11"));

        it("should be able to format one digit minutes larger than 10", () => expect(new Date(2012, 10, 10, 10, 11).format("m")).toBe("11"));


        it("should be able to format two digit seconds smaller than 10", () => expect(new Date(2012, 10, 10, 10, 10, 8).format("ss")).toBe("08"));

        it("should be able to format one digit seconds smaller than 10", () => expect(new Date(2012, 10, 10, 10, 10, 8).format("s")).toBe("8"));

        it("should be able to format two digit seconds larger than 10", () => expect(new Date(2012, 10, 10, 10, 10, 11).format("ss")).toBe("11"));

        it("should be able to format one digit seconds larger than 10", () => expect(new Date(2012, 10, 10, 10, 10, 11).format("s")).toBe("11"));

        
        it("should be able to format two digit milliseconds smaller than 10", () => expect(new Date(2012, 10, 10, 10, 10, 10, 8).format("ff")).toBe("08"));

        it("should be able to format one digit milliseconds smaller than 10", () => expect(new Date(2012, 10, 10, 10, 10, 10, 8).format("f")).toBe("8"));

        it("should be able to format two digit milliseconds larger than 10", () => expect(new Date(2012, 10, 10, 10, 10, 10, 11).format("ff")).toBe("11"));

        it("should be able to format one digit milliseconds larger than 10", () => expect(new Date(2012, 10, 10, 10, 10, 10, 11).format("f")).toBe("11"));

        it("should be able to format four digit milliseconds larger than 10", () => expect(new Date(2012, 10, 10, 10, 10, 10, 8).format("fff")).toBe("008"));

        it("should be able to format four digit milliseconds larger than 10", () => expect(new Date(2012, 10, 10, 10, 10, 10, 234).format("fff")).toBe("234"));

        
        it("should not represent months and days using 0 index based numbers, but to start with 1 instead", () => expect(new Date(2012, 0, 1).format("MM/dd/yyyy")).toBe("01/01/2012"));

        it("should not represent months and days using 0 index based numbers, but to start with 1 instead", () => expect(new Date(2012, 11, 12).format("MM/dd/yyyy")).toBe("12/12/2012"));
    });

    describe("format UTF date", () =>
    {
        it("should be able to formatUTC two digit years", () => expect(new Date(2012, 10, 10).formatUTC("yy")).toBe("12"));

        it("should be able to formatUTC four digit years", () => expect(new Date(2012, 10, 10).formatUTC("yyyy")).toBe("2012"));

        it("should be able to formatUTC two digit years for years smaller than 10", () => expect(new Date(1908, 10, 10).formatUTC("yy")).toBe("08"));


        it("should be able to formatUTC two digit month smaller than 10", () => expect(new Date(2012, 7, 10).formatUTC("MM")).toBe("08"));

        it("should be able to formatUTC one digit month smaller than 10", () => expect(new Date(2012, 7, 10).formatUTC("M")).toBe("8"));

        it("should be able to formatUTC two digit month larger than 10", () => expect(new Date(2012, 10, 10).formatUTC("MM")).toBe("11"));

        it("should be able to formatUTC one digit month larger than 10", () => expect(new Date(2012, 10, 10).formatUTC("M")).toBe("11"));


        it("should be able to formatUTC two digit days smaller than 10", () => expect(new Date(2012, 10, 8).formatUTC("dd")).toBe("08"));

        it("should be able to formatUTC one digit days smaller than 10", () => expect(new Date(2012, 10, 8).formatUTC("d")).toBe("8"));

        it("should be able to formatUTC two digit days larger than 10", () => expect(new Date(2012, 10, 11).formatUTC("dd")).toBe("11"));

        it("should be able to formatUTC one digit days larger than 10", () => expect(new Date(2012, 10, 11).formatUTC("d")).toBe("11"));


        it("should be able to formatUTC two digit day of the week smaller than 10", () => expect(new Date(2012, 10, 8).formatUTC("ww")).toBe("04"));

        it("should be able to formatUTC one digit day of the week smaller than 10", () => expect(new Date(2012, 10, 8).formatUTC("w")).toBe("4"));


        /* UTC changes hours depending on the timezone */
        //it("should be able to formatUTC two digit hours smaller than 10", () => expect(new Date(2012, 10, 10, 8).formatUTC("hh")).toBe("08"));

        //it("should be able to formatUTC one digit hours smaller than 10", () => expect(new Date(2012, 10, 10, 8).formatUTC("h")).toBe("8"));

        //it("should be able to formatUTC two digit hours larger than 10", () => expect(new Date(2012, 10, 10, 11).formatUTC("hh")).toBe("11"));

        //it("should be able to formatUTC one digit hours larger than 10", () => expect(new Date(2012, 10, 10, 11).formatUTC("h")).toBe("11"));


        it("should be able to formatUTC two digit minutes smaller than 10", () => expect(new Date(2012, 10, 10, 10, 8).formatUTC("mm")).toBe("08"));

        it("should be able to formatUTC one digit minutes smaller than 10", () => expect(new Date(2012, 10, 10, 10, 8).formatUTC("m")).toBe("8"));

        it("should be able to formatUTC two digit minutes larger than 10", () => expect(new Date(2012, 10, 10, 10, 11).formatUTC("mm")).toBe("11"));

        it("should be able to formatUTC one digit minutes larger than 10", () => expect(new Date(2012, 10, 10, 10, 11).formatUTC("m")).toBe("11"));

        
        it("should be able to formatUTC two digit seconds smaller than 10", () => expect(new Date(2012, 10, 10, 10, 10, 8).formatUTC("ss")).toBe("08"));

        it("should be able to formatUTC one digit seconds smaller than 10", () => expect(new Date(2012, 10, 10, 10, 10, 8).formatUTC("s")).toBe("8"));

        it("should be able to formatUTC two digit seconds larger than 10", () => expect(new Date(2012, 10, 10, 10, 10, 11).formatUTC("ss")).toBe("11"));

        it("should be able to formatUTC one digit seconds larger than 10", () => expect(new Date(2012, 10, 10, 10, 10, 11).formatUTC("s")).toBe("11"));

        
        it("should be able to formatUTC two digit milliseconds smaller than 10", () => expect(new Date(2012, 10, 10, 10, 10, 10, 8).formatUTC("ff")).toBe("08"));

        it("should be able to formatUTC one digit milliseconds smaller than 10", () => expect(new Date(2012, 10, 10, 10, 10, 10, 8).formatUTC("f")).toBe("8"));

        it("should be able to formatUTC two digit milliseconds larger than 10", () => expect(new Date(2012, 10, 10, 10, 10, 10, 11).formatUTC("ff")).toBe("11"));

        it("should be able to formatUTC one digit milliseconds larger than 10", () => expect(new Date(2012, 10, 10, 10, 10, 10, 11).formatUTC("f")).toBe("11"));
        
        it("should be able to formatUTC four digit milliseconds larger than 10", () => expect(new Date(2012, 10, 10, 10, 10, 10, 8).formatUTC("fff")).toBe("008"));

        it("should be able to formatUTC four digit milliseconds larger than 10", () => expect(new Date(2012, 10, 10, 10, 10, 10, 234).formatUTC("fff")).toBe("234"));


        it("should not represent months and days using 0 index based numbers, but to start with 1 instead", () => expect(new Date(2012, 0, 1).formatUTC("MM/dd/yyyy")).toBe("01/01/2012"));

        it("should not represent months and days using 0 index based numbers, but to start with 1 instead", () => expect(new Date(2012, 11, 12).formatUTC("MM/dd/yyyy")).toBe("12/12/2012"));
    });

    describe("add milliseconds", () =>
    {
        it("should add positive milliseconds", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addMilliseconds(10).getMilliseconds()).toBe(11));

        it("should add negative milliseconds", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addMilliseconds(-10).getMilliseconds()).toBe(991));

        it("should substract seconds when adding negative milliseconds", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addMilliseconds(-10).getSeconds()).toBe(1));

        it("should add seconds when adding more than 1 thousand milliseconds", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addMilliseconds(1000).getSeconds()).toBe(3));
    });

    describe("add seconds", () =>
    {
        it("should add positive seconds", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addSeconds(10).getSeconds()).toBe(12));

        it("should add negative seconds", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addSeconds(-10).getSeconds()).toBe(52));

        it("should substract minutes when adding negative seconds", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addSeconds(-10).getMinutes()).toBe(2));

        it("should add minutes when adding more than 60 seconds", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addSeconds(60).getMinutes()).toBe(4));
    });

    describe("add minutes", () =>
    {
        it("should add positive minutes", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addMinutes(10).getMinutes()).toBe(13));

        it("should add negative minutes", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addMinutes(-10).getMinutes()).toBe(53));

        it("should substract hours when adding negative minutes", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addMinutes(-10).getHours()).toBe(3));

        it("should add hours when adding more than 60 minutes", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addMinutes(60).getHours()).toBe(5));
    });

    describe("add hours", () =>
    {
        it("should add positive hours", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addHours(10).getHours()).toBe(14));

        it("should add negative hours", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addHours(-10).getHours()).toBe(18));

        it("should substract days when adding negative hours", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addHours(-10).getDate()).toBe(4));

        it("should add days when adding more than 60 hours", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addHours(24).getDate()).toBe(6));
    });

    describe("add days", () =>
    {
        it("should add positive days", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addDays(10).getDate()).toBe(15));

        it("should add negative days", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addDays(-10).getDate()).toBe(25));

        it("should substract months when adding negative days", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addDays(-10).getMonth()).toBe(5));

        it("should add month when adding more than 60 days", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addDays(30).getMonth()).toBe(7));
    });
    
    describe("add months", () =>
    {
        it("should add positive months", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addMonths(4).getMonth()).toBe(10));

        it("should add negative months", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addMonths(-4).getMonth()).toBe(2));

        it("should substract years when adding negative months", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addMonths(-10).getFullYear()).toBe(2011));

        it("should add years when adding more than 60 months", () => expect(new Date(2012, 6, 5, 4, 3, 2, 1).addMonths(6).getFullYear()).toBe(2013));
    });

    describe("get next week day", () =>
    {
        it("should get next saturday", () => expect(new Date(2017, 0, 4).getNextWeekDay(DayOfWeek.Saturday).format("MM/dd/yyyy")).toBe("01/07/2017"));

        it("should get next sunday", () => expect(new Date(2017, 0, 4).getNextWeekDay(DayOfWeek.Sunday).format("MM/dd/yyyy")).toBe("01/08/2017"));

        it("should get itself from sunday", () => expect(new Date(2017, 0, 1).getNextWeekDay(DayOfWeek.Sunday).format("MM/dd/yyyy")).toBe("01/01/2017"));

        it("should get next monday from sunday", () => expect(new Date(2017, 0, 1).getNextWeekDay(DayOfWeek.Monday).format("MM/dd/yyyy")).toBe("01/02/2017"));

        it("should get next tuesday from sunday", () => expect(new Date(2017, 0, 1).getNextWeekDay(DayOfWeek.Tuesday).format("MM/dd/yyyy")).toBe("01/03/2017"));

        it("should get next wednesday from sunday", () => expect(new Date(2017, 0, 1).getNextWeekDay(DayOfWeek.Wednesday).format("MM/dd/yyyy")).toBe("01/04/2017"));

        it("should get next thursday from sunday", () => expect(new Date(2017, 0, 1).getNextWeekDay(DayOfWeek.Thursday).format("MM/dd/yyyy")).toBe("01/05/2017"));

        it("should get next friday from sunday", () => expect(new Date(2017, 0, 1).getNextWeekDay(DayOfWeek.Friday).format("MM/dd/yyyy")).toBe("01/06/2017"));

        it("should get next saturday from sunday", () => expect(new Date(2017, 0, 1).getNextWeekDay(DayOfWeek.Saturday).format("MM/dd/yyyy")).toBe("01/07/2017"));
    });

    describe("get previous week day", () =>
    {
        it("should get previous saturday", () => expect(new Date(2017, 0, 4).getPreviousWeekDay(DayOfWeek.Saturday).format("MM/dd/yyyy")).toBe("12/31/2016"));

        it("should get previous sunday", () => expect(new Date(2017, 0, 4).getPreviousWeekDay(DayOfWeek.Sunday).format("MM/dd/yyyy")).toBe("01/01/2017"));

        it("should get itself from saturday", () => expect(new Date(2017, 0, 7).getPreviousWeekDay(DayOfWeek.Saturday).format("MM/dd/yyyy")).toBe("01/07/2017"));


        it("should get previous monday from sunday", () => expect(new Date(2017, 0, 7).getPreviousWeekDay(DayOfWeek.Monday).format("MM/dd/yyyy")).toBe("01/02/2017"));
                       
        it("should get previous tuesday from sunday", () => expect(new Date(2017, 0, 7).getPreviousWeekDay(DayOfWeek.Tuesday).format("MM/dd/yyyy")).toBe("01/03/2017"));
                       
        it("should get previous wednesday from sunday", () => expect(new Date(2017, 0, 7).getPreviousWeekDay(DayOfWeek.Wednesday).format("MM/dd/yyyy")).toBe("01/04/2017"));
                       
        it("should get previous thursday from sunday", () => expect(new Date(2017, 0, 7).getPreviousWeekDay(DayOfWeek.Thursday).format("MM/dd/yyyy")).toBe("01/05/2017"));
                       
        it("should get previous friday from sunday", () => expect(new Date(2017, 0, 7).getPreviousWeekDay(DayOfWeek.Friday).format("MM/dd/yyyy")).toBe("01/06/2017"));
                       
        it("should get previous saturday from sunday", () => expect(new Date(2017, 0, 7).getPreviousWeekDay(DayOfWeek.Saturday).format("MM/dd/yyyy")).toBe("01/07/2017"));
    });
});