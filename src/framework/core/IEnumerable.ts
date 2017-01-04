module MiracleDevs.Angular.Core
{
    export interface IKeyValuePair<TKey, TValue>
    {
        key: TKey;
        value: TValue;
    }

    export interface IEnumerable<TElement>
    {
        forEach(action: (element: TElement) => void): void;

        where(predicate: (element: TElement) => boolean): IEnumerable<TElement>;

        select<TR>(predicate: (element: TElement) => TR): IEnumerable<TR>;

        firstOrDefault(predicate?: (element: TElement) => boolean): TElement;

        lastOrDefault(predicate?: (element: TElement) => boolean): TElement;

        first(predicate?: (element: TElement) => boolean): TElement;

        last(predicate?: (element: TElement) => boolean): TElement;

        any(predicate?: (element: TElement) => boolean): boolean;

        count(predicate?: (element: TElement) => boolean): number;

        sum<TI>(predicate?: (element: TElement) => TI): TI;

        orderBy<TR>(predicate?: (element: TElement) => TR): IEnumerable<TElement>;

        orderByDesc<TR>(predicate?: (element: TElement) => TR): IEnumerable<TElement>;

        getInnerArray(): Array<TElement>;
    }
}