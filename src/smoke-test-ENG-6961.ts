/**
 * ENG-6961: Webhook E2E Smoke Test
 * 
 * This file verifies the end-to-end webhook flow:
 * Linear -> Inngest -> system -> GitHub -> Inngest
 * 
 * Created: 2026-05-12T08-22-05-917Z
 */

export const SMOKE_TEST_TIMESTAMP = "2026-05-12T08-22-05-917Z";
export const SMOKE_TEST_TICKET = "ENG-6961";

export function getSmokeTestInfo(): { ticket: string; timestamp: string } {
  return {
    ticket: SMOKE_TEST_TICKET,
    timestamp: SMOKE_TEST_TIMESTAMP,
  };
}
