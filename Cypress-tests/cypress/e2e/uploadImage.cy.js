import homePage from "../support/pages/homePage";
import loginPage from "../support/pages/loginPage";
import 'cypress-file-upload';

describe('Test 3 - Upload Image', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.login()
        homePage.createCourseButton.click()
        cy.inputCreateForm()
    })

    it('should upload an image and see it in the course preview', () => {
        
        cy.get('#image-upload').attachFile('test-image.jpg')
        homePage.imagePreview.should('be.visible')


})
})