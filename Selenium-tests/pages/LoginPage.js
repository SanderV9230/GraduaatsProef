const { By } = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    async usernameInput() {
        return await this.driver.findElement(By.id('input-username'));
    }
    async passwordInput() {
        return await this.driver.findElement(By.id('input-password'));
    }
    async loginButton() {
        return await this.driver.findElement(By.id('button-login'));
    }
}

module.exports = LoginPage;