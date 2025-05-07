export class MainPage {

    constructor(page) {
        this.page = page;
        this.clearCookie = page.locator('id=cookieReject');
        this.loginButton = page.getByRole('link', { name: 'Belépés' });
        this.cookieIcon = page.locator('#cookieMinimizeIcon #cookieIcon');
        this.jarokeloLogo = page.getByRole('heading', { name: 'Járókelő', exact: true }).getByRole('link');

        this.reportDropdown = page.getByRole('link', { name: 'Bejelentés', exact: true });
        this.newReportLink = page.getByRole('link', { name: 'Bejelentést teszek' });
        this.howItWorksLink = page.getByRole('link', { name: 'Mi történik a bejelentésemmel?' });
        this.mapSearchLink = page.getByRole('link', { name: 'Térképes kereső' });
        this.previousReportsLink = page.getByRole('link', { name: 'Korábbi bejelentések' });

        this.supportUsDropdown = page.getByRole('link', { name: 'Támogass', exact: true });
        this.privateSupportLink = page.getByRole('link', { name: 'Magánszemélyként segítek' });
        this.companySupportLink = page.getByRole('link', { name: 'Vállalatként segítek' });
        this.supportersAndPartnersLink = page.getByRole('link', { name: 'Támogatók és partnerek' });

        this.volunteerLink = page.getByRole('link', { name: 'Önkéntesség' });

        this.forMunicipalitiesDropdown = page.getByRole('link', { name: 'Önkormányzatoknak' });
        this.municipalPartnershipLink = page.getByRole('link', { name: 'Önkormányzati partnerség' });
        this.healthyStreetsLink = page.getByRole('link', { name: 'Egészséges utcák' });

        this.blogLink = page.getByRole('link', { name: 'Blog' });

        this.aboutUsDropdown = page.getByRole('link', { name: 'Rólunk', exact: true });
        this.whatIsJarokeloGoodForLink = page.getByRole('link', { name: 'Mire jó a Járókelő?' });
        this.theTeamLink = page.getByRole('link', { name: 'A csapat' });
        this.contactUsLink = page.getByRole('link', { name: 'Kapcsolat' });

        this.hundredThousandArticle = page.locator('xpath = /html/body / main / section / article');
        this.reportProblemLargeButton = page.getByRole('link', { name: 'Bejelentek egy problémát' });
        this.indexReportsDataContainer = page.locator('id=index-reports');
        this.NewsletterSubscribeForm = page.locator('id=mc_embed_shell');
        this.supportBox = page.locator('div').filter({ hasText: 'Támogasd a Járókelő működését' }).first();
        this.supportBoxMedia = page.getByRole('main').locator('iframe').contentFrame().locator('.ytp-cued-thumbnail-overlay-image');
        this.applicationBox = page.locator('div').filter({ hasText: 'Járókelő a mobilodon Használd' }).first();
        this.applicationBoxMedia = page.locator('aside').filter({ hasText: 'Járókelő a mobilodon Használd' }).locator('img');

        this.writeToUsFooterLink = page.getByRole('link', { name: 'Írj nekünk!' });
        this.joinUsFooterLink = page.getByRole('link', { name: 'Csatlakozz!' });
        this.supportUsFooterLink = page.getByRole('link', { name: 'Támogass!' });

        this.followUsOnFacebookFooterLink = page.getByRole('link', { name: 'Kövess minket Facebookon!' });
        this.followUsOnInstagramFooterLink = page.getByRole('link', { name: 'Kövess minket Instagramon!' });
        this.followUsOnLinkedinFooterLink = page.getByRole('link', { name: 'Kövess minket LinkedInen!' });

        this.reportsAndPublicBenefitStatementsFooterLink = page.getByRole('link', { name: 'Beszámolók és közhasznúsági' });
        this.privacyPolicyFooterLink = page.getByRole('link', { name: 'Adatkezelési tájékoztató', exact: true });
        this.termsOfUseFooterLink = page.getByRole('link', { name: 'Felhasználási feltételek' });
    }

    async gotoBaseUrl() {
        await this.page.goto('/');
    }

    async clearCookies() {
        await this.clearCookie.click();
    }
}
