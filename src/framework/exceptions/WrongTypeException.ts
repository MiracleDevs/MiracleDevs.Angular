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