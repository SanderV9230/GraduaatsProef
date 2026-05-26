const { until } = require('selenium-webdriver');
const LoginPage = require('./pages/LoginPage');
const HomePage = require('./pages/HomePage');

const courseName = 'Cypress Testing 101'
const description = 'Learn the basics of Cypress testing in this comprehensive workshop.'
const location = 'Gent'
const date = '2026-12-01'
const previewDate = '01-12-2026'
const timeStart = '10:00'
const timeEnd = '12:00'
const teacher = 'John Doe'
const contactPhone = '12345567'
const contactEmail = 'john.doe@example.com'

async function login(driver, username, password) {
    const loginPage = new LoginPage(driver);

    const usernameInput = await loginPage.usernameInput();
    await usernameInput.sendKeys(username);

    const passwordInput = await loginPage.passwordInput();
    await passwordInput.sendKeys(password);

    const loginBtn = await loginPage.loginButton();
    await loginBtn.click();

    await driver.wait(until.urlContains('/overview'), 5000);
}

async function inputCreateForm(driver) {
    const homePage = new HomePage(driver);

    const courseNameInput = await homePage.courseNameInput();
    await courseNameInput.sendKeys(courseName);

    const descriptionInput = await homePage.descriptionInput();
    await descriptionInput.sendKeys(description);

    const radioTheory = await homePage.radioTheory();
    await radioTheory.click();

    const locationSelect = await homePage.locationSelect();
    await locationSelect.sendKeys(location);

    const dateInput = await homePage.dateInput();
    await driver.executeScript(
    "arguments[0].value = arguments[1]",
    dateInput,
    '2026-12-01'
    );

    await driver.executeScript(
    "arguments[0].dispatchEvent(new Event('input', { bubbles: true })); arguments[0].dispatchEvent(new Event('change', { bubbles: true }))",
    dateInput
    );

    const timeStartInput = await homePage.timeStartInput();
    await timeStartInput.sendKeys(timeStart);

    const timeEndInput = await homePage.timeEndInput();
    await timeEndInput.sendKeys(timeEnd);

    const teacherInput = await homePage.teacherInput();
    await teacherInput.sendKeys(teacher);

    const phoneInput = await homePage.phoneInput();
    await phoneInput.sendKeys(contactPhone);

    const emailInput = await homePage.emailInput();
    await emailInput.sendKeys(contactEmail);
}

module.exports = { login, inputCreateForm };