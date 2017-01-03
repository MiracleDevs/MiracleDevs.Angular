///<reference path="IDateService.ts" />
///<reference path="FrameworkServices.ts" />
///<reference path="ServiceBase.ts" />
///<reference path="../interfaces/IServiceRegister.ts"/>
///<reference path="../core/String.ts"/>
///<reference path="../core/Object.ts"/>
///<reference path="../core/Date.ts"/>
///<reference path="../FrameworkModule.ts"/>

module MiracleDevs.Angular.Services
{
    import IServiceRegister = Interfaces.IServiceRegister;

    export class DateService extends ServiceBase implements IDateService
    {
        static register: IServiceRegister =
        {
            name: FrameworkServices.dateService,
            factory: DateService.factory
        };

        getDate(value: Date | string): Date
        {        
            if (value instanceof Date)
                return value as Date;

            let date = new Date();

            if (String.isString(value))
                date = new Date(value as string);

            if (Object.isNull(date) || isNaN(date.getTime()))
            {
                date = new Date();
                date.fromIso8601(value as string);
            }

            return date;
        }

        getDateRangeValue(value: Date | string): DateRangeValue
        {
            var oneSecond = 1000;
            var oneMinute = oneSecond * 60;
            var oneHour = oneMinute * 60;
            var oneDay = oneHour * 24;
            var oneYear = 12;

            var now = new Date(Date.now()); 
            var nowMiliseconds = now.getMilliseconds();      
            var nowSeconds = now.getSeconds();
            var nowMinutes = now.getMinutes();
            var nowHours = now.getHours();
            var nowDays = now.getDate();
            var nowMonths = now.getMonth();
            var nowYears = now.getFullYear();

            // var oneSecondAgo = new Date(nowYears, nowMonths, nowDays, nowHours, nowMinutes, nowSeconds - 1, nowMiliseconds);
            var oneMinuteAgo = new Date(nowYears, nowMonths, nowDays, nowHours, nowMinutes - 1, nowSeconds, nowMiliseconds);
            var oneHourAgo = new Date(nowYears, nowMonths, nowDays, nowHours - 1, nowMinutes, nowSeconds, nowMiliseconds);
            var oneDayAgo = new Date(nowYears, nowMonths, nowDays - 1, nowHours, nowMinutes, nowSeconds, nowMiliseconds);
            var oneMonthAgo = new Date(nowYears, nowMonths - 1, nowDays, nowHours, nowMinutes, nowSeconds, nowMiliseconds);
            var oneYearAgo = new Date(nowYears - 1, nowMonths, nowDays, nowHours, nowMinutes, nowSeconds, nowMiliseconds);
           
            if (Object.isNull(value))
                return new DateRangeValue(0, DateRange.Unknown);

            var date = this.getDate(value);

            var rangeSeconds = Math.floor((now.valueOf() - date.valueOf()) / oneSecond);
            var rangeMinutes = Math.floor((now.valueOf() - date.valueOf()) / oneMinute);
            var rangeHours = Math.floor((now.valueOf() - date.valueOf()) / oneHour);
            var rangeDays = Math.floor((now.valueOf() - date.valueOf()) / oneDay);
            var rangeMonths = this.getMonthDifference(date, now);
            var rangeYears = Math.floor(rangeMonths / oneYear);

            if (date > oneMinuteAgo)
            {
                return new DateRangeValue(rangeSeconds, DateRange.Seconds);
            }
            else if (date > oneHourAgo && date <= oneMinuteAgo)
            {
                return new DateRangeValue(rangeMinutes, DateRange.Minutes);
            }       
            if (date > oneDayAgo && date <= oneHourAgo)
            {
                return new DateRangeValue(rangeHours, DateRange.Hours);
            }
            else if (date > oneMonthAgo && date <= oneDayAgo)
            {
                return new DateRangeValue(rangeDays, DateRange.Days);
            }
            else if (date > oneYearAgo && date <= oneMonthAgo)
            {
                return new DateRangeValue(rangeMonths, DateRange.Months);
            }

            return new DateRangeValue(rangeYears, DateRange.Years);
        }

        private getMonthDifference(d1: Date, d2: Date): number
        {
            let months: number;
            months = (d2.getFullYear() - d1.getFullYear()) * 12;
            months -= d1.getMonth();
            months += d2.getMonth();
            return months <= 0 ? 0 : months;
        }

        static factory(): IDateService
        {
            return new DateService();
        }
    }

    ////////////////////////////////////////////////////////////
    // Register service
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerService(DateService.register);
}