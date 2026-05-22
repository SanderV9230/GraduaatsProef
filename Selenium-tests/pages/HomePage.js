const { By } = require('selenium-webdriver');

class HomePage {
    constructor(driver) {
        this.driver = driver;
    }

    async navBar()                   { return await this.driver.findElement(By.id('navBar')) }
    async enrollButton()             { return await this.driver.findElement(By.id('enroll-button')) }
    async enrolledButton()           { return await this.driver.findElement(By.id('enrolled-button')) }
    async createCourseButton()       { return await this.driver.findElement(By.id('create-course-button')) }
    async cardComponentContainer()   { return await this.driver.findElement(By.id('card-component-container')) }

    async formCard()          { return await this.driver.findElement(By.id('create-course-form-card')) }
    async courseNameInput()   { return await this.driver.findElement(By.id('input-course-name')) }
    async descriptionInput()  { return await this.driver.findElement(By.id('textarea-description')) }
    async uploadImageButton() { return await this.driver.findElement(By.css('label[for="image-upload"]')) }
    async imageUpload()       { return await this.driver.findElement(By.id('image-upload')) }
    async imagePreview()      { return await this.driver.findElement(By.id('image-preview')) }
    async submitButton()      { return await this.driver.findElement(By.id('button-add-course')) }
    async radioWorkshop()     { return await this.driver.findElement(By.id('radio-course-Workshop')) }
    async radioHandsOn()      { return await this.driver.findElement(By.id('radio-course-Hands On')) }
    async radioDiscussion()   { return await this.driver.findElement(By.id('radio-course-Discussion')) }
    async radioTheory()       { return await this.driver.findElement(By.id('radio-course-Theory')) }
    async locationSelect()    { return await this.driver.findElement(By.id('select-location')) }
    async dateInput()         { return await this.driver.findElement(By.id('input-date')) }
    async timeStartInput()    { return await this.driver.findElement(By.id('input-time-start')) }
    async timeEndInput()      { return await this.driver.findElement(By.id('input-time-end')) }
    async teacherInput()      { return await this.driver.findElement(By.id('input-teacher')) }
    async phoneInput()        { return await this.driver.findElement(By.id('input-contact-phone')) }
    async emailInput()        { return await this.driver.findElement(By.id('input-contact-email')) }

    async summaryHeading()    { return await this.driver.findElement(By.id('summary-heading')) }
    async summaryText()       { return await this.driver.findElement(By.id('summary-text')) }
    async approveButton()     { return await this.driver.findElement(By.id('button-approve')) }
    async editButton()        { return await this.driver.findElement(By.id('button-edit')) }
    async discardButton()     { return await this.driver.findElement(By.id('button-discard')) }

    async courseNamePreview()        { return await this.driver.findElement(By.id('course-name')) }
    async courseDescriptionPreview() { return await this.driver.findElement(By.id('course-description')) }
    async courseLocation()           { return await this.driver.findElement(By.id('course-location')) }
    async courseTeacher()            { return await this.driver.findElement(By.id('course-teacher')) }
    async courseDate()               { return await this.driver.findElement(By.id('course-date')) }
    async courseTime()               { return await this.driver.findElement(By.id('course-time')) }
    async courseType()               { return await this.driver.findElement(By.id('course-type')) }
    async coursePhone()              { return await this.driver.findElement(By.id('course-phone')) }
    async courseEmail()              { return await this.driver.findElement(By.id('course-email')) }
}

module.exports = HomePage;