///<reference path="Array.ts"/>

module MiracleDevs.Angular.Core
{
    export class ArrayList<T>
    {
        private innerList: Array<T>;

        constructor(array?: Array<T>) 
        {
            this.innerList = array || new Array<T>();
        }

        forEach(action: (element: T) => void): void 
        {
            Array.forEach(this.innerList, action);
        }

        where(func: (element: T) => boolean): ArrayList<T>
        {
            return new ArrayList(Array.where(this.innerList, func));
        }

        select<TR>(func: (element: T) => TR): ArrayList<TR>
        {
            return new ArrayList(Array.select(this.innerList, func));
        }

        firstOrDefault(func?: (element: T) => boolean): T
        {
            return Array.firstOrDefault(this.innerList, func);
        }

        lastOrDefault(func?: (element: T) => boolean): T
        {
            return Array.lastOrDefault(this.innerList, func);
        }
        
        any(func?: (element: T) => boolean): boolean
        {
            return Array.any(this.innerList, func);
        }

        count(func?: (element: T) => boolean): number
        {
            return Array.count(this.innerList, func);
        }

        sum<TI>(func?: (element: T) => TI): TI
        {
            return Array.sum(this.innerList, func);
        }

        contains(value: T): boolean
        {
            return Array.contains(this.innerList, value);
        }

        orderBy<TR>(func: (element: T) => TR): ArrayList<T>
        {
            return new ArrayList(Array.orderBy(this.innerList, func));
        }

        orderByDesc<TR>(func: (element: T) => TR): ArrayList<T>
        {
            return new ArrayList(Array.orderByDesc(this.innerList, func));
        }

        values(): Array<T> 
        {
            return this.innerList;
        }

        get(index: number): T 
        {
            return this.innerList[index];
        }

        add(value: T) 
        {
            this.innerList.push(value);
        }

        addRange(value: Array<T>);
        addRange(value: ArrayList<T>);
        addRange(value: any)
        {
            let i: number;

            if (value instanceof ArrayList)
            {
                for (i = 0; i < value.count(); i++)
                    this.innerList.push(value.get(i));
            }
            else if(value instanceof Array)
            {
                for (i = 0; i < value.length; i++)
                    this.innerList.push(value[i]);
            }
        }


        pop(): T
        {
            return this.innerList.pop();
        }

        indexOf(element: T): number
        {
            return this.innerList.indexOf(element);
        }

        remove(element: T)
        {
            Array.remove(this.innerList, element);
        }

        removeAt(index: number)
        {
            Array.removeAt(this.innerList, index);
        }

        removeAll(func: (element: T) => boolean): void
        {
            Array.removeAll(this.innerList, func);
        }

        clear()
        {
            this.innerList = new Array<T>();
        }
    }
} 