/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

interface Function {
    getFunctionName() : string
} 

Function.prototype.getFunctionName = function(): string
{
    const f = typeof this == "function";
    const s = f && ((this.name && ["", this.name]) || this.toString().match(/function ([^\(]+)/));
    return (!f && "not a function") || (s && s[1] || "anonymous");
}