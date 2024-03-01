import { parseAsync } from "valibot";
import wretch from "wretch";
import { StoriesSchema, type Stories } from "./schema";

const baseUrl = import.meta.env.API_BASE;

const baseApi = wretch(baseUrl);
const newsApi = baseApi.url("/news");

export const fetchNews = async () => {
  return parseAsync(StoriesSchema, await newsApi.get().json<Stories>());
};
