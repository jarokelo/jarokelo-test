export class LoginPage {

    constructor(page) {
        this.page = page;
        this.clearCookie = page.locator('id=cookieReject');
        this.userMenuIcon = page.locator('.header__user-menu__menu-icon');
        this.loginIcon = page.getByRole('link', { name: 'Belépés' });
        this.emailTextbox = page.locator('id=loginform-email');
        this.passwordTextbox = page.locator('id=loginform-password');
        this.loginSubmitButton = page.getByRole('button', { name: 'Bejelentkezés' });
        this.showPasswordIcon = page.locator('#login-form').getByRole('img').nth(1);
        this.googleLoginButton = page.getByRole('link', { name: 'Google fiókoddal' });
        this.rememberMeCheckbox = page.locator('.checkbox');
        this.forgottenPasswordLink = page.getByRole('link', { name: 'Elfelejtetted a jelszavad?' });
        this.signUpLink = page.getByRole('link', { name: 'Regisztrálj!' });
        this.cookieIcon = page.locator('id=cookieIcon');
    }

    async gotoBaseUrl() {
        await this.page.goto('/');
    }

    async clearCookies() {
        await this.clearCookie.click();
    }

    async gotoLoginPage() {
        await this.page.goto('/bejelentkezes');
    }

    async login(email, password) {
        await this.emailTextbox.fill(email);
        await this.passwordTextbox.fill(password);
        await this.loginSubmitButton.click();
    }
}
