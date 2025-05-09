import { expect, test } from "@playwright/test";
import { MainPage } from "../pages/main_page";
import config from '../playwright.config.js';

const baseURL = config.use.baseURL;
const FIVE_SECONDS = 5_000;

test.beforeEach(async ({ page }) => {
    const Main = new MainPage(page);
    await Main.gotoBaseUrl();
    await Main.clearCookies();
});

const samePageElements = [
    {
        name: "loginButton_navigation",
        actions: ["loginButton"],
        expectedUrl: `${baseURL}bejelentkezes`,
    },
    {
        name: "jarokeloLogo_navigation",
        actions: ["jarokeloLogo"],
        expectedUrl: `${baseURL}`,
    },
    {
        name: "newReportLink_navigation",
        actions: ["reportDropdown", "newReportLink"],
        expectedUrl: `${baseURL}problema-bejelentese`,
    },
    {
        name: "howItWorksLink_navigation",
        actions: ["reportDropdown", "howItWorksLink"],
        expectedUrl: `${baseURL}problema-bejelentese/hogyan-mukodik`,
    },
    {
        name: "previousReportsLink_navigation",
        actions: ["reportDropdown", "previousReportsLink"],
        expectedUrl: `${baseURL}bejelentesek`,
    },
    {
        name: "mapSearchLink_navigation",
        actions: ["reportDropdown", "mapSearchLink"],
        expectedUrl: `${baseURL}bejelentesek/terkep`,
    },
    {
        name: "privateSupportLink_navigation",
        actions: ["supportUsDropdown", "privateSupportLink"],
        expectedUrl: `${baseURL}tamogass`,
    },
    {
        name: "companySupportLink_navigation",
        actions: ["supportUsDropdown", "companySupportLink"],
        expectedUrl: `${baseURL}vallalatok`,
    },
    {
        name: "supportersAndPartnersLink_navigation",
        actions: ["supportUsDropdown", "supportersAndPartnersLink"],
        expectedUrl:
            `${baseURL}tamogass/partnerek-es-tamogatok`,
    },
    {
        name: "volunteerLink",
        actions: ["volunteerLink"],
        expectedUrl: `${baseURL}csatlakozz`,
    },
    {
        name: "municipalPartnershipLink_navigation",
        actions: ["forMunicipalitiesDropdown", "municipalPartnershipLink"],
        expectedUrl: `${baseURL}tamogass/onkormanyzatoknak`,
    },
    {
        name: "blogLink_navigation",
        actions: ["blogLink"],
        expectedUrl: "https://jarokelo.hu/blog",
    },
    {
        name: "whatIsJarokeloGoodForLink_navigation",
        actions: ["aboutUsDropdown", "whatIsJarokeloGoodForLink"],
        expectedUrl: `${baseURL}rolunk/mire-jo-a-jarokelo`,
    },
    {
        name: "theTeamLink_navigation",
        actions: ["aboutUsDropdown", "theTeamLink"],
        expectedUrl: `${baseURL}rolunk/csapat`,
    },
    {
        name: "contactUsLink_navigation",
        actions: ["aboutUsDropdown", "contactUsLink"],
        expectedUrl: `${baseURL}rolunk/kapcsolat`,
    },
    {
        name: "reportProblemLargeButton_navigation",
        actions: ["reportProblemLargeButton"],
        expectedUrl: `${baseURL}problema-bejelentese`,
    },
    {
        name: "writeToUsFooterLink_navigation",
        actions: ["writeToUsFooterLink"],
        expectedUrl: `${baseURL}rolunk/kapcsolat`,
    },
    {
        name: "joinUsFooterLink_navigation",
        actions: ["joinUsFooterLink"],
        expectedUrl: `${baseURL}csatlakozz`,
    },
    {
        name: "supportUsFooterLink_navigation",
        actions: ["supportUsFooterLink"],
        expectedUrl: `${baseURL}tamogass`,
    },
    {
        name: "reportsAndPublicBenefitStatementsFooterLink_navigation",
        actions: ["reportsAndPublicBenefitStatementsFooterLink"],
        expectedUrl: `${baseURL}rolunk/egyesulet`,
    },
    {
        name: "privacyPolicyFooterLink_navigation",
        actions: ["privacyPolicyFooterLink"],
        expectedUrl: `${baseURL}rolunk/adatkezelesi-tajekoztato`,
    },
    {
        name: "termsOfUseFooterLink_navigation",
        actions: ["termsOfUseFooterLink"],
        expectedUrl: `${baseURL}rolunk/felhasznalasi-feltetelek`,
    },
];

const newPageElements = [
    {
        name: "healthyStreetsLink_navigation",
        actions: ["forMunicipalitiesDropdown", "healthyStreetsLink"],
        expectedUrl: "https://egeszsegesutcak.hu/",
    },
    {
        name: "followUsOnFacebookFooterLink_navigation",
        actions: ["followUsOnFacebookFooterLink"],
        expectedUrl: "https://www.facebook.com/jarokelohu",
    },
    {
        name: "followUsOnInstagramFooterLink_navigation",
        actions: ["followUsOnInstagramFooterLink"],
        expectedUrl: "https://www.instagram.com/jarokelo/",
    },
    {
        name: "followUsOnLinkedinFooterLink_navigation",
        actions: ["followUsOnLinkedinFooterLink"],
        expectedUrl: "https://www.linkedin.com/company/jarokelo-hu/",
    },
];

test.describe("Same page navigation test", () => {
    for (const element of samePageElements) {
        test(`${element.name} URL test`, async ({ page }) => {
            const Main = new MainPage(page);

            if (element.actions && element.actions.length > 0) {
                if (element.actions.length === 1) {
                    await Main[element.actions[0]].click();
                } else if (element.actions.length === 2) {
                    await Main[element.actions[0]].hover();
                    await Main[element.actions[1]].click();
                }
            }

            await page.waitForLoadState("networkidle", { timeout: FIVE_SECONDS });

            const pageUrl = page.url();
            expect(pageUrl).toBe(element.expectedUrl);
        });
    }
});

test.describe("New page navigation test", () => {
    for (const element of newPageElements) {
        test(`${element.name} URL test`, async ({ page, context }) => {
            const Main = new MainPage(page);

            let newPagePromise = context.waitForEvent("page");

            if (element.actions && element.actions.length > 0) {
                if (element.actions.length === 1) {
                    await Main[element.actions[0]].click();
                } else if (element.actions.length === 2) {
                    await Main[element.actions[0]].hover();
                    await Main[element.actions[1]].click();
                }
            }

            const newPage = await newPagePromise;
            await newPage.waitForLoadState();

            const actualUrl = newPage.url();
            expect(actualUrl).toBe(element.expectedUrl);
        });
    }
});
