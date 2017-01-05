/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/angularjs/angular.d.ts" />
///<reference path="../typings/angularjs/angular-mocks.d.ts" />
///<reference path="../typings/miracledevs.angular/miracledevs.angular.d.ts" />

import IPromise = angular.IPromise;
import IInjectorService = angular.auto.IInjectorService;
import IScope = angular.IScope;
import IRootScopeService = angular.IRootScopeService;
import IQService = angular.IQService;
import ITimeoutService = angular.ITimeoutService;
import IControllerService = angular.IControllerService;

import IServiceRegister = MiracleDevs.Angular.Interfaces.IServiceRegister;

import IAlertService = MiracleDevs.Angular.Services.IAlertService;
import FrameworkServices = MiracleDevs.Angular.Services.FrameworkServices;
import FrameworkModule = MiracleDevs.Angular.FrameworkModule;
import DummyLoggingService = MiracleDevs.Angular.Services.DummyLoggingService;
import AlertType = MiracleDevs.Angular.Services.AlertType;

import ArrayList = MiracleDevs.Angular.Core.ArrayList;
import Dictionary = MiracleDevs.Angular.Core.Dictionary;
import Guid = MiracleDevs.Angular.Core.Guid;
import LocalStorage = MiracleDevs.Angular.Core.LocalStorage;
import mimeType = MiracleDevs.Angular.Core.mimeType;
import Md5 = MiracleDevs.Angular.Core.Md5;

import ControllerBase = MiracleDevs.Angular.Controllers.ControllerBase;
import DialogControllerBase = MiracleDevs.Angular.Controllers.Dialogs.DialogControllerBase;

import ServiceBase = MiracleDevs.Angular.Services.ServiceBase;
import AngularServices = MiracleDevs.Angular.Services.AngularServices;
import ILoggingService = MiracleDevs.Angular.Services.ILoggingService;
import ILoadingService = MiracleDevs.Angular.Services.ILoadingService;