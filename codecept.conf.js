let seleniumConfig = {
    tests: "./tests/**/*-test.js",
    timeout: 3000,
    output: "./output",
    bootstrap: false,
    mocha: {
        "reporterOptions": {
            reportDir: "result",
            autoOpen: true,
            reportTitle: "Sample Title"
        }
    },
    include: {
        ItemDetails: "./pages/item-details.js"
    },
    helpers: {
        WebDriverIO: {
            url: "https://www.walmart.ca",
            smartWait: 5000,
            browser: "chrome",
            restart: false,
            windowSize: "maximize",
            timeouts: {
                script: 60000,
                "page load": 10000
            }
        }
    },
    waitforTimeout: 10000,
    name: "boilerplate-codeceptjs"
};

exports.config = seleniumConfig;