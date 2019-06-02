import firstNames from "../data/firstNames/index";
import lastNames from "../data/lastNames/index";
import races from "../data/races";
import genders from "../data/genders";
import classes from "../data/classes";
import carrersMatrix from "../data/careers/matrix";
import statsBonus from "../data/statsBonus";
import { pick } from "./pick";
import { rollXd10 } from "./rolls";
import { pipe, trace } from "./fn";

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
    career: pick(carrersMatrix[`${obj.race.id}Chances`])
  });
const getCharacterClass = obj =>
  Object.assign({}, obj, { class: classes[Math.floor(obj.career.id / 8)] });

const getCharacterStats = obj => {
  const stats = statsBonus[obj.race.id].map(bonus => bonus + rollXd10(2));
  return Object.assign({}, obj, { stats });
};

const getWounds = obj => {
  const { stats } = obj;
  const [WS, BS, S, T, I, Ag, Dex, Int, WP, Fel] = stats;
  const wounds =
    parseInt(S / 10, 10) + (2 + parseInt(T / 10, 10)) + parseInt(WP / 10, 10);
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
    getWounds,
    trace("+++ character +++")
  )();
};

export default generatCharacter();
