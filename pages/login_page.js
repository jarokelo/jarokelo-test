export class LoginPage {

    constructor(page) {
        this.page = page;
        this.clearCookie = page.locator('id=cookieReject');
        this.userMenuIcon = page.locator('.header__user-menu__menu-icon');
        this.loginIcon = page.getByRole('link', { name: 'Belépek' });
        this.emailTextbox = page.locator('id=loginform-email');
        this.passwordTextbox = page.locator('id=loginform-password');
        this.loginSubmitButton = page.getByRole('button', { name: 'Bejelentkezés' });
        this.userImage = page.locator('.header__user-menu__menu-icon');
        this.userProfile = page.getByRole('link', { name: 'Belépek' });
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
        await this.loginIcon.click();
    }
}
