export function chances<T extends { pct: number }>(arr: T[]): T[] {
  if (arr.length === 0) {
    throw new Error("Cannot chances() from an empty array");
  }
  return ([] as T[]).concat(...arr.map(val => Array(val.pct).fill(val)));
}
