const { passwordIsValid } = require("../src/password_checker");
const { errors } = require("../src/resources");
const logger = require("../src/logger");

describe("Checks if password is valid", () => {
  it("should throw an error if the password does not exist.", () => {
    expect(function () {
      passwordIsValid();
    }).toThrow(errors.existence);
  });

  it("should throw an error if the password is not longer than 8 characters", () => {
    expect(function () {
      passwordIsValid("Ki ng#1");
    }).toThrow(errors.length);
  });

  it("should throw an error if the password does not have at least one lowercase letter", () => {
    expect(function () {
      passwordIsValid("KING #100");
    }).toThrow(errors.lowerCase);
  });

  it("should throw an error if the password does not have at least one uppercase letter", () => {
    expect(function () {
      passwordIsValid("king #100");
    }).toThrow(errors.upperCase);
  });

  it("should throw an error if the password does not have at least one whitespace character", () => {
    expect(function () {
      passwordIsValid("King#10000");
    }).toThrow(errors.whiteSpace);
  });

  it("should throw an error if the password does not have at least one digit", () => {
    expect(function () {
      passwordIsValid("King Kong#");
    }).toThrow(errors.digit);
  });

  it("should throw an error if the password does not have at least one special character", () => {
    expect(function () {
      passwordIsValid("King 1000");
    }).toThrow(errors.specialCharacter);
  });

  it("should return true if the password is valid", () => {
    expect(function () {
      passwordIsValid("King #10000");
    });
  });
});
