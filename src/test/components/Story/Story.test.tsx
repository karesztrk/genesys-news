import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Story from "@/components/Story";
import type { Stories } from "@/lib/model";

describe("Story", () => {
  test("renders a story", () => {
    const user = "john";
    const story: Stories[number] = {
      id: Math.floor(Math.random() * 1000),
      title: "Story title",
      points: 24,
      user,
      time: 1709182389,
      time_ago: "2 days ago",
      comments_count: 4,
      type: "link",
      url: "http://www.example.com",
      domain: "example.com",
    };

    render(<Story story={story} />);

    expect(screen.getByRole("article")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: story.title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: user })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: story.domain })).toBeInTheDocument();
  });
});
