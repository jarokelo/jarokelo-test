export class ProblemReportingPage {

    constructor(page) {
        this.page = page;
        this.clearCookie = page.locator('id=cookieReject');
        this.reportName = page.locator('id=reportform-name');
        this.reportDescription = page.locator('id=reportform-description');
        this.citySelect = page.locator('id=city-dropdown');
        this.problemLocation = page.locator('id=reportform-user_location');
        this.mapBox = page.locator('section').filter({ hasText: 'Helyszín Település * Válassz' }).locator('img')
        this.showOnMapButton = page.getByRole('button', { name: 'Mutasd a térképen' });
        this.fileUploadDropzone = page.locator('.file-upload');
        this.videoLinkInfo = page.getByRole('link', { name: 'Oszd meg a linkjét velünk!' });
        this.lastName = page.locator('id=reportform-namelast');
        this.firstName = page.locator('id=reportform-namefirst');
        this.anonymousReportCheckbox = page.locator('.checkbox');
        this.submitButton = page.getByRole('button', { name: 'Elküldöm a bejelentést' });
    }

    async clearCookies() {
        await this.clearCookie.click();
    }
    async gotoProblemReportingPage() {
        await this.page.goto('/problema-bejelentese');
    }
    async selectCity(city) {
        await this.citySelect.selectOption({ label: city });
    }
}
