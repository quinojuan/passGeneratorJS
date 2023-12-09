const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "#$%";

const allChars = upperCase + lowerCase + number + symbol;

const createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
};

const copyPassword = async () => {
  let pass = passwordBox.value;
  try {
    if (pass) {
      await navigator.clipboard.writeText(pass);

      Swal.fire({
        title: "Copied!",
        icon: "success"
      });

    } else {
      Swal.fire({
  title: "Password empty!",
  text: "Press on the Generate Password button",
  icon: "warning"
});
    }
  } catch (error) {
    console.log(error.message);
  }
};