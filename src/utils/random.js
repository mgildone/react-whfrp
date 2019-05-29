export function random(low, high) {
  if (!low || !high) {
    throw new Error("Cannot random() without numbers");
  }
  return Math.floor(Math.random() * (high - low + 1) + low);
}
