import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Pagination from "@/components/Pagination";

describe("Pagination", () => {
  test("renders next button initially", () => {
    render(<Pagination />);

    expect(screen.getByRole("button", { name: "Next Page" })).toBeInTheDocument();
  });

  test("renders prev & next button", () => {
    render(<Pagination page={2} />);

    expect(screen.getByRole("button", { name: "Previous Page" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Next Page" })).toBeInTheDocument();
  });
});
