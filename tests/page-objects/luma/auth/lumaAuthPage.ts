import { Input } from '../../../locators/input';
import { Button } from '../../../locators/button';
import { Page } from '@playwright/test';
import { Block } from '../../../locators/block';
import { BasePage } from '../base-page';

export class LumaAuthPage extends BasePage {
    baseURL: string;

    constructor(page: Page, baseURL: string) {
        super(page);
        this.baseURL = baseURL;
    }

    get emailField(): Input {
        return new Input(this.page.locator('[id="email"]'), 'Почта');
    }

    get passwordField(): Input {
        return new Input(this.page.locator('[id="pass"]'), 'Пароль');
    }

    get signInButton(): Button {
        return new Button(this.page.locator('[type="submit"]', {hasText: "Sign In"}), 'Войти');
    }

    async login(email: string, password: string): Promise<void> {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.signInButton.click();
    }

    async open(): Promise<void> {
        await this.page.goto(this.baseURL, {waitUntil: "domcontentloaded"});
    }
}
