// Import requirement packages
require('chromedriver');
const assert = require('assert');
const { Builder, Key, By, until } = require('selenium-webdriver');

describe('UITest: North Region', function () {
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

    it('Click on Nan', async function () {
        // Find the navigation button
        await driver.findElement(By.name('province')).click();
        // Find the region button
        await driver.findElement(By.name('north')).click();
        // Find the province button
        await driver.findElement(By.name('nan')).click();

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Nan');
    });

    it('Click on Phrae', async function () {
        // Find the navigation button
        await driver.findElement(By.name('province')).click();
        // Find the region button
        await driver.findElement(By.name('north')).click();
        // Find the province button
        await driver.findElement(By.name('phrae')).click();

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Phrae');
    });

    it('Click on Lamphun', async function () {
        // Find the navigation button
        await driver.findElement(By.name('province')).click();
        // Find the region button
        await driver.findElement(By.name('north')).click();
        // Find the province button
        await driver.findElement(By.name('lamphun')).click();

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Lamphun');
    });
    // close the browser after running tests
    after(() => driver && driver.quit());
});

describe('UITest: NorthEast Region', function () {
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

describe('UITest: Center Region', function () {
    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('Click on Bangkok', async function () {
        // Set browser size to maximize
        await driver.manage().window().maximize()
        // Load the page
        await driver.get('http://localhost:3000');
        // Find the navigation button
        await driver.findElement(By.name('province')).click();
        // Find the region button
        await driver.findElement(By.name('center')).click();
        // Find the province button
        await driver.findElement(By.name('bangkok')).click();

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Bangkok');
    });

    it('Click on Nakhon Nayok', async function () {
        // Find the navigation button
        await driver.findElement(By.name('province')).click();
        // Find the region button
        await driver.findElement(By.name('center')).click();
        // Find the province button
        await driver.findElement(By.name('nakhon_nayok')).click();

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Nakhon Nayok');
    });

    it('Click on Phichit', async function () {
        // Find the navigation button
        await driver.findElement(By.name('province')).click();
        // Find the region button
        await driver.findElement(By.name('center')).click();
        // Find the province button
        await driver.findElement(By.name('phichit')).click();

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Phichit');
    });

    it('Click on Saraburi', async function () {
        // Find the navigation button
        await driver.findElement(By.name('province')).click();
        // Find the region button
        await driver.findElement(By.name('center')).click();
        // Find the province button
        await driver.findElement(By.name('saraburi')).click();

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Saraburi');
    });

     // close the browser after running tests
    after(() => driver && driver.quit());
});

describe('UITest: Southern Region', function () {
    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('Click on Trang', async function () {
        // Set browser size to maximize
        await driver.manage().window().maximize()
        // Load the page
        await driver.get('http://localhost:3000');
        // Find the navigation button
        await driver.findElement(By.name('province')).click();
        // Find the region button
        await driver.findElement(By.name('south')).click();
        // Find the province button
        await driver.findElement(By.name('trang')).click();

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Trang');
    });

    it('Click on Pattani', async function () {
        // Find the navigation button
        await driver.findElement(By.name('province')).click();
        // Find the region button
        await driver.findElement(By.name('south')).click();
        // Find the province button
        await driver.findElement(By.name('pattani')).click();

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Pattani');
    });

    it('Click on Yala', async function () {
        // Find the navigation button
        await driver.findElement(By.name('province')).click();
        // Find the region button
        await driver.findElement(By.name('south')).click();
        // Find the province button
        await driver.findElement(By.name('yala')).click();

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Yala');
    });

    it('Click on Satun', async function () {
        // Find the navigation button
        await driver.findElement(By.name('province')).click();
        // Find the region button
        await driver.findElement(By.name('south')).click();
        // Find the province button
        await driver.findElement(By.name('satun')).click();

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Satun');
    });

     // close the browser after running tests
    after(() => driver && driver.quit());
});

describe('UITest: Search province', function () {
    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('Search on Trang', async function () {
        // Set browser size to maximize
        await driver.manage().window().maximize()
        // Load the page
        await driver.get('http://localhost:3000');
        // Find Search serach button
        await driver.findElement(By.name('search-btn')).click();
        // ENter keyword and send enter
        await driver.findElement(By.name('search-box')).sendKeys('Trang', Key.RETURN);

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Trang');
    });

    it('Search on Lampang', async function () {
        // Find Search serach button
        await driver.findElement(By.name('search-btn')).click();
        // ENter keyword and send enter
        await driver.findElement(By.name('search-box')).sendKeys('Lampang', Key.RETURN);

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Lampang');
    });

    it('Search on Roi Et', async function () {
        // Find Search serach button
        await driver.findElement(By.name('search-btn')).click();
        // ENter keyword and send enter
        await driver.findElement(By.name('search-box')).sendKeys('Roi Et', Key.RETURN);

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Roi Et');
    });

    it('Search on Chai Nat', async function () {
        // Find Search serach button
        await driver.findElement(By.name('search-btn')).click();
        // ENter keyword and send enter
        await driver.findElement(By.name('search-box')).sendKeys('Chai Nat', Key.RETURN);

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Chai Nat');
    });

    it('Search on Sing Buri', async function () {
        // Find Search serach button
        await driver.findElement(By.name('search-btn')).click();
        // ENter keyword and send enter
        await driver.findElement(By.name('search-box')).sendKeys('Sing Buri', Key.RETURN);

        let city = await driver.findElement(By.name('city')).getText();
        assert.equal(city, 'Sing Buri');
    });

     // close the browser after running tests
    after(() => driver && driver.quit());
});