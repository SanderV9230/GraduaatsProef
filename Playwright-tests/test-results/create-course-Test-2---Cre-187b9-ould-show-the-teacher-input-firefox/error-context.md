# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: create-course.spec.js >> Test 2 - Create course >> Create course form visibility >> should show the teacher input
- Location: tests\create-course.spec.js:80:13

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#create-course-button')

```

# Page snapshot

```yaml
- main [ref=e4]:
  - generic [ref=e5]:
    - heading "Welcome" [level=3] [ref=e6]
    - generic [ref=e7]:
      - generic [ref=e8]:
        - text: Username
        - textbox [ref=e9]: ara
      - generic [ref=e10]:
        - text: Password
        - textbox [active] [ref=e11]: apa
      - button "Login" [ref=e12] [cursor=pointer]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test'
  2   | import HomePage from '../pages/HomePage'
  3   | import { login, inputCreateForm } from '../support/helpers'
  4   | 
  5   | const courseName = 'Cypress Testing 101'
  6   | const description = 'Learn the basics of Cypress testing in this comprehensive workshop.'
  7   | const location = 'Gent'
  8   | const previewDate = '01-12-2026'
  9   | const timeStart = '10:00'
  10  | const timeEnd = '12:00'
  11  | const teacher = 'John Doe'
  12  | const contactPhone = '12345567'
  13  | const contactEmail = 'john.doe@example.com'
  14  | 
  15  | test.describe('Test 2 - Create course', () => {
  16  | 
  17  |     test.beforeEach(async ({ page }) => {
  18  |         await page.goto('/')
  19  |         await login(page)
  20  |         const homePage = new HomePage(page)
> 21  |         await homePage.createCourseButton.click()
      |                                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  22  |     })
  23  | 
  24  |     test.describe('Create course form visibility', () => {
  25  | 
  26  |         test('should show the create course form', async ({ page }) => {
  27  |             const homePage = new HomePage(page)
  28  |             await expect(homePage.formCard).toBeVisible()
  29  |         })
  30  | 
  31  |         test('should show the course name input', async ({ page }) => {
  32  |             const homePage = new HomePage(page)
  33  |             await expect(homePage.courseNameInput).toBeVisible()
  34  |         })
  35  | 
  36  |         test('should show the description input', async ({ page }) => {
  37  |             const homePage = new HomePage(page)
  38  |             await expect(homePage.descriptionInput).toBeVisible()
  39  |         })
  40  | 
  41  |         test('should show the image upload button', async ({ page }) => {
  42  |             const homePage = new HomePage(page)
  43  |             await expect(homePage.uploadImageButton).toHaveText('Upload an image')
  44  |         })
  45  | 
  46  |         test('should show the submit button', async ({ page }) => {
  47  |             const homePage = new HomePage(page)
  48  |             await homePage.submitButton.scrollIntoViewIfNeeded()
  49  |             await expect(homePage.submitButton).toBeVisible()
  50  |         })
  51  | 
  52  |         test('should show the course type radio buttons', async ({ page }) => {
  53  |             const homePage = new HomePage(page)
  54  |             await expect(homePage.radioWorkshop).toBeVisible()
  55  |             await expect(homePage.radioHandsOn).toBeVisible()
  56  |             await expect(homePage.radioDiscussion).toBeVisible()
  57  |             await expect(homePage.radioTheory).toBeVisible()
  58  |         })
  59  | 
  60  |         test('should show the location select', async ({ page }) => {
  61  |             const homePage = new HomePage(page)
  62  |             await expect(homePage.locationSelect).toBeVisible()
  63  |         })
  64  | 
  65  |         test('should show the date input', async ({ page }) => {
  66  |             const homePage = new HomePage(page)
  67  |             await expect(homePage.dateInput).toBeVisible()
  68  |         })
  69  | 
  70  |         test('should show the time start input', async ({ page }) => {
  71  |             const homePage = new HomePage(page)
  72  |             await expect(homePage.timeStartInput).toBeVisible()
  73  |         })
  74  | 
  75  |         test('should show the time end input', async ({ page }) => {
  76  |             const homePage = new HomePage(page)
  77  |             await expect(homePage.timeEndInput).toBeVisible()
  78  |         })
  79  | 
  80  |         test('should show the teacher input', async ({ page }) => {
  81  |             const homePage = new HomePage(page)
  82  |             await expect(homePage.teacherInput).toBeVisible()
  83  |         })
  84  | 
  85  |         test('should show the contact phone input', async ({ page }) => {
  86  |             const homePage = new HomePage(page)
  87  |             await expect(homePage.phoneInput).toBeVisible()
  88  |         })
  89  | 
  90  |         test('should show the contact email input', async ({ page }) => {
  91  |             const homePage = new HomePage(page)
  92  |             await expect(homePage.emailInput).toBeVisible()
  93  |         })
  94  |     })
  95  | 
  96  |     test.describe('Create course and see it added to the list', () => {
  97  | 
  98  |         test('should create a course and see it in the list', async ({ page }) => {
  99  |             const homePage = new HomePage(page)
  100 | 
  101 |             await inputCreateForm(page)
  102 |             await homePage.submitButton.click()
  103 | 
  104 |             await expect(homePage.courseNamePreview).toHaveText(courseName)
  105 |             await expect(homePage.courseDescriptionPreview).toContainText(description)
  106 |             await expect(homePage.courseLocation).toContainText(location)
  107 |             await expect(homePage.courseTeacher).toContainText(teacher)
  108 |             await expect(homePage.courseDate).toContainText(previewDate)
  109 |             await expect(homePage.courseTime).toContainText(`${timeStart} - ${timeEnd}`)
  110 |             await expect(homePage.courseType).toContainText('Theory')
  111 |             await expect(homePage.coursePhone).toContainText(contactPhone)
  112 |             await expect(homePage.courseEmail).toContainText(contactEmail)
  113 | 
  114 |             await homePage.approveButton.click()
  115 | 
  116 |             await expect(homePage.cardComponentContainer).toContainText(courseName)
  117 |         })
  118 |     })
  119 | })
```