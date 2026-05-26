require('chromedriver');
require('dotenv').config();
const { login , inputCreateForm } = require('../helper');
const { Builder, until, By } = require('selenium-webdriver');
const assert = require('assert');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');

const BASE_URL = process.env.BASE_URL;

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

describe('Test 2 - Create a course and verify it appears in the course list', function () {
    this.timeout(30000);
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get(BASE_URL);
        await login(driver, process.env.APP_USERNAME, process.env.APP_PASSWORD);
        const homePage = new HomePage(driver);
        const createCourseButton = await homePage.createCourseButton();
        await createCourseButton.click();
    });

    afterEach(async function () {
        await driver.quit();
    });

    describe('Create course form visibility', function () {

        it('should show the create course form', async function () {
            const homePage = new HomePage(driver);
            const formCard = await homePage.formCard();
            assert.strictEqual(await formCard.isDisplayed(), true);
        });

        it('should show the course name input', async function () {
            const homePage = new HomePage(driver);
            const courseNameInput = await homePage.courseNameInput();
            assert.strictEqual(await courseNameInput.isDisplayed(), true);
        });

        it('should show the description input', async function () {
            const homePage = new HomePage(driver);
            const descriptionInput = await homePage.descriptionInput();
            assert.strictEqual(await descriptionInput.isDisplayed(), true);
        });

        it('should show the image upload button', async function () {
            const homePage = new HomePage(driver);
            const uploadImageButton = await homePage.uploadImageButton();
            assert.strictEqual(await uploadImageButton.getText(), 'Upload an image');
        });
        
        it('should show the submit button', async function () {
            const homePage = new HomePage(driver);
            const submitButton = await homePage.submitButton();
            await driver.executeScript("arguments[0].scrollIntoView(true);", submitButton);
            assert.strictEqual(await submitButton.isDisplayed(), true);
        });

        it('should show the course type radio buttons', async function () {
            const homePage = new HomePage(driver);
            const radioWorkshop = await homePage.radioWorkshop();
            const radioHandsOn = await homePage.radioHandsOn();
            const radioDiscussion = await homePage.radioDiscussion();
            const radioTheory = await homePage.radioTheory();
            assert.strictEqual(await radioWorkshop.isDisplayed(), true);
            assert.strictEqual(await radioHandsOn.isDisplayed(), true);
            assert.strictEqual(await radioDiscussion.isDisplayed(), true);
            assert.strictEqual(await radioTheory.isDisplayed(), true);
        });

        it('should show the location select', async function () {
            const homePage = new HomePage(driver);
            const locationSelect = await homePage.locationSelect();
            assert.strictEqual(await locationSelect.isDisplayed(), true);
        });

        it('should show the date input', async function () {
            const homePage = new HomePage(driver);
            const dateInput = await homePage.dateInput();
            assert.strictEqual(await dateInput.isDisplayed(), true);
        });

        it('should show the time start input', async function () {
            const homePage = new HomePage(driver);
            const timeStartInput = await homePage.timeStartInput();
            assert.strictEqual(await timeStartInput.isDisplayed(), true);
        });

        it('should show the time end input', async function () {
            const homePage = new HomePage(driver);
            const timeEndInput = await homePage.timeEndInput();
            assert.strictEqual(await timeEndInput.isDisplayed(), true);
        });

        it('should show the teacher input', async function () {
            const homePage = new HomePage(driver);
            const teacherInput = await homePage.teacherInput();
            assert.strictEqual(await teacherInput.isDisplayed(), true);
        });

        it('should show the phone input', async function () {
            const homePage = new HomePage(driver);
            const phoneInput = await homePage.phoneInput();
            assert.strictEqual(await phoneInput.isDisplayed(), true);
        });

        it('should show the email input', async function () {
            const homePage = new HomePage(driver);
            const emailInput = await homePage.emailInput();
            assert.strictEqual(await emailInput.isDisplayed(), true);
        });
    });

    describe('Create course form and see it added to the list', function () {  // ❌ geen async hier

    it('should create a course and see it in the list', async function () {  // ✅ async op de it()
        const homePage = new HomePage(driver);

        await inputCreateForm(driver);

        await driver.sleep(3000);
        const submitButton = await homePage.submitButton();
        await submitButton.click();

        await driver.wait(until.elementLocated(By.id('course-name')), 10000);

        const nameText = await (await homePage.courseNamePreview()).getText();
assert.strictEqual(nameText, courseName, `courseNamePreview: "${nameText}" !== "${courseName}"`);

const descText = await (await homePage.courseDescriptionPreview()).getText();
assert.ok(descText.includes(description), `description: "${descText}" bevat niet "${description}"`);

const locationText = await (await homePage.courseLocation()).getText();
assert.ok(locationText.includes(location), `location: "${locationText}" bevat niet "${location}"`);

const teacherText = await (await homePage.courseTeacher()).getText();
assert.ok(teacherText.includes(teacher), `teacher: "${teacherText}" bevat niet "${teacher}"`);

const dateText = await (await homePage.courseDate()).getText();
assert.ok(dateText.includes(previewDate), `date: "${dateText}" bevat niet "${previewDate}"`);

const timeText = await (await homePage.courseTime()).getText();
assert.ok(timeText.includes(`${timeStart} - ${timeEnd}`), `time: "${timeText}" bevat niet "${timeStart} - ${timeEnd}"`);

const typeText = await (await homePage.courseType()).getText();
assert.ok(typeText.includes('Theory'), `type: "${typeText}" bevat niet "Theory"`);

const phoneText = await (await homePage.coursePhone()).getText();
assert.ok(phoneText.includes(contactPhone), `phone: "${phoneText}" bevat niet "${contactPhone}"`);

const emailText = await (await homePage.courseEmail()).getText();
assert.ok(emailText.includes(contactEmail), `email: "${emailText}" bevat niet "${contactEmail}"`);
        const approveButton = await homePage.approveButton();
        await approveButton.click();

        await driver.sleep(3000);

        const container = await homePage.cardComponentContainer();
        assert.ok((await container.getText()).includes(courseName));
        });
    });
});