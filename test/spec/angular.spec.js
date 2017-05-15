var Eyes = require('eyes.protractor').Eyes;
var eyes = new Eyes();

eyes.setApiKey("jGyn9wkC6Dt62Mlp0OTCNf6cSDVdI574YcZCkr6ZMDg110");

describe('angularjs homepage', function () {
    it('should add one and two', function () {
        eyes.open(browser, "JavaScript SDK", "Simple Protractor Test");

        eyes.setForceFullPageScreenshot(true);
        browser.get('https://angularjs.org');

        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();

        eyes.checkWindow("add todo list");

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');

        // You wrote your first test, cross it off the list
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);

        eyes.checkWindow("cross it off the list");
        eyes.close();
    });
});