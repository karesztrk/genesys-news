import { number, object, string, type Output, nullable, array } from "valibot";

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
    domain: string(),
  }),
);

export type Stories = Output<typeof StoriesSchema>;
