import firstNames from "./data/firstNames/index";
import lastNames from "./data/lastNames/index";
import races from "./data/races/index";
import classes from "./data/classes/index";
import { generateChances, pick } from "./utils";

const gender = generateChances([
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

const generatCharacter = (races, gender, firstNames) => {
  const characterGender = pick(gender);
  const characterRace = pick(races);
  const characterFirstName = pick(
    firstNames[characterRace.abbreviation][characterGender.abbreviation]
  );
  const characterLastName = pick(lastNames[characterRace.abbreviation]);
  const characterClass = pick(classes);

  console.log(JSON.stringify(firstNames, null, 2));
  console.log(JSON.stringify(generateChances(races).length, null, 2));
  console.log(
    JSON.stringify(
      generateChances(races).filter(race => race.abbreviation === "human")
        .length,
      null,
      2
    )
  );
  console.log(
    JSON.stringify(
      generateChances(races).filter(race => race.abbreviation === "dwarf")
        .length,
      null,
      2
    )
  );
  console.log(
    JSON.stringify(
      generateChances(races).filter(race => race.abbreviation === "halfling")
        .length,
      null,
      2
    )
  );
  console.log(
    JSON.stringify(
      generateChances(races).filter(race => race.abbreviation === "elf").length,
      null,
      2
    )
  );
  return {
    characterGender,
    characterRace,
    characterFirstName,
    characterLastName,
    characterClass
  };
};

export default generatCharacter(races, gender, firstNames);
