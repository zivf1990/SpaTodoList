const inputMail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const submitBtn = document.querySelector(".submit");

const signinForm = document.querySelector(".input-box");

console.log("signup");

let users = [];

signinForm.addEventListener("submit", registerUser);

function registerUser(event) {
  event.preventDefault();

  const user = {
    username: inputMail.value,
    password: inputPassword.value,
  };

  console.log(RestAPI.validateUser(user));
}
