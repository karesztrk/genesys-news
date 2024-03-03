import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import StoryPoints from "@/components/StoryPoints";
import userEvent from "@testing-library/user-event";

describe("StoryPoints", () => {
  test("renders upvote button", () => {
    render(<StoryPoints />);

    expect(screen.getByRole("button", { name: "Upvote" })).toBeInTheDocument();
  });

  test("renders initial the points", () => {
    const points = 10;

    render(<StoryPoints points={points} />);

    expect(screen.getByText(points)).toBeInTheDocument();
  });

  test("rerenders the points on prop change", () => {
    let points = 1;

    const { rerender } = render(<StoryPoints points={points} />);

    expect(screen.getByText(points)).toBeInTheDocument();

    // Update
    points = 2;
    rerender(<StoryPoints points={points} />);

    expect(screen.getByText(points)).toBeInTheDocument();
  });

  test("increments the points on upvote", async () => {
    const points = 1;

    render(<StoryPoints points={points} />);

    await userEvent.click(screen.getByRole("button", { name: "Upvote" }));

    expect(screen.getByText(points + 1)).toBeInTheDocument();
  });
});
