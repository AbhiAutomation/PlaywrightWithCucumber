import { When, Given, Then } from "@cucumber/cucumber"
import { chromium, Page, Browser, BrowserContext,expect } from "@playwright/test"
// Global variables to share the browser and page across steps
let browser: Browser;
let page: Page;

Given('a Login to Ecomrcs application  with {string} and  {string}', async function (email, pass) {
    // Write code here that turns the phrase above into concrete actions

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    const products = page.locator("div.card-body");
    email = "aks.igec@gmail.com"
    pass = "Ashish@1234"
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("input#userEmail").fill(email);
    await page.locator("input#userEmail").fill(email);
    await page.locator("input#userEmail").fill(email);

    
    await page.locator("input#userPassword").fill(pass);
    await page.locator("input#login").click();
    console.log(await page.locator("div.card-body b").first().textContent());
    return 'pending';
});