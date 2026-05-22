import homePage from "../support/pages/homePage";
import loginPage from "../support/pages/loginPage";

describe('Test 2 - Create course', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.login()
        homePage.createCourseButton.click()
    })

    describe('Create course form visibility', () => {

        it('should show the create course form', () => {
            homePage.formCard.should('be.visible')
        })
        it('should show the course name input', () => {
            homePage.courseNameInput.should('be.visible')
        })
        it('should show the description input', () => {
            homePage.descriptionInput.should('be.visible')
        })
        it('should show the image upload Button', () => {
            homePage.uploadImageButton.should('have.text', 'Upload an image')
        })
        it('should show the submit button', () => {
            homePage.submitButton.scrollIntoView().should('be.visible')
        })
        it('should show the course type radio buttons', () => {
            homePage.radioWorkshop.should('be.visible')
            homePage.radioHandsOn.should('be.visible')
            homePage.radioDiscussion.should('be.visible')
            homePage.radioTheory.should('be.visible')
        })
        it('should show the location select', () => {
            homePage.locationSelect.should('be.visible')
        })
        it('should show the date input', () => {
            homePage.dateInput.should('be.visible')
        })
        it('should show the time start input', () => {
            homePage.timeStartInput.should('be.visible')
        })
        it('should show the time end input', () => {
            homePage.timeEndInput.should('be.visible')
        })
        it('should show the teacher input', () => {
            homePage.teacherInput.should('be.visible')
        })
        it('should show the contact phone input', () => {
            homePage.phoneInput.should('be.visible')
        })
        it('should show the contact email input', () => {
            homePage.emailInput.should('be.visible')
        })
    })

    describe('Create course and see it added to the list', () => {
        it('should create a course and see it in the list', () => {
           
            cy.inputCreateForm()
            homePage.submitButton.click()

            // visuele test op preview van de course
            homePage.courseNamePreview.should('have.text', courseName)
            homePage.courseDescriptionPreview.should('contain.text', description)
            homePage.courseLocation.contains(location)
            homePage.courseTeacher.contains(teacher)
            homePage.courseDate.contains(previewDate)
            homePage.courseTime.contains(`${timeStart} - ${timeEnd}`)
            homePage.courseType.contains('Theory')
            homePage.coursePhone.contains(contactPhone)
            homePage.courseEmail.contains(contactEmail)

            homePage.approveButton.click()

            homePage.cardComponentContainer.should('contain.text', courseName)

        })
    })
})
