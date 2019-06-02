import firstNames from "../data/firstNames/index";
import lastNames from "../data/lastNames/index";
import races from "../data/races";
import genders from "../data/genders";
import classes from "../data/classes";
import carrersMatrix from "../data/careers/matrix";
import statsBonus from "../data/statsBonus";
import { pick } from "./pick";
import { rollXd10 } from "./rolls";

const generatCharacter = () => {
  const characterGender = pick(genders);
  const characterRace = pick(races);
  const characterFirstName = pick(
    firstNames[characterRace.id][characterGender.id]
  );
  const characterLastName = pick(lastNames[characterRace.id]);
  const characterCareer = pick(carrersMatrix[`${characterRace.id}Chances`]);
  const characterClass = classes[Math.floor(characterCareer.id / 8)];
  const characterStats = statsBonus[characterRace.id].map(
    bonus => bonus + rollXd10(2)
  );

  return {
    characterGender,
    characterRace,
    characterFirstName,
    characterLastName,
    characterCareer,
    characterClass,
    characterStats
  };
};

export default generatCharacter();
