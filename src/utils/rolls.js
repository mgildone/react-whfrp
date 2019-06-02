import { random } from "./random";
export function roll1d10() {
  return random(1, 10);
}

export function roll1d100() {
  return random(1, 100);
}

export function rollXd10(x) {
  let roll = 0;
  while (x > 0) {
    roll += roll1d10();
    x--;
  }
  return roll;
}
