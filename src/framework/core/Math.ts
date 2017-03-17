/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

interface Math
{
    clamp(value: number, min: number, max: number): number;
}

Math.clamp = (value: number, min: number = 0, max: number = 1): number =>
{
    return value <= min
        ? min
        : value >= max
            ? max
            : value;
};