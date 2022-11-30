const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('//input[@placeholder="Email or username"]');
    }

    get inputPassword() {
        return $('//input[@placeholder="Password"]');
    }

    get btnLogin() {
        return $('//button[@data-test="register-button"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        await browser.pause(10000);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('?isLoggingIn=true');
    }
}

module.exports = new LoginPage();
