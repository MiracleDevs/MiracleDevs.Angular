/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

module MiracleDevs.Angular.Services
{
    export interface IGeolocationService
    {
        getPosition(callback: (info: IGeolocationInformation) => void, onError?: (error: PositionError) => void, options?: IPositionOptions): void;

        watchPosition(callback: (info: IGeolocationInformation) => void, onError?: (error: PositionError) => void, options?: IPositionOptions): number;

        clearWatch(watchId: number): void;

        isAvailable(): boolean;
    }

    export interface ICoordinates
    {
        latitude: number;	        //The latitude as a decimal number (always returned)
        longitude: number;	        //The longitude as a decimal number (always returned)
        accuracy: number;	        //The accuracy of position (always returned)
        altitude: number;	        //The altitude in meters above the mean sea level (returned if available)
        altitudeAccuracy: number;	//The altitude accuracy of position (returned if available)
        heading: number;	        //The heading as degrees clockwise from North (returned if available)
        speed: number;	            //The speed in meters per second (returned if available)
    }

    export interface IGeolocationInformation
    {
        coords: ICoordinates;

        timestamp: number;
    }

   export interface IPositionOptions
    {
        enableHighAccuracy?: boolean;

        timeout?: number;

        maximumAge?: number;
    }
}