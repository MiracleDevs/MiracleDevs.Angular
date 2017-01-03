/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

module MiracleDevs.Angular.Core
{
    export class Guid
    {       
        value: string;

        constructor(value: string)
        {
             this.value = value;
        }

        private static s4(): string
        {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
 
        static new(): Guid
        {
            return new Guid((Guid.s4() + Guid.s4() + "-" + Guid.s4() + "-4" + Guid.s4().substr(0, 3) + "-" + Guid.s4() + "-" + Guid.s4() + Guid.s4() + Guid.s4()).toLowerCase());
        }
    }
}