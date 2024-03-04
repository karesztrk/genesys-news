import type { Page } from "@playwright/test";

export class StoriesPage {
  menuItems = [
    { title: "top", path: "/top" },
    { title: "new", path: "/new" },
    { title: "show", path: "/show" },
    { title: "ask", path: "/ask" },
    { title: "jobs", path: "/jobs" },
  ] as const;

  constructor(public readonly page: Page) {}

  async goto() {
    await this.page.goto("./");
  }

  menu() {
    return this.menuItems;
  }
}
