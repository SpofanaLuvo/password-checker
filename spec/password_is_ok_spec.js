const { passwordStrength } = require("../src/password_checker");
const { strength } = require("../src/resources");

describe("Checks the strength of the password", () => {
  it("should return 'invalid' if the password meets less than 3 conditions", () => {
    expect(passwordStrength("P@ssw 12")).toBe(strength.shortOrNull);
  });

  it("should return 'weak' if the password meets only 3 conditions", () => {
    expect(passwordStrength("KINGKONGGG")).toBe(strength.equalsThree);
  });

  it("should return 'medium' if the password meets 4 or more conditions", () => {
    expect(passwordStrength("King10000")).toBe(strength.equalsGreaterThanFour);
  });

  it("should return 'strong' if the password meets 6 or more conditions", () => {
    expect(passwordStrength("King #1000")).toBe(strength.equalsGreaterThanSix);
  });
});
