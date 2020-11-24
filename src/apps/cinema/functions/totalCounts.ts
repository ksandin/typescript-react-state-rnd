export const totalCounts = (counts: Record<string, number>) =>
  Object.values(counts).reduce((a, b) => a + b, 0);
