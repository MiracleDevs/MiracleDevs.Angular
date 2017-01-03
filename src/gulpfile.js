//////////////////////////////////////////////////////
// Required Modules
//////////////////////////////////////////////////////
var gulp = require("gulp");
var util = require("gulp-util");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var ngAnnotate = require("gulp-ng-annotate");
var typeScript = require("gulp-typescript");
var sass = require("gulp-sass");
var cleanCss = require("gulp-clean-css");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();
var historyApiFallback = require("connect-history-api-fallback");
var htmlmin = require("gulp-htmlmin");
var rename = require("gulp-rename");
var merge = require("merge2");
var replace = require("gulp-replace");

//////////////////////////////////////////////////////
// Compilation Folders
//////////////////////////////////////////////////////
var applicationFolder = "framework/";
var typingsFolder = "typings/";
var scriptsFolder = "scripts/";
var sassFolder = "sass/";
var cssFolder = "css/";
var deployFolder = "deploy/";
var allFiles = "**/*.*";
var allTypescriptFiles = "**/*.ts";

//////////////////////////////////////////////////////
// Script Files
//////////////////////////////////////////////////////
var applicationCodeFile = "miracledevs.angular.js";


//////////////////////////////////////////////////////
// Style files
//////////////////////////////////////////////////////
var sassMainFile = "main.scss";
var cssMainFile = "miracledevs.angular.css";

//////////////////////////////////////////////////////
// Tasks
//////////////////////////////////////////////////////
var compileTypescriptDebugTask = "compile-typescript-debug";
var compileStyleDebugTask = "compile-style-debug";

var compileTypescriptReleaseTask = "compile-typescript-release";
var compileStyleReleaseTask = "compile-style-release";

var compileAllDebugTask = "compile-all-debug";
var compileAllReleaseTask = "compile-all-release";

var watchCodeTask = "watch-code";

var deployTask = "deploy";
var defaultTask = "default";

//////////////////////////////////////////////////////
// Compiles typescript files
//////////////////////////////////////////////////////
function compileTypescript(path, destination, name, release) {
    if (release) {
        name = name.replace("js", "min.js");
    }

    util.log("Compiling typescript files into: " + destination + name);

    var sources = gulp.src([path + allTypescriptFiles, typingsFolder + allTypescriptFiles])
        .pipe(typeScript({
            noEmitOnError: true,
            noImplicitAny: false,
            target: "ES5",
            diagnostics: true,
            removeComments: false,
            declaration: true,
            out: name}));

    if (release) {
        sources.js = sources.js.pipe(uglify());
    }

    return merge([sources.dts
              .pipe(replace(/\"typings\//g, "\"../"))
              .pipe(gulp.dest(destination)),
       sources.js.pipe(gulp.dest(destination))
    ]);
}

//////////////////////////////////////////////////////
// Process style files.
//////////////////////////////////////////////////////
function processStyles(sourceFile, destination, name, release) {
    if (release) {
        name = name.replace("css", "min.css");
    }

    util.log("Processing sass files into: " + name);

    var css = gulp.src([sassFolder + sourceFile])
        .pipe(sass())
        .pipe(rename(name))
        .pipe(autoprefixer());

    if (release)
        css = css.pipe(cleanCss());

    return css.pipe(gulp.dest(destination));
}

//////////////////////////////////////////////////////
// Task definition
//////////////////////////////////////////////////////

gulp.task(compileTypescriptDebugTask, function () { return compileTypescript(applicationFolder, scriptsFolder, applicationCodeFile, false) });
gulp.task(compileStyleDebugTask, function () { return processStyles(sassMainFile, cssFolder, cssMainFile, false); });

gulp.task(compileTypescriptReleaseTask, function () { return compileTypescript(applicationFolder, scriptsFolder, applicationCodeFile, true) });
gulp.task(compileStyleReleaseTask, function () { return processStyles(sassMainFile, cssFolder, cssMainFile, true); });

gulp.task(compileAllDebugTask, [compileTypescriptDebugTask, compileStyleDebugTask]);
gulp.task(compileAllReleaseTask, [compileTypescriptReleaseTask, compileStyleReleaseTask]);


gulp.task(deployTask, [compileAllDebugTask, compileAllReleaseTask], function () {
    util.log("Copying files..");
    gulp.src(cssFolder + allFiles).pipe(gulp.dest(deployFolder));
    gulp.src([scriptsFolder + allFiles]).pipe(gulp.dest(deployFolder));
});

gulp.task(watchCodeTask, [compileAllDebugTask], function () { return gulp.watch([applicationFolder + allTypescriptFiles], [compileAllDebugTask]).on("change", function (e) { util.log(e.path + " has been changed."); }); });

gulp.task(defaultTask, [deployTask]);