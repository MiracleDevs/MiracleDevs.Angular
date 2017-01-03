interface NumberConstructor
{
    isNumber(value: any): boolean;
}

Number.isNumber = (value: any): boolean =>
{
    return !isNaN(parseFloat(value)) && isFinite(value);
}