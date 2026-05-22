class LoginPage {
    constructor(page) {
        this.usernameInput = page.locator('#input-username')
        this.passwordInput = page.locator('#input-password')
        this.loginButton = page.locator('#button-login')
    }
}

export default LoginPage