import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import StoryGrid from "@/components/StoryGrid";

describe("StoryGrid", () => {
  test("renders grid with a single item", () => {
    render(<StoryGrid />);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
