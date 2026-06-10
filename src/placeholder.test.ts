import { expect, test } from "bun:test";
import { placeholderFunction } from "./placeholder.js";

test("placeholderFunction returns hello greeting", () => {
  // TODO: Add tests for your library's logic
  expect(placeholderFunction("World")).toBe("Hello, World!");
});
