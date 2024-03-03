import { test as base } from "@playwright/test";
import { StoriesPage } from "./pages/stories-page";

interface Fixtures {
  storiesPage: StoriesPage;
}

export const test = base.extend<Fixtures>({
  storiesPage: async ({ page }, use) => {
    const storiesPage = new StoriesPage(page);
    await use(storiesPage);
  },
});

export { expect } from "@playwright/test";
