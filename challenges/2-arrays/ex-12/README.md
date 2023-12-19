# Array Rotate Function

## Objective:

Your task is to write a TypeScript function named `arrayRotate` that takes an array and a count as parameters. The function should rotate the elements of the array by the given count and return the modified array.

**Example:**
This call `arrayRotate([1, 2, 3], 2)` should return [3, 1, 2]

## Function Signature

```typescript
export function arrayRotate<T>(array: T[], count: number): T[];
```

## Instructions:

1. **Create a File:** Create a file named `arrayRotate.ts`.

2. **Define the Function:**

   - Your function should accept two parameters: an array (`array`) and a number (`count`).
   - The function should rotate the elements of the array to the right by the number specified in `count`.
   - The function should return the rotated array.

3. **Export the Function:** Ensure that your function is exported from the module so it can be imported and tested elsewhere.
4. **Testing your function:** To verify the correctness of your function, run the following command in your terminal:

   ```Bash
   npm test -- arrayRotate
   ```
