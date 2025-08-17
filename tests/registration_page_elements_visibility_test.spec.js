import { expect, test } from '@playwright/test';
import { RegistrationPage } from '../pages/registration_page';
import dotenv from 'dotenv';

dotenv.config();

let Registration;
const AUTH_TOKEN = process.env.JK_AUTH_TOKEN;

test.describe('UI Elements Visibility', () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        Registration = new RegistrationPage(page);
        await page.setExtraHTTPHeaders({
            'Authorization': `Bearer ${AUTH_TOKEN}`
        });
        await Registration.gotoRegistrationPage();
        await Registration.clearCookies();
    });

    const elementsToTest = [
        { name: 'registrationLastName' },
        { name: 'registrationFirstName' },
        { name: 'registrationEmail' },
        { name: 'registrationPassword' },
        { name: 'registrationPasswordRepeat' },
        { name: 'googleLoginButton' },
        { name: 'togglePasswordIconFirst' },
        { name: 'togglePasswordIconSecond' },
        { name: 'privacyPolicyCheckbox' },
        { name: 'termsOfUseCheckbox' },
        { name: 'subscribeToNewsletterCheckbox' },
        { name: 'privacyPolicyLink' },
        { name: 'termsOfUseLink' },
        { name: 'registrationSubmitButton' },
        { name: 'loginLink' },
    ];

    for (const element of elementsToTest) {
        test(`${element.name} should be visible`, async () => {
            await expect(Registration[element.name]).toBeVisible();
        });
    }
});
