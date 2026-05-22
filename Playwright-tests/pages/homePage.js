class HomePage {
    constructor(page) {
        this.navBar = page.locator('#navBar')
        this.enrollButton = page.locator('#enroll-button')
        this.enrolledButton = page.locator('#enrolled-button')
        this.createCourseButton = page.locator('#create-course-button')
        this.cardComponentContainer = page.locator('#card-component-container')

        this.formCard = page.locator('#create-course-form-card')
        this.courseNameInput = page.locator('#input-course-name')
        this.descriptionInput = page.locator('#textarea-description')
        this.uploadImageButton = page.locator('label[for="image-upload"]')
        this.imageUpload = page.locator('#image-upload')
        this.imagePreview = page.locator('#image-preview')
        this.submitButton = page.locator('#button-add-course')
        this.radioWorkshop = page.locator('#radio-course-Workshop')
        this.radioHandsOn = page.locator('#radio-course-Hands\\ On')
        this.radioDiscussion = page.locator('#radio-course-Discussion')
        this.radioTheory = page.locator('#radio-course-Theory')
        this.locationSelect = page.locator('#select-location')
        this.dateInput = page.locator('#input-date')
        this.timeStartInput = page.locator('#input-time-start')
        this.timeEndInput = page.locator('#input-time-end')
        this.teacherInput = page.locator('#input-teacher')
        this.phoneInput = page.locator('#input-contact-phone')
        this.emailInput = page.locator('#input-contact-email')

        this.summaryHeading = page.locator('#summary-heading')
        this.summaryText = page.locator('#summary-text')
        this.approveButton = page.locator('#button-approve')
        this.editButton = page.locator('#button-edit')
        this.discardButton = page.locator('#button-discard')

        this.courseNamePreview = page.locator('#course-name')
        this.courseDescriptionPreview = page.locator('#course-description')
        this.courseLocation = page.locator('#course-location')
        this.courseTeacher = page.locator('#course-teacher')
        this.courseDate = page.locator('#course-date')
        this.courseTime = page.locator('#course-time')
        this.courseType = page.locator('#course-type')
        this.coursePhone = page.locator('#course-phone')
        this.courseEmail = page.locator('#course-email')
    }

    async uploadImage(filePath) {
        await this.imageUpload.setInputFiles(filePath)
    }
}

export default HomePage