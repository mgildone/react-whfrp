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
    firstNames[characterRace.abbreviation][characterGender.abbreviation]
  );
  const characterLastName = pick(lastNames[characterRace.abbreviation]);
  const characterCareer = pick(carrersMatrix[characterRace.abbreviation]);
  const characterClass = classes[Math.floor(characterCareer.id / 8)];
  // console.log("=======");
  // console.log(JSON.stringify(firstNames, null, 2));
  // console.log("=======");
  // console.log(carrersMatrix);
  console.log(JSON.stringify(races.length, null, 2));
  console.log(
    JSON.stringify(
      races.filter(race => race.abbreviation === "human").length,
      null,
      2
    )
  );
  console.log(
    JSON.stringify(
      races.filter(race => race.abbreviation === "dwarf").length,
      null,
      2
    )
  );
  console.log(
    JSON.stringify(
      races.filter(race => race.abbreviation === "halfling").length,
      null,
      2
    )
  );
  console.log(
    JSON.stringify(
      races.filter(race => race.abbreviation === "elf").length,
      null,
      2
    )
  );
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
