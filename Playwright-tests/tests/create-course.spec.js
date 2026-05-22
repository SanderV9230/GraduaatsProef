import { test, expect } from '@playwright/test'
import HomePage from '../pages/HomePage'
import { login, inputCreateForm } from '../support/helpers'

const courseName = 'Cypress Testing 101'
const description = 'Learn the basics of Cypress testing in this comprehensive workshop.'
const location = 'Gent'
const previewDate = '01-12-2026'
const timeStart = '10:00'
const timeEnd = '12:00'
const teacher = 'John Doe'
const contactPhone = '12345567'
const contactEmail = 'john.doe@example.com'

test.describe('Test 2 - Create course', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/')
        await login(page)
        const homePage = new HomePage(page)
        await homePage.createCourseButton.click()
    })

    test.describe('Create course form visibility', () => {

        test('should show the create course form', async ({ page }) => {
            const homePage = new HomePage(page)
            await expect(homePage.formCard).toBeVisible()
        })

        test('should show the course name input', async ({ page }) => {
            const homePage = new HomePage(page)
            await expect(homePage.courseNameInput).toBeVisible()
        })

        test('should show the description input', async ({ page }) => {
            const homePage = new HomePage(page)
            await expect(homePage.descriptionInput).toBeVisible()
        })

        test('should show the image upload button', async ({ page }) => {
            const homePage = new HomePage(page)
            await expect(homePage.uploadImageButton).toHaveText('Upload an image')
        })

        test('should show the submit button', async ({ page }) => {
            const homePage = new HomePage(page)
            await homePage.submitButton.scrollIntoViewIfNeeded()
            await expect(homePage.submitButton).toBeVisible()
        })

        test('should show the course type radio buttons', async ({ page }) => {
            const homePage = new HomePage(page)
            await expect(homePage.radioWorkshop).toBeVisible()
            await expect(homePage.radioHandsOn).toBeVisible()
            await expect(homePage.radioDiscussion).toBeVisible()
            await expect(homePage.radioTheory).toBeVisible()
        })

        test('should show the location select', async ({ page }) => {
            const homePage = new HomePage(page)
            await expect(homePage.locationSelect).toBeVisible()
        })

        test('should show the date input', async ({ page }) => {
            const homePage = new HomePage(page)
            await expect(homePage.dateInput).toBeVisible()
        })

        test('should show the time start input', async ({ page }) => {
            const homePage = new HomePage(page)
            await expect(homePage.timeStartInput).toBeVisible()
        })

        test('should show the time end input', async ({ page }) => {
            const homePage = new HomePage(page)
            await expect(homePage.timeEndInput).toBeVisible()
        })

        test('should show the teacher input', async ({ page }) => {
            const homePage = new HomePage(page)
            await expect(homePage.teacherInput).toBeVisible()
        })

        test('should show the contact phone input', async ({ page }) => {
            const homePage = new HomePage(page)
            await expect(homePage.phoneInput).toBeVisible()
        })

        test('should show the contact email input', async ({ page }) => {
            const homePage = new HomePage(page)
            await expect(homePage.emailInput).toBeVisible()
        })
    })

    test.describe('Create course and see it added to the list', () => {

        test('should create a course and see it in the list', async ({ page }) => {
            const homePage = new HomePage(page)

            await inputCreateForm(page)
            await homePage.submitButton.click()

            await expect(homePage.courseNamePreview).toHaveText(courseName)
            await expect(homePage.courseDescriptionPreview).toContainText(description)
            await expect(homePage.courseLocation).toContainText(location)
            await expect(homePage.courseTeacher).toContainText(teacher)
            await expect(homePage.courseDate).toContainText(previewDate)
            await expect(homePage.courseTime).toContainText(`${timeStart} - ${timeEnd}`)
            await expect(homePage.courseType).toContainText('Theory')
            await expect(homePage.coursePhone).toContainText(contactPhone)
            await expect(homePage.courseEmail).toContainText(contactEmail)

            await homePage.approveButton.click()

            await expect(homePage.cardComponentContainer).toContainText(courseName)
        })
    })
})