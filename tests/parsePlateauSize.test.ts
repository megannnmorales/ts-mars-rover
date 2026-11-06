import { expect, test, describe } from "vitest";
import { parsePlateauSize } from "../src/parsers/parsePlateauSize";

describe("parseInstructions", () => {
  test("valid string returns list of all values", () => {
    expect(parsePlateauSize("5 5")).toEqual({ x: 5, y: 5 });
  });
  test("invalid string returns error", () => {
    expect(() => parsePlateauSize("9 5")).toThrow("Invalid plateau size");
  });
  test("invalid string returns error", () => {
    expect(() => parsePlateauSize("9 5")).toThrow("Invalid plateau size");
  });
});
