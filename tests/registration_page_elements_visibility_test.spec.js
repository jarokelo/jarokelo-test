import { expect, test } from '@playwright/test';
import { MainPage } from '../pages/main_page';
import { RegistrationPage } from '../pages/registration_page';
import { LoginPage } from '../pages/login_page';

test.beforeEach(async ({ page }) => {
    const Main = new MainPage(page);
    const Login = new LoginPage(page);
    await Main.gotoBaseUrl();
    await Main.clearCookies();
    await Main.loginButton.click();
    await Login.signUpLink.click();
    await page.waitForURL('https://staging.jarokelo.hu/regisztracio', { timeout: 2200 });
});

test('Registration page elements are visible', async ({ page }) => {
    const Registration = new RegistrationPage(page);
    await expect(Registration.registrationLastName).toBeVisible();
    await expect(Registration.registrationFirstName).toBeVisible();
    await expect(Registration.registrationEmail).toBeVisible();
    await expect(Registration.registrationPassword).toBeVisible();
    await expect(Registration.registrationPasswordRepeat).toBeVisible();
    await expect(Registration.cookieIcon).toBeVisible();
    await expect(Registration.googleLoginButton).toBeVisible();
    await expect(Registration.togglePasswordIconFirst).toBeVisible();
    await expect(Registration.togglePasswordIconSecond).toBeVisible();
    await expect(Registration.privacyPolicyCheckbox).toBeVisible();
    await expect(Registration.termsOfUseCheckbox).toBeVisible();
    await expect(Registration.subscribeToNewsletterCheckbox).toBeVisible();
    await expect(Registration.privacyPolicyLink).toBeVisible();
    await expect(Registration.termsOfUseLink).toBeVisible();
    await expect(Registration.registrationSubmitButton).toBeVisible();
    await expect(Registration.loginLink).toBeVisible();
});
