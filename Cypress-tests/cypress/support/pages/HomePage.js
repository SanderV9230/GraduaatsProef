class HomePage {
    get navBar() { return cy.get('#navBar') }
    get enrollButton()      { return cy.get('#enroll-button') }
    get enrolledButton()    { return cy.get('#enrolled-button') }
    get createCourseButton(){ return cy.get('#create-course-button') }
    get cardComponentContainer() { return cy.get('#card-component-container') }
      
    get formCard()          { return cy.get('#create-course-form-card') }
    get courseNameInput()   { return cy.get('#input-course-name') }
    get descriptionInput()  { return cy.get('#textarea-description') }
    get uploadImageButton() { return cy.get('label[for="image-upload"]') }
    get imageUpload()       { return cy.get('#image-upload') }
    get imagePreview()      { return cy.get('#image-preview') }
    get submitButton()      { return cy.get('#button-add-course') }
    get radioWorkshop()     { return cy.get('#radio-course-Workshop') }
    get radioHandsOn()      { return cy.get('#radio-course-Hands\\ On') }
    get radioDiscussion()   { return cy.get('#radio-course-Discussion') }
    get radioTheory()       { return cy.get('#radio-course-Theory') }
    get locationSelect()    { return cy.get('#select-location') }
    get dateInput()         { return cy.get('#input-date') }
    get timeStartInput()    { return cy.get('#input-time-start') }
    get timeEndInput()      { return cy.get('#input-time-end') }
    get teacherInput()      { return cy.get('#input-teacher') }
    get phoneInput()        { return cy.get('#input-contact-phone') }
    get emailInput()        { return cy.get('#input-contact-email') }

    get summaryHeading()    { return cy.get('#summary-heading') }
    get summaryText()       { return cy.get('#summary-text') }
    get approveButton()     { return cy.get('#button-approve') }
    get editButton()        { return cy.get('#button-edit') }
    get discardButton()     { return cy.get('#button-discard') }

    get courseNamePreview()        { return cy.get('#course-name') }
    get courseDescriptionPreview() { return cy.get('#course-description') }
    get courseLocation()           { return cy.get('#course-location') }
    get courseTeacher()            { return cy.get('#course-teacher') }
    get courseDate()               { return cy.get('#course-date') }
    get courseTime()               { return cy.get('#course-time') }
    get courseType()               { return cy.get('#course-type') }
    get coursePhone()              { return cy.get('#course-phone') }
    get courseEmail()              { return cy.get('#course-email') }
}
    export default new HomePage()
