import { test, expect } from '@playwright/test';

test('Log In and Checking element', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.getByText('Products')).toBeVisible();
  await expect(page.locator('#shopping_cart_container a')).toBeVisible();

  const inventoryItems = await page.locator(".inventory_item");
  const productCount = await inventoryItems.count();

  expect(productCount).toBeGreaterThan(1);
});

test('Adding product to the cart', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  //adding item to a cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('#shopping_cart_container > a > span')).toContainText('1');
  
  //opening cart
  await page.locator('#shopping_cart_container > a').click();
  await expect(page.locator('div.cart_list > div.cart_item')).toBeVisible();
  
  //removing item from a cart
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await expect(page.locator('div.cart_list > div.cart_item')).not.toBeVisible();
  });