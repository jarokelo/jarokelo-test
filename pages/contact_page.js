export class ContactPage {
    constructor(page) {
        this.page = page;
        this.clearCookie = page.locator('id=cookieReject');
        this.contactSubmitForm = page.locator('id=contact-submit-form');
        this.contactFormName = page.locator('id=contactform-name');
        this.contactFormEmail = page.locator('id=contactform-email');
        this.contactFormMessage = page.locator('id=contactform-message');
        this.contactFormPrivacyPolicyCheckbox = page.locator('label').filter({ hasText: 'Elfogadom az adatkezelési táj' }).locator('div').first();
        this.contactFormRecaptcha = page.locator('id=contactform-recaptcha');
        this.contactFormSubmitButton = page.getByRole('button', { name: 'Üzenet küldése' });
        this.facebookLink = page.getByRole('main').getByRole('link', { name: 'Kövess minket Facebookon!' });
        this.instagramLink = page.getByRole('main').getByRole('link', { name: 'Kövess minket Instagramon!' });
        this.linkedInLink = page.getByRole('main').getByRole('link', { name: 'Kövess minket LinkedInen!' });
    }

    async clearCookies() {
        await this.clearCookie.click();
    }

    async gotoContactPage() {
        await this.page.goto('/rolunk/kapcsolat');
    }
}
