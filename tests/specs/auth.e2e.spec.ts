import {test} from '../fixtures/auth/auth.fixtures';
import {expect} from '@playwright/test';

let email = "vasya.pupkin@mail.ru"
let password = "Qwerty123-"

test.describe('Авторизация', () => {
    test.afterEach(async ({lumaAuthPage}) => {
        await lumaAuthPage.page.context().clearCookies();
    });

    test('Ввод корректных логина и пароля пользователя', async ({lumaAuthPage}) => {
        await lumaAuthPage.open();
        await lumaAuthPage.login(email, password);
        await expect(lumaAuthPage.signInButton.getLocator).toBeHidden();
    });
});

