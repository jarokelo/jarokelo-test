const { MainPage } = require('../pages/main_page');
const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    const Main = new MainPage(page);
    await Main.gotoBaseUrl();
    await Main.clearCookies();
    await page.waitForTimeout(1000);
});

const elementsToTest = [
    { name: 'Belépek_button', action: null },
    { name: 'cookie_icon', action: null },
    { name: 'járókelő_logo', action: null },
    { name: 'Új_bejelentés_dropdown', action: null },
    { name: 'Új_bejelentés_navigation_link', action: 'Új_bejelentés_dropdown' },
    { name: 'Hogyan_működik_navigation_link', action: 'Új_bejelentés_dropdown' },
    { name: 'Bejelentések_dropdown', action: null },
    { name: 'Korábbi_bejelentések_navigation_link', action: 'Bejelentések_dropdown' },
    { name: 'Térképes_kereső_navigation_link', action: 'Bejelentések_dropdown' },
    { name: 'Statisztikák_navigation_link', action: 'Bejelentések_dropdown' },
    { name: 'Támogass_dropdown', action: null },
    { name: 'Támogass_navigation_link', action: 'Támogass_dropdown' },
    { name: 'Csatlakozz_navigation_link', action: 'Támogass_dropdown' },
    { name: 'Egy_százalék_navigation_link', action: 'Támogass_dropdown' },
    { name: 'Önkormányzatoknak_navigation_link', action: 'Támogass_dropdown' },
    { name: 'Partnerek_és_támogatók_navigation_link', action: 'Támogass_dropdown' },
    { name: 'Egészséges_utcák_navigation_link', action: null },
    { name: 'Blog_navigation_link', action: null },
    { name: 'Rólunk_dropdown', action: null },
    { name: 'Mire_jó_a_járókelő_navigation_link', action: 'Rólunk_dropdown' },
    { name: 'Kapcsolat_navigation_link', action: 'Rólunk_dropdown' },
    { name: 'A_csapat_navigation_link', action: 'Rólunk_dropdown' },
    { name: 'Beszámolók_és_közhasznú_jelentések_navigation_link', action: 'Rólunk_dropdown' },
    { name: 'Adatkezelési_tájékoztató_navigation_link', action: 'Rólunk_dropdown' },
    { name: 'Felhasználási_feltételek_navigation_link', action: 'Rólunk_dropdown' },
    { name: 'Lájkolj_minket_a_facebookon_footer', action: null },
    { name: 'Kövess_minket_Instagramon_footer', action: null },
    { name: 'Kövess_minket_LinkedInen_footer', action: null },
    { name: 'Olvasd_a_blogunkat_footer', action: null },
    { name: 'Iratkozz_fel_RSS_feedünkre_footer', action: null },
    { name: 'Írj_nekünk_footer', action: null },
    { name: 'Csatlakozz_footer', action: null },
    { name: 'Segítséget_kérek_footer', action: null },
    { name: 'Hogyan_működik_footer', action: null },
    { name: 'Statisztika_footer', action: null },
    { name: 'A_csapat_footer', action: null },
    { name: 'Járókelő_widget_footer', action: null },
    { name: 'Beszámolók_és_közhasznú_jelentések_footer', action: null },
    { name: 'Támogatom_large_button', action: null },
    { name: 'Bejelentek_egy_problémát_large_button', action: null },
    { name: 'index_reports_data_container', action: null },
    { name: 'newsletter_subscribe_form', action: null },
];

test.describe('UI Elements Visibility', () => {
    for (const element of elementsToTest) {
        test(`${element.name} should be visible`, async ({ page }) => {
            const Main = new MainPage(page);

            if (element.action) {
                await Main[element.action].click();
            }

            await expect(Main[element.name]).toBeVisible();
        });
    }
});
