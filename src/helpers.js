const getRandomInt = (maxLimit) => Math.floor(Math.random() * maxLimit);

/* const getNumber = () => getRandomInt(10);
 */
const getLowercase = () =>
  Array.from(Array(26))
    .map((_, i) => i + 97)
    .map((code) => String.fromCharCode(code))[getRandomInt(26)];

const getUppercase = () => getLowercase().toUpperCase();

const getSymbol = () => {
  const symbols = "<>-_|!#$%&/=?+*";
  const randomIndex = getRandomInt(symbols.length);
  return symbols[randomIndex];
};

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

const generatePassword = (passwordProperties) => {
  let availableFunctions = [];
  let password = "";

  const { length, hasNumbers, hasLowercase, hasUppercase, hasSymbol } =
    passwordProperties;

  if (hasNumbers) {
    availableFunctions.push(() => getRandomInt(10));
  }
  if (hasLowercase) {
    availableFunctions.push(getLowercase);
  }
  if (hasUppercase) {
    availableFunctions.push(getUppercase);
  }
  if (hasSymbol) {
    availableFunctions.push(getSymbol);
  }

  if (availableFunctions.length === 0 || length < availableFunctions.length)
    return password;

  availableFunctions = shuffle(availableFunctions);

  for (let i = 0; i < availableFunctions.length; i++) {
    password += availableFunctions[i]();
  }

  for (let i = password.length; i < length; i++) {
    const randomIndex = getRandomInt(availableFunctions.length);
    password += availableFunctions[randomIndex]();
  }

  return password;
};

export { generatePassword };
