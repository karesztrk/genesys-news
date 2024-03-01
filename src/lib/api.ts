import { parse, parseAsync } from "valibot";
import wretch from "wretch";
import { StoriesSchema, type Stories, CategorySchema, type Categories } from "./model";

const baseUrl = import.meta.env.API_BASE;

const baseApi = wretch(baseUrl);

export const fetchStories = async (category: Categories) => {
  const path = parse(CategorySchema, category);
  return parseAsync(StoriesSchema, await baseApi.url(`/${path}`).get().json<Stories>());
};
