require('chromedriver');
require('dotenv').config();
const { login, inputCreateForm } = require('../helper');
const { Builder } = require('selenium-webdriver');
const assert = require('assert');
const HomePage = require('../pages/HomePage');
const path = require('path');

const BASE_URL = process.env.BASE_URL;

describe('Test 3 - Upload Image', function () {
    this.timeout(60000);
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get(BASE_URL);
        await login(driver, process.env.APP_USERNAME, process.env.APP_PASSWORD);
        const homePage = new HomePage(driver);
        const createCourseButton = await homePage.createCourseButton();
        await createCourseButton.click();
        await inputCreateForm(driver);
    });

    afterEach(async function () {
        await driver.quit();
    });

    it('should upload an image and see it in the course preview', async function () {
        const homePage = new HomePage(driver);

        const imageUpload = await homePage.imageUpload();
        await imageUpload.sendKeys(path.resolve('./test-image.jpg'));

        const imagePreview = await homePage.imagePreview();
        assert.strictEqual(await imagePreview.isDisplayed(), true);
    });
});