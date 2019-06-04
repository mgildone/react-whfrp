import firstNames from "../data/firstNames/index";
import lastNames from "../data/lastNames/index";
import races from "../data/races";
import genders from "../data/genders";
import classes from "../data/classes";
import carrersMatrix from "../data/careers/matrix";
import { careerList } from "../data/careers/careers";
import statsBonus from "../data/statsBonus";
import { pick } from "./pick";
import { rollXd10 } from "./rolls";
import { pipe, trace } from "./fn";
const statsNames = [
  "WS",
  "BS",
  "S",
  "T",
  "I",
  "Agi",
  "Dex",
  "Int",
  "WP",
  "Fel"
];

const getGender = () => ({ gender: pick(genders) });
const getRace = obj => Object.assign({}, obj, { race: pick(races) });
const getFirstName = obj => {
  return Object.assign({}, obj, {
    firstName: pick(firstNames[obj.race.id][obj.gender.id])
  });
};

const getLastName = obj => {
  return Object.assign({}, obj, {
    lastName: pick(lastNames[obj.race.id])
  });
};

const getCharacterCareer = obj =>
  Object.assign({}, obj, {
    career: careerList[pick(carrersMatrix[`${obj.race.id}Chances`]).id - 1]
  });
const getCharacterClass = obj =>
  Object.assign({}, obj, { class: classes[Math.floor(obj.career.id / 8)] });

const getCharacterStats = obj => {
  const stats = statsBonus[obj.race.id].map(bonus => bonus + rollXd10(2));
  return Object.assign({}, obj, { stats });
};

const getAdvancedClass = obj => {
  const advanceList = obj.career.paths[0].advance || [];
  const advancedStats = obj.stats.map((stat, index) => {
    const statsName = statsNames[index];
    if (advanceList.indexOf(statsName) > -1) {
      return stat + 5;
    }
    return stat;
  });
  return Object.assign({}, obj, { advancedStats });
};
const getWounds = obj => {
  const { stats } = obj;
  const [WS, BS, S, T, I, Ag, Dex, Int, WP, Fel] = stats;
  const partialWounds = 2 + parseInt(T / 10, 10) + parseInt(WP / 10, 10);
  const wounds =
    obj.race.id === "hafling"
      ? partialWounds
      : parseInt(S / 10, 10) + partialWounds;
  return Object.assign({}, obj, { wounds });
};

const generatCharacter = () => {
  return pipe(
    getGender,
    getRace,
    getFirstName,
    getLastName,
    getCharacterCareer,
    getCharacterClass,
    getCharacterStats,
    getAdvancedClass,
    getWounds,
    trace("+++ character +++")
  )();
};

export default generatCharacter();

//[31,26,23,36,30,35,26,39,33,31]
//[36,26,23,41,35,35,26,39,33,31]
