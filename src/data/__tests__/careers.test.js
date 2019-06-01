import careers from "../careers/careers";
import matrix from "../careers/matrix";

const {
  human,
  dwarf,
  halfling,
  helf,
  welf,
  humanChances,
  dwarfChances,
  halflingChances,
  helfChances,
  welfChances
} = matrix;

describe("Carrers", () => {
  it("Should be 64 careers in the list", () => {
    const expected = 64;
    const actual = careers.length;
    expect(actual).toEqual(expected);
  });
  describe("Human", () => {
    human.forEach(career => {
      it(`${career.name} should appear ${career.pct} in the matrix`, () => {
        const expected = career.pct;
        const actual = humanChances.filter(c => c.name === career.name).length;
        expect(actual).toEqual(expected);
      });
    });
  });
  describe("Dwarf", () => {
    dwarf.forEach(career => {
      it(`${career.name} should appear ${career.pct} in the matrix`, () => {
        const expected = career.pct;
        const actual = dwarfChances.filter(c => c.name === career.name).length;
        expect(actual).toEqual(expected);
      });
    });
  });
  describe("Halfling", () => {
    halfling.forEach(career => {
      it(`${career.name} should appear ${career.pct} in the matrix`, () => {
        const expected = career.pct;
        const actual = halflingChances.filter(c => c.name === career.name)
          .length;
        expect(actual).toEqual(expected);
      });
    });
  });
  describe("High Elf", () => {
    helf.forEach(career => {
      it(`${career.name} should appear ${career.pct} in the matrix`, () => {
        const expected = career.pct;
        const actual = helfChances.filter(c => c.name === career.name).length;
        expect(actual).toEqual(expected);
      });
    });
  });
  describe("Wood Elf", () => {
    welf.forEach(career => {
      it(`${career.name} should appear ${career.pct} in the matrix`, () => {
        const expected = career.pct;
        const actual = welfChances.filter(c => c.name === career.name).length;
        expect(actual).toEqual(expected);
      });
    });
  });
});
