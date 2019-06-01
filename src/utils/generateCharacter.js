import firstNames from "../data/firstNames/index";
import lastNames from "../data/lastNames/index";
import races from "../data/races";
import genders from "../data/genders";
import classes from "../data/classes";
import carrersMatrix from "../data/careers/matrix";
import { pick } from "./pick";

const generatCharacter = () => {
  const characterGender = pick(genders);
  const characterRace = pick(races);
  const characterFirstName = pick(
    firstNames[characterRace.id][characterGender.abbreviation]
  );
  const characterLastName = pick(lastNames[characterRace.id]);
  const characterCareer = pick(carrersMatrix[`${characterRace.id}Chances`]);
  const characterClass = classes[Math.floor(characterCareer.id / 8)];
  return {
    characterGender,
    characterRace,
    characterFirstName,
    characterLastName,
    characterCareer,
    characterClass
  };
};

export default generatCharacter();
