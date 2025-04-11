export class ProblemReportingPage {

    constructor(page) {
        this.page = page;
        this.reportCategory = page.locator('id=reportform-report_category_id');
        this.reportName = page.locator('id=reportform-name');
        this.reportDescription = page.locator('id=reportform-description');
        this.citySelect = page.locator('id=city-dropdown');
        this.problemLocation = page.locator('id=reportform-user_location');
        this.mapBox = page.locator('section').filter({ hasText: 'Helyszín Település * Válassz' }).locator('img')
        this.showOnMapButton = page.getByRole('button', { name: 'Mutasd a térképen' });
        this.fileUploadDropzone = page.locator('.file-upload');
        this.videoLinkInfo = page.getByRole('link', { name: 'Oszd meg a linkjét velünk!' });
        this.addVideoInput = page.locator('section').filter({ hasText: 'Képek * Dobd be ide a képeket' }).getByRole('textbox');
        this.lastName = page.locator('id=reportform-namelast');
        this.firstName = page.locator('id=reportform-namefirst');
        this.anonymousReportCheckbox = page.locator('.checkbox');
        this.submitButton = page.getByRole('button', { name: 'Elküldöm a bejelentést' });
    }

    async selectCategory(category) {
        await this.reportCategory.selectOption({ label: category });
    }
    async selectCity(city) {
        await this.citySelect.selectOption({ label: city });
    }
}
