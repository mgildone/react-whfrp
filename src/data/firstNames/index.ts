import human from "./human";
import dwarf from "./dwarf";
import halfling from "./halfling";
import elf from "./elf";

export type Genders = "M" | "F";
export type Races = "human" | "dwarf" | "elf" | "halfling";

const firstNames = { human, dwarf, halfling, elf };

export { firstNames };
