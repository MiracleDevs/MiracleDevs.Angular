/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="ArrayList.ts" />

module MiracleDevs.Angular.Core 
{
    export interface IDictionary<TKey, TValue>
    {
        getKeys(): ArrayList<TKey>;
        getValues(): ArrayList<TValue>;
        add(key: TKey, value: TValue);
        remove(key: TKey);
        get(key: TKey);
        containsKey(key: TKey);
    }

    export interface IKeyValuePair<TKey, TValue>
    {
        key: TKey;
        value: TValue;
    }

    export class Dictionary<TKey, TValue> implements IDictionary<TKey, TValue>
    {
        private dictionary: ArrayList<IKeyValuePair<TKey, TValue>>;

        constructor(init?: Array<IKeyValuePair<TKey, TValue>>)
        {
            this.dictionary = (init != null) ? new ArrayList(init) : new ArrayList<IKeyValuePair<TKey, TValue>>();
        }

        getKeys(): ArrayList<TKey>
        {
            return this.dictionary.select(x => x.key);
        }

        getValues(): ArrayList<TValue>
        {
            return this.dictionary.select(x => x.value);
        }

        add(key: TKey, value: TValue): void
        {
            if (this.containsKey(key))
                throw new Error(`The dictionary already contains the key '${key}'`);

            this.dictionary.add({ key: key, value: value });
        }

        remove(key: TKey): void
        {
            if (!this.containsKey(key))
                throw new Error(`The dictionary does not contains the key '${key}'`);

            this.dictionary.remove(this.dictionary.firstOrDefault(x => x.key === key));
        }

        removeAll(func: (element: IKeyValuePair<TKey, TValue>) => boolean): void
        {        
            this.dictionary.removeAll(func);
        }

        get(key: TKey): TValue
        {
            const pair = this.dictionary.firstOrDefault(x => x.key === key);

            return (pair != null) ? pair.value : null;
        }

        containsKey(key: TKey): boolean
        {
            return this.dictionary.any(x => x.key === key);
        }

        clear(): void
        {
            this.dictionary.clear();
        }
    }
} 