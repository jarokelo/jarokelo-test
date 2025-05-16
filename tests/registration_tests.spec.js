import { expect, test } from '@playwright/test';
import { RegistrationPage } from '../pages/registration_page';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

const LAST_NAME = process.env.LAST_NAME;
const FIRST_NAME = process.env.FIRST_NAME;
const TEST_TOKEN = process.env.JK_TEST_TOKEN;
const REGISTRATION_PASSWORD = process.env.REGISTRATION_PASSWORD;
const RANDOM_HASH = crypto.randomBytes(16).toString('hex');

test.beforeEach(async ({ page }) => {
    const Registration = new RegistrationPage(page);
    await page.setExtraHTTPHeaders({
        'JK-E2E-TEST-TOKEN': TEST_TOKEN
    });
    await Registration.gotoRegistrationPage();
    await Registration.clearCookies();

});

test('Automated registration', async ({ page }) => {
    const Registration = new RegistrationPage(page);
    await Registration.registrationLastName.fill(LAST_NAME);
    await Registration.registrationFirstName.fill(FIRST_NAME);
    await Registration.registrationEmail.fill(`e2e_test+${RANDOM_HASH}@jarokelo.hu`);
    await Registration.registrationPassword.fill(REGISTRATION_PASSWORD);
    await Registration.registrationPasswordRepeat.fill(REGISTRATION_PASSWORD);
    await Registration.privacyPolicyCheckbox.click();
    await Registration.termsOfUseCheckbox.click();
    await Registration.registrationSubmitButton.click();
    await expect(page.locator('body')).toContainText('Siker! A regisztrációd véglegesítéséhez kattints a linkre, amit a megadott email címre küldtünk neked.');
});
