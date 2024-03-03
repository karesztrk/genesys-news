import { test, expect } from "./fixtures";

test.describe("Stories page", () => {
  test("Logo navigation", async ({ storiesPage, page }) => {
    await storiesPage.goto();

    await page.getByRole("link", { name: "Genesys News" }).click();
    await expect(page.getByRole("heading", { name: "Stories" })).toBeVisible();
  });

  test("Main menu navigation", async ({ storiesPage, page }) => {
    await storiesPage.goto();

    for (const { path, title } of storiesPage.menu()) {
      await page.getByRole("link", { name: title, exact: true }).click();
      await expect(page.getByRole("heading", { name: "Stories" })).toBeVisible();
      await expect(page).toHaveURL(new RegExp(`${path}`));
    }
  });

  test("Main content is present", async ({ storiesPage, page }) => {
    await storiesPage.goto();

    await expect(page.getByRole("heading", { name: "Stories" })).toBeVisible();
    await expect(page.getByText("Read free, high quality news")).toBeVisible();
    await expect(page.getByRole("list", { name: "Stories" })).toBeVisible();
    await expect(page.getByText("Károly Török ©")).toBeVisible();
  });

  test("Footer info is rendered", async ({ storiesPage, page }) => {
    await storiesPage.goto();

    await expect(page.getByText("Károly Török ©")).toBeVisible();
  });
});
