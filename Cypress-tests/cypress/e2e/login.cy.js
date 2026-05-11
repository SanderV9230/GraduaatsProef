describe('Test 1 - Login and verify home page', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('should log in and verify all home page elements are visible', () => {

    // --- LOGIN ---
    cy.get('#input-username').type(Cypress.env('APP_USERNAME'))
    cy.get('#input-password').type(Cypress.env('APP_PASSWORD'))
    cy.get('#button-login').click()

    // --- VERIFY URL CHANGED TO HOME ---
    cy.url().should('include', '/overview')

    // --- VERIFY HOME PAGE ELEMENTS ARE VISIBLE ---
    cy.get('#navBar').should('be.visible')
    cy.get('#enroll-button').should('be.visible')
    cy.get('#enrolled-button').should('be.visible')
    cy.get('#create-course-button').should('be.visible')
    cy.get('#card-component-container').should('be.visible')

  })

})