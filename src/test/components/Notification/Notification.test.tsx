import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Notification from "@/components/Notification";

describe("Notification", () => {
  test("renders main elements", () => {
    const description = "Unknown error occurred";

    render(<Notification>{description}</Notification>);

    expect(screen.getByRole("alert", { name: "Notification", description })).toBeInTheDocument();
  });
});
