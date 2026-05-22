import loginPage from "./pages/LoginPage";
import homePage from "./pages/HomePage";

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

Cypress.Commands.add('login', () => {
    loginPage.usernameInput.type(Cypress.env('APP_USERNAME'))
    loginPage.passwordInput.type(Cypress.env('APP_PASSWORD'))
    loginPage.loginButton.click()
})

Cypress.Commands.add('inputCreateForm', () => {
    homePage.courseNameInput.type(courseName)
    homePage.descriptionInput.type(description)
    homePage.radioTheory.click()
    homePage.locationSelect.select(location)
    homePage.dateInput.type(date)
    homePage.timeStartInput.type(timeStart)
    homePage.timeEndInput.type(timeEnd)
    homePage.teacherInput.type(teacher)
    homePage.phoneInput.type(contactPhone)
    homePage.emailInput.type(contactEmail)
})