import wretch from "wretch";

const baseUrl = import.meta.env.API_BASE;

const baseApi = wretch(baseUrl);
const newsApi = baseApi.url("/news");

interface Story {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url: string;
  domain: string;
}

export const fetchNews = () => {
  return newsApi.get().json<Story[]>();
};
