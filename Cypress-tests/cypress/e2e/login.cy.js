import homePage from '../support/pages/homePage'
import loginPage from '../support/pages/loginPage'

describe('Test 1 - Login and verify home page', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.login()
  })

  it('should redirect to /overview after login', () => {
    cy.url().should('include', '/overview')
  })

  it('should show the navigation bar', () => {
    homePage.navBar.should('be.visible')
  })

  it('should show the enroll button', () => {
    homePage.enrollButton.should('be.visible')
  })

  it('should show the enrolled button', () => {
    homePage.enrolledButton.should('be.visible')
  })

  it('should show the create course button', () => {
    homePage.createCourseButton.should('be.visible')
  })

  it('should show an empty course list when no courses are visible', () => {
    homePage.cardComponentContainer.should('be.empty')
  })
})