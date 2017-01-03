/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

interface Date
{
    fromIso8601(value: string): void;
}

Date.prototype.fromIso8601 = function (string)
{
    const regexp = "([0-9]{4})(-([0-9]{2})(-([0-9]{2})" +
        "(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?" +
        "(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?";

    const d = string.match(new RegExp(regexp));
    const date = new Date(parseInt(d[1]), 0, 1);
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