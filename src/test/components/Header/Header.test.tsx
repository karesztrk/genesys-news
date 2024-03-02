import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header", () => {
  test("renders title and menu", () => {
    const title = "Genesys News";
    const menu = ["top", "new", "show", "ask", "jobs"];

    render(<Header current={menu[0]} />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: title })).toBeInTheDocument();
    menu.forEach((item) => {
      expect(screen.getByRole("link", { name: item })).toBeInTheDocument();
    });
  });
});
