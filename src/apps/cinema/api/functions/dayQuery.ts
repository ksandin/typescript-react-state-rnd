export const dayQuery = (date: Date) => {
  const dayStart = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const nextDayStart = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1
  );
  return { $gte: dayStart, $lt: nextDayStart };
};
