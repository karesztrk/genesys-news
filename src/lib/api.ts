import { parse, parseAsync } from "valibot";
import wretch from "wretch";
import QueryStringAddon from "wretch/addons/queryString";
import { StoriesSchema, type Stories, CategorySchema, type Categories } from "./model";

const baseUrl = import.meta.env.API_BASE;

const baseApi = wretch(baseUrl);

export const fetchStories = async (category: Categories, page = 1) => {
  if (page < 0) {
    throw new Error("Page must be greater than 0");
  }
  const path = parse(CategorySchema, category);
  return parseAsync(
    StoriesSchema,
    await baseApi.url(`/${path}`).addon(QueryStringAddon).query({ page }).get().json<Stories>(),
  );
};
