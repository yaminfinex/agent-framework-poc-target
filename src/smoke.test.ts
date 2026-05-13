/**
 * Smoke test for paper parity
 */
import { greet } from "./greet";

// Simple smoke test - verifies the greet function works
const result = greet();
if (result !== "Hello, World!") {
  throw new Error(`Expected "Hello, World!" but got "${result}"`);
}

console.log("Smoke test passed: greet() returns expected value");
