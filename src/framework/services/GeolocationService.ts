/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="ServiceBase.ts" />
///<reference path="../FrameworkModule.ts"/>

module MiracleDevs.Angular.Services
{
    import IServiceRegister = Interfaces.IServiceRegister;

    export class GeolocationService extends ServiceBase implements IGeolocationService
    {
        static register: IServiceRegister = {
            name: FrameworkServices.geolocationService,
            factory: GeolocationService.factory
        };

        getPosition(callback: (info: IGeolocationInformation) => void, onError?: (error: PositionError) => void, options?: IPositionOptions): void
        {
            if (!this.isAvailable())
                return;

            this.getGeolocator().getCurrentPosition(callback, onError, options);
        }

        watchPosition(callback: (info: IGeolocationInformation) => void, onError?: (error: PositionError) => void, options?: IPositionOptions): number
        {
            if (!this.isAvailable())
                return -1;

            return this.getGeolocator().watchPosition(callback, onError, options);            
        }

        clearWatch(watchId: number): void
        {
            if (!this.isAvailable())
                return;

            this.getGeolocator().clearWatch(watchId);
        }

        isAvailable(): boolean
        {
            return !Object.isNull(navigator.geolocation);
        }

        private getGeolocator(): Geolocation
        {
            return navigator.geolocation;
        }

        static factory(): GeolocationService
        {
            return new GeolocationService();
        }
    }

    ////////////////////////////////////////////////////////////
    // Register service
    ////////////////////////////////////////////////////////////
    FrameworkModule.instance.registerService(GeolocationService.register);
}