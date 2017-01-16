var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
var FrameworkServices = MiracleDevs.Angular.Services.FrameworkServices;
var FrameworkModule = MiracleDevs.Angular.FrameworkModule;
var DummyLoggingService = MiracleDevs.Angular.Services.DummyLoggingService;
var AlertType = MiracleDevs.Angular.Services.AlertType;
var ArrayList = MiracleDevs.Angular.Core.ArrayList;
var Dictionary = MiracleDevs.Angular.Core.Dictionary;
var Guid = MiracleDevs.Angular.Core.Guid;
var LocalStorage = MiracleDevs.Angular.Core.LocalStorage;
var mimeType = MiracleDevs.Angular.Core.mimeType;
var Md5 = MiracleDevs.Angular.Core.Md5;
var ControllerBase = MiracleDevs.Angular.Controllers.ControllerBase;
var DialogControllerBase = MiracleDevs.Angular.Controllers.Dialogs.DialogControllerBase;
var ServiceBase = MiracleDevs.Angular.Services.ServiceBase;
var AngularServices = MiracleDevs.Angular.Services.AngularServices;
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="Imports.ts"/>
describe("Framework Module", function () {
    it("Framework shoulnd't be null", function () {
        expect(angular.mock.module("miracledevs-framework")).not.toBeNull();
    });
    it("Singleton shouldn't be null", function () {
        expect(FrameworkModule.instance).not.toBeNull();
    });
    it("FrameworkModule should have a name", function () {
        expect(FrameworkModule.instance.getModuleName()).not.toBeNull();
    });
});
///<reference path="../Imports.ts" />
var TestLoggingService = (function (_super) {
    __extends(TestLoggingService, _super);
    function TestLoggingService() {
        var _this = _super.call(this) || this;
        _this.messageWritten = 0;
        _this.warningWritten = 0;
        _this.errorWritten = 0;
        return _this;
    }
    TestLoggingService.prototype.writeMessage = function (message) {
        this.messageWritten++;
    };
    TestLoggingService.prototype.writeWarning = function (message) {
        this.warningWritten++;
    };
    TestLoggingService.prototype.writeError = function (message) {
        this.errorWritten++;
    };
    return TestLoggingService;
}(ServiceBase));
var TestLoadingService = (function (_super) {
    __extends(TestLoadingService, _super);
    function TestLoadingService() {
        return _super.apply(this, arguments) || this;
    }
    TestLoadingService.prototype.show = function () {
        this.loadingVisible = true;
    };
    TestLoadingService.prototype.hide = function () {
        this.loadingVisible = false;
    };
    return TestLoadingService;
}(ServiceBase));
var TestPromiseService = (function (_super) {
    __extends(TestPromiseService, _super);
    function TestPromiseService(q, timeout) {
        var _this = _super.call(this) || this;
        _this.q = q;
        _this.timeout = timeout;
        _this.delay = 500;
        _this.numberResult = 1;
        _this.booleanResult = true;
        _this.stringResult = "hello world";
        _this.dateResult = new Date(12, 12, 12);
        _this.objectResult = { name: "custom object" };
        _this.arrayResult = [1, 2, 3, 4];
        _this.rejectionReason = "Testing promise rejection";
        return _this;
    }
    TestPromiseService.prototype.numberPromise = function () {
        return this.q.resolve(this.numberResult);
    };
    TestPromiseService.prototype.booleanPromise = function () {
        return this.q.resolve(this.booleanResult);
    };
    TestPromiseService.prototype.stringPromise = function () {
        return this.q.resolve(this.stringResult);
    };
    TestPromiseService.prototype.datePromise = function () {
        return this.q.resolve(this.dateResult);
    };
    TestPromiseService.prototype.objectPromise = function () {
        return this.q.resolve(this.objectResult);
    };
    TestPromiseService.prototype.arrayPromise = function () {
        return this.q.resolve(this.arrayResult);
    };
    TestPromiseService.prototype.rejectPromise = function () {
        return this.q.reject(this.rejectionReason);
    };
    TestPromiseService.factory = function (q, timeout) {
        return new TestPromiseService(q, timeout);
    };
    return TestPromiseService;
}(ServiceBase));
TestPromiseService.register = {
    name: "TestPromiseService",
    factory: TestPromiseService.factory,
    dependencies: [AngularServices.q, AngularServices.timeout]
};
FrameworkModule.instance.registerService(TestPromiseService.register);
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Imports.ts" />
///<reference path="../services/TestServices.ts" />
describe("TestController", function () {
    var rootScopeService;
    var controllerService;
    var injector;
    var testService;
    var alertService;
    var logger = new TestLoggingService();
    beforeEach(function () {
        // create a new framework module with all the configuration.
        angular.mock.module(FrameworkModule.instance.getModuleName());
        // inject a dummy logging service to prevent undesired logging.
        angular.mock.module(function ($provide) {
            $provide.value(FrameworkServices.loggingService, logger);
        });
    });
    // prepare base services and classes.
    beforeEach(inject(function ($injector) {
        injector = $injector;
        rootScopeService = injector.get(AngularServices.rootScope);
        controllerService = injector.get(AngularServices.controller);
        alertService = injector.get(FrameworkServices.alertService);
        testService = injector.get(TestPromiseService.register.name);
    }));
    function getController() {
        return controllerService(TestController, { scope: rootScopeService.$new(false, rootScopeService), injector: injector, testService: testService });
    }
    describe("controller construction", function () {
        it("shuld instantiate test controller", function () {
            var controller = getController();
            expect(controller).not.toBeNull();
            expect(controller.numberResult).toBe(0);
            expect(controller.booleanResult).toBe(false);
            expect(controller.stringResult).toBe(String.empty);
            expect(controller.dateResult).toBe(null);
            expect(controller.objectResult).toBe(null);
            expect(controller.arrayResult).toBe(null);
            expect(controller.rejectionReason).toBe(String.empty);
            expect(controller.loading).toBe(false);
        });
    });
    describe("base methods", function () {
        it("should get services", function () { return expect(Object.getTypeName(getController().retrieveService(TestPromiseService.register.name))).toBe(TestPromiseService.getFunctionName()); });
    });
    describe("promise methods", function () {
        it("should respond number promises", function () {
            var controller = getController();
            controller.testNumbers();
            rootScopeService.$apply();
            expect(controller.numberResult).toBe(testService.numberResult);
        });
        it("should respond boolean promises", function () {
            var controller = getController();
            controller.testBooleans();
            rootScopeService.$apply();
            expect(controller.booleanResult).toBe(testService.booleanResult);
        });
        it("should respond string promises", function () {
            var controller = getController();
            controller.testStrings();
            rootScopeService.$apply();
            expect(controller.stringResult).toBe(testService.stringResult);
        });
        it("should respond date promises", function () {
            var controller = getController();
            controller.testDates();
            rootScopeService.$apply();
            expect(controller.dateResult).toBe(testService.dateResult);
        });
        it("should respond object promises", function () {
            var controller = getController();
            controller.testObjects();
            rootScopeService.$apply();
            expect(Object.isEqualTo(controller.objectResult, testService.objectResult)).toBe(true);
        });
        it("should respond array promises", function () {
            var controller = getController();
            controller.testArrays();
            rootScopeService.$apply();
            expect(Object.isEqualTo(controller.arrayResult, testService.arrayResult)).toBe(true);
        });
        it("should reject promises", function () {
            var controller = getController();
            controller.testRejection();
            rootScopeService.$apply();
            expect(controller.rejectionReason).toBe(testService.rejectionReason);
        });
    });
});
var TestController = (function (_super) {
    __extends(TestController, _super);
    function TestController(scope, injector, testService) {
        var _this = _super.call(this, scope, injector) || this;
        _this.service = testService;
        _this.numberResult = 0;
        _this.booleanResult = false;
        _this.stringResult = String.empty;
        _this.dateResult = null;
        _this.objectResult = null;
        _this.arrayResult = null;
        _this.rejectionReason = String.empty;
        _this.loading = false;
        return _this;
    }
    TestController.prototype.retrieveService = function (name) {
        return this.getService(name);
    };
    TestController.prototype.testNumbers = function () {
        var _this = this;
        this.call(function () { return _this.service.numberPromise(); }, function (x) { return _this.numberResult = x; });
    };
    TestController.prototype.testBooleans = function () {
        var _this = this;
        this.call(function () { return _this.service.booleanPromise(); }, function (x) { return _this.booleanResult = x; });
    };
    TestController.prototype.testStrings = function () {
        var _this = this;
        this.call(function () { return _this.service.stringPromise(); }, function (x) { return _this.stringResult = x; });
    };
    TestController.prototype.testDates = function () {
        var _this = this;
        this.call(function () { return _this.service.datePromise(); }, function (x) { return _this.dateResult = x; });
    };
    TestController.prototype.testObjects = function () {
        var _this = this;
        this.call(function () { return _this.service.objectPromise(); }, function (x) { return _this.objectResult = x; });
    };
    TestController.prototype.testArrays = function () {
        var _this = this;
        this.call(function () { return _this.service.arrayPromise(); }, function (x) { return _this.arrayResult = x; });
    };
    TestController.prototype.testRejection = function () {
        var _this = this;
        this.numberResult = 0;
        this.call(function () { return _this.service.rejectPromise(); }, function (x) { return _this.numberResult = x; }, null, function (x) { return _this.rejectionReason = x; });
    };
    TestController.prototype.testLoading = function () {
        var _this = this;
        this.call(function () { return _this.service.numberPromise(); }, function (x) { return _this.numberResult = x; }, function (x) { return _this.isLoading(x); });
    };
    TestController.prototype.isLoading = function (loading) {
        this.loading = loading;
    };
    return TestController;
}(ControllerBase));
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Imports.ts" />
describe("ArrayList", function () {
    var firstLastError = "The source sequence is empty.";
    var indexLesserError = "index is less than 0.";
    var indexGreaterError = "index is equal to or greater than length.";
    describe("instantiation", function () {
        it("should be able to create an empty array list", function () {
            var array = null;
            expect(function () { return array = new ArrayList(); }).not.toThrow();
            expect(array).not.toBeNull();
            expect(array.count()).toBe(0);
        });
        it("should be able to create an filled array list", function () {
            var array = null;
            expect(function () { return array = new ArrayList([1, 2]); }).not.toThrow();
            expect(array).not.toBeNull();
            expect(array.count()).toBe(2);
            expect(array.get(0)).toBe(1);
            expect(array.get(1)).toBe(2);
        });
    });
    describe("operate over elements", function () {
        it("should get elements", function () {
            var array = new ArrayList([1, 2, 3]);
            expect(array.get(0)).toBe(1);
            expect(array.get(1)).toBe(2);
            expect(array.get(2)).toBe(3);
        });
        it("should fail if get out of bounds", function () {
            var array = new ArrayList([1, 2, 3]);
            expect(function () { return array.get(-1); }).toThrow(indexLesserError);
            expect(function () { return array.get(3); }).toThrow(indexGreaterError);
        });
        it("should pop last element", function () {
            var array = new ArrayList([1, 2, 3]);
            var popped = array.pop();
            expect(popped).toBe(3);
            expect(array.count()).toBe(2);
            expect(array.get(0)).toBe(1);
            expect(array.get(1)).toBe(2);
        });
        it("should retrieve index of element", function () {
            var array = new ArrayList([1, 2, 3]);
            expect(array.indexOf(1)).toBe(0);
            expect(array.indexOf(2)).toBe(1);
            expect(array.indexOf(3)).toBe(2);
        });
        it("should retrieve a negative index for an unexisting element", function () {
            var array = new ArrayList([1, 2, 3]);
            expect(array.indexOf(-1)).toBe(-1);
            expect(array.indexOf(4)).toBe(-1);
        });
        it("should add elements", function () {
            var array = new ArrayList();
            array.add(1);
            array.add(2);
            expect(array.count()).toBe(2);
            expect(array.get(0)).toBe(1);
            expect(array.get(1)).toBe(2);
        });
        it("should add range of elements", function () {
            var array = new ArrayList();
            array.addRange([1, 2]);
            expect(array.count()).toBe(2);
            expect(array.get(0)).toBe(1);
            expect(array.get(1)).toBe(2);
        });
        it("should execute code for each element", function () {
            var counter = 0;
            var array = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            array.forEach(function (element) {
                expect(element).toBe(array.get(counter));
                counter++;
            });
            expect(counter).toBe(array.count());
        });
    });
    describe("filtering elements", function () {
        it("should retrieve elements where condition is met", function () {
            var array = new ArrayList(["element 1", "element 2", "element 3", "index 4", "element 5", "element 6", "index 7"]);
            var results = array.where(function (x) { return x.indexOf("index") >= 0; });
            expect(results.count()).toBe(2);
            expect(results.get(0)).toBe("index 4");
            expect(results.get(1)).toBe("index 7");
        });
        it("shouldnt retrieve elements where condition is not met", function () {
            var array = new ArrayList(["element 1", "element 2", "element 3", "index 4", "element 5", "element 6", "index 7"]);
            var results = array.where(function (x) { return x.indexOf("some string") >= 0; });
            expect(results.count()).toBe(0);
        });
        it("shouldnt retrieve elements when array is empty", function () {
            var array = new ArrayList();
            var results = array.where(function (x) { return x.indexOf("some string") >= 0; });
            expect(results.count()).toBe(0);
        });
    });
    describe("selecting elements", function () {
        it("should select elements", function () {
            var array = new ArrayList(["1", "2"]);
            var results = array.select(function (x) { return "element " + x; });
            expect(results.count()).toBe(2);
            expect(results.get(0)).toBe("element 1");
            expect(results.get(1)).toBe("element 2");
        });
        it("shouldnt select if array is empty", function () {
            var array = new ArrayList();
            var results = array.select(function (x) { return "element " + x; });
            expect(results.count()).toBe(0);
        });
    });
    describe("first and last elements", function () {
        it("should retrieve the first element or null otherwise", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.firstOrDefault()).toBe("element 1");
            expect(array2.firstOrDefault()).toBeNull();
        });
        it("should retrieve the first element when condition is met or null otherwise", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.firstOrDefault(function (x) { return x.indexOf("element") >= 0; })).toBe("element 1");
            expect(array1.firstOrDefault(function (x) { return x === "other element"; })).toBeNull();
            expect(array2.firstOrDefault(function (x) { return x === "some string"; })).toBeNull();
        });
        it("should retrieve the last element or null otherwise", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.lastOrDefault()).toBe("element 4");
            expect(array2.lastOrDefault()).toBeNull();
        });
        it("should retrieve the last element when condition is met or null otherwise", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.lastOrDefault(function (x) { return x.indexOf("element") >= 0; })).toBe("element 4");
            expect(array1.lastOrDefault(function (x) { return x === "other element"; })).toBeNull();
            expect(array2.lastOrDefault(function (x) { return x === "some string"; })).toBeNull();
        });
        it("should retrieve the first element or fail otherwise", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.first()).toBe("element 1");
            expect(function () { return array2.first(); }).toThrow("The source sequence is empty.");
        });
        it("should retrieve the first element when condition is met or fail otherwise", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.first(function (x) { return x.indexOf("element") >= 0; })).toBe("element 1");
            expect(function () { return array1.first(function (x) { return x === "other element"; }); }).toThrow(firstLastError);
            expect(function () { return array2.first(function (x) { return x === "some string"; }); }).toThrow(firstLastError);
        });
        it("should retrieve the last element or fail otherwise", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.last()).toBe("element 4");
            expect(function () { return array2.last(); }).toThrow(firstLastError);
        });
        it("should retrieve the last element when condition is met or fail otherwise", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.last(function (x) { return x.indexOf("element") >= 0; })).toBe("element 4");
            expect(function () { return array1.last(function (x) { return x === "other element"; }); }).toThrow(firstLastError);
            expect(function () { return array2.last(function (x) { return x === "some string"; }); }).toThrow(firstLastError);
        });
    });
    describe("checking elements", function () {
        it("should check if any", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.any()).toBe(true);
            expect(array2.any()).toBe(false);
        });
        it("should check if any when condition met", function () {
            var array = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            expect(array.any(function (x) { return x === "element 1"; })).toBe(true);
            expect(array.any(function (x) { return x === "element 5"; })).toBe(false);
        });
        it("should check if contains element", function () {
            var array = new ArrayList(["element 1", "element 2", "index 3", "index 4"]);
            expect(array.contains("element 1")).toBe(true);
            expect(array.contains("other")).toBe(false);
        });
    });
    describe("counting elements", function () {
        it("should count elements", function () {
            var array1 = new ArrayList(["element 1", "element 2", "element 3", "element 4"]);
            var array2 = new ArrayList();
            expect(array1.count()).toBe(4);
            expect(array2.count()).toBe(0);
        });
        it("should count elements when condition met", function () {
            var array = new ArrayList(["element 1", "element 2", "index 3", "index 4"]);
            expect(array.count(function (x) { return x.indexOf("element") >= 0; })).toBe(2);
            expect(array.count(function (x) { return x.indexOf("other") >= 0; })).toBe(0);
        });
        it("should sum elements", function () {
            var array1 = new ArrayList([1, 2, 3, 4]);
            var array2 = new ArrayList(["1", "2", "3", "4"]);
            var array3 = new ArrayList();
            expect(array1.sum()).toBe(10);
            expect(array2.sum()).toBe("1234");
            expect(array3.sum()).toBe(null);
        });
        it("should sum inner elements", function () {
            var array = new ArrayList([{ value: 1, name: "1" }, { value: 2, name: "2" }, { value: 3, name: "3" }, { value: 4, name: "4" }]);
            expect(array.sum(function (x) { return x.value; })).toBe(10);
            expect(array.sum(function (x) { return x.name; })).toBe("1234");
            expect(array.sum(function (x) { return x["other"]; })).toBe(null);
        });
    });
    describe("ordering elements", function () {
        it("should order elements ascending", function () {
            var array1 = new ArrayList([3, 1, 4, 2]);
            var array2 = new ArrayList(["element 3", "element 1", "element 4", "element 2"]);
            var ordered1 = array1.orderBy();
            var ordered2 = array2.orderBy();
            expect(ordered1.get(0)).toBe(1);
            expect(ordered1.get(1)).toBe(2);
            expect(ordered1.get(2)).toBe(3);
            expect(ordered1.get(3)).toBe(4);
            expect(ordered2.get(0)).toBe("element 1");
            expect(ordered2.get(1)).toBe("element 2");
            expect(ordered2.get(2)).toBe("element 3");
            expect(ordered2.get(3)).toBe("element 4");
        });
        it("should order by predicate ascending", function () {
            var array = new ArrayList([{ value: 2, name: "3" }, { value: 1, name: "4" }, { value: 3, name: "1" }, { value: 5, name: "2" }]);
            var ordered1 = array.orderBy(function (x) { return x.value; });
            var ordered2 = array.orderBy(function (x) { return x.name; });
            expect(ordered1.get(0).value).toBe(1);
            expect(ordered1.get(1).value).toBe(2);
            expect(ordered1.get(2).value).toBe(3);
            expect(ordered1.get(3).value).toBe(5);
            expect(ordered2.get(0).name).toBe("1");
            expect(ordered2.get(1).name).toBe("2");
            expect(ordered2.get(2).name).toBe("3");
            expect(ordered2.get(3).name).toBe("4");
        });
        it("should order elements descending", function () {
            var array1 = new ArrayList([3, 1, 4, 2]);
            var array2 = new ArrayList(["element 3", "element 1", "element 4", "element 2"]);
            var ordered1 = array1.orderByDesc();
            var ordered2 = array2.orderByDesc();
            expect(ordered1.get(3)).toBe(1);
            expect(ordered1.get(2)).toBe(2);
            expect(ordered1.get(1)).toBe(3);
            expect(ordered1.get(0)).toBe(4);
            expect(ordered2.get(3)).toBe("element 1");
            expect(ordered2.get(2)).toBe("element 2");
            expect(ordered2.get(1)).toBe("element 3");
            expect(ordered2.get(0)).toBe("element 4");
        });
        it("should order by predicate descending", function () {
            var array = new ArrayList([{ value: 2, name: "3" }, { value: 1, name: "4" }, { value: 3, name: "1" }, { value: 5, name: "2" }]);
            var ordered1 = array.orderByDesc(function (x) { return x.value; });
            var ordered2 = array.orderByDesc(function (x) { return x.name; });
            expect(ordered1.get(3).value).toBe(1);
            expect(ordered1.get(2).value).toBe(2);
            expect(ordered1.get(1).value).toBe(3);
            expect(ordered1.get(0).value).toBe(5);
            expect(ordered2.get(3).name).toBe("1");
            expect(ordered2.get(2).name).toBe("2");
            expect(ordered2.get(1).name).toBe("3");
            expect(ordered2.get(0).name).toBe("4");
        });
    });
    describe("removing elements", function () {
        it("should remove element", function () {
            var array = new ArrayList([1, 2, 3, 4]);
            expect(array.remove(1)).toBe(true);
            expect(array.count()).toBe(3);
            expect(array.get(0)).toBe(2);
            expect(array.get(1)).toBe(3);
            expect(array.get(2)).toBe(4);
        });
        it("should return false if tries to remove an unexisting element", function () {
            var array = new ArrayList([1, 2, 3, 4]);
            expect(array.remove(5)).toBe(false);
            expect(array.get(0)).toBe(1);
            expect(array.get(1)).toBe(2);
            expect(array.get(2)).toBe(3);
            expect(array.get(3)).toBe(4);
        });
        it("should remove element at index", function () {
            var array = new ArrayList([1, 2, 3, 4]);
            expect(function () { return array.removeAt(0); }).not.toThrow();
            expect(array.count()).toBe(3);
            expect(array.get(0)).toBe(2);
            expect(array.get(1)).toBe(3);
            expect(array.get(2)).toBe(4);
        });
        it("should fail if tries to remove an element at an unexising index", function () {
            var array = new ArrayList([1, 2, 3, 4]);
            expect(function () { return array.removeAt(5); }).toThrow(indexGreaterError);
            expect(function () { return array.removeAt(-1); }).toThrow(indexLesserError);
            expect(array.get(0)).toBe(1);
            expect(array.get(1)).toBe(2);
            expect(array.get(2)).toBe(3);
            expect(array.get(3)).toBe(4);
        });
        it("should remove all elements", function () {
            var array = new ArrayList([1, 2, 3, 4]);
            expect(array.removeAll()).toBe(4);
            expect(array.count()).toBe(0);
        });
        it("should remove all elements under certain conditions", function () {
            var array = new ArrayList([1, 2, 3, 4]);
            expect(array.removeAll(function (x) { return x > 2; })).toBe(2);
            expect(array.count()).toBe(2);
            expect(array.get(0)).toBe(1);
            expect(array.get(1)).toBe(2);
        });
        it("shouldnt remove any elements if condition is not met", function () {
            var array = new ArrayList([1, 2, 3, 4]);
            expect(array.removeAll(function (x) { return x > 4; })).toBe(0);
            expect(array.count()).toBe(4);
            expect(array.get(0)).toBe(1);
            expect(array.get(1)).toBe(2);
            expect(array.get(2)).toBe(3);
            expect(array.get(3)).toBe(4);
        });
        it("should clear all elements", function () {
            var array = new ArrayList([1, 2, 3, 4]);
            expect(function () { return array.clear(); }).not.toThrow();
            expect(array.count()).toBe(0);
        });
    });
});
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Imports.ts" />
describe("Array", function () {
    var firstLastError = "The source sequence is empty.";
    var indexLesserError = "index is less than 0.";
    var indexGreaterError = "index is equal to or greater than length.";
    describe("operate over elements", function () {
        it("should execute code for each element", function () {
            var counter = 0;
            var array = ["element 1", "element 2", "element 3", "element 4"];
            Array.forEach(array, function (element) {
                expect(element).toBe(array[counter]);
                counter++;
            });
            expect(counter).toBe(array.length);
        });
    });
    describe("filtering elements", function () {
        it("should retrieve elements where condition is met", function () {
            var array = ["element 1", "element 2", "element 3", "index 4", "element 5", "element 6", "index 7"];
            var results = Array.where(array, function (x) { return x.indexOf("index") >= 0; });
            expect(results.length).toBe(2);
            expect(results[0]).toBe("index 4");
            expect(results[1]).toBe("index 7");
        });
        it("shouldnt retrieve elements where condition is not met", function () {
            var array = ["element 1", "element 2", "element 3", "index 4", "element 5", "element 6", "index 7"];
            var results = Array.where(array, function (x) { return x.indexOf("some string") >= 0; });
            expect(results.length).toBe(0);
        });
        it("shouldnt retrieve elements when array is empty", function () {
            var array = [];
            var results = Array.where(array, function (x) { return x.indexOf("some string") >= 0; });
            expect(results.length).toBe(0);
        });
    });
    describe("selecting elements", function () {
        it("should select elements", function () {
            var array = ["1", "2"];
            var results = Array.select(array, function (x) { return "element " + x; });
            expect(results.length).toBe(2);
            expect(results[0]).toBe("element 1");
            expect(results[1]).toBe("element 2");
        });
        it("shouldnt select if array is empty", function () {
            var array = [];
            var results = Array.select(array, function (x) { return "element " + x; });
            expect(results.length).toBe(0);
        });
    });
    describe("first and last elements", function () {
        it("should retrieve the first element or null otherwise", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.firstOrDefault(array1)).toBe("element 1");
            expect(Array.firstOrDefault(array2)).toBeNull();
        });
        it("should retrieve the first element when condition is met or null otherwise", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.firstOrDefault(array1, function (x) { return x.indexOf("element") >= 0; })).toBe("element 1");
            expect(Array.firstOrDefault(array1, function (x) { return x === "other element"; })).toBeNull();
            expect(Array.firstOrDefault(array2, function (x) { return x === "some string"; })).toBeNull();
        });
        it("should retrieve the last element or null otherwise", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.lastOrDefault(array1)).toBe("element 4");
            expect(Array.lastOrDefault(array2)).toBeNull();
        });
        it("should retrieve the last element when condition is met or null otherwise", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.lastOrDefault(array1, function (x) { return x.indexOf("element") >= 0; })).toBe("element 4");
            expect(Array.lastOrDefault(array1, function (x) { return x === "other element"; })).toBeNull();
            expect(Array.lastOrDefault(array2, function (x) { return x === "some string"; })).toBeNull();
        });
        it("should retrieve the first element or fail otherwise", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.first(array1)).toBe("element 1");
            expect(function () { return Array.first(array2); }).toThrow("The source sequence is empty.");
        });
        it("should retrieve the first element when condition is met or fail otherwise", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.first(array1, function (x) { return x.indexOf("element") >= 0; })).toBe("element 1");
            expect(function () { return Array.first(array1, function (x) { return x === "other element"; }); }).toThrow(firstLastError);
            expect(function () { return Array.first(array2, function (x) { return x === "some string"; }); }).toThrow(firstLastError);
        });
        it("should retrieve the last element or fail otherwise", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.last(array1)).toBe("element 4");
            expect(function () { return Array.last(array2); }).toThrow(firstLastError);
        });
        it("should retrieve the last element when condition is met or fail otherwise", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.last(array1, function (x) { return x.indexOf("element") >= 0; })).toBe("element 4");
            expect(function () { return Array.last(array1, function (x) { return x === "other element"; }); }).toThrow(firstLastError);
            expect(function () { return Array.last(array2, function (x) { return x === "some string"; }); }).toThrow(firstLastError);
        });
    });
    describe("checking elements", function () {
        it("should check if any", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.any(array1)).toBe(true);
            expect(Array.any(array2)).toBe(false);
        });
        it("should check if any when condition met", function () {
            var array = ["element 1", "element 2", "element 3", "element 4"];
            expect(Array.any(array, function (x) { return x === "element 1"; })).toBe(true);
            expect(Array.any(array, function (x) { return x === "element 5"; })).toBe(false);
        });
        it("should check if contains element", function () {
            var array = ["element 1", "element 2", "index 3", "index 4"];
            expect(Array.contains(array, "element 1")).toBe(true);
            expect(Array.contains(array, "other")).toBe(false);
        });
    });
    describe("counting elements", function () {
        it("should count elements", function () {
            var array1 = ["element 1", "element 2", "element 3", "element 4"];
            var array2 = [];
            expect(Array.count(array1)).toBe(4);
            expect(Array.count(array2)).toBe(0);
        });
        it("should count elements when condition met", function () {
            var array = ["element 1", "element 2", "index 3", "index 4"];
            expect(Array.count(array, function (x) { return x.indexOf("element") >= 0; })).toBe(2);
            expect(Array.count(array, function (x) { return x.indexOf("other") >= 0; })).toBe(0);
        });
        it("should sum elements", function () {
            var array1 = [1, 2, 3, 4];
            var array2 = ["1", "2", "3", "4"];
            var array3 = [];
            expect(Array.sum(array1)).toBe(10);
            expect(Array.sum(array2)).toBe("1234");
            expect(Array.sum(array3)).toBe(null);
        });
        it("should sum inner elements", function () {
            var array1 = [{ value: 1, name: "1" }, { value: 2, name: "2" }, { value: 3, name: "3" }, { value: 4, name: "4" }];
            expect(Array.sum(array1, function (x) { return x.value; })).toBe(10);
            expect(Array.sum(array1, function (x) { return x.name; })).toBe("1234");
            expect(Array.sum(array1, function (x) { return x["other"]; })).toBe(null);
        });
    });
    describe("ordering elements", function () {
        it("should order elements ascending", function () {
            var array1 = [3, 1, 4, 2];
            var array2 = ["element 3", "element 1", "element 4", "element 2"];
            var ordered1 = Array.orderBy(array1);
            var ordered2 = Array.orderBy(array2);
            expect(ordered1[0]).toBe(1);
            expect(ordered1[1]).toBe(2);
            expect(ordered1[2]).toBe(3);
            expect(ordered1[3]).toBe(4);
            expect(ordered2[0]).toBe("element 1");
            expect(ordered2[1]).toBe("element 2");
            expect(ordered2[2]).toBe("element 3");
            expect(ordered2[3]).toBe("element 4");
        });
        it("should order by predicate ascending", function () {
            var array = [{ value: 2, name: "3" }, { value: 1, name: "4" }, { value: 3, name: "1" }, { value: 5, name: "2" }];
            var ordered1 = Array.orderBy(array, function (x) { return x.value; });
            var ordered2 = Array.orderBy(array, function (x) { return x.name; });
            expect(ordered1[0].value).toBe(1);
            expect(ordered1[1].value).toBe(2);
            expect(ordered1[2].value).toBe(3);
            expect(ordered1[3].value).toBe(5);
            expect(ordered2[0].name).toBe("1");
            expect(ordered2[1].name).toBe("2");
            expect(ordered2[2].name).toBe("3");
            expect(ordered2[3].name).toBe("4");
        });
        it("should order elements descending", function () {
            var array1 = [3, 1, 4, 2];
            var array2 = ["element 3", "element 1", "element 4", "element 2"];
            var ordered1 = Array.orderByDesc(array1);
            var ordered2 = Array.orderByDesc(array2);
            expect(ordered1[3]).toBe(1);
            expect(ordered1[2]).toBe(2);
            expect(ordered1[1]).toBe(3);
            expect(ordered1[0]).toBe(4);
            expect(ordered2[3]).toBe("element 1");
            expect(ordered2[2]).toBe("element 2");
            expect(ordered2[1]).toBe("element 3");
            expect(ordered2[0]).toBe("element 4");
        });
        it("should order by predicate descending", function () {
            var array = [{ value: 2, name: "3" }, { value: 1, name: "4" }, { value: 3, name: "1" }, { value: 5, name: "2" }];
            var ordered1 = Array.orderByDesc(array, function (x) { return x.value; });
            var ordered2 = Array.orderByDesc(array, function (x) { return x.name; });
            expect(ordered1[3].value).toBe(1);
            expect(ordered1[2].value).toBe(2);
            expect(ordered1[1].value).toBe(3);
            expect(ordered1[0].value).toBe(5);
            expect(ordered2[3].name).toBe("1");
            expect(ordered2[2].name).toBe("2");
            expect(ordered2[1].name).toBe("3");
            expect(ordered2[0].name).toBe("4");
        });
    });
    describe("removing elements", function () {
        it("should remove element", function () {
            var array = [1, 2, 3, 4];
            expect(Array.remove(array, 1)).toBe(true);
            expect(array.length).toBe(3);
            expect(array[0]).toBe(2);
            expect(array[1]).toBe(3);
            expect(array[2]).toBe(4);
        });
        it("should return false if tries to remove an unexisting element", function () {
            var array = [1, 2, 3, 4];
            expect(Array.remove(array, 5)).toBe(false);
            expect(array[0]).toBe(1);
            expect(array[1]).toBe(2);
            expect(array[2]).toBe(3);
            expect(array[3]).toBe(4);
        });
        it("should remove element at index", function () {
            var array = [1, 2, 3, 4];
            expect(function () { return Array.removeAt(array, 0); }).not.toThrow();
            expect(array.length).toBe(3);
            expect(array[0]).toBe(2);
            expect(array[1]).toBe(3);
            expect(array[2]).toBe(4);
        });
        it("should fail if tries to remove an element at an unexising index", function () {
            var array = [1, 2, 3, 4];
            expect(function () { return Array.removeAt(array, 5); }).toThrow(indexGreaterError);
            expect(function () { return Array.removeAt(array, -1); }).toThrow(indexLesserError);
            expect(array[0]).toBe(1);
            expect(array[1]).toBe(2);
            expect(array[2]).toBe(3);
            expect(array[3]).toBe(4);
        });
        it("should remove all elements", function () {
            var array = [1, 2, 3, 4];
            expect(Array.removeAll(array)).toBe(4);
            expect(array.length).toBe(0);
        });
        it("should remove all elements under certain conditions", function () {
            var array = [1, 2, 3, 4];
            expect(Array.removeAll(array, function (x) { return x > 2; })).toBe(2);
            expect(array.length).toBe(2);
            expect(array[0]).toBe(1);
            expect(array[1]).toBe(2);
        });
        it("shouldnt remove any elements if condition is not met", function () {
            var array = [1, 2, 3, 4];
            expect(Array.removeAll(array, function (x) { return x > 4; })).toBe(0);
            expect(array.length).toBe(4);
            expect(array[0]).toBe(1);
            expect(array[1]).toBe(2);
            expect(array[2]).toBe(3);
            expect(array[3]).toBe(4);
        });
    });
});
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Imports.ts"/>
describe("Date", function () {
    var wrongDateError = "String is not recognized as a valid ISO 8601 date.";
    it("should be able to parse iso string with positive timezone", function () { return expect(function () { return Date.fromIso8601("2012-10-10T12:00:00+300"); }).not.toThrow(); });
    it("should be able to parse iso string with negative timezone", function () { return expect(function () { return Date.fromIso8601("2012-10-10T12:00:00-300"); }).not.toThrow(); });
    it("should be able to parse iso string without timezone", function () { return expect(function () { return Date.fromIso8601("2012-10-10T12:00:00"); }).not.toThrow(); });
    it("should be able to parse iso string with one month char", function () { return expect(function () { return Date.fromIso8601("2012-1-10"); }).not.toThrow(); });
    it("should be able to parse iso string with one day char", function () { return expect(function () { return Date.fromIso8601("2012-01-1"); }).not.toThrow(); });
    it("should be able to parse iso string with two year chars", function () { return expect(function () { return Date.fromIso8601("12-1-10"); }).not.toThrow(); });
    it("shouldnt parse wrong formatted strings", function () { return expect(function () { return Date.fromIso8601("hello world"); }).toThrow(wrongDateError); });
});
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Imports.ts" />
describe("Dictionary", function () {
    var firstLastError = "The source sequence is empty.";
    var wrongKeyError = "The given key was not present in the dictionary.";
    var wrongValueError = "The given value was not present in the dictionary.";
    var valueNotArrayError = "value is must be an array or an IEnumerable class.";
    var keyPresentError = "An element with the same key already exists in the Dictionary<TKey, TValue>.";
    var predicateError = "Predicate can not be null.";
    var itemNullError = "Item can not be null";
    var keyNullError = "Key can not be null.";
    describe("instantiation", function () {
        it("should be able to create an empty dictionary", function () {
            var dictionary = null;
            expect(function () { return dictionary = new Dictionary(); }).not.toThrow();
            expect(dictionary).not.toBeNull();
            expect(dictionary.count()).toBe(0);
        });
        it("should be able to create an filled dictionary", function () {
            var dictionary = null;
            expect(function () { return dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }]); }).not.toThrow();
            expect(dictionary).not.toBeNull();
            expect(dictionary.count()).toBe(2);
            expect(dictionary.get("a")).toBe(1);
            expect(dictionary.get("b")).toBe(2);
        });
        it("should fail when creating the dictionary with duplicate keys", function () {
            expect(function () { return new Dictionary([{ key: "a", value: 1 }, { key: "a", value: 2 }]); }).toThrow(keyPresentError);
        });
    });
    describe("operate over elements", function () {
        it("should get elements by key", function () {
            var dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }]);
            expect(dictionary.get("a")).toBe(1);
            expect(dictionary.get("b")).toBe(2);
        });
        it("should fail if when key not present", function () {
            var dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }]);
            expect(function () { return dictionary.get("c"); }).toThrow(wrongKeyError);
        });
        it("should pop last element", function () {
            var dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }, { key: "c", value: 3 }]);
            var popped = dictionary.pop();
            expect(popped.value).toBe(3);
            expect(dictionary.count()).toBe(2);
            expect(dictionary.get("a")).toBe(1);
            expect(dictionary.get("b")).toBe(2);
        });
        it("should retrieve key of element by value", function () {
            var dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }, { key: "c", value: 3 }]);
            expect(dictionary.keyOf(1)).toBe("a");
            expect(dictionary.keyOf(2)).toBe("b");
            expect(dictionary.keyOf(3)).toBe("c");
        });
        it("should fail trying to retrieve a key of a value that is not present", function () {
            var dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }, { key: "c", value: 3 }]);
            expect(function () { return dictionary.keyOf(-1); }).toThrow(wrongValueError);
        });
        it("should add elements", function () {
            var dictionary = new Dictionary();
            dictionary.add("a", 1);
            dictionary.add("b", 2);
            expect(dictionary.count()).toBe(2);
            expect(dictionary.get("a")).toBe(1);
            expect(dictionary.get("b")).toBe(2);
        });
        it("should add range of elements", function () {
            var dictionary = new Dictionary();
            dictionary.addRange([{ key: "a", value: 1 }, { key: "b", value: 2 }]);
            expect(dictionary.count()).toBe(2);
            expect(dictionary.get("a")).toBe(1);
            expect(dictionary.get("b")).toBe(2);
        });
        it("should fail when adding duplicate keys", function () {
            var dictionary = new Dictionary();
            expect(function () { return dictionary.addRange([{ key: "a", value: 1 }, { key: "a", value: 2 }]); }).toThrow(keyPresentError);
        });
        it("should fail when adding other than key-value pairs.", function () {
            var dictionary = new Dictionary();
            expect(function () { return dictionary.addRange(new Object()); }).toThrow(valueNotArrayError);
        });
        it("should fail when adding null items.", function () {
            var dictionary = new Dictionary();
            expect(function () { return dictionary.addRange([{ key: "element 1", value: 1 }, null]); }).toThrow(itemNullError);
        });
        it("should fail when adding one item with a null key.", function () {
            var dictionary = new Dictionary();
            expect(function () { return dictionary.add(null, 1); }).toThrow(keyNullError);
        });
        it("should execute code for each element", function () {
            var counter = 0;
            var dictionary = new Dictionary([{ key: "a", value: 1 }, { key: "b", value: 2 }, { key: "c", value: 3 }]);
            dictionary.forEach(function (element) {
                expect(element.key).not.toBeNull();
                expect(element.value).not.toBeNull();
                expect(dictionary.get(element.key)).toBe(element.value);
                expect(dictionary.keyOf(element.value)).toBe(element.key);
                counter++;
            });
            expect(counter).toBe(dictionary.count());
        });
    });
    describe("filtering elements", function () {
        it("should retrieve elements where condition for key is met", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var results = dictionary.where(function (x) { return x.key.indexOf("index") >= 0; });
            expect(results.count()).toBe(2);
            expect(results.get("index 2")).toBe(2);
            expect(results.get("index 4")).toBe(4);
        });
        it("should retrieve elements where condition for value is met", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var results = dictionary.where(function (x) { return x.value >= 4; });
            expect(results.count()).toBe(2);
            expect(results.get("index 4")).toBe(4);
            expect(results.get("element 5")).toBe(5);
        });
        it("shouldnt retrieve elements where condition is not met", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var results = dictionary.where(function (x) { return x.value > 10; });
            expect(results.count()).toBe(0);
        });
        it("shouldnt retrieve elements when dictionary is empty", function () {
            var dictionary = new Dictionary();
            var results = dictionary.where(function (x) { return x.value >= 0; });
            expect(results.count()).toBe(0);
        });
    });
    describe("selecting elements", function () {
        it("should select elements", function () {
            var dictionary = new Dictionary([{ key: "key 1", value: 1 }, { key: "key 2", value: 2 }]);
            var results = dictionary.select(function (x) { return "element " + x.value; });
            expect(results.count()).toBe(2);
            expect(results.first()).toBe("element 1");
            expect(results.last()).toBe("element 2");
        });
        it("shouldnt select if dictionary is empty", function () {
            var dictionary = new Dictionary();
            var results = dictionary.select(function (x) { return "element " + x.value; });
            expect(results.count()).toBe(0);
        });
    });
    describe("first and last elements", function () {
        it("should retrieve the first element or null otherwise", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.firstOrDefault().key).toBe("element 1");
            expect(dictionary2.firstOrDefault()).toBeNull();
        });
        it("should retrieve the first element when condition is met or null otherwise", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.firstOrDefault(function (x) { return x.key === "element 3"; }).value).toBe(3);
            expect(dictionary1.firstOrDefault(function (x) { return x.key === "other element"; })).toBeNull();
            expect(dictionary2.firstOrDefault(function (x) { return x.key === "some string"; })).toBeNull();
        });
        it("should retrieve the last element or null otherwise", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.lastOrDefault().key).toBe("element 5");
            expect(dictionary2.lastOrDefault()).toBeNull();
        });
        it("should retrieve the last element when condition is met or null otherwise", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.lastOrDefault(function (x) { return x.key === "element 3"; }).value).toBe(3);
            expect(dictionary1.lastOrDefault(function (x) { return x.key === "other element"; })).toBeNull();
            expect(dictionary2.lastOrDefault(function (x) { return x.key === "some string"; })).toBeNull();
        });
        it("should retrieve the first element or fail otherwise", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.first().key).toBe("element 1");
            expect(function () { return dictionary2.first(); }).toThrow("The source sequence is empty.");
        });
        it("should retrieve the first element when condition is met or fail otherwise", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.first(function (x) { return x.value === 3; }).key).toBe("element 3");
            expect(function () { return dictionary1.first(function (x) { return x.key === "other element"; }); }).toThrow(firstLastError);
            expect(function () { return dictionary2.first(function (x) { return x.key === "some string"; }); }).toThrow(firstLastError);
        });
        it("should retrieve the last element or fail otherwise", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.last().key).toBe("element 5");
            expect(function () { return dictionary2.last(); }).toThrow(firstLastError);
        });
        it("should retrieve the last element when condition is met or fail otherwise", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.last(function (x) { return x.value === 3; }).key).toBe("element 3");
            expect(function () { return dictionary1.last(function (x) { return x.key === "other element"; }); }).toThrow(firstLastError);
            expect(function () { return dictionary2.last(function (x) { return x.key === "some string"; }); }).toThrow(firstLastError);
        });
    });
    describe("checking elements", function () {
        it("should check if any", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.any()).toBe(true);
            expect(dictionary2.any()).toBe(false);
        });
        it("should check if any when condition met", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            expect(dictionary.any(function (x) { return x.key === "element 1"; })).toBe(true);
            expect(dictionary.any(function (x) { return x.key === "element 6"; })).toBe(false);
        });
    });
    describe("counting elements", function () {
        it("should count elements", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            var dictionary2 = new Dictionary();
            expect(dictionary1.count()).toBe(5);
            expect(dictionary2.count()).toBe(0);
        });
        it("should count elements when condition met", function () {
            var dictionary1 = new Dictionary([{ key: "element 1", value: 1 }, { key: "index 2", value: 2 }, { key: "element 3", value: 3 }, { key: "index 4", value: 4 }, { key: "element 5", value: 5 }]);
            expect(dictionary1.count(function (x) { return x.value <= 2; })).toBe(2);
            expect(dictionary1.count(function (x) { return x.value >= 10; })).toBe(0);
        });
        it("should sum elements", function () {
            var dictionary1 = new Dictionary([{ key: "1", value: 1 }, { key: "2", value: 2 }, { key: "3", value: 3 }, { key: "4", value: 4 }]);
            var dictionary2 = new Dictionary();
            expect(function () { return dictionary1.sum(null); }).toThrow(predicateError);
            expect(dictionary1.sum(function (x) { return x.value; })).toBe(10);
            expect(dictionary1.sum(function (x) { return x.key; })).toBe("1234");
            expect(dictionary2.sum(function (x) { return x.value; })).toBe(null);
        });
    });
    describe("ordering elements", function () {
        it("should order by predicate ascending", function () {
            var dictionary = new Dictionary([{ key: "element 3", value: 3 }, { key: "element 4", value: 4 }, { key: "element 2", value: 2 }, { key: "element 1", value: 1 }]);
            expect(function () { return dictionary.orderBy(null); }).toThrow(predicateError);
            var ordered1 = dictionary.orderBy(function (x) { return x.key; }).getInnerArray();
            var ordered2 = dictionary.orderBy(function (x) { return x.value; }).getInnerArray();
            expect(ordered1[0].value).toBe(1);
            expect(ordered1[1].value).toBe(2);
            expect(ordered1[2].value).toBe(3);
            expect(ordered1[3].value).toBe(4);
            expect(ordered2[0].key).toBe("element 1");
            expect(ordered2[1].key).toBe("element 2");
            expect(ordered2[2].key).toBe("element 3");
            expect(ordered2[3].key).toBe("element 4");
        });
        it("should order elements descending", function () {
            var dictionary = new Dictionary([{ key: "element 3", value: 3 }, { key: "element 4", value: 4 }, { key: "element 2", value: 2 }, { key: "element 1", value: 1 }]);
            expect(function () { return dictionary.orderBy(null); }).toThrow(predicateError);
            var ordered1 = dictionary.orderByDesc(function (x) { return x.key; }).getInnerArray();
            var ordered2 = dictionary.orderByDesc(function (x) { return x.value; }).getInnerArray();
            expect(ordered1[3].value).toBe(1);
            expect(ordered1[2].value).toBe(2);
            expect(ordered1[1].value).toBe(3);
            expect(ordered1[0].value).toBe(4);
            expect(ordered2[3].key).toBe("element 1");
            expect(ordered2[2].key).toBe("element 2");
            expect(ordered2[1].key).toBe("element 3");
            expect(ordered2[0].key).toBe("element 4");
        });
    });
    describe("removing elements", function () {
        it("should remove element", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "element 2", value: 2 }, { key: "element 3", value: 3 }, { key: "element 4", value: 4 }]);
            expect(function () { return dictionary.remove("element 2"); }).not.toThrow();
            expect(dictionary.count()).toBe(3);
            expect(dictionary.getInnerArray()[0].value).toBe(1);
            expect(dictionary.getInnerArray()[1].value).toBe(3);
            expect(dictionary.getInnerArray()[2].value).toBe(4);
        });
        it("should fail if tries to remove an unexisting element", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "element 2", value: 2 }, { key: "element 3", value: 3 }, { key: "element 4", value: 4 }]);
            expect(function () { return dictionary.remove("element 5"); }).toThrow(wrongKeyError);
            expect(dictionary.count()).toBe(4);
            expect(dictionary.get("element 1")).toBe(1);
            expect(dictionary.get("element 2")).toBe(2);
            expect(dictionary.get("element 3")).toBe(3);
            expect(dictionary.get("element 4")).toBe(4);
        });
        it("should remove all elements", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "element 2", value: 2 }, { key: "element 3", value: 3 }, { key: "element 4", value: 4 }]);
            expect(dictionary.removeAll()).toBe(4);
            expect(dictionary.count()).toBe(0);
        });
        it("should remove all elements under certain conditions", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "element 2", value: 2 }, { key: "element 3", value: 3 }, { key: "element 4", value: 4 }]);
            expect(dictionary.removeAll(function (x) { return x.value > 2; })).toBe(2);
            expect(dictionary.count()).toBe(2);
            expect(dictionary.get("element 1")).toBe(1);
            expect(dictionary.get("element 2")).toBe(2);
        });
        it("shouldnt remove any elements if condition is not met", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "element 2", value: 2 }, { key: "element 3", value: 3 }, { key: "element 4", value: 4 }]);
            expect(dictionary.removeAll(function (x) { return x.value > 4; })).toBe(0);
            expect(dictionary.count()).toBe(4);
            expect(dictionary.get("element 1")).toBe(1);
            expect(dictionary.get("element 2")).toBe(2);
            expect(dictionary.get("element 3")).toBe(3);
            expect(dictionary.get("element 4")).toBe(4);
        });
        it("should clear all elements", function () {
            var dictionary = new Dictionary([{ key: "element 1", value: 1 }, { key: "element 2", value: 2 }, { key: "element 3", value: 3 }, { key: "element 4", value: 4 }]);
            expect(function () { return dictionary.clear(); }).not.toThrow();
            expect(dictionary.count()).toBe(0);
        });
    });
});
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Imports.ts"/>
describe("File Mime Type", function () {
    it("should get mime type of video", function () { return expect(mimeType.get("video.mp4")).toBe("video/mp4"); });
    it("should get mime type of audio", function () { return expect(mimeType.get("video.mp3")).toBe("audio/mpeg"); });
    it("should get mime type of pdf", function () { return expect(mimeType.get("video.pdf")).toBe("application/pdf"); });
});
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Imports.ts"/>
describe("Function", function () {
    describe("get function name", function () {
        it("should get function name of number", function () { return expect(Number.getFunctionName()).toBe("Number"); });
        it("should get function name of string", function () { return expect(String.getFunctionName()).toBe("String"); });
        it("should get function name of boolean", function () { return expect(Boolean.getFunctionName()).toBe("Boolean"); });
        it("should get function name of date", function () { return expect(Date.getFunctionName()).toBe("Date"); });
        it("should get function name of object", function () { return expect(Object.getFunctionName()).toBe("Object"); });
        it("should get function name of FrameworkModule", function () { return expect(FrameworkModule.getFunctionName()).toBe("FrameworkModule"); });
        it("should get function name of DialogControllerBase", function () { return expect(DialogControllerBase.getFunctionName()).toBe("DialogControllerBase"); });
    });
});
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Imports.ts"/>
describe("Local Storage", function () {
    it("should store and retrieve booleans", function () {
        expect(function () { return LocalStorage.set("boolean", true); }).not.toThrow();
        expect(LocalStorage.get(Boolean, "boolean")).toBe(true);
        expect(LocalStorage.getBoolean("boolean")).toBe(true);
    });
    it("should store and retrieve numbers", function () {
        expect(function () { return LocalStorage.set("number", 1.1); }).not.toThrow();
        expect(LocalStorage.get(Number, "number")).toBe(1.1);
        expect(LocalStorage.getNumber("number")).toBe(1.1);
    });
    it("should store and retrieve integer", function () {
        expect(function () { return LocalStorage.set("int", 1); }).not.toThrow();
        expect(LocalStorage.getInt("int")).toBe(1);
    });
    it("should store and retrieve dates", function () {
        expect(function () { return LocalStorage.set("date", new Date(12, 12, 12)); }).not.toThrow();
        expect(LocalStorage.get(Date, "date").getTime()).toBe(new Date(12, 12, 12).getTime());
        expect(LocalStorage.getDate("date").getTime()).toBe(new Date(12, 12, 12).getTime());
    });
    it("should get all content", function () {
        expect(function () { return LocalStorage.clear(); }).not.toThrow();
        LocalStorage.set("element 1", "value 1");
        LocalStorage.set("element 2", "value 2");
        LocalStorage.set("element 3", "value 3");
        var allContent = LocalStorage.getAllContent();
        expect(allContent).not.toBeNull();
        expect(allContent.count()).toBe(3);
        expect(allContent.get("element 1")).toBe("value 1");
        expect(allContent.get("element 2")).toBe("value 2");
        expect(allContent.get("element 3")).toBe("value 3");
    });
});
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Imports.ts"/>
describe("MD5", function () {
    it("should get MD5 for 'hello world'", function () { return expect(Md5.computeHash("hello world")).toBe("5eb63bbbe01eeed093cb22bb8f5acdc3"); });
    it("should get MD5 for 'password1234admin'", function () { return expect(Md5.computeHash("password1234admin")).toBe("d43a469e1e7440e49149df5b2b1206fe"); });
});
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Imports.ts"/>
describe("Number", function () {
    describe("is number", function () {
        it("should be true if number", function () { return expect(Number.isNumber(1)).toBe(true); });
        it("should be false if NaN", function () { return expect(Number.isNumber(NaN)).toBe(false); });
        it("should be false if Infinite", function () { return expect(Number.isNumber(Infinity)).toBe(false); });
        it("should be false if string", function () { return expect(Number.isNumber("hello")).toBe(false); });
        it("should be false if boolean", function () { return expect(Number.isNumber(true)).toBe(false); });
        it("should be false if date", function () { return expect(Number.isNumber(new Date(12, 12, 12))).toBe(false); });
        it("should be false if null", function () { return expect(Number.isNumber(null)).toBe(false); });
        it("should be false if array", function () { return expect(Number.isNumber([1, 2, 3])).toBe(false); });
        it("should be false if object", function () { return expect(Number.isNumber({})).toBe(false); });
    });
});
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Imports.ts"/>
describe("Object", function () {
    var objectNullError = "Object can not be null.";
    describe("get type name", function () {
        it("should get type of number", function () { return expect(Object.getTypeName(3)).toBe("Number"); });
        it("should get type of Number", function () { return expect(Object.getTypeName(new Number(3))).toBe("Number"); });
        it("should get type of string", function () { return expect(Object.getTypeName("hello")).toBe("String"); });
        it("should get type of String", function () { return expect(Object.getTypeName(new String("hello"))).toBe("String"); });
        it("should get type of boolean", function () { return expect(Object.getTypeName(false)).toBe("Boolean"); });
        it("should get type of Boolean", function () { return expect(Object.getTypeName(new Boolean(false))).toBe("Boolean"); });
        it("should get type of array", function () { return expect(Object.getTypeName([])).toBe("Array"); });
        it("should get type of date", function () { return expect(Object.getTypeName(new Date())).toBe("Date"); });
        it("should get type of custom object", function () { return expect(Object.getTypeName({})).toBe("Object"); });
        it("should get type of custom class", function () { return expect(Object.getTypeName(Guid.new())).toBe("Guid"); });
        it("should get type of null", function () { return expect(function () { return Object.getTypeName(null); }).toThrow(objectNullError); });
    });
    describe("object is null", function () {
        it("should be true if null", function () { return expect(Object.isNull(null)).toBe(true); });
        it("should be true if undefined", function () { return expect(Object.isNull(undefined)).toBe(true); });
        it("should be false if instance", function () { return expect(Object.isNull({})).toBe(false); });
        it("should be false if number", function () { return expect(Object.isNull(0)).toBe(false); });
        it("should be false if boolean", function () { return expect(Object.isNull(false)).toBe(false); });
        it("should be false if date", function () { return expect(Object.isNull(new Date())).toBe(false); });
        it("should be false if array", function () { return expect(Object.isNull([])).toBe(false); });
    });
    describe("object is equal", function () {
        it("should be true for two nulls", function () { return expect(Object.isEqualTo(null, null)).toBe(true); });
        it("should be true for two undefined", function () { return expect(Object.isEqualTo(undefined, undefined)).toBe(true); });
        it("should be true for null and undefined", function () { return expect(Object.isEqualTo(null, undefined)).toBe(true); });
        it("should be false for null and any not null", function () { return expect(Object.isEqualTo(null, 1)).toBe(false); });
        it("should be false for undefined and any not null", function () { return expect(Object.isEqualTo(undefined, 1)).toBe(false); });
        it("should be true for two equal numbers", function () { return expect(Object.isEqualTo(1, 1)).toBe(true); });
        it("should be false for two different numbers", function () { return expect(Object.isEqualTo(1, 2)).toBe(false); });
        it("should be false for a number and a bool", function () { return expect(Object.isEqualTo(1, true)).toBe(false); });
        it("should be false for a number and a string", function () { return expect(Object.isEqualTo(1, "1")).toBe(false); });
        it("should be true for two equal strings", function () { return expect(Object.isEqualTo("hello", "hello")).toBe(true); });
        it("should be false for two different strings", function () { return expect(Object.isEqualTo("hello", "world")).toBe(false); });
        it("should be false for a string and a bool", function () { return expect(Object.isEqualTo("true", true)).toBe(false); });
        it("should be true for two equal booleans", function () { return expect(Object.isEqualTo(true, true)).toBe(true); });
        it("should be false for two different booleans", function () { return expect(Object.isEqualTo(true, false)).toBe(false); });
        it("should be true for two equal dates", function () { return expect(Object.isEqualTo(new Date(2012, 12, 12, 12, 12, 12), new Date(2012, 12, 12, 12, 12, 12))).toBe(true); });
        it("should be false for two different dates", function () { return expect(Object.isEqualTo(new Date(2014, 12, 12), new Date(2012, 12, 12))).toBe(false); });
        it("should be true for two equal objects", function () { return expect(Object.isEqualTo({ number: 1, text: "hello", bool: true, date: new Date(2012, 12, 12, 12, 12, 12) }, { number: 1, text: "hello", bool: true, date: new Date(2012, 12, 12, 12, 12, 12) })).toBe(true); });
        it("should be false for two equal objects with different numbers", function () { return expect(Object.isEqualTo({ number: 1, text: "hello", bool: true, date: new Date(2012, 12, 12, 12, 12, 12) }, { number: 2, text: "hello", bool: true, date: new Date(2012, 12, 12, 12, 12, 12) })).toBe(false); });
        it("should be false for two equal objects with different strings", function () { return expect(Object.isEqualTo({ number: 1, text: "hello", bool: true, date: new Date(2012, 12, 12, 12, 12, 12) }, { number: 1, text: "world", bool: true, date: new Date(2012, 12, 12, 12, 12, 12) })).toBe(false); });
        it("should be false for two equal objects with different booleans", function () { return expect(Object.isEqualTo({ number: 1, text: "hello", bool: true, date: new Date(2012, 12, 12, 12, 12, 12) }, { number: 1, text: "hello", bool: false, date: new Date(2012, 12, 12, 12, 12, 12) })).toBe(false); });
        it("should be false for two equal objects with different dates", function () { return expect(Object.isEqualTo({ number: 1, text: "hello", bool: true, date: new Date(2012, 12, 12, 12, 12, 12) }, { number: 1, text: "hello", bool: true, date: new Date(2014, 12, 12, 12, 12, 12) })).toBe(false); });
        it("should be true for two equal arrays", function () { return expect(Object.isEqualTo([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toBe(true); });
        it("should be false for two equal arrays with different values", function () { return expect(Object.isEqualTo([1, 2, 3, 4, 5], [1, 2, 3, 4, 4])).toBe(false); });
        it("should be false for two equal arrays with different length", function () { return expect(Object.isEqualTo([1, 2, 3, 4, 5], [1, 2, 3, 4])).toBe(false); });
        it("should be true for two equal complex objects", function () { return expect(Object.isEqualTo({ name: "object", childs: [{ name: "child1" }, { name: "child2" }], parent: { name: "parent" } }, { name: "object", childs: [{ name: "child1" }, { name: "child2" }], parent: { name: "parent" } })).toBe(true); });
        it("should be false for two equal complex objects whith different values", function () { return expect(Object.isEqualTo({ name: "object", childs: [{ name: "child1" }, { name: "child2" }], parent: { name: "parent 1" } }, { name: "object", childs: [{ name: "child1" }, { name: "child2" }], parent: { name: "parent 2" } })).toBe(false); });
        it("should be false for two equal complex objects whith different child values", function () { return expect(Object.isEqualTo({ name: "object", childs: [{ name: "child1" }, { name: "child2" }], parent: { name: "parent" } }, { name: "object", childs: [{ name: "child1" }, { name: "child3" }], parent: { name: "parent" } })).toBe(false); });
        it("should be false for two equal complex objects whith different childs", function () { return expect(Object.isEqualTo({ name: "object", childs: [{ name: "child1" }, { name: "child2" }], parent: { name: "parent" } }, { name: "object", childs: [{ name: "child1" }, { name: "child2" }, { name: "child3" }], parent: { name: "parent" } })).toBe(false); });
        it("should ignore properties", function () { return expect(Object.isEqualTo({ name: "object", childs: [{ name: "child1" }, { name: "child2" }], parent: { name: "parent" } }, { name: "object", childs: [{ name: "child1" }, { name: "child2" }, { name: "child3" }], parent: { name: "parent" } }, ["childs"])).toBe(true); });
        it("should ignore child properties", function () { return expect(Object.isEqualTo({ name: "object", childs: [{ name: "child1" }, { name: "child2", id: 1 }], parent: { name: "parent" } }, { name: "object", childs: [{ name: "child1" }, { name: "child2", id: 2 }], parent: { name: "parent" } }, ["id"])).toBe(true); });
    });
    describe("clone object", function () {
        it("should clone numbers", function () { return expect(Object.clone(1)).toBe(1); });
        it("should clone strings", function () { return expect(Object.clone("hello")).toBe("hello"); });
        it("should clone booleans", function () { return expect(Object.clone(true)).toBe(true); });
        it("should clone numbers", function () {
            var date1 = new Date(12, 12, 12);
            var date2 = Object.clone(date1);
            expect(date1 == date2).toBe(false);
            expect(date1.getTime() === date2.getTime()).toBe(true);
        });
        it("should clone simple objects", function () {
            var object1 = { number: 1, text: "hello", bool: true, date: new Date(12, 12, 12) };
            var object2 = Object.clone(object1);
            expect(Object.isEqualTo(object1, object2)).toBe(true);
        });
        it("should clone arrays", function () {
            var object1 = [1, 2, 3, 4];
            var object2 = Object.clone(object1);
            expect(Object.isEqualTo(object1, object2)).toBe(true);
        });
        it("should clone complex objects", function () {
            var object1 = { name: "object", childs: [{ name: "child1" }, { name: "child2" }], parent: { name: "parent" } };
            var object2 = Object.clone(object1);
            expect(Object.isEqualTo(object1, object2)).toBe(true);
        });
    });
});
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Imports.ts"/>
describe("String", function () {
    var formatNullError = "Format string can not be null.";
    describe("is string", function () {
        it("should be true if string literal", function () { return expect(String.isString("hello world")).toBe(true); });
        it("should be false if number", function () { return expect(String.isString(45)).toBe(false); });
        it("should be false if number array", function () { return expect(String.isString([])).toBe(false); });
        it("should be false if number boolean", function () { return expect(String.isString(true)).toBe(false); });
        it("should be false if number date", function () { return expect(String.isString(new Date())).toBe(false); });
    });
    describe("is null or empty", function () {
        it("should be true if empty", function () { return expect(String.isNullOrEmpty("")).toBe(true); });
        it("should be true if null", function () { return expect(String.isNullOrEmpty(null)).toBe(true); });
        it("should be true if undefined", function () { return expect(String.isNullOrEmpty(undefined)).toBe(true); });
        it("should be false if string isn't null nor empty", function () { return expect(String.isNullOrEmpty("hello world")).toBe(false); });
    });
    describe("is null or white space", function () {
        it("should be true if white spaces", function () { return expect(String.isNullOrWhiteSpace("    ")).toBe(true); });
        it("should be true if empty", function () { return expect(String.isNullOrWhiteSpace("")).toBe(true); });
        it("should be true if null", function () { return expect(String.isNullOrWhiteSpace(null)).toBe(true); });
        it("should be true if undefined", function () { return expect(String.isNullOrWhiteSpace(undefined)).toBe(true); });
        it("should be false if string isn't null nor empty", function () { return expect(String.isNullOrWhiteSpace("hello world")).toBe(false); });
    });
    describe("format string", function () {
        it("should format strings", function () { return expect(String.format("{0} {1}", "hello", "world")).toBe("hello world"); });
        it("should format numbers", function () { return expect(String.format("Number: {0}", 10.3)).toBe("Number: 10.3"); });
        it("should format booleans", function () { return expect(String.format("Boolean: {0}", true)).toBe("Boolean: true"); });
        it("should format arrays", function () { return expect(String.format("Array: {0}", [1, 2, 3])).toBe("Array: 1,2,3"); });
        it("should format nulls", function () { return expect(String.format("Null: {0}", null)).toBe("Null: null"); });
        it("should format undefined", function () { return expect(String.format("Null: {0}", undefined)).toBe("Null: undefined"); });
        it("should fail without format string", function () { return expect(function () { return String.format(null, "hello"); }).toThrow(formatNullError); });
    });
    describe("format array", function () {
        it("should format strings", function () { return expect(String.formatArray("{0} {1}", ["hello", "world"])).toBe("hello world"); });
        it("should format numbers", function () { return expect(String.formatArray("Number: {0}", [10.3])).toBe("Number: 10.3"); });
        it("should format booleans", function () { return expect(String.formatArray("Boolean: {0}", [true])).toBe("Boolean: true"); });
        it("should format arrays", function () { return expect(String.formatArray("Array: {0}", [[1, 2, 3]])).toBe("Array: 1,2,3"); });
        it("should format nulls", function () { return expect(String.formatArray("Null: {0}", [null])).toBe("Null: null"); });
        it("should format undefined", function () { return expect(String.formatArray("Null: {0}", [undefined])).toBe("Null: undefined"); });
        it("should fail without format string", function () { return expect(function () { return String.formatArray(null, ["hello"]); }).toThrow(formatNullError); });
    });
});
/*!
 * MiracleDevs.Angular v1.0.0
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */
///<reference path="../Imports.ts" />
///<reference path="TestServices.ts"/>
describe("AlertService", function () {
    var injector;
    var alertService;
    var logger = new TestLoggingService();
    beforeEach(function () {
        // create a new framework module with all the configuration.
        angular.mock.module(FrameworkModule.instance.getModuleName());
        // inject a dummy logging service to prevent undesired logging.
        angular.mock.module(function ($provide) {
            $provide.value(FrameworkServices.loggingService, logger);
        });
    });
    // prepare base services and classes.
    beforeEach(inject(function ($injector) {
        injector = $injector;
        alertService = injector.get(FrameworkServices.alertService);
    }));
    describe("creating the service", function () {
        it("should initialize correctly", function () {
            expect(alertService).toBeDefined();
        });
        it("alert collection shouldn't be null", function () {
            expect(alertService.getAlerts()).not.toBeNull();
            expect(alertService.getAlerts().getInnerArray()).not.toBeNull();
        });
        it("alert collection should be empty", function () {
            expect(alertService.getAlerts().count()).toBe(0);
        });
    });
    describe("working with messages", function () {
        it("should add a message", function () {
            alertService.addMessage("testing message");
            expect(alertService.getAlerts().count()).toBe(1);
            expect(logger.messageWritten).toBe(1);
        });
        it("should remove a message by index", function () {
            alertService.addMessage("testing message");
            alertService.remove(0);
            expect(alertService.getAlerts().count()).toBe(0);
        });
        it("should remove a message by alert", function () {
            alertService.addMessage("testing message");
            var alert = alertService.get(0);
            alertService.remove(alert);
            expect(alertService.getAlerts().count()).toBe(0);
        });
        it("should remove several messages", function () {
            alertService.addMessage("testing message 1");
            alertService.addMessage("testing message 2");
            alertService.addMessage("testing message 3");
            alertService.addMessage("testing message 4");
            var alert1 = alertService.get(0);
            var alert2 = alertService.get(1);
            var alert3 = alertService.get(2);
            var alert4 = alertService.get(3);
            alertService.remove(alert1);
            alertService.remove(alert2);
            alertService.remove(alert3);
            alertService.remove(alert4);
            expect(alertService.getAlerts().count()).toBe(0);
        });
        it("should get a message", function () {
            alertService.addMessage("testing message");
            var alert = alertService.get(0);
            alertService.remove(0);
            expect(alert.type).toBe(AlertType.Message);
            expect(alert.message).toBe("testing message");
        });
    });
    describe("working with warnings", function () {
        it("should add a warning", function () {
            alertService.addWarning("testing warning");
            expect(alertService.getAlerts().count()).toBe(1);
            expect(logger.warningWritten).toBe(1);
        });
        it("should remove a warning by index", function () {
            alertService.addWarning("testing warning");
            alertService.remove(0);
            expect(alertService.getAlerts().count()).toBe(0);
        });
        it("should remove a warning by alert", function () {
            alertService.addWarning("testing warning");
            var alert = alertService.get(0);
            alertService.remove(alert);
            expect(alertService.getAlerts().count()).toBe(0);
        });
        it("should get a warning", function () {
            alertService.addWarning("testing warning");
            var alert = alertService.get(0);
            alertService.remove(0);
            expect(alert.type).toBe(AlertType.Warning);
            expect(alert.message).toBe("testing warning");
        });
    });
    describe("working with errors", function () {
        it("should add an error", function () {
            alertService.addError("testing error");
            expect(alertService.getAlerts().count()).toBe(1);
            expect(logger.errorWritten).toBe(1);
        });
        it("should remove a error by index", function () {
            alertService.addError("testing error");
            alertService.remove(0);
            expect(alertService.getAlerts().count()).toBe(0);
        });
        it("should remove a error by alert", function () {
            alertService.addError("testing error");
            var alert = alertService.get(0);
            alertService.remove(alert);
            expect(alertService.getAlerts().count()).toBe(0);
        });
        it("should get an error", function () {
            alertService.addError("testing error");
            var alert = alertService.get(0);
            alertService.remove(0);
            expect(alert.type).toBe(AlertType.Error);
            expect(alert.message).toBe("testing error");
        });
    });
});
