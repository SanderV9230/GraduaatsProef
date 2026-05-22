import { test, expect } from '@playwright/test'
import HomePage from '../pages/HomePage'
import { login, inputCreateForm } from '../support/helpers'
import path from 'path'

test.describe('Test 3 - Upload Image', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/')
        await login(page)
        const homePage = new HomePage(page)
        await homePage.createCourseButton.click()
        await inputCreateForm(page)
    })

    test('should upload an image and see it in the course preview', async ({ page }) => {
        const homePage = new HomePage(page)

        await homePage.imageUpload.setInputFiles('./test-image.jpg')
        await expect(homePage.imagePreview).toBeVisible()
    })
})