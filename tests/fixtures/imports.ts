/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/angularjs/angular.d.ts" />
///<reference path="../typings/angularjs/angular-mocks.d.ts" />
///<reference path="../typings/miracledevs.angular/miracledevs.angular.d.ts" />

import IAlertService = MiracleDevs.Angular.Services.IAlertService;
import IInjectorService = angular.auto.IInjectorService;
import FrameworkServices = MiracleDevs.Angular.Services.FrameworkServices;
import FrameworkModule = MiracleDevs.Angular.FrameworkModule;
import DummyLoggingService = MiracleDevs.Angular.Services.DummyLoggingService;
import AlertType = MiracleDevs.Angular.Services.AlertType;

import ArrayList = MiracleDevs.Angular.Core.ArrayList;
import Dictionary = MiracleDevs.Angular.Core.Dictionary;

import Guid = MiracleDevs.Angular.Core.Guid;