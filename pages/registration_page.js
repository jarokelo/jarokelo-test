export class RegistrationPage {

    constructor(page) {
        this.page = page;
        this.clearCookie = page.locator('id=cookieReject');
        this.registrationLastName = page.locator('id=registrationform-last_name');
        this.registrationFirstName = page.locator('id=registrationform-first_name');
        this.registrationEmail = page.locator('id=registrationform-email');
        this.registrationPassword = page.locator('id=registrationform-password');
        this.registrationPasswordRepeat = page.locator('id=registrationform-password_repeat');
        this.googleLoginButton = page.getByRole('link', { name: 'Google fiókoddal' });
        this.togglePasswordIconFirst = page.locator('#registration-form').getByRole('img').nth(1);
        this.togglePasswordIconSecond = page.locator('#registration-form').getByRole('img').nth(2);
        this.privacyPolicyCheckbox = page.locator('label').filter({ hasText: 'Hozzájárulok, hogy a Járókel' }).locator('div').first();
        this.termsOfUseCheckbox = page.locator('label').filter({ hasText: 'Elolvastam és megértettem a Járókelő felhasználási feltételeit.' }).locator('div').first();
        this.subscribeToNewsletterCheckbox = page.locator('label').filter({ hasText: 'Feliratkozom a Járókelő hí' }).locator('div').first();
        this.privacyPolicyLink = page.getByRole('link', { name: 'adatkezelési tájékoztatóját' });
        this.termsOfUseLink = page.getByRole('link', { name: 'felhasználási feltételeit' });
        this.registrationSubmitButton = page.getByRole('button', { name: 'Regisztráció' });
        this.loginLink = page.getByRole('link', { name: 'Lépj be!' });
    }

    async clearCookies() {
        await this.clearCookie.click();
    }

    async gotoRegistrationPage() {
        await this.page.goto('/regisztracio');
    }
}
