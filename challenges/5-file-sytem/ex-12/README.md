# Get File Size Async Function

## Objective:

Your task is to write a TypeScript function named `getFileSizeAsync` that takes a file path as a parameter and returns a promise that resolves with the file's size in bytes.

## Function Signature

```typescript
export function getFileSizeAsync(path: string): Promise<number>;
```

## Instructions:

1. **Create a File:** Create a file named `getFileSizeAsync.ts`.

2. **Function Implementation:**

   - Define the `getFileSizeAsync` function. It should return a Promise that resolves to a number (the size of the file).

3. **Export the Function:** Ensure that your function is exported from the module so it can be imported and tested elsewhere.

4. **Testing Your Function:**

   - After implementing your function, save the file.
   - Run the following command in your terminal to test your function:

   ```bash
   npm test -- getFileSizeAsync
   ```

Remember to handle both scenarios where the file may or may not exist, and to test your code thoroughly to ensure it works as expected.
