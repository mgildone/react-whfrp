import races from "../races";

describe("Races", () => {
  it("Should be 100 elements in the list", () => {
    const expected = 100;
    const actual = races.length;
    expect(actual).toEqual(expected);
  });
  it("Human should be 90% of the population", () => {
    const expected = 90;
    const actual = races.filter(race => race.id === "human").length;
    expect(actual).toEqual(expected);
  });
  it("Dwarfs should be 5% of the population", () => {
    const expected = 5;
    const actual = races.filter(race => race.id === "dwarf").length;
    expect(actual).toEqual(expected);
  });
  it("Halflings should be 5% of the population", () => {
    const expected = 3;
    const actual = races.filter(race => race.id === "halfling").length;
    expect(actual).toEqual(expected);
  });
  it("High Elves should be 1% of the population", () => {
    const expected = 1;
    const actual = races.filter(race => race.id === "helf").length;
    expect(actual).toEqual(expected);
  });
  it("Wood Elves should be 1% of the population", () => {
    const expected = 1;
    const actual = races.filter(race => race.id === "welf").length;
    expect(actual).toEqual(expected);
  });
});
