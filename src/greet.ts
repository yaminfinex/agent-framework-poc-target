/**
 * Returns a greeting for the given name.
 * @param name - Optional name to include in greeting. If not provided, defaults to "World".
 * @returns A greeting string in the format "Hello, {name}!"
 */
export function hello(name?: string): string {
  return `Hello, ${name ?? "World"}!`;
}

// intentional type error for CI validation
const _bad: string = hello(42);
