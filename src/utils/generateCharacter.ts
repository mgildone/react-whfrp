import { Genders, Races, firstNames } from "../data/firstNames/index";
import lastNames from "../data/lastNames/index";
import races from "../data/races/index";
import classes from "../data/classes/index";
import { chances } from "./chances";
import { pick } from "./pick";

interface IGeneric {
  name: string;
  pct: number;
  abbreviation: string;
}

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

const generateCharacter = (
  races: IGeneric[],
  gender: IGeneric[],
  firstNames: { [key in Races]: { [key1 in Genders]: string[] } }
) => {
  const characterGender: {
    name: string;
    pct: number;
    abbreviation: string;
  } = pick(gender);
  const characterRace = pick(chances(races));
  const key = characterRace.abbreviation;
  const characterFirstName = pick(
    firstNames[key][characterGender.abbreviation]
  );
  console.log(characterGender, characterRace, characterFirstName);
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

export default generateCharacter(races, gender, firstNames);
