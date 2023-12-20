# Checksum Validation Function

## Objective:

Your task is to create a TypeScript function named `validateChecksum` that takes a file path and an expected checksum as parameters. The function should compute the SHA-256 checksum of the file and compare it with the provided checksum, returning `true` if they match and `false` otherwise.

## Function signature

```typescript
async function validateChecksum(
  filePath: string,
  expectedChecksum: string,
): Promise<boolean>;
```

## Instructions:

1. **Create a File:** Create a file named `validateChecksum.ts`.

2. **Define the Helper Function:** Write a helper function `computeChecksum` with the following signature:

   ```typescript
   function computeChecksum(filePath: string): Promise<string>;
   ```

   This function should read the file, compute its SHA-256 checksum, and return it.

3. **Define Function:** Define the `validateChecksum` function using the provided signature.

4. **Error Handling:** Implement appropriate error handling.

5. **Export the Function:** Ensure that the `validateChecksum` function is exported from the module.

6. **Testing Your Function:** To test your function, run the following command in your terminal:

   ```Bash
   npm test -- validateChecksum
   ```

   Ensure your code passes all the tests.
