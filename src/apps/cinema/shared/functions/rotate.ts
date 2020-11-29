import { range } from "./range";

export function rotateMany<T>(values: T[], index: number, count: number) {
  return range(0, count - 1).map((offset) => rotate(values, index + offset));
}

export function rotate<T>(values: T[], index: number) {
  return values[index % values.length];
}
