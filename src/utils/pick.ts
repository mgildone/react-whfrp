export function pick<T>(arr: T[], count = 1): T {
  if (arr.length === 0) {
    throw new Error("Cannot pick() from an empty array");
  }
  return arr.sort(() => Math.random() - 0.5).slice(0, count)[0];
}

export function pickChances<T>(arr: T[]): T {
  if (arr.length === 0) {
    throw new Error("Cannot pickChances() from an empty array");
  }
  return arr[Math.floor(Math.random() * arr.length)];
}
