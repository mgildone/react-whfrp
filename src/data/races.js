import { chances } from "../utils/chances";
const races = chances([
  {
    name: "Human",
    pct: 90,
    abbreviation: "human"
  },
  {
    name: "Dwarf",
    pct: 5,
    abbreviation: "dwarf"
  },
  {
    name: "Halfling",
    pct: 3,
    abbreviation: "halfling"
  },
  {
    name: "High Elf",
    pct: 1,
    abbreviation: "helf"
  },
  {
    name: "Wood Elf",
    pct: 1,
    abbreviation: "welf"
  }
]);
export default races;
