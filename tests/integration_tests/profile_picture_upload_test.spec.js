import { expect, test } from '@playwright/test';
import { ProfileManagementPage } from '../../pages/profile_management_page';
import dotenv from 'dotenv';

dotenv.config();

const AUTH_TOKEN = process.env.JK_AUTH_TOKEN;

test.use({ storageState: 'playwright/.auth/user.json' });

test.beforeEach(async ({ page }) => {
    await page.setExtraHTTPHeaders({
        'Authorization': `Bearer ${AUTH_TOKEN}`
    });
});

const profileImages = [
    './images/profile1.png',
    './images/profile2.png',
];

for (const image of profileImages) {
    test(`Profile picture upload and visual verification test with image: ${image}`, async ({ page }) => {
        const profile_management = new ProfileManagementPage(page);
        await profile_management.gotoProfileManagementPage();
        await profile_management.clearCookies();
        await page.setInputFiles('input[type="file"]', image);
        await page.reload();
        await expect(profile_management.profilePicture).toBeVisible();
        await expect(profile_management.profilePicture).toHaveScreenshot(`${image.split('/').pop()}.png`);
    });
}
