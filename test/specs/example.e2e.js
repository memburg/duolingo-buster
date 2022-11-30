const LoginPage = require('../pageobjects/login.page');
const LearnPage = require('../pageobjects/learn.page');

describe('Duolingo login', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(
            'sonowsnccwzfhhdvqq@tmmbt.net',
            'SuperSecretPassword!'
        );
    });
});
