/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

module MiracleDevs.Angular.Exceptions
{   
    export class WrongTypeException extends Exception
    {
        constructor(message: string)
        {
            super(message);
        }
    }
}  