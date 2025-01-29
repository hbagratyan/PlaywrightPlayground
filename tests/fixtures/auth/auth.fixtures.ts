import { test as base } from '@playwright/test';
import { LumaAuthPage } from '../../page-objects/luma/auth/lumaAuthPage';
import {AuthInit} from "../../page-objects/luma/auth/auth.init";

interface AuthFixtures {
    lumaAuthPage: LumaAuthPage;
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

    lumaAuthPage: async ({ authInit, baseURL }, use) => {
        await use(new LumaAuthPage(authInit.page, baseURL || 'https://magento.softwaretestingboard.com/customer/account/login'));
    }
});
