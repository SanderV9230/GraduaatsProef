import { test, expect } from '@playwright/test'
import HomePage from '../pages/HomePage'
import { login } from '../support/helpers'

test.describe('Test 1 - Login and verify home page', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/')
        await login(page)
    })

    test('should redirect to /overview after login', async ({ page }) => {
        await expect(page).toHaveURL(/\/overview/)
    })

    test('should show the navigation bar', async ({ page }) => {
        const homePage = new HomePage(page)
        await expect(homePage.navBar).toBeVisible()
    })

    test('should show the enroll button', async ({ page }) => {
        const homePage = new HomePage(page)
        await expect(homePage.enrollButton).toBeVisible()
    })

    test('should show the enrolled button', async ({ page }) => {
        const homePage = new HomePage(page)
        await expect(homePage.enrolledButton).toBeVisible()
    })

    test('should show the create course button', async ({ page }) => {
        const homePage = new HomePage(page)
        await expect(homePage.createCourseButton).toBeVisible()
    })

    test('should show an empty course list when no courses are visible', async ({ page }) => {
        const homePage = new HomePage(page)
        await expect(homePage.cardComponentContainer).toBeEmpty()
    })
})