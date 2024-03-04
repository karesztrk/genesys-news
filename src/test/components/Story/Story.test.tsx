import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Story from "@/components/Story";
import type { Stories } from "@/lib/model";

describe("Story", () => {
  test("renders a story", () => {
    const user = "john";
    const url = "http://www.example.com";
    const story: Stories[number] = {
      id: Math.floor(Math.random() * 1000),
      title: "Story title",
      score: 24,
      by: user,
      time: 1709182389,
      descendants: 4,
      type: "link",
      url,
      time_ago: 4 * 60,
    };

    render(<Story story={story} />);

    expect(screen.getByRole("article")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: story.title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: user })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: new URL(url).hostname })).toBeInTheDocument();
  });
});
