import careers from "../careers/careers";

describe("Races", () => {
  it("Should be 64 careers in the list", () => {
    const expected = 64;
    const actual = careers.length;
    expect(actual).toEqual(expected);
  });
});
