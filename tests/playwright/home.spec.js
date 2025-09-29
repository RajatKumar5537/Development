import { test, expect } from "@playwright/test";

test("home page has heading", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page.getByText("Welcome to Dummy SDLC Project for development")).toBeVisible();
});
