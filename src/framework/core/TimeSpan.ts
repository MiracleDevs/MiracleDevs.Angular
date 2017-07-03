module MiracleDevs.Angular.Core 
{
    export class TimeSpan  
    {
        /**
         * Retrieves the number of milliseconds in one second.
         * @return {Number} Number of milliseconds in one second.
         * @static
         */
        static get millisecondsPerSecond(): number
        {
            return 1000;
        };

        /**
         * Retrieves the number of milliseconds in one minute.
         * @return {Number} Number of milliseconds in one minute.
         * @static
         */
        static get millisecondsPerMinute(): number
        {
            return 60000;
        };

        /**
         * Retrieves the number of milliseconds in one hour.
         * @return {Number} Number of milliseconds in one hour.
         * @static
         */
        static get millisecondsPerHour(): number
        {
            return 3600000;
        };

        /**
         * Retrieves the number of milliseconds in one day.
         * @return {Number} Number of milliseconds in one day.
         * @static
         */
        static get millisecondsPerDay(): number
        {
            return 86400000;
        };

        /**
         * Creates a new time span with the number of milliseconds
         * elapsed to the present time.
         * @return {TimeSpan} Time span representing the current UTC time. 
         * @static
         */
        static get now(): TimeSpan
        {
            return new TimeSpan(new Date().valueOf());
        };

        /**
         * Creates a new time span with the number of milliseconds
         * elapsed since the aplication started.
         * @return {TimeSpan} Time elapsed sirce the Application started.
         * @static
         */
        static sinceTheApplicationStarted()
        {
            return TimeSpan.now.subtract(TimeSpan.applicationStarted);
        };

        /**
         * A time span without milliseconds.
         * @type TimeSpan
         * @static
         */
        static get zero(): TimeSpan { return new TimeSpan(0); }

        /**
         * A time span which represents one millisecond.
         * @type TimeSpan
         * @static
         */
        static oneMillisecond(): TimeSpan { return new TimeSpan(1); }

        /**
         * A time span which represents ten milliseconds.
         * @type TimeSpan
         * @static
         */
        static tenMilliseconds(): TimeSpan { return new TimeSpan(10); }

        /**
         * A time span which represents hundred milliseconds.
         * @type TimeSpan
         * @static
         */
        static hundredMilliseconds(): TimeSpan { return new TimeSpan(100); }

        /**
         * A time span which represents five hundred millisencods, or half a second.
         * @type TimeSpan
         * @static
         */
        static halfSecond(): TimeSpan { return new TimeSpan(500); }

        /**
         * A time span which represents one second.
         * @type TimeSpan
         * @static
         */
        static oneSecond(): TimeSpan { return TimeSpan.fromSeconds(1); }

        /**
         * A time span which represents thirty seconds or half a minute.
         * @type TimeSpan
         * @static
         */
        static halfMinute(): TimeSpan { return TimeSpan.fromSeconds(30); }

        /**
         * A time span which represents one minute.
         * @type TimeSpan
         * @static
         */
        static oneMinute(): TimeSpan { return TimeSpan.fromMinutes(1); }

        /**
         * A time span which represents thirty minutes or half an hour.
         * @type TimeSpan
         * @static
         */
        static halfHour(): TimeSpan { return TimeSpan.fromMinutes(30); }

        /**
         * A time span which represents an hour.
         * @type TimeSpan
         * @static
         */
        static oneHour(): TimeSpan { return TimeSpan.fromHours(1); }

        /**
         * A time span which represents tweleve hours or half a day.
         * @type TimeSpan
         * @static
         */
        static halfDay(): TimeSpan { return TimeSpan.fromHours(12); }

        /**
         * A time span which represents on day.
         * @type TimeSpan
         * @static
         */
        static oneDay(): TimeSpan { return TimeSpan.fromDays(1); }

        constructor(public milliseconds: number)
        {
            /**
             * Number of milliseconds representing the time span.
             * @type Number
             */
            this.milliseconds = milliseconds;
        }

        /**
        * Adds the milliseconds of the parameter to the current timespan.
         * @param {TimeSpan} timeSpan TimeSpan to be added to the current one.
         * @return {TimeSpan} A reference to the time span.
         */
        add(timeSpan: TimeSpan): TimeSpan
        {
            this.milliseconds += timeSpan.milliseconds;
            return this;
        };

        /**
         * Adds milliseconds to the current time span.
         * @param {Number} milliseconds Milliseconds to be added.
         * @return {TimeSpan} A reference to the time span.
         */
        addMilliseconds(milliseconds: number): TimeSpan
        {
            this.milliseconds += milliseconds;
            return this;
        };

        /**
         * Adds secods to the current time span.
         * @param {Number} seconds Seconds to be added.
         * @return {TimeSpan} A reference to the time span.
         */
        addSeconds(seconds: number): TimeSpan
        {
            this.addMilliseconds(seconds * 1000);
            return this;
        };

        /**
         * Adds minutes to the current time span.
         * @param {Number} minutes Minutes to be added.
         * @return {TimeSpan} A reference to the time span.
         */
        addMintures(minutes: number): TimeSpan
        {
            this.addMilliseconds(minutes * 60000);
            return this;
        };

        /**
         * Adds hours to the current time span.
         * @param {Number} hours Hours to be added.
         * @return {TimeSpan} A reference to the time span.
         */
        addHours(hours: number): TimeSpan
        {
            this.addMilliseconds(hours * 3600000);
            return this;
        };

        /**
         * Adds days to the current time span.
         * @param {Number} days Days to be added.
         * @return {TimeSpan} A reference to the time span.
         */
        addDays(days: number): TimeSpan
        {
            this.addMilliseconds(days * 86400000);
            return this;
        };

        /**
         * Subtracts the milliseconds of the parameter to the current timespan.
         * @param {TimeSpan} timeSpan TimeSpan to be added to the current one.
         * @return {TimeSpan} A reference to the time span.
         */
        subtract(timeSpan: TimeSpan): TimeSpan
        {
            this.milliseconds -= timeSpan.milliseconds;

            if (this.milliseconds < 0)
            {
                this.milliseconds = 0;
            }

            return this;
        };

        /**
         * Subtracts milliseconds to the current time span.
         * @param {Number} milliseconds Milliseconds to be subtracted.
         * @return {TimeSpan} A reference to the time span.
         */
        subtractMilliseconds(milliseconds: number): TimeSpan
        {
            this.milliseconds -= milliseconds;

            if (this.milliseconds < 0)
            {
                this.milliseconds = 0;
            }

            return this;
        };

        /**
         * Subtracts seconds to the current time span.
         * @param {Number} seconds Seconds to be subtracted.
         * @return {TimeSpan} A reference to the time span.
         */
        subtractSeconds(seconds: number): TimeSpan
        {
            this.subtractMilliseconds(seconds * 1000);
            return this;
        };

        /**
         * Subtracts minutes to the current time span.
         * @param {Number} minutes Minutes to be subtracted.
         * @return {TimeSpan} A reference to the time span.
         */
        subtractMintures(minutes: number): TimeSpan
        {
            this.subtractMilliseconds(minutes * 60000);
            return this;
        };

        /**
         * Subtracts hours to the current time span.
         * @param {Number} hours Hours to be subtracted.
         * @return {TimeSpan} A reference to the time span.
         */
        subtractHours(hours: number): TimeSpan
        {
            this.subtractMilliseconds(hours * 3600000);
            return this;
        };

        /**
         * Subtracts days to the current time span.
         * @param {Number} days Days to be subtracted.
         * @return {TimeSpan} A reference to the time span.
         */
        subtractDays(days: number): TimeSpan
        {
            this.subtractMilliseconds(days * 86400000);
            return this;
        };

        /**
         * Converts the timespan into seconds.
         * @return {Number} Number of seconds.
         */
        toSeconds(): number { return this.milliseconds / 1000; };

        /**
         * Converts the timespan into minutes.
         * @return {Number} Number of minutes.
         */
        toMinutes(): number { return this.milliseconds / 60000; };

        /**
         * Converts the timespan into hours.
         * @return {Number} Number of hours.
         */
        toHours(): number { return this.milliseconds / 3600000; };

        /**
         * Converts the timespan into days.
         * @return {Number} Number of days.
         */
        toDays(): number { return this.milliseconds / 86400000; };

        /**
         * Returns a new instance copy of the current time span.
         * @return {TimeSpan} New instance copied from this one.
         */
        copy(): TimeSpan
        {
            return new TimeSpan(this.milliseconds);
        };

        /**
         * Retrieves the difference with the current time span in milliseconds.
         * @param {TimeSpan} timeSpan Time span to calculate the difference.
         * @return {Number} difference between the two time span in milliseconds.
         */
        difference(timeSpan: TimeSpan): number
        {
            return this.milliseconds - timeSpan.milliseconds;
        };

        /**
         * Retrieves the percentage relation between the current time and the
         * given one. This takes as the total value the given time span, so if
         * this time span is greater than the parameter the percentage will be
         * greater than one. The percentage is expressed between[0-1] being 1
         * 100%. 
         * @param {TimeSpan} timeSpan Time considered the total time in the percentage relation.
         * @return {Number} A Number greater or equal than 0, when 1 is 100%.
         */
        percentage(timeSpan: TimeSpan): number
        {
            return this.milliseconds / timeSpan.milliseconds;
        };

        /**
         * Converts the object into a string.
         * @return {String} String representation of the object.
         */
        toString(): string
        {
            return this.milliseconds.toString() + "ms";
        };

        /**
         * Creates a new time span from a number of seconds.
         * @param {Number} second Number of seconds.
         * @return {TimeSpan} A time span representing the number of seconds.
         * @static
         */
        static fromSeconds(seconds)
        {
            return new TimeSpan(seconds * TimeSpan.millisecondsPerSecond);
        };

        /**
         * Creates a new time span from a number of minutes.
         * @param {Number} second Number of minutes.
         * @return {TimeSpan} A time span representing the number of minutes.
         * @static
         */
        static fromMinutes(minutes)
        {
            return new TimeSpan(minutes * TimeSpan.millisecondsPerMinute);
        };

        /**
         * Creates a new time span from a number of hours.
         * @param {Number} second Number of hours.
         * @return {TimeSpan} A time span representing the number of hours.
         * @static
         */
        static fromHours(hours)
        {
            return new TimeSpan(hours * TimeSpan.millisecondsPerHour);
        };

        /**
         * Creates a new time span from a number of days.
         * @param {Number} second Number of days.
         * @return {TimeSpan} A time span representing the number of days.
         * @static
         */
        static fromDays(days)
        {
            return new TimeSpan(days * TimeSpan.millisecondsPerDay);
        };

        /**
         * The exact time when the application started.
         * On reality holds the time when this script was loaded.
         * @type TimeSpan
         * @static
         */
        private static applicationStarted = TimeSpan.now;
    }
}