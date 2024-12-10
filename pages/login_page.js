const { expect } = require('@playwright/test');
exports.LoginPage = class LoginPage {
  
  
  
  constructor(page) {
    
    this.page = page;
    this.clearCookie = page.getByRole('button', { name: 'Elutasítom' });
    this.userMenuIcon = page.locator('.header__user-menu__menu-icon');
    this.loginLink = page.getByRole('link', { name: 'Belépek' });
    this.email_textbox = page.getByLabel('E-mail cím');
    this.password_textbox = page.getByLabel('Jelszó');
    this.login_submit_button = page.getByRole('button', { name: 'Bejelentkezés' });
  }
  
  async gotoBaseUrl(){
    await this.page.goto('https://jarokelo.hu/');
  }
  
  async clearCookies(){
    await this.clearCookie.click();
  }
  
  async gotoLoginPage(){
    await this.loginLink.click();
  }
    
  async login(email, password){
    await this.email_textbox.fill(email);
    await this.password_textbox.fill(password);
    await this.login_submit_button.click();
  }
}
  
    
    
    
  


      

      
      
      
      
    
    
    
    
    
    
    