/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */


interface ArrayConstructor
{
    forEach<T>(array: Array<T>, action: (element: T) => void): void;

    where<T>(array: Array<T>, func: (element: T) => boolean): Array<T>;

    select<T, TR>(array: Array<T>, func: (element: T) => TR): Array<TR>;

    firstOrDefault<T>(array: Array<T>, func?: (element: T) => boolean): T;

    lastOrDefault<T>(array: Array<T>, func?: (element: T) => boolean): T;

    any<T>(array: Array<T>, func?: (element: T) => boolean): boolean;

    count<T>(array: Array<T>, func?: (element: T) => boolean): number;

    sum<T, TI>(array: Array<T>, func: (element: T) => TI): TI;

    contains<T>(array: Array<T>, value: T): boolean;

    orderBy<T, TR>(array: Array<T>, func: (element: T) => TR): Array<T>;

    orderByDesc<T, TR>(array: Array<T>, func: (element: T) => TR): Array<T>;

    remove<T>(array: Array<T>, element: T);

    removeAt<T>(array: Array<T>, index: number);

    removeAll<T>(array: Array<T>, func: (element: T) => boolean): void;
}

Array.forEach = <T>(array: Array<T>, action: (element: T) => void): void =>
{
    for (let index = 0; index < array.length; index++)
    {
        action(array[index]);
    }
};

Array.where = <T>(array: Array<T>, func: (element: T) => boolean): Array<T> =>
{
    var temp = Array<T>();

    for (let index = 0; index < array.length; index++)
    {
        if (func(array[index]))
            temp.push(array[index]);
    }

    return temp;
};

Array.select = <T, TR>(array: Array<T>, func: (element: T) => TR): Array<TR> =>
{
    var temp = Array<TR>();

    for (let index = 0; index < array.length; index++)
    {
        temp.push(func(array[index]));
    }

    return temp;
};

Array.firstOrDefault = <T>(array: Array<T>, func?: (element: T) => boolean): T =>
{
    if (func == null)
    {
        if (array.length > 0)
            return array[0];

        return null;
    }

    for (let index = 0; index < array.length; index++)
    {
        if (func(array[index]))
            return array[index];
    }

    return null;
};

Array.lastOrDefault = <T>(array: Array<T>, func?: (element: T) => boolean): T =>
{
    if (func == null)
    {
        if (array.length > 0)
            return array[array.length - 1];

        return null;
    }

    for (let index = array.length - 1; index >= 0; index--)
    {
        if (func(array[index]))
            return array[index];
    }

    return null;
};

Array.any = <T>(array: Array<T>, func?: (element: T) => boolean): boolean =>
{
    if (func == null)
        return array.length > 0;

    for (let index = 0; index < array.length; index++)
    {
        if (func(array[index]))
            return true;
    }

    return false;
};

Array.count = <T>(array: Array<T>, func?: (element: T) => boolean): number =>
{
    if (func == null)
        return array.length;

    var count = 0;

    for (let index = 0; index < array.length; index++)
    {
        if (func(array[index]))
            count++;
    }

    return count;
};

Array.sum = <T, TI>(array: Array<T>, func: (element: T) => TI): TI =>
{
    if (func == null)
        throw new MiracleDevs.Angular.Exceptions.Exception("Sum function is a mandatory field.");

    var sum = null;

    for (let index = 0; index < array.length; index++)
    {
        if (sum == null)
            sum = func(array[index]);
        else
            sum += func(array[index]); 
    }

    return sum;
};

Array.contains = <T>(array: Array<T>, value: any): boolean =>
{
    for (let index = 0; index < array.length; index++)
    {
        if (array[index] === value)
            return true;
    }

    return false;
};

Array.orderBy = <T, TR>(array: Array<T>, func: (element: T) => TR): Array<T> =>
{
    return array.sort((a, b) => func(a) > func(b) ? 1 : func(a) < func(b) ? -1 : 0);
};

Array.orderByDesc = <T, TR>(array: Array<T>, func: (element: T) => TR): Array<T> =>
{
    return array.sort((a, b) => func(a) > func(b) ? -1 : func(a) < func(b) ? 1 : 0);
};

Array.remove = <T>(array: Array<T>, element: T) =>
{
    Array.removeAt(array, array.indexOf(element, 0));
};

Array.removeAt = <T>(array: Array<T>, index: number) =>
{
    delete array[index];
    array.splice(index, 1);
};

Array.removeAll = <T>(array: Array<T>, func: (element: T) => boolean): void =>
{
    var elements = Array.where(array, func);

    for (let i = 0; i < elements.length; i++)
    {
        Array.remove(array, elements[i]);
    }
};