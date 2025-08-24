export class ProfilePage {
    constructor(page) {
        this.page = page;
        this.clearCookie = page.locator('id=cookieReject');
        this.userName = page.getByRole('heading', { name: 'Lohár Antal' });
        this.myCitySelect = page.getByRole('link', { name: 'Állítsd be a településed' });
        this.myProblemReports = page.getByRole('link', { name: 'Bejelentéseim' });
        this.myDrafts = page.getByRole('link', { name: 'Piszkozataim' });
        this.editMyProfile = page.getByRole('link', { name: 'Profilom módosítása' });
        this.logoutLink = page.getByRole('link', { name: 'Kilépés' })
        this.allMyReportsDropdown = page.locator('#reportsearchprofile-status');
        this.myReportsDropDown = page.locator('#reportsearchprofile-ownorfollowed');
    }

    async clearCookies() {
        await this.clearCookie.click();
    }

    async gotoProfilePage() {
        await this.page.goto('/profil');
    }
}
