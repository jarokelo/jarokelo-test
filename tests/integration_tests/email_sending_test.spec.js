import { expect, test, request as playwrightRequest } from '@playwright/test';
import { ContactPage } from '../../pages/contact_page';
import dotenv from 'dotenv';

dotenv.config();

const TEST_EMAIL = process.env.TEST_EMAIL;
const TEST_USERNAME = process.env.TEST_USERNAME;
const MAILPIT_API_MESSAGES_URL = process.env.MAILPIT_API_MESSAGES_URL;
const EMAIL_MESSAGE = 'Verification of email delivery via API';
const AUTH_TOKEN = process.env.JK_AUTH_TOKEN;
const TEST_TOKEN = process.env.JK_TEST_TOKEN;
const MAILPIT_SECRET_KEY = process.env.MAILPIT_SECRET_KEY;

test.beforeEach(async ({ page }) => {
    const contactPage = new ContactPage(page);
    await page.setExtraHTTPHeaders({
        'Authorization': `Bearer ${AUTH_TOKEN}`,
        'JK-E2E-TEST-TOKEN': TEST_TOKEN
    });
    await contactPage.gotoContactPage();
    await contactPage.clearCookies();
});

test('Email delivery verification test via API', async ({ page }) => {
    const contactPage = new ContactPage(page);
    const timeStamp = Date.now();
    await contactPage.contactFormName.fill(TEST_USERNAME);
    await contactPage.contactFormEmail.fill(TEST_EMAIL);
    await contactPage.contactFormMessage.fill(`${EMAIL_MESSAGE}, timestamp: ${timeStamp}`);
    await contactPage.contactFormPrivacyPolicyCheckbox.check();
    await contactPage.contactFormSubmitButton.click();

    const apiContext = await playwrightRequest.newContext({
        extraHTTPHeaders: {
            'X-Secret-Key': MAILPIT_SECRET_KEY
        }
    });
    const response = await apiContext.get(MAILPIT_API_MESSAGES_URL);
    const bodyText = await response.text();

    expect(response.ok()).toBeTruthy();

    const data = JSON.parse(bodyText);
    expect(data.messages.length).toBeGreaterThan(0);

    const lastMessage = data.messages[0];
    expect(lastMessage.Snippet).toContain(`${EMAIL_MESSAGE}, timestamp: ${timeStamp}`);

    await apiContext.dispose();
});
