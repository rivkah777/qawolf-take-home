import { test, expect } from '@playwright/test';

const url = "https://www.netflix.com/login";

test('only valid email addressses can be submitted', async ({ page }) => {
  await page.goto(url);

  
});

test('only valid paswword can be submitted', async ({ page }) => {
  await page.goto(url);


  
});
