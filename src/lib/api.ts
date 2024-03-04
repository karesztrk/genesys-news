import { parse, parseAsync } from "valibot";
import wretch from "wretch";
import { StoriesSchema, type Stories, CategorySchema, type Categories, type ItemIds, ItemIdsSchema } from "./model";
import mock from "./mock.json";

const baseUrl = import.meta.env.API_BASE;

const baseApi = wretch(baseUrl);

const DEFAULT_PAGE_SIZE = 10;

/**
 * Fetch stories from HN API according to the given category.
 */
export const fetchStories = async (category: Categories, page = 1) => {
  if (page < 0) {
    throw new Error("Page must be greater than 0");
  }

  if (import.meta.env.DEV) {
    // Mock the response in Development
    return parse(StoriesSchema, mock);
  }

  const path = parse(CategorySchema, category);

  const response = await baseApi.url(`/${path}.json`).get().json<ItemIds>();
  const ids = parse(ItemIdsSchema, response);
  const promises = ids
    .slice((page - 1) * DEFAULT_PAGE_SIZE, page * DEFAULT_PAGE_SIZE)
    .map((id) => baseApi.url(`/item/${id}.json`).get().json<Stories[number]>());
  return parseAsync(StoriesSchema, await Promise.all(promises));
};
