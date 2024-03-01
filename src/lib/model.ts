import { number, object, string, type Output, nullable, array, picklist } from "valibot";

export const StoriesSchema = array(
  object({
    id: number(),
    title: string(),
    points: nullable(number()),
    user: nullable(string()),
    time: number(),
    time_ago: string(),
    comments_count: number(),
    type: string(),
    url: string(),
  }),
);

export type Stories = Output<typeof StoriesSchema>;

export const categories = {
  top: "news",
  new: "newest",
  show: "show",
  ask: "ask",
  jobs: "jobs",
} as const;

export const CategorySchema = picklist(Object.values(categories));

export type Categories = Output<typeof CategorySchema>;
