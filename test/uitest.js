// Import requirement packages
require('chromedriver');
const assert = require('assert');
const { Builder, Key, By, until } = require('selenium-webdriver');

// describe('Checkout Homepage North Region', function () {
//     let driver;
//     before(async function () {
//         driver = await new Builder().forBrowser('chrome').build();
//     });

//     // Next, we will write steps for our test. 
//     // For the element ID, you can find it by open the browser inspect feature.
//     it('Click on Chiang Rai', async function () {
//         // Set browser size to maximize
//         await driver.manage().window().maximize()
//         // Load the page
//         await driver.get('http://localhost:3000');
//         // Find the navigation button
//         await driver.findElement(By.name('province')).click();
//         // Find the region button
//         await driver.findElement(By.name('north')).click();
//         // Find the province button
//         await driver.findElement(By.name('chiang_rai')).click();

//         let city = await driver.findElement(By.name('city')).getText();
//         assert.equal(city, 'Chiang Rai');
//     });

//     it('Click on Nan', async function () {
//         // Find the navigation button
//         await driver.findElement(By.name('province')).click();
//         // Find the region button
//         await driver.findElement(By.name('north')).click();
//         // Find the province button
//         await driver.findElement(By.name('nan')).click();

//         let city = await driver.findElement(By.name('city')).getText();
//         assert.equal(city, 'Nan');
//     });

//     it('Click on Phrae', async function () {
//         // Find the navigation button
//         await driver.findElement(By.name('province')).click();
//         // Find the region button
//         await driver.findElement(By.name('north')).click();
//         // Find the province button
//         await driver.findElement(By.name('phrae')).click();

//         let city = await driver.findElement(By.name('city')).getText();
//         assert.equal(city, 'Phrae');
//     });

//     it('Click on Lamphun', async function () {
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

describe('Checkout Homepage NorthEast Region', function () {
    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('Click on Chaiyaphum', async function () {
        // Set browser size to maximize
        await driver.manage().window().maximize()
        // Load the page
        await driver.get('http://localhost:3000');
        // Find the navigation button
        await driver.findElement(By.name('province')).click();
        // Find the region button
        await driver.findElement(By.name('northeast')).click();
        // Find the province button
        await driver.findElement(By.name('chaiyaphum')).click();

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Chaiyaphum');
    });

    it('Click on Bueng Kan', async function () {
        // Find the navigation button
        await driver.findElement(By.name('province')).click();
        // Find the region button
        await driver.findElement(By.name('northeast')).click();
        // Find the province button
        await driver.findElement(By.name('bueng_kan')).click();

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Bueng Kan');
    });

    it('Click on Buriram', async function () {
        // Find the navigation button
        await driver.findElement(By.name('province')).click();
        // Find the region button
        await driver.findElement(By.name('northeast')).click();
        // Find the province button
        await driver.findElement(By.name('buriram')).click();

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Buriram');
    });

    it('Click on Yasothon', async function () {
        // Find the navigation button
        await driver.findElement(By.name('province')).click();
        // Find the region button
        await driver.findElement(By.name('northeast')).click();
        // Find the province button
        await driver.findElement(By.name('yasothon')).click();

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Yasothon');
    });

    it('Click on Si Sa Ket', async function () {
        // Find the navigation button
        await driver.findElement(By.name('province')).click();
        // Find the region button
        await driver.findElement(By.name('northeast')).click();
        // Find the province button
        await driver.findElement(By.name('si_sa_ket')).click();

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Si Sa Ket');
    });

    it('Click on Amnat Charoen', async function () {
        // Find the navigation button
        await driver.findElement(By.name('province')).click();
        // Find the region button
        await driver.findElement(By.name('northeast')).click();
        // Find the province button
        await driver.findElement(By.name('amnat_charoen')).click();

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Amnat Charoen');
    });
    // close the browser after running tests
    after(() => driver && driver.quit());
});