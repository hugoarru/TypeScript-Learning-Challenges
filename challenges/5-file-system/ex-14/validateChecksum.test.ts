import { describe, expect, test } from "@jest/globals";
import { validateChecksum } from "./validateChecksum";

const testFile = __dirname + "/README.md";

describe("validateChecksum", () => {
  test("should return true for valid checksum", async () => {
    expect(
      await validateChecksum(
        testFile,
        "ecd7458b83d730b2bd71c353a76bcd68444f076d19247f51d999713f82105400",
      ),
    ).toBe(true);
  });

  test("should return false for invalid checksum", async () => {
    expect(await validateChecksum(testFile, "test")).toBe(false);
  });
});
