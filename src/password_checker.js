const {
  errors,
  strength,
  regEx,
  validPassword,
  invalidPassword,
} = require("./resources");
const logger = require("./logger");


function passwordIsValid(password) {
  if (password === undefined) {
    invalidPassword();
    logger.error(errors.existence);
    throw errors.existence;
  }
  if (password.length < 9) {
    invalidPassword();
    logger.error(errors.length);
    throw errors.length;
  }
  if (regEx.smallLettersCheck.test(password) === false) {
    invalidPassword();
    logger.error(errors.lowerCase);
    throw errors.lowerCase;
  }
  if (regEx.capitalLetterCheck.test(password) === false) {
    invalidPassword();
    logger.error(errors.upperCase);
    throw errors.upperCase;
  }
  if (regEx.digitCheck.test(password) === false) {
    invalidPassword();
    logger.error(errors.digit);
    throw errors.digit;
  }
  if (regEx.specialCharactersCheck.test(password) === false) {
    invalidPassword();
    logger.error(errors.specialCharacter);
    throw errors.specialCharacter;
  }
  if (regEx.whiteSpaceCheck.test(password) === false) {
    invalidPassword();
    logger.error(errors.whiteSpace);
    throw errors.whiteSpace;
  }

  validPassword();
  return true;
}

function passwordStrength(password) {
  let passStrength;
  let conditionsMet = 0;

  if (password === null || password.length < 9) {
    return strength.shortOrNull;
  } else {
    conditionsMet += 2;
  }

  for (expression in regEx) {
    if (regEx[expression].test(password) !== false) {
      conditionsMet++;
    }
  }

  if (conditionsMet >= 4) {
    passStrength = strength.equalsGreaterThanFour;
  }
  if (conditionsMet >= 6) {
    passStrength = strength.equalsGreaterThanSix;
  }
  if (conditionsMet === 3) {
    passStrength = strength.equalsThree;
  }
  return passStrength;
}

module.exports = {
  passwordIsValid,
  passwordStrength,
};
