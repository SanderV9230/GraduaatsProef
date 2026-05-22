import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'

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

export async function login(page) {
    const loginPage = new LoginPage(page)
    await loginPage.usernameInput.fill(process.env.APP_USERNAME)
    await loginPage.passwordInput.fill(process.env.APP_PASSWORD)
    await loginPage.loginButton.click()
}

export async function inputCreateForm(page) {
    const homePage = new HomePage(page)
    await homePage.courseNameInput.fill(courseName)
    await homePage.descriptionInput.fill(description)
    await homePage.radioTheory.click()
    await homePage.locationSelect.selectOption(location)
    await homePage.dateInput.fill(date)
    await homePage.timeStartInput.fill(timeStart)
    await homePage.timeEndInput.fill(timeEnd)
    await homePage.teacherInput.fill(teacher)
    await homePage.phoneInput.fill(contactPhone)
    await homePage.emailInput.fill(contactEmail)
}