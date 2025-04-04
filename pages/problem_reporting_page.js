export class ProblemReportingPage {

    constructor(page) {
        this.page = page;
        this.reportCategory = page.locator('id=reportform-report_category_id');
        this.reportName = page.locator('id=reportform-name');
        this.reportDescription = page.locator('id=reportform-description');
        this.citySelect = page.locator('id=city-dropdown');
        this.problemLocation = page.locator('id=reportform-user_location');
        this.mapBox = page.locator('section').filter({ hasText: 'Helyszín Település * Válassz' }).locator('img')
        this.showOnMapButton = page.locator('xpath=//*[@id="report-create-form"]/div[3]/section[2]/div/div[1]/div[1]/div[3]/div[2]/div/button[2]');
        this.fileUploadDropzone = page.locator('xpath=//*[@id="report-create-form"]/div[3]/section[3]/div[1]/div[1]/div/div[3]/div');
        this.videoLinkInfo = page.locator('xpath=//*[@id="report-create-form"]/div[3]/section[3]/div[2]/div[1]/div[1]/div[1]/p/span[2]/a');
        this.addVideoInput = page.locator('xpath=//*[@id="report-create-form"]/div[3]/section[3]/div[2]/div[1]/div[1]/div[2]/div/input');
        this.lastName = page.locator('id=reportform-namelast');
        this.firstName = page.locator('id=reportform-namefirst');
        this.anonymousReportCheckbox = page.locator('.checkbox');
        this.submitButton = page.locator('xpath=//*[@id="report-create-form"]/div[3]/section[4]/div/div[1]/div[3]/div/button');
    }
}
