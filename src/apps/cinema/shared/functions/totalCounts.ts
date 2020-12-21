import { TicketCounts } from "../types/TicketCounts";

export const totalCounts = (counts: TicketCounts) =>
  Array.from(counts.values()).reduce((a, b) => a + b, 0);
