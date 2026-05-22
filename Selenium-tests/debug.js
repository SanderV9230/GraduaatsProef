// debug.js
require('dotenv').config();
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async () => {
    const options = new chrome.Options();
    const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    
    await driver.get(process.env.BASE_URL);
    console.log('✅ Pagina geladen');

    await driver.findElement(By.id('input-username')).sendKeys(process.env.APP_USERNAME);
    console.log('✅ Username ingevuld');

    await driver.findElement(By.id('input-password')).sendKeys(process.env.APP_PASSWORD);
    console.log('✅ Password ingevuld');

    await driver.findElement(By.id('button-login')).click();
    console.log('✅ Login knop geklikt');

    await driver.wait(until.urlContains('/overview'), 10000);
    console.log('✅ Redirect naar overview');

    await driver.quit();
})();