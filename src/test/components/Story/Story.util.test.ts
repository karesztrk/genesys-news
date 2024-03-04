import { elapsed } from "@/components/Story/Story.util";
import { describe, expect, test } from "vitest";

describe("Story.util", () => {
  describe("elapsed", () => {
    test("returns correct result for less than a hour", () => {
      const result = elapsed(30);
      expect(result).toBe("30 minutes ago");
    });

    test("returns correct result for more than an hour", () => {
      const result = elapsed(60 + 5);
      expect(result).toBe("1 hour ago");
    });

    test("returns correct result for more than an hour but less than a day", () => {
      const result = elapsed(60 * 23);
      expect(result).toBe("23 hours ago");
    });

    test("returns correct result for more than a day", () => {
      const result = elapsed(60 * 24 * 60);
      expect(result).toBe("60 days ago");
    });
  });
});
