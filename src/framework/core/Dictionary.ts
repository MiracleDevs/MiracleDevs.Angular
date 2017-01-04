/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="ArrayList.ts" />

module MiracleDevs.Angular.Core 
{
    export class Dictionary<TKey, TValue> implements IEnumerable<IKeyValuePair<TKey, TValue>>
    {
        protected innerArray: Array<IKeyValuePair<TKey, TValue>>;

        constructor(array?: Array<IKeyValuePair<TKey, TValue>>) 
        {
            this.innerArray = new Array<IKeyValuePair<TKey, TValue>>();

            if (!Object.isNull(array))
            {
                this.addRange(array);
            }
        }

        getValues(): IEnumerable<TValue>
        {
            return this.select(x => x.value);
        }

        getKeys(): IEnumerable<TKey>
        {
            return this.select(x => x.key);
        }

        containsKey(key: TKey): boolean
        {
            return this.any(x => x.key === key);
        }

        forEach(action: (element: IKeyValuePair<TKey, TValue>) => void): void 
        {
            Array.forEach(this.innerArray, action);
        }

        where(predicate: (element: IKeyValuePair<TKey, TValue>) => boolean): IEnumerable<IKeyValuePair<TKey, TValue>>
        {
            return new Dictionary(Array.where(this.innerArray, predicate));
        }

        select<TR>(predicate: (element: IKeyValuePair<TKey, TValue>) => TR): IEnumerable<TR>
        {
            return new ArrayList(Array.select(this.innerArray, predicate));
        }

        firstOrDefault(predicate?: (element: IKeyValuePair<TKey, TValue>) => boolean): IKeyValuePair<TKey, TValue>
        {
            return Array.firstOrDefault(this.innerArray, predicate);
        }

        lastOrDefault(predicate?: (element: IKeyValuePair<TKey, TValue>) => boolean): IKeyValuePair<TKey, TValue>
        {
            return Array.lastOrDefault(this.innerArray, predicate);
        }

        first(predicate?: (element: IKeyValuePair<TKey, TValue>) => boolean): IKeyValuePair<TKey, TValue>
        {
            return Array.first(this.innerArray, predicate);
        }

        last(predicate?: (element: IKeyValuePair<TKey, TValue>) => boolean): IKeyValuePair<TKey, TValue>
        {
            return Array.last(this.innerArray, predicate);
        }

        any(predicate?: (element: IKeyValuePair<TKey, TValue>) => boolean): boolean
        {
            return Array.any(this.innerArray, predicate);
        }

        count(predicate?: (element: IKeyValuePair<TKey, TValue>) => boolean): number
        {
            return Array.count(this.innerArray, predicate);
        }

        sum<TI>(predicate: (element: IKeyValuePair<TKey, TValue>) => TI): TI
        {
            if (Object.isNull(predicate))
                throw new Error("Predicate can not be null.");

            return Array.sum(this.innerArray, predicate);
        }

        orderBy<TR>(predicate: (element: IKeyValuePair<TKey, TValue>) => TR): Dictionary<TKey, TValue>
        {
            if (Object.isNull(predicate))
                throw new Error("Predicate can not be null.");

            return new Dictionary(Array.orderBy(this.innerArray, predicate));
        }

        orderByDesc<TR>(predicate: (element: IKeyValuePair<TKey, TValue>) => TR): Dictionary<TKey, TValue>
        {
            if (Object.isNull(predicate))
                throw new Error("Predicate can not be null.");

            return new Dictionary(Array.orderByDesc(this.innerArray, predicate));
        }

        getInnerArray(): Array<IKeyValuePair<TKey, TValue>> 
        {
            return this.innerArray;
        }

        get(key: TKey): TValue
        {
            const pair = this.firstOrDefault(x => x.key === key);

            if (Object.isNull(pair))
                throw new Error("The given key was not present in the dictionary.");

            return pair.value;
        }

        keyOf(value: TValue): TKey
        {
            const pair = this.firstOrDefault(x => x.value === value);

            if (Object.isNull(pair))
                throw new Error("The given value was not present in the dictionary.");

            return pair.key;
        }

        add(key: TKey, value: TValue): void
        {
            if (Object.isNull(key))
                throw new Error("Key can not be null.");

            if (this.containsKey(key))
                throw new Error("An element with the same key already exists in the Dictionary<TKey, TValue>.");

            this.innerArray.push({ key: key, value: value });
        }

        addRange(value: Array<IKeyValuePair<TKey, TValue>>): void;
        addRange(value: IEnumerable<IKeyValuePair<TKey, TValue>>): void;
        addRange(value: any): void
        {
            let i: number;

            if (!Object.isNull(value) && !Object.isNull(value.getInnerArray))
                value = value.getInnerArray();

            if (!(value instanceof Array))
                throw new Error("value is must be an array or an IEnumerable class.");

            for (i = 0; i < value.length; i++)
            {
                var innerValue = value[i];

                if (Object.isNull(innerValue))
                    throw new Error("Item can not be null");

                this.add(innerValue.key, innerValue.value);
            };
        }

        pop(): IKeyValuePair<TKey, TValue>
        {
            return this.innerArray.pop();
        }

        remove(key: TKey): void
        {
            const pair = this.firstOrDefault(x => x.key === key);

            if (Object.isNull(pair))
                throw new Error("The given key was not present in the dictionary.");

            Array.remove(this.innerArray, pair);
        }

        removeAll(predicate?: (element: IKeyValuePair<TKey, TValue>) => boolean): number
        {
            return Array.removeAll(this.innerArray, predicate);
        }

        clear(): void
        {
            // we prefer to execute remove all and not create a new array, to
            // preserve the reference to the original array, if someone used the
            // getInnerArray method.
            this.removeAll();
        }
    }
} 