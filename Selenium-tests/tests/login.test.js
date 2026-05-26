require('chromedriver');
require('dotenv').config();
const { login } = require('../helper');
const { Builder, until, By } = require('selenium-webdriver');
const assert = require('assert');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');

const BASE_URL = process.env.BASE_URL;

describe('Test 1 - Login and verify home page', function () {
    this.timeout(30000);
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get(BASE_URL);
        await login(driver, process.env.APP_USERNAME, process.env.APP_PASSWORD);
    });

    afterEach(async function () {
        await driver.quit();
    });

    it('should redirect to /overview after login', async function () {
        const url = await driver.getCurrentUrl();
        assert.match(url, /\/overview/);
    });

    it('should show the navigation bar', async function () {
        const homePage = new HomePage(driver);
        const navBar = await homePage.navBar();
        assert.strictEqual(await navBar.isDisplayed(), true);
    });

    it('should show the enroll button', async function () {
        const homePage = new HomePage(driver);
        const enrollButton = await homePage.enrollButton();
        assert.strictEqual(await enrollButton.isDisplayed(), true);
    });

    it('should show the enrolled button', async function () {
        const homePage = new HomePage(driver);
        const enrolledButton = await homePage.enrolledButton();
        assert.strictEqual(await enrolledButton.isDisplayed(), true);
    });

    it('should show the create course button', async function () {
        const homePage = new HomePage(driver);
        const createCourseButton = await homePage.createCourseButton();
        assert.strictEqual(await createCourseButton.isDisplayed(), true);
    });

    it('should show an empty course list when no courses are visible', async function () {
        const homePage = new HomePage(driver);
        const container = await homePage.cardComponentContainer();
        const children = await container.findElements(By.xpath('./child::*'));
        assert.strictEqual(children.length, 0);
    });
});