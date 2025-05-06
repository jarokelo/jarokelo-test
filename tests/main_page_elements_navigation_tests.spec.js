import { expect, test } from "@playwright/test";
import { MainPage } from "../pages/main_page";

test.beforeEach(async ({ page }) => {
    const Main = new MainPage(page);
    await Main.gotoBaseUrl();
    await Main.clearCookies();
});

const samePageElements = [
    {
        name: "loginButton_navigation",
        actions: ["loginButton"],
        expectedUrl: "https://staging.jarokelo.hu/bejelentkezes",
    },
    {
        name: "jarokeloLogo_navigation",
        actions: ["jarokeloLogo"],
        expectedUrl: "https://staging.jarokelo.hu/",
    },
    {
        name: "newReportLink_navigation",
        actions: ["reportDropdown", "newReportLink"],
        expectedUrl: "https://staging.jarokelo.hu/problema-bejelentese",
    },
    {
        name: "howItWorksLink_navigation",
        actions: ["reportDropdown", "howItWorksLink"],
        expectedUrl:
            "https://staging.jarokelo.hu/problema-bejelentese/hogyan-mukodik",
    },
    {
        name: "previousReportsLink_navigation",
        actions: ["reportDropdown", "previousReportsLink"],
        expectedUrl: "https://staging.jarokelo.hu/bejelentesek",
    },
    {
        name: "mapSearchLink_navigation",
        actions: ["reportDropdown", "mapSearchLink"],
        expectedUrl: "https://staging.jarokelo.hu/bejelentesek/terkep",
    },
    {
        name: "privateSupportLink_navigation",
        actions: ["supportUsDropdown", "privateSupportLink"],
        expectedUrl: "https://staging.jarokelo.hu/tamogass",
    },
    {
        name: "companySupportLink_navigation",
        actions: ["supportUsDropdown", "companySupportLink"],
        expectedUrl: "https://staging.jarokelo.hu/vallalatok",
    },
    {
        name: "supportersAndPartnersLink_navigation",
        actions: ["supportUsDropdown", "supportersAndPartnersLink"],
        expectedUrl:
            "https://staging.jarokelo.hu/tamogass/partnerek-es-tamogatok",
    },
    {
        name: "volunteerLink",
        actions: ["volunteerLink"],
        expectedUrl: "https://staging.jarokelo.hu/csatlakozz",
    },
    {
        name: "municipalPartnershipLink_navigation",
        actions: ["forMunicipalitiesDropdown", "municipalPartnershipLink"],
        expectedUrl: "https://staging.jarokelo.hu/tamogass/onkormanyzatoknak",
    },
    {
        name: "blogLink_navigation",
        actions: ["blogLink"],
        expectedUrl: "https://jarokelo.hu/blog",
    },
    {
        name: "whatIsJarokeloGoodForLink_navigation",
        actions: ["aboutUsDropdown", "whatIsJarokeloGoodForLink"],
        expectedUrl: "https://staging.jarokelo.hu/rolunk/mire-jo-a-jarokelo",
    },
    {
        name: "theTeamLink_navigation",
        actions: ["aboutUsDropdown", "theTeamLink"],
        expectedUrl:
            "https://staging.jarokelo.hu/rolunk/csapat",
    },
    {
        name: "contactUsLink_navigation",
        actions: ["aboutUsDropdown", "contactUsLink"],
        expectedUrl:
            "https://staging.jarokelo.hu/rolunk/kapcsolat",
    },
    {
        name: "reportProblemLargeButton_navigation",
        actions: ["reportProblemLargeButton"],
        expectedUrl: "https://staging.jarokelo.hu/problema-bejelentese",
    },
    {
        name: "writeToUsFooterLink_navigation",
        actions: ["writeToUsFooterLink"],
        expectedUrl: "https://staging.jarokelo.hu/rolunk/kapcsolat",
    },
    {
        name: "joinUsFooterLink_navigation",
        actions: ["joinUsFooterLink"],
        expectedUrl: "https://staging.jarokelo.hu/csatlakozz",
    },
    {
        name: "supportUsFooterLink_navigation",
        actions: ["supportUsFooterLink"],
        expectedUrl:
            "https://staging.jarokelo.hu/tamogass",
    },
    {
        name: "reportsAndPublicBenefitStatementsFooterLink_navigation",
        actions: ["reportsAndPublicBenefitStatementsFooterLink"],
        expectedUrl:
            "https://staging.jarokelo.hu/rolunk/egyesulet",
    },
    {
        name: "privacyPolicyFooterLink_navigation",
        actions: ["privacyPolicyFooterLink"],
        expectedUrl: "https://staging.jarokelo.hu/rolunk/adatkezelesi-tajekoztato",
    },
    {
        name: "termsOfUseFooterLink_navigation",
        actions: ["termsOfUseFooterLink"],
        expectedUrl: "https://staging.jarokelo.hu/rolunk/felhasznalasi-feltetelek",
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
