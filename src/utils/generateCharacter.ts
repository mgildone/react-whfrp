import firstNames from "../data/firstNames/index";
import lastNames from "../data/lastNames/index";
import races from "../data/races/index";
import classes from "../data/classes/index";
import { chances } from "./chances";
import { pick } from "./pick";

const gender = chances([
  {
    name: "Male",
    pct: 50,
    abbreviation: "M"
  },
  {
    name: "Female",
    pct: 50,
    abbreviation: "F"
  }
]);

const generatCharacter = (
  races: {
    name: string;
    pct: number;
    abbreviation: string;
  }[],
  gender: {
    name: string;
    pct: number;
    abbreviation: string;
  }[],
  firstNames: { human: { M: string[]; F: string[] } }
) => {
  const characterGender = pick(gender);
  const characterRace = pick(chances(races));
  console.log(characterGender, characterRace);
  return {};
  //   const characterFirstName = pick(
  //     firstNames[characterRace.abbreviation][characterGender.abbreviation]
  //   );
  //   const characterLastName = pick(lastNames[characterRace.abbreviation]);
  //   const characterClass = pick(classes);

  //   return {
  //     characterGender,
  //     characterRace,
  //     characterFirstName,
  //     characterLastName,
  //     characterClass
  //   };
};

export default generatCharacter(races, gender, firstNames);
