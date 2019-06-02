import { chances } from "../utils/chances";
const genders = chances([
  {
    name: "Male",
    pct: 50,
    id: "M"
  },
  {
    name: "Female",
    pct: 50,
    id: "F"
  }
]);

export default genders;
