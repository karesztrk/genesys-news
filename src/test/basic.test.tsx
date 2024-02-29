import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Counter from "../components/Counter";

test("Counter", () => {
  render(
    <Counter count={0}>
      <p>Hi</p>
    </Counter>,
  );
  expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
});
