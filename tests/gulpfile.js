//////////////////////////////////////////////////////
// Required Modules
//////////////////////////////////////////////////////
var gulp = require("gulp");
var typeScript = require("gulp-typescript");
var karma = require("gulp-karma-runner");
var util = require("gulp-util");
var argv = require("yargs").argv;

var bowerFolder = "bower_components/";
var nodeFolder = "node_modules/";
var fixturesFolder = "fixtures/";
var scriptsFolder = "scripts/";
var allTypescriptFiles = "**/*.ts";
var allFiles = "**/*.*";
var testFile = "miracledevs.angular.test.js";

var sourceTypingsFolder = "../src/typings/";
var testTypingFolder = "typings/";
var frameworkTypingFile = "../src/scripts/miracledevs.angular.d.ts";
var sourceJavascriptFile = "../src/scripts/miracledevs.angular.js";

var copyFilesTask = "copy-files";
var compileTask = "compile-test";
var watchCodeTask = "watch-code";
var watchScriptTask = "watch-scripts";
var serverTask = "server-test";
var singleRunServerTask = "single-server-test";
var runTestTask = "run-test";
var testTask = "test";
var defaultTask = "default";

var testConfig = "karma.conf.js";
var testDependencies = [
            bowerFolder + "jquery/dist/jquery.js",
            bowerFolder + "angular/angular.js",
            bowerFolder + "angular-animate/angular-animate.js",
            bowerFolder + "angular-sanitize/angular-sanitize.js",
            bowerFolder + "angular-ui-router/release/angular-ui-router.js",
            bowerFolder + "angular-translate/angular-translate.js",
            bowerFolder + "angular-translate-loader-url/angular-translate-loader-url.js",
            bowerFolder + "angular-translate-loader-static-files/angular-translate-loader-static-files.js",
            bowerFolder + "tooltipster/dist/js/tooltipster.bundle.js",
            bowerFolder + "moment/min/moment.min.js",
            bowerFolder + "eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js",
            bowerFolder + "ng-pattern-restrict/src/ng-pattern-restrict.min.js",
            bowerFolder + "angular-ui-select/dist/select.js",
            nodeFolder + "angular-mocks/angular-mocks.js",
            scriptsFolder + "miracledevs.angular.js",
            scriptsFolder + "buildinfo.release.js",
            scriptsFolder + "miracledevs.angular.test.js"];



gulp.task(copyFilesTask, function () {
    gulp.src([sourceJavascriptFile]).pipe(gulp.dest(scriptsFolder));
    gulp.src([sourceTypingsFolder + allFiles]).pipe(gulp.dest(testTypingFolder));  
    return gulp.src([frameworkTypingFile]).pipe(gulp.dest(testTypingFolder + "miracledevs.angular/"));
});

gulp.task(compileTask, [copyFilesTask], function () {
    var sources = gulp.src([fixturesFolder + allTypescriptFiles])
        .pipe(typeScript({
            noEmitOnError: true,
            noImplicitAny: false,
            target: "ES5",
            diagnostics: true,
            removeComments: false,
            lib : ["es2015", "es2015.iterable", "dom"],
            out: testFile
        }));

    return sources.js.pipe(gulp.dest(scriptsFolder));
});

gulp.task(serverTask, function () {
    return gulp
      .src(testDependencies, { "read": false })
      .pipe(karma.server({ configFile: testConfig }))
      .on("error", function (err) {
          util.log("ERROR RUNNING TESTS: " + err);
          this.emit("end");
      });
});

gulp.task(singleRunServerTask, function () {
    return gulp
      .src(testDependencies, { "read": false })
      .pipe(karma.server({ configFile: testConfig, singleRun: true, browsers: ["PhantomJS"] }))
      .on("error", function (err) {
          util.log("ERROR RUNNING TESTS: " + err);
          this.emit("end");
      });
});


gulp.task(runTestTask, function () {
    return gulp
      .src(testDependencies, { "read": false })
      .pipe(karma.runner({ configFile: testConfig }))
      .on("error", function (err) {
          util.log("ERROR RUNNING TESTS: " + err);
          this.emit("end");
      });
});

gulp.task(testTask, [compileTask, singleRunServerTask, runTestTask]);

gulp.task(watchCodeTask, function () {
    return gulp.watch([fixturesFolder + allFiles], [compileTask]).on("change", function (e) { util.log(e.path + " has been changed."); });
});

gulp.task(watchScriptTask, [serverTask, watchCodeTask], function ()
{
    return gulp.watch([scriptsFolder + allFiles], [runTestTask]).on("change", function (e) { util.log(e.path + " has been changed."); });
});

gulp.task(defaultTask, [watchScriptTask]);