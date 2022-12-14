const inputMail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const submitBtn2 = document.getElementById("submit-btn-signin");

const signinForm = document.querySelector(".input-box");

let users = [];

submitBtn2.addEventListener("click", logUser);

function logUser(event) {
  event.preventDefault();

  const user = {
    username: inputMail.value,
    password: inputPassword.value,
  };

  const response = RestAPI.validateUser(user);
  console.log("signin", response);
}
