describe('Collection data', () => {
    var EC = protractor.ExpectedConditions;

    beforeAll( () => {
    browser.waitForAngularEnabled(false);
});

    it('Demo tests', () => {
        browser.get(`https://www.linkedin.com/login`);
        browser.wait(EC.presenceOf(element(by.css(`#username`))), 10000);
        element(by.css(`#username`)).sendKeys(`tomash.test.gombosh@gmail.com`);
        element(by.css(`#password`)).sendKeys(`blackneco2010`);
        element(by.css(`[type="submit"]`)).click();
        browser.wait(EC.presenceOf(element(by.css(`input.search-global-typeahead__input`))), 10000);
        element(by.css(`input.search-global-typeahead__input`)).click();
        element(by.css(`input.search-global-typeahead__input`)).sendKeys(`google`);
        element(by.css(`input.search-global-typeahead__input`)).sendKeys(protractor.Key.ENTER);
        browser.wait(EC.presenceOf(element(by.css(`h3.search-results__total`))), 10000);
        let result = element(by.css(`h3.search-results__total`)).getText();
        console.log(result);});
    });