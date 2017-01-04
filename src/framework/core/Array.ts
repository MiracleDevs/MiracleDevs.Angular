/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */


interface ArrayConstructor
{
    forEach<T>(array: Array<T>, action: (element: T) => void): void;

    where<T>(array: Array<T>, predicate: (element: T) => boolean): Array<T>;

    select<T, TR>(array: Array<T>, predicate: (element: T) => TR): Array<TR>;

    firstOrDefault<T>(array: Array<T>, predicate?: (element: T) => boolean): T;

    lastOrDefault<T>(array: Array<T>, predicate?: (element: T) => boolean): T;

    first<T>(array: Array<T>, predicate?: (element: T) => boolean): T;

    last<T>(array: Array<T>, predicate?: (element: T) => boolean): T;

    any<T>(array: Array<T>, predicate?: (element: T) => boolean): boolean;

    count<T>(array: Array<T>, predicate?: (element: T) => boolean): number;

    sum<T, TI>(array: Array<T>, predicate?: (element: T) => TI): TI;

    contains<T>(array: Array<T>, value: T): boolean;

    orderBy<T, TR>(array: Array<T>, predicate?: (element: T) => TR): Array<T>;

    orderByDesc<T, TR>(array: Array<T>, predicate?: (element: T) => TR): Array<T>;

    remove<T>(array: Array<T>, element: T): boolean;

    removeAt<T>(array: Array<T>, index: number): void;

    removeAll<T>(array: Array<T>, predicate?: (element: T) => boolean): number;
}

Array.forEach = <T>(array: Array<T>, action: (element: T) => void): void =>
{
    for (let index = 0; index < array.length; index++)
    {
        action(array[index]);
    }
};

Array.where = <T>(array: Array<T>, predicate: (element: T) => boolean): Array<T> =>
{
    var temp = Array<T>();

    for (let index = 0; index < array.length; index++)
    {
        if (predicate(array[index]))
            temp.push(array[index]);
    }

    return temp;
};

Array.select = <T, TR>(array: Array<T>, predicate: (element: T) => TR): Array<TR> =>
{
    var temp = Array<TR>();

    for (let index = 0; index < array.length; index++)
    {
        temp.push(predicate(array[index]));
    }

    return temp;
};

Array.firstOrDefault = <T>(array: Array<T>, predicate?: (element: T) => boolean): T =>
{
    if (predicate == null)
    {
        if (array.length > 0)
            return array[0];

        return null;
    }

    for (let index = 0; index < array.length; index++)
    {
        if (predicate(array[index]))
            return array[index];
    }

    return null;
};

Array.lastOrDefault = <T>(array: Array<T>, predicate?: (element: T) => boolean): T =>
{
    if (predicate == null)
    {
        if (array.length > 0)
            return array[array.length - 1];

        return null;
    }

    for (let index = array.length - 1; index >= 0; index--)
    {
        if (predicate(array[index]))
            return array[index];
    }

    return null;
};

Array.first = <T>(array: Array<T>, predicate?: (element: T) => boolean): T =>
{
    var element = Array.firstOrDefault(array, predicate);

    if (Object.isNull(element))
        throw new Error("The source sequence is empty.");

    return element;
};

Array.last = <T>(array: Array<T>, predicate?: (element: T) => boolean): T =>
{
    var element = Array.lastOrDefault(array, predicate);

    if (Object.isNull(element))
        throw new Error("The source sequence is empty.");

    return element;
};


Array.any = <T>(array: Array<T>, predicate?: (element: T) => boolean): boolean =>
{
    if (predicate == null)
        return array.length > 0;

    for (let index = 0; index < array.length; index++)
    {
        if (predicate(array[index]))
            return true;
    }

    return false;
};

Array.count = <T>(array: Array<T>, predicate?: (element: T) => boolean): number =>
{
    if (predicate == null)
        return array.length;

    var count = 0;

    for (let index = 0; index < array.length; index++)
    {
        if (predicate(array[index]))
            count++;
    }

    return count;
};

Array.sum = <T, TI>(array: Array<T>, predicate?: (element: T) => TI): TI =>
{
   var sum = null;

    for (let index = 0; index < array.length; index++)
    {
        const value = Object.isNull(predicate) ? array[index] : predicate(array[index]);

        if (sum == null)
            sum = value;
        else
            sum += value;
    }

    if (sum === undefined)
        return null;

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

Array.orderBy = <T, TR>(array: Array<T>, predicate?: (element: T) => TR): Array<T> =>
{
    var onlyValues = Object.isNull(predicate);
    var newArray = array.slice();

    return newArray.sort((a, b) =>
    {
        var valueA = onlyValues ? a : predicate(a);
        var valueB = onlyValues ? b : predicate(b);

        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    });
};

Array.orderByDesc = <T, TR>(array: Array<T>, predicate?: (element: T) => TR): Array<T> =>
{
    var onlyValues = Object.isNull(predicate);
    var newArray = array.slice();

    return newArray.sort((a, b) =>
    {
        var valueA = onlyValues ? a : predicate(a);
        var valueB = onlyValues ? b : predicate(b);

        return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
    });
};

Array.remove = <T>(array: Array<T>, element: T): boolean =>
{
    try
    {
        Array.removeAt(array, array.indexOf(element, 0));  
        return true;  
    }
    catch (e)
    {
        return false;
    }   
};

Array.removeAt = <T>(array: Array<T>, index: number): void =>
{
    if (index < 0)
        throw new Error("index is less than 0.");

    if (index >= array.length)
        throw new Error("index is equal to or greater than length.");

    delete array[index];
    array.splice(index, 1);
};

Array.removeAll = <T>(array: Array<T>, predicate?: (element: T) => boolean): number =>
{
    var elements = Object.isNull(predicate) ? array.slice() : Array.where(array, predicate);
    var count = 0;

    for (let i = 0; i < elements.length; i++)
    {
        Array.remove(array, elements[i]);
        count++;
    }

    return count;
};