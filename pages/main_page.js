const { expect } = require('@playwright/test');
exports.MainPage = class MainPage {
  
  
  
  constructor(page) {
    
    this.page = page;
    this.clearCookie = page.locator('id=cookieReject');
    this.userMenuIcon = page.locator('xpath=/html/body/header/div/div/a[2]');
    this.userImage = page.locator('xpath=/html/body/header/div/div/a[2]/img');
    this.userProfile = page.locator('xpath=//*[@id="w1"]/li/a');
    this.cookieIcon = page.locator('id=cookieIcon');

    this.járókelő_logo = page.locator('xpath=/html/body/header/div/h1/a/svg/use');

    this.Új_bejelentés_dropdown = page.locator('xpath=/html/body/header/div/nav/ul/li[1]/a');
    this.Új_bejelentés_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[1]/div/ul/li[1]/a');
    this.Hogyan_működik_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[1]/div/ul/li[2]/a');

    this.Belentések_dropdown = page.locator('xpath=/html/body/header/div/nav/ul/li[2]/a');
    this.Korábbi_bejelentések_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[2]/div/ul/li[1]/a');
    this.Térképes_kereső_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[2]/div/ul/li[2]/a');
    this.Statisztikák_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[2]/div/ul/li[3]/a');

    this.Támogass_dropdown = page.locator('xpath=/html/body/header/div/nav/ul/li[4]/a');
    this.Támogass_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[4]/div/ul/li[1]/a/span');
    this.Csatlakozz_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[4]/div/ul/li[2]/a/span');
    this.Egy_százalék_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[4]/div/ul/li[3]/a/span');
    this.Önkormányzatoknak_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[4]/div/ul/li[4]/a/span');
    this.Partnerek_és_támogatók_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[4]/div/ul/li[5]/a/span');

    this.Egészséges_utcák_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[5]/a');

    this.Blog_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[6]/a');

    this.Rólunk_dropdown = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/a');
    this.Mire_jó_a_járókelő_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/div/ul/li[1]/a');
    this.Kapcsolat_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/div/ul/li[3]/a');
    this.A_csapat_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/div/ul/li[4]/a');
    this.Beszámolók_és_közhasznú_jelentések_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/div/ul/li[5]/a');
    this.Adatkezelési_tájékoztató_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/div/ul/li[6]/a');
    this.Felhasználási_feltételek_navigation_link = page.locator('xpath=/html/body/header/div/nav/ul/li[7]/div/ul/li[7]/a');
  }
}




    
    
    
    
    