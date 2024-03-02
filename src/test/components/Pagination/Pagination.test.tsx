import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Pagination from "@/components/Pagination";

describe("Pagination", () => {
  test("renders next button initially", () => {
    render(<Pagination />);

    expect(screen.getByRole("link", { name: "Next Page" })).toBeInTheDocument();
    expect(screen.getByText("#1")).toBeInTheDocument();
  });

  test("renders prev & next button", () => {
    render(<Pagination page={2} />);

    expect(screen.getByRole("link", { name: "Previous Page" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Next Page" })).toBeInTheDocument();
    expect(screen.getByText("#2")).toBeInTheDocument();
  });
});
