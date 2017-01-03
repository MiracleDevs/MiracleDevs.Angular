module MiracleDevs.Angular.Filters
{
    export class AngularFilters
    {
        static get currency(): string { return "currency"; }

        static get number(): string { return "number"; }

        static get date(): string { return "date"; }

        static get json(): string { return "json"; }

        static get lowercase(): string { return "lowercase"; }

        static get uppercase(): string { return "uppercase"; }

        static get limitTo(): string { return "limitTo"; }

        static get orderBy(): string { return "orderBy"; }
    }
}