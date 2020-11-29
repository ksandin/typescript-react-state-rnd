export const range = (start: number, end: number) => {
  const array: number[] = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
};
