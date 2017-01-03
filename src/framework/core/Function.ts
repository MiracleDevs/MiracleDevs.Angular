interface Function {
    getFunctionName() : string
} 

Function.prototype.getFunctionName = function(): string
{
    const f = typeof this == "function";
    const s = f && ((this.name && ["", this.name]) || this.toString().match(/function ([^\(]+)/));
    return (!f && "not a function") || (s && s[1] || "anonymous");
}