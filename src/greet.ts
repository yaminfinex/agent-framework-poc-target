/**
 * Returns a greeting for the given name.
 * @param name - The name to greet. Defaults to "World".
 * @returns A greeting string.
 */
export function greet(name: string = "World"): string {
  return `Hello, ${name}!`;
}
