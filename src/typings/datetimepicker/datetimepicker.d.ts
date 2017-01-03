
interface IDateTimePickerIcons
{
    time?: string;
    date?: string;
    up?: string;
    down?: string;
    previous?: string;
    next?: string;
    today?: string;
    clear?: string;
    close?: string;
}
interface IDateTimePickerPositioning
{
    horizontal?: string;
    vertical?: string;
}
interface IDateTimePickerParameters
{
    format?: string;
    dayViewHeaderFormat?: string;
    extraFormats?: boolean;
    stepping?: number;
    minDate?: Date | boolean;
    maxDate?: Date | boolean;
    useCurrent?: boolean;
    collapse?: boolean;
    locale?: string;
    defaultDate?: Date;
    disabledDates?: boolean;
    enabledDates?: boolean;
    icons?: IDateTimePickerIcons;
    useStrict?: boolean;
    sideBySide?: boolean;
    daysOfWeekDisabled?: Array<number>;
    calendarWeeks?: boolean;
    viewMode?: "decades" | "years" | "months" | "days";
    toolbarPlacement?: string;
    showTodayButton?: boolean;
    showClear?: boolean;
    widgetPositioning?: IDateTimePickerPositioning;
    widgetParent?: any;
    keepOpen?: boolean;
    focusOnShow?: boolean;
}


declare interface JQuery
{
    datetimepicker(parameters?: IDateTimePickerParameters);
}
