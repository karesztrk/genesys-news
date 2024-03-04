import { elapsedMinutes } from "@/lib/util";
import { describe, expect, test } from "vitest";

describe("elapsedMinutes", () => {
  test("returns 0 if sinceSeconds is not specified", () => {
    const result = elapsedMinutes(undefined);
    expect(result).toBe(0);
  });

  test("returns the number of minutes between two dates", () => {
    // One minute ago
    const since = new Date().getTime() / 1000 - 60;
    const result = elapsedMinutes(since);
    expect(result).toBe(1);
  });

  test("returns negative for future dates", () => {
    // One minute ago
    const since = new Date().getTime() / 1000 + 60;
    const result = elapsedMinutes(since);
    expect(result).toBe(-1);
  });
});
