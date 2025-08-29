import { expect, test } from '@playwright/test';
import { MainPage } from '../pages/main_page';
import { LoginPage } from '../pages/login_page';
import { ProfileManagementPage } from '../pages/profile_management_page';
import { ProfilePage } from '../pages/profile_page';
import dotenv from 'dotenv';

dotenv.config();

const VALID_EMAIL = process.env.USER_EMAIL;
const VALID_PASSWORD = process.env.USER_PASSWORD;
const FIVE_SECONDS = 5_000;
const AUTH_TOKEN = process.env.JK_AUTH_TOKEN;

test.beforeEach(async ({ page }) => {
    const Login = new LoginPage(page);
    await page.setExtraHTTPHeaders({
        'Authorization': `Bearer ${AUTH_TOKEN}`
    });
    await Login.gotoLoginPage();
    await Login.clearCookies();
    await Login.emailTextbox.fill(VALID_EMAIL);
    await Login.passwordTextbox.fill(VALID_PASSWORD);
    await Login.loginSubmitButton.click();
    await page.waitForLoadState('networkidle', { timeout: FIVE_SECONDS });

});

const profileImages = [
    './images/profile1.png',
    './images/profile2.png',
];

for (const image of profileImages) {
    test(`Profile picture upload and visual verification test with image: ${image}`, async ({ page }) => {
        const main = new MainPage(page);
        const profile = new ProfilePage(page);
        const profile_management = new ProfileManagementPage(page);
        await main.userMenu.click();
        await profile.editMyProfile.click();
        await page.setInputFiles('input[type="file"]', image);
        await page.reload();
        await expect(profile_management.profilePicture).toBeVisible();
        await expect(profile_management.profilePicture).toHaveScreenshot(`${image.split('/').pop()}.png`);
    });
}
