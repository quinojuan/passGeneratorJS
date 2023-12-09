const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(upperCase.length)
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
console.log(lowerCase.length)
const number = "0123456789";
console.log(number.length)
const symbol = "#$%";
console.log(symbol.length)

const createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  console.log(password);
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  console.log(password);
  password += number[Math.floor(Math.random() * number.length)];
  console.log(password);
  password += symbol[Math.floor(Math.random() * symbol.length)];
  console.log(password);
};

createPassword()