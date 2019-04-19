// Import requirement packages
require('chromedriver');
const assert = require('assert');
const { Builder, Key, By, until } = require('selenium-webdriver');

describe('Checkout Homepage', function () {
    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });
    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('Click on Chiang Rai', async function () {
        // Set browser size to maximize
        await driver.manage().window().maximize()
        // Load the page
        await driver.get('http://localhost:3000');
        // Find the menu button
        // await driver.findElement(By.name('menu')).click();
        // Find the province button
        await driver.findElement(By.name('province')).click();
        // Find the north button
        await driver.findElement(By.name('north')).click();
        // Find the Chiang Rai button
        await driver.findElement(By.name('chiang_rai')).click();

        let city = await driver.findElement(By.name('city')).getText();
        // console.log(city);
        assert.equal(city, 'Chiang Rai');
    });

    // it('Click on Chiang Rai', async function () {
    //     // Set browser size to maximize
    //     await driver.manage().window().maximize()
    //     // Load the page
    //     await driver.get('http://localhost:3000');
    //     // Find the province button
    //     await driver.findElement(By.name('province')).click();
    //     // Find the north button
    //     await driver.findElement(By.name('north')).click();
    //     // Find the Chiang Rai button
    //     await driver.findElement(By.name('cnx')).click();

    //     let city = await driver.findElement(By.name('city')).getText();
    //     // console.log(city);
    //     assert.equal(city, 'Chiang Rai');
    // });
    // close the browser after running tests
    after(() => driver && driver.quit());
});

