import { test, expect } from '@playwright/test';


//test.describe.configure({mode:'parallel'})
//test.describe.configure({mode:'serial'})// it  will fail first then stopped the rest of  skipped 
test('@web First test', async ({ page }) => {
//  page.route('**/*.css', route => route.abort());
 // page.route('**/*.{jpg,png,jpeg}', route => route.abort());
  
  const products = page.locator("div.card-body");
  const email = "aks.igec@gmail.com";
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("input#userEmail").fill(email);
  await page.locator("input#userPassword").fill("Ashish@1234");
  await page.locator("input#login").click();
  console.log(await page.locator("div.card-body b").first().textContent());
  // expect(await page.locator("div.card-body b").textContent()).toBe("3");

  await page.waitForLoadState("networkidle");
  //Or
  await page.locator("div.card-body b").first().waitFor();
  const titles = await page.locator("div.card-body b").allTextContents();

  console.log(titles);
  const count = await products.count();
  for (let i = 0; i < count; i++) {
    if (await products.nth(i).locator("b").textContent() === "ADIDAS ORIGINAL") {
      //click on add to cart
      const addCartProduct = await products.nth(i).locator("button.w-10");
      console.log(await addCartProduct.textContent());
      await addCartProduct.click();
      break;

    }

  }
  await page.locator("button[routerlink*='cart']").click();
  await page.locator("div li").first().waitFor();// it will wait for the cart page to load
  const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
  expect(bool).toBeTruthy();
  page.locator("text=Checkout").click();
  //await page.pause();
 // page.locator("input[placeholder*='Country']").fill("ind",{delay:100});// fill is not working properly so we use type so inn this case we use new method pressSequentily
  page.locator("input[placeholder*='Country']").pressSequentially("Ind", { delay: 100} );
  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator("button").count();  
  for (let i = 0; i < optionsCount; i++) {
   let  text:any = await dropdown.locator("button").nth(i).textContent();
    if (text.trim() === "India") {
      await dropdown.locator("button").nth(i).click();
      break;
    }


  } 
  //expect(page.locator(".user__name [type='text']")).first().toHaveText(email);
  // page.locator("a.action__submit").click();
 // expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  let orderId : any = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  console.log(orderId);
  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = page.locator("tbody tr");
  const rowCount = await rows.count();   
  for (let i = 0; i < rowCount; i++) {
    const rowOrderId = await rows.nth(i).locator("th").textContent(); 
    if ( orderId.includes(rowOrderId)) {
      await rows.nth(i).locator("button").first().click();
      break;  
    }
  } 

    });


test('First Second', async ({  page }) => {
 // page.route('**/*.css', route => route.abort());
 // page.route('**/*.{jpg,png,jpeg}', route => route.abort());
  
  const products = page.locator("div.card-body");
  const email = "aks.igec@gmail.com";
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("input#userEmail").fill(email);
  await page.locator("input#userPassword").fill("Ashish@1234");
  await page.locator("input#login").click();
  console.log(await page.locator("div.card-body b").first().textContent());
  // expect(await page.locator("div.card-body b").textContent()).toBe("3");

  await page.waitForLoadState("networkidle");
  //Or
  await page.locator("div.card-body b").first().waitFor();
  const titles = await page.locator("div.card-body b").allTextContents();

  console.log(titles);
  const count = await products.count();
  for (let i = 0; i < count; i++) {
    if (await products.nth(i).locator("b").textContent() === "ADIDAS ORIGINAL") {
      //click on add to cart
      const addCartProduct = await products.nth(i).locator("button.w-10");
      console.log(await addCartProduct.textContent());
      await addCartProduct.click();
      break;

    }

  }
  await page.locator("button[routerlink*='cart']").click();
  await page.locator("div li").first().waitFor();// it will wait for the cart page to load
  const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
  expect(bool).toBeTruthy();
  page.locator("text=Checkout").click();
  //await page.pause();
 // page.locator("input[placeholder*='Country']").fill("ind",{delay:100});// fill is not working properly so we use type so inn this case we use new method pressSequentily
  page.locator("input[placeholder*='Country']").pressSequentially("Ind", { delay: 100} );
  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator("button").count();  
  for (let i = 0; i < optionsCount; i++) {
    let text1:any = await dropdown.locator("button").nth(i).textContent();
    if (text1.trim() === "India") {
      await dropdown.locator("button").nth(i).click();
      break;
    }


  } 
  //expect(page.locator(".user__name [type='text']")).first().toHaveText(email);
  // page.locator("a.action__submit").click();
  expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  let orderId:any = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  console.log(orderId);
  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = page.locator("tbody tr");
  const rowCount = await rows.count();   
  for (let i = 0; i < rowCount; i++) {
    let rowOrderId:any = await rows.nth(i).locator("th").textContent(); 
    if (orderId.includes(rowOrderId)) {
      await rows.nth(i).locator("button").first().click();
      break;  
    }
  } 

    });




