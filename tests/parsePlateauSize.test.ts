import { expect, test, describe } from "vitest";
import { parsePlateauSize } from "../src/parsers/parsePlateauSize";

describe("parseInstructions", () => {
  test("valid string returns list of all values", () => {
    expect(parsePlateauSize("5 5")).toEqual({ x: 5, y: 5 });
  });
});
