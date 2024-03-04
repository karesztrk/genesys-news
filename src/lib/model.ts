import { number, object, string, type Output, array, picklist, optional, transform } from "valibot";
import { elapsedMinutes } from "./util";

export const ItemIdsSchema = array(number());

export type ItemIds = Output<typeof ItemIdsSchema>;

export const StoriesSchema = transform(
  array(
    object({
      by: string(),
      descendants: optional(number()),
      id: number(),
      score: number(),
      time: number(),
      title: string(),
      type: string(),
      url: optional(string()),
    }),
  ),
  (input) =>
    input.map((item) => ({
      ...item,
      time_ago: elapsedMinutes(item.time),
    })),
);

export type Stories = Output<typeof StoriesSchema>;

export const categories = {
  top: "topstories",
  new: "newstories",
  show: "showstories",
  ask: "askstories",
  jobs: "jobstories",
};

export const CategorySchema = picklist(Object.values(categories));

export type Categories = Output<typeof CategorySchema>;
