import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import type { Stories } from "@/lib/model";
import StoryGrid from "@/components/StoryGrid";

describe("StoryGrid", () => {
  test("renders grid with a single item", () => {
    const stories: Stories = [
      {
        id: Math.floor(Math.random() * 1000),
        title: "Story title",
        points: 24,
        user: "john",
        time: 1709182389,
        time_ago: "2 days ago",
        comments_count: 4,
        type: "link",
        url: "http://www.example.com",
        domain: "example.com",
      },
    ];

    render(<StoryGrid stories={stories} />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBe(1);
  });
});
