export class ProfileManagementPage {
    constructor(page) {
        this.page = page;
        this.clearCookie = page.locator('id=cookieReject');
        this.profilePicture = page.locator('img').nth(2);
        this.settlementDropdown = page.getByLabel('Település');
        this.myReportsCheckbox = page.locator('label').filter({ hasText: 'Saját bejelentésekBejelenté' }).locator('div').nth(1);
        this.followedReportsCheckbox = page.locator('label').filter({ hasText: 'Követett bejelentésekBejelent' }).locator('div').nth(1);
        this.noNotificationRadiobutton = page.locator('label').filter({ hasText: 'Nincs értesítés.' }).locator('div').first();
        this.immediatelyNotificationRadiobutton = page.locator('label').filter({ hasText: 'AzonnalAmint történik aktivit' }).locator('div').nth(1);
        this.notificationSaveButton = page.locator('#user-notification-form').getByRole('button', { name: 'Mentem a módosításokat' });
        this.newsletterSubscriptionFormLastName = page.locator('#newslettersubscriptionform-last_name');
        this.newsletterSubscriptionFormFirstName = page.locator('#newslettersubscriptionform-first_name');
        this.newsletterSubscriptionFormEmail = page.locator('#newslettersubscriptionform-email');
        this.newsletterSubscriptionCheckbox = page.locator('.form__row > .checkbox')
        this.newsletterSubscriptionFormSubmitButton = page.locator('#newsletter-subscription-form').getByRole('button', { name: 'Mentem a módosításokat' });
        this.newProfileImageUploadButton = page.getByText('Új kép feltöltése');
        this.userInfoFormLastName = page.locator('#userinfochangeform-last_name');
        this.userInfoFormFirstName = page.locator('#userinfochangeform-first_name');
        this.userInfoFormEmail = page.locator('#userinfochangeform-email');
        this.userInfoFormSubmitButton = page.locator('#user-manage-form').getByRole('button', { name: 'Mentem a módosításokat' });
        this.passwordChangeFormOldPassword = page.locator('#passwordchangeform-old_password');
        this.passwordChangeFormNewPassword = page.locator('#passwordchangeform-new_password');
        this.passwordChangeFormNewPasswordRepeat = page.getByLabel('Jelszó még egyszer');
        this.passwordChangeFormSubmitButton = page.getByRole('button', { name: 'Beállítom jelszónak' });
    }

    async clearCookies() {
        await this.clearCookie.click();
    }

    async gotoProfileManagementPage() {
        await this.page.goto('/profil/kezeles');
    }
}
