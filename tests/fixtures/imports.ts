/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../typings/index.d.ts" />
///<reference path="../typings/miracledevs.angular/miracledevs.angular.d.ts" />
///<reference path="../node_modules/@types/angular-mocks/index.d.ts" />
///<reference path="../node_modules/@types/jasmine/index.d.ts" />

import IPromise = ng.IPromise;
import IInjectorService = ng.auto.IInjectorService;
import IScope = ng.IScope;
import IRootScopeService = ng.IRootScopeService;
import IQService = ng.IQService;
import ITimeoutService = ng.ITimeoutService;
import IControllerService = ng.IControllerService;

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