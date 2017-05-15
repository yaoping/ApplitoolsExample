
exports.config = {
    specs: ['../spec/baidu.spec.js'],

    // restartBrowserBetweenTest: true,
    capabilities: {
        'browserName': 'chrome',
        // 'appium-version': '1.5.3',
        // 'platformName': 'iPhone 6',
        // 'platformVersion': '9.3'
        //'browserName':'chrome',
        //
        //'chromeOptions':{
        //    'args':['incognito','start-maximized']
        //}
    },


    allScriptsTimeout: 300000,
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 500000
    }
};
