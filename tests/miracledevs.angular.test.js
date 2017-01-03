///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/angularjs/angular.d.ts" />
///<reference path="../typings/angularjs/angular-mocks.d.ts" />
///<reference path="../typings/miracledevs.angular/miracledevs.angular.d.ts" />
var FrameworkServices = MiracleDevs.Angular.Services.FrameworkServices;
var FrameworkModule = MiracleDevs.Angular.FrameworkModule;
describe("AlertService", function () {
    var injector;
    var alertService;
    beforeEach(angular.mock.module("miracledevs-framework"));
    beforeEach(function () {
        inject(function (_$injector_) {
            injector = _$injector_;
            alertService = injector.get(FrameworkServices.alertService);
        });
    });
    it("001 - should be empty", function () {
        expect(alertService.getAlerts().count()).toBe(0);
    });
    /*afterEach(() =>
    {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("should initialize correctly", () =>
    {
        expect(articleService).toBeDefined();
    });

    it("should load articles", () =>
    {
        $httpBackend.expectGET("articles.json").respond([
            { "id": "1", "name": "Pizza Vegetaria", "price": 5 },
            { "id": "2", "name": "Pizza Salami", "price": 5.5 },
            { "id": "3", "name": "Pizza Thunfisch", "price": 6 },
            { "id": "4", "name": "Aktueller Flyer", "price": 0 }
        ]);

        var articles = articleService.query(function ()
        {
            expect(articles).toBeDefined();
        });
        $httpBackend.flush();
    });*/
});
