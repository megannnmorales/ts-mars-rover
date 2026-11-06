import { expect, test, describe } from "vitest";
import { parseInstructions } from "../src/parsers/parseInstructions";

describe("parseInstructions", () => {
  test("valid string returns list of all values", () => {
    expect(parseInstructions("LMR")).toEqual(["L", "M", "R"]);
  });
  test("invalid string returns error", () => {
    expect(() => parseInstructions("hello world")).toThrow(
      "Invalid instruction",
    );
  });
});
