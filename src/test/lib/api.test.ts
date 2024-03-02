import { fetchStories } from "@/lib/api";
import { categories } from "@/lib/model";
import { describe, expect, test } from "vitest";
import mock from "@/lib/mock.json";

describe("fetchStories", () => {
  test("throws an error if page is negative", () => {
    const category = categories.top;

    expect(() => fetchStories(category, -1)).rejects.toThrow("Page must be greater than 0");
  });

  test("returns a list of stories for a given category and page", async () => {
    const category = categories.top;
    const page = 2;
    const response = await fetchStories(category, page);

    expect(response).toBeInstanceOf(Array);
    expect(response).toMatchObject(mock);
  });
});
