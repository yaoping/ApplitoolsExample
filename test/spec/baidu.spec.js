var Eyes = require('eyes.protractor').Eyes;
var eyes = new Eyes();

eyes.setApiKey("jGyn9wkC6Dt62Mlp0OTCNf6cSDVdI574YcZCkr6ZMDg110");

describe('TAOBAO homepage', function () {
    beforeEach(function () {
        browser.driver.manage().window().maximize();

    })
    it('should add one and two', function () {
        browser.ignoreSynchronization = true;
        eyes.open(browser, "JavaScript SDK", "Taobao Test", {width: 474, height: 716});

        eyes.setForceFullPageScreenshot(true);
        browser.get('https://www.thoughtworks.com/');
        eyes.checkWindow("Taobao");
        eyes.close();
    });
});