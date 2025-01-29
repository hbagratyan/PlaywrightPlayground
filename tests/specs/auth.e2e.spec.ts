import {test} from '../fixtures/auth/auth.fixtures';
import {expect} from '@playwright/test';

let email = "vasya"
let password = "pupkin"

test.describe('Авторизация', () => {
    test.afterEach(async ({qwintryAuthPage}) => {
        await qwintryAuthPage.page.context().clearCookies();
    });

    test.only('Ввод корректных логина и пароля пользователя', async ({qwintryAuthPage}) => {
        await qwintryAuthPage.open();
        await qwintryAuthPage.login(email, password);
        await expect(qwintryAuthPage.signInButton.getLocator).toBeHidden();
    });
});

