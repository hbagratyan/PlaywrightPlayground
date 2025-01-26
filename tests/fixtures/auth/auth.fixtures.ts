// import { test as base } from '@playwright/test';
// import { QwintryAuthPage } from '../../page-objects/qwintry/auth/qwintry.auth.page';
//
// interface AuthFixtures {
//     qwintryAuthPage: QwintryAuthPage;
// }
//
// export const test = base.extend<AuthFixtures>({
//     authInit: [
//         async ({ browser }, use): Promise<void> => {
//             const authInit = await AuthInit.create(browser);
//             await use(authInit);
//             await authInit.currentPage.close();
//         },
//         { auto: true },
//     ],
//
//     mainPage: async ({ authInit, authApiHelper }, use) => {
//         await use(new MainPage(authInit.page, authInit.context, ENV.SHOWCASE_URL || '', authApiHelper));
//     },
//
//     profilePage: async ({ authInit, authApiHelper }, use) => {
//         await use(new ProfilePage(authInit.page, ENV.SHOWCASE_URL || '', authApiHelper));
//     },
//
//     qwintryAuthPage: async ({ authInit }, use) => {
//         await use(new QwintryAuthPage(authInit.page, ENV.VENDOR_URL || ''));
//     },
//
//     vendorProfilePage: async ({ authInit }, use) => {
//         await use(new VendorProfilePage(authInit.page, ENV.VENDOR_URL || ''));
//     },
//
//     authApiHelper: async ({ request, authInit }, use) => {
//         await use(new AuthApiHelper(request, authInit.context, ENV.AUTH_URL || ''));
//     },
//
//     commonHelper: async ({}, use) => {
//         await use(new CommonHelper());
//     },
//
//     museMainPage: async ({ authInit, authApiHelper }, use) => {
//         await use(new MuseMainPage(authInit.page, authInit.context, ENV.MUSE_URL || '', authApiHelper));
//     },
//
//     generate: async ({}, use) => {
//         await use(new DataGenerator());
//     },
// });
