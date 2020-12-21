export const compact = <T>(obj: T) => {
  const partial: Partial<T> = {};
  for (const key in obj) {
    if (obj[key] !== undefined) {
      partial[key] = obj[key];
    }
  }
  return partial;
};
