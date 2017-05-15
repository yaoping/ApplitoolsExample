var Eyes = require('eyes.protractor').Eyes;
var eyes = new Eyes();

eyes.setApiKey("jGyn9wkC6Dt62Mlp0OTCNf6cSDVdI574YcZCkr6ZMDg110");

describe('thoughtworks homepage', function () {

    // beforeEach(function () {
    //     browser.ignoreSynchronization = true;
    //     eyes.open(browser, "JavaScript SDK", "Simple Thoughtworks Test");
    //     browser.get('https://www.thoughtworks.com/');
    //     eyes.setForceFullPageScreenshot(true);
    // });
    // afterEach(function () {
    //     eyes.abortIfNotClosed();
    //
    // });
    it('should go to next page successfully', function () {
        browser.ignoreSynchronization = true;
        eyes.open(browser, "JavaScript SDK", "Simple Thoughtworks Test");
        eyes.setViewportSize(1024,768);
        browser.get('https://www.thoughtworks.com/');
        eyes.setForceFullPageScreenshot(true);
        element(By.css("#util-menu > li:nth-child(3) > a")).click();
        eyes.checkWindow("Contact Demo");
        element(By.css('#first-name')).sendKeys('Pingping');
        element(By.css('#last-name')).sendKeys('Yao');
        element(By.css('#email')).sendKeys('ppyao@thoughtworks.com');
        element(By.css('#phone-number')).sendKeys('18875039949');
        element(By.css('#company')).sendKeys('thoughtworks');

        element(by.cssContainingText('#country-list option', 'China')).click()
        element(By.css('#contact-details-submit')).click();

        eyes.checkWindow('Contact success');
        eyes.isPassed = true;
        eyes.close();
    });

});