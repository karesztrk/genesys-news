import { parse, parseAsync } from "valibot";
import wretch from "wretch";
import QueryStringAddon from "wretch/addons/queryString";
import { StoriesSchema, type Stories, CategorySchema, type Categories } from "./model";
import mock from "./mock.json";

const baseUrl = import.meta.env.API_BASE;

const baseApi = wretch(baseUrl);

export const fetchStories = async (category: Categories, page = 1) => {
  if (page < 0) {
    throw new Error("Page must be greater than 0");
  }
  const path = parse(CategorySchema, category);

  const response = import.meta.env.DEV
    ? (mock as unknown as Stories)
    : await baseApi.url(`/${path}`).addon(QueryStringAddon).query({ page }).get().json<Stories>();

  return parseAsync(StoriesSchema, response);
};
