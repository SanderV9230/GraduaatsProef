class LogInPage {
    get usernameInput() {
        return cy.get('#input-username')
    }
    get passwordInput() {
        return cy.get('#input-password')
    }
    get loginButton() {
        return cy.get('#button-login')
    }
}

export default new LogInPage()