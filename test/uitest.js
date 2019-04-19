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
        // Find the navigation button
        await driver.findElement(By.name('province')).click();
        // Find the region button
        await driver.findElement(By.name('north')).click();
        // Find the province button
        await driver.findElement(By.name('chiang_rai')).click();

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Chiang Rai');
    });
    // close the browser after running tests
    after(() => driver && driver.quit());
});

// describe('Checkout Homepage', function () {
//     let driver;
//     before(async function () {
//         driver = await new Builder().forBrowser('chrome').build();
//     });
//     it('Click on Nan', async function () {
//         // Set browser size to maximize
//         await driver.manage().window().maximize()
//         // Load the page
//         await driver.get('http://localhost:3000');
//         // Find the navigation button
//         await driver.findElement(By.name('province')).click();
//         // Find the region button
//         await driver.findElement(By.name('north')).click();
//         // Find the province button
//         await driver.findElement(By.name('nan')).click();

//         let city = await driver.findElement(By.name('city')).getText();
//         assert.equal(city, 'Nan');
//     });
//     // close the browser after running tests
//     after(() => driver && driver.quit());
// });

// describe('Checkout Homepage', function () {
//     let driver;
//     before(async function () {
//         driver = await new Builder().forBrowser('chrome').build();
//     });
//     it('Click on Phrae', async function () {
//         // Set browser size to maximize
//         await driver.manage().window().maximize()
//         // Load the page
//         await driver.get('http://localhost:3000');
//         // Find the navigation button
//         await driver.findElement(By.name('province')).click();
//         // Find the region button
//         await driver.findElement(By.name('north')).click();
//         // Find the province button
//         await driver.findElement(By.name('phrae')).click();

//         let city = await driver.findElement(By.name('city')).getText();
//         assert.equal(city, 'Phrae');
//     });
//     // close the browser after running tests
//     after(() => driver && driver.quit());
// });

// describe('Checkout Homepage', function () {
//     let driver;
//     before(async function () {
//         driver = await new Builder().forBrowser('chrome').build();
//     });
//     it('Click on Lamphun', async function () {
//         // Set browser size to maximize
//         await driver.manage().window().maximize()
//         // Load the page
//         await driver.get('http://localhost:3000');
//         // Find the navigation button
//         await driver.findElement(By.name('province')).click();
//         // Find the region button
//         await driver.findElement(By.name('north')).click();
//         // Find the province button
//         await driver.findElement(By.name('lamphun')).click();

//         let city = await driver.findElement(By.name('city')).getText();
//         assert.equal(city, 'Lamphun');
//     });
//     // close the browser after running tests
//     after(() => driver && driver.quit());
// });

