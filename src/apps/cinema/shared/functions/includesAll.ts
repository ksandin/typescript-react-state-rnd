export const includesAll = <T>(list: T[], include: T[]) =>
  include.every((item) => list.includes(item));
