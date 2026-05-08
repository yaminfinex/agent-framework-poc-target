/**
 * Returns a greeting for the given name.
 * @param name - Optional name to greet. If not provided, defaults to "World".
 * @returns A greeting string in the format "Hello, {name}!"
 */
export function greet(name?: string): string {
  return `Hello, ${name ?? "World"}!`;
}
