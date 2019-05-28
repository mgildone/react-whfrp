export function random(low: number, high: number): number {
  if (!low || !high) {
    throw new Error("Cannot randomScore() no numbers");
  }
  return Math.floor(Math.random() * (high - low + 1) + low);
}
