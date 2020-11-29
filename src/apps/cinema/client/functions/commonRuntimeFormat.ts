export const commonRuntimeFormat = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const additionalMinutes = minutes % 60;
  if (hours >= 1) {
    return `${hours} hour ${additionalMinutes} minutes`;
  }
  return `${minutes} minutes`;
};
