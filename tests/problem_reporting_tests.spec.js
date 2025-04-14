import { expect, test } from "@playwright/test";
import { MainPage } from "../pages/main_page";
import { LoginPage } from "../pages/login_page";
import { ProblemReportingPage } from "../pages/problem_reporting_page";
const fs = require('fs');
import dotenv from 'dotenv';

dotenv.config();

const VALID_EMAIL = process.env.USER_EMAIL;
const VALID_PASSWORD = process.env.USER_PASSWORD;

test.beforeEach(async ({ page }) => {
    const Main = new MainPage(page);
    const Login = new LoginPage(page);
    await Main.gotoBaseUrl();
    await Main.clearCookies();
    await Login.gotoLoginPage();
    await Login.emailTextbox.fill(VALID_EMAIL);
    await Login.passwordTextbox.fill(VALID_PASSWORD);
    await Login.loginSubmitButton.click();

});

test('Automated report', async ({ page }, testInfo) => {
    const reportingPage = new ProblemReportingPage(page);
    const categoryData = JSON.parse(fs.readFileSync('./fixtures/problem_category.json', 'utf-8'));
    const categories = categoryData.categories;
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    await page.getByRole('link', { name: 'Bejelentek egy problémát' }).click();
    await page.waitForTimeout(1000);
    await reportingPage.selectCategory(randomCategory);

    await reportingPage.reportName.fill('Lorem ipsum dolor sit amet, consectetur adipisicing elit');
    await reportingPage.reportDescription.fill('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

    const cityData = JSON.parse(fs.readFileSync('./fixtures/city.json', 'utf-8'));
    const cities = cityData.cities;
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    await reportingPage.selectCity(randomCity);

    const picturePath = './images/report.jpg';
    await page.setInputFiles('input[type="file"]', picturePath);
    await reportingPage.submitButton.click();

    await page.waitForURL('https://staging.jarokelo.hu/problema-bejelentese/sikeres?scenario=default', { timeout: 5000 });

    console.log(`Selected category: ${randomCategory}`, `Selected city: ${randomCity}`);
    testInfo.annotations.push({ type: 'SelectedCategory', description: randomCategory });
    testInfo.annotations.push({ type: 'SelectedCity', description: randomCity });
});
