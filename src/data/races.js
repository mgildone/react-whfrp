import { chances } from "../utils/chances";
const races = chances([
  {
    name: "Human",
    pct: 90,
    id: "human"
  },
  {
    name: "Dwarf",
    pct: 5,
    id: "dwarf"
  },
  {
    name: "Halfling",
    pct: 3,
    id: "halfling"
  },
  {
    name: "High Elf",
    pct: 1,
    id: "helf"
  },
  {
    name: "Wood Elf",
    pct: 1,
    id: "welf"
  }
]);
export default races;
