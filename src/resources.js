const logger = require("./logger");

const errors = {
  existence: "Password should exist",
  length: "Password should be longer than 8 characters",
  lowerCase: "Password should have at least one lowercase letter",
  upperCase: "Password should have at least one uppercase letter",
  digit: "Password should have at least have one digit",
  specialCharacter: "Password should have at least one special character",
  whiteSpace: "Password should have at least one whitespace character",
};

const strength = {
  shortOrNull: "Invalid",
  equalsThree: "Weak",
  equalsGreaterThanFour: "Medium",
  equalsGreaterThanSix: "Strong",
};

const regEx = {
  smallLettersCheck: /^(?=.*[a-z])/,
  capitalLetterCheck: /^(?=.*[A-Z])/,
  digitCheck: /\d/,
  whiteSpaceCheck: /\s/,
  specialCharactersCheck: /[^a-zA-Z\d\s]/i,
};

const invalidPassword = () => logger.debug("User password is not ok");
const validPassword = () => logger.debug("User password is ok");

module.exports = {
  errors,
  strength,
  regEx,
  invalidPassword,
  validPassword,
};
