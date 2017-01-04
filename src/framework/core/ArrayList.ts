/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="Array.ts"/>

module MiracleDevs.Angular.Core
{
    export class ArrayList<T> implements IEnumerable<T>
    {
        protected innerArray: Array<T>;

        constructor(array?: Array<T>) 
        {
            this.innerArray = array || new Array<T>();
        }

        forEach(action: (element: T) => void): void 
        {
            Array.forEach(this.innerArray, action);
        }

        where(predicate: (element: T) => boolean): ArrayList<T>
        {
            return new ArrayList(Array.where(this.innerArray, predicate));
        }

        select<TR>(predicate: (element: T) => TR): ArrayList<TR>
        {
            return new ArrayList(Array.select(this.innerArray, predicate));
        }

        firstOrDefault(predicate?: (element: T) => boolean): T
        {
            return Array.firstOrDefault(this.innerArray, predicate);
        }

        lastOrDefault(predicate?: (element: T) => boolean): T
        {
            return Array.lastOrDefault(this.innerArray, predicate);
        }

        first(predicate?: (element: T) => boolean): T
        {
            return Array.first(this.innerArray, predicate);
        }

        last(predicate?: (element: T) => boolean): T
        {
            return Array.last(this.innerArray, predicate);
        }
        
        any(predicate?: (element: T) => boolean): boolean
        {
            return Array.any(this.innerArray, predicate);
        }

        count(predicate?: (element: T) => boolean): number
        {
            return Array.count(this.innerArray, predicate);
        }

        sum<TI>(predicate?: (element: T) => TI): TI
        {
            return Array.sum(this.innerArray, predicate);
        }

        contains(value: T): boolean
        {
            return Array.contains(this.innerArray, value);
        }

        orderBy<TR>(predicate?: (element: T) => TR): ArrayList<T>
        {
            return new ArrayList(Array.orderBy(this.innerArray, predicate));
        }

        orderByDesc<TR>(predicate?: (element: T) => TR): ArrayList<T>
        {
            return new ArrayList(Array.orderByDesc(this.innerArray, predicate));
        }

        getInnerArray(): Array<T> 
        {
            return this.innerArray;
        }

        get(index: number): T 
        {
            if (index < 0)
                throw new Error("index is less than 0.");

            if (index >= this.innerArray.length)
                throw new Error("index is equal to or greater than length.");

            return this.innerArray[index];
        }

        add(value: T) 
        {
            this.innerArray.push(value);
        }

        addRange(value: Array<T>);
        addRange(value: ArrayList<T>);
        addRange(value: any)
        {
            let i: number;

            if (value instanceof ArrayList)
            {
                for (i = 0; i < value.count(); i++)
                    this.innerArray.push(value.get(i));
            }
            else if(value instanceof Array)
            {
                for (i = 0; i < value.length; i++)
                    this.innerArray.push(value[i]);
            }
        }

        pop(): T
        {
            return this.innerArray.pop();
        }

        indexOf(element: T): number
        {
            return this.innerArray.indexOf(element);
        }

        remove(element: T): boolean
        {
            return Array.remove(this.innerArray, element);
        }

        removeAt(index: number): void
        {
            Array.removeAt(this.innerArray, index);
        }

        removeAll(predicate?: (element: T) => boolean): number
        {
            return Array.removeAll(this.innerArray, predicate);
        }

        clear()
        {
            // we prefer to execute remove all and not create a new array, to
            // preserve the reference to the original array, if someone used the
            // getInnerArray method.
            this.removeAll();
        }
    }
} 