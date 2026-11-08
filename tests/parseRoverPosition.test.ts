import { expect, test, describe } from "vitest";
import { parseRoverPosition } from "../src/parsers/parseRoverPosition";

describe("parseInstructions", () => {
  test("valid string returns Rover position", () => {
    expect(parseRoverPosition("1 2 N")).toEqual({ x: 1, y: 2, facing: "N" });
  });
  test("invalid coordinates returns error", () => {
    expect(() => parseRoverPosition("N 1 N")).toThrow("Invalid coordinates");
  });
  test("invalid length returns error", () => {
    expect(() => parseRoverPosition("1 2 N S")).toThrow(
      "Invalid rover position length",
    );
  });
  test("invalid compass direction returns error", () => {
    expect(() => parseRoverPosition("1 2 C")).toThrow(
      "Invalid compass direction",
    );
  });
});
