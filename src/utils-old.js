const getNumber = () => Math.floor(Math.random() * 10);

const getLowercase = () =>
  Array.from(Array(26))
    .map((_, i) => i + 97)
    .map((code) => String.fromCharCode(code))[Math.floor(Math.random() * 26)];

const getUppercase = () => getLowercase().toUpperCase();

const getSymbol = () => {
  const symbols = "<>-_|!#$%&/=?+*";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const testNumbers = "/[0-9]/.test(password)";
const testLowercase = "/[a-z]/.test(password)";
const testUppercase = "/[A-Z]/.test(password)";
const testSymbols = "/[^a-zA-Z0-9]/.test(password)";

const generatePassword = (
  length,
  hasNumbers,
  hasLowercase,
  hasUppercase,
  hasSymbol
) => {
  let availableFunctions = [];
  let password = "";
  let testCharacters = [];

  if (hasNumbers) {
    availableFunctions.push(getNumber);
    /* testCharacters.push(testNumbers); */
  }
  if (hasLowercase) {
    availableFunctions.push(getLowercase);
    /* testCharacters.push(testLowercase); */
  }
  if (hasUppercase) {
    availableFunctions.push(getUppercase);
    /* testCharacters.push(testUppercase); */
  }
  if (hasSymbol) {
    availableFunctions.push(getSymbol);
    /* testCharacters.push(testSymbols); */
  }

  if (availableFunctions.length === 0 || length < availableFunctions.length)
    return password;

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  availableFunctions = shuffle(availableFunctions);

  for (let i = 0; i < availableFunctions.length; i++) {
    password += availableFunctions[i]();
  }

  for (let i = password.length; i < length; i++) {
    password +=
      availableFunctions[
        Math.floor(Math.random() * availableFunctions.length)
      ]();
  }

  /* let iterations = 0; */

  /* const testCharactersStringyfied = testCharacters.join(" && ");

  while (!eval(testCharactersStringyfied)) {
    password = ""; */

  /* for (let i = 0; i < length; i++) {
    password +=
      availableFunctions[
        Math.floor(Math.random() * availableFunctions.length)
      ]();
  } */

  /*   iterations++;
  } */

  /* console.clear();
  console.warn(`"While" iterations: ${iterations}`); */

  return password;
};

export { generatePassword };
