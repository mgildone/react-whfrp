import { chances } from "../utils/chances";
const genders = chances([
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

export default genders;
