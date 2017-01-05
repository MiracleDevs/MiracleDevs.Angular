module.exports = function (config) {

    config.set({
        basePath: "",

        frameworks: ["jasmine"],

        reporters: ["spec"],

        browsers: ["Chrome", "Firefox", "IE"],

        plugins: [
            "karma-spec-reporter",
            "karma-jasmine",
            "karma-chrome-launcher",
            "karma-firefox-launcher",
            "karma-ie-launcher"
        ],

        logLevel: config.LOG_WARN,
        
        port: 7676,

        colors: true,

        singleRun: false
    });
};