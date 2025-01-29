import { test as base } from '@playwright/test';
import { QwintryAuthPage } from '../../page-objects/qwintry/auth/qwintry.auth.page';
import {AuthInit} from "../../page-objects/qwintry/auth/auth.init";

interface AuthFixtures {
    qwintryAuthPage: QwintryAuthPage;
    authInit: AuthInit
}

export const test = base.extend<AuthFixtures>({
    authInit: [
        async ({ browser }, use): Promise<void> => {
            const authInit = await AuthInit.create(browser);
            await use(authInit);
            await authInit.currentPage.close();
        },
        { auto: true },
    ],

    qwintryAuthPage: async ({ authInit, baseURL }, use) => {
        await use(new QwintryAuthPage(authInit.page, baseURL || 'https://www.epicgames.com/id/login'));
    }
});
