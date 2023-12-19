import { describe, expect, test } from "@jest/globals";
import { validateChecksum } from "./validateChecksum";

const filePath = `${__dirname}/../../../data.csv`;
const expectedChecksum =
  "0c8a6bf78f82f2df5bdd19b67e9a186c1fbc69d303ea8eeb9633268cc0efc155";

describe("validateChecksum", () => {
  test("should return true if the checksum is valid", async () => {
    await expect(validateChecksum(filePath, expectedChecksum)).resolves.toBe(
      true,
    );
  });
  test("should return false if the checksum is invalid", async () => {
    await expect(validateChecksum(filePath, "invalid checksum")).resolves.toBe(
      false,
    );
  });
});
