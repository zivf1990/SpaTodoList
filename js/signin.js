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

  if (response.status === 200) {
    loadMainPage(response.id);
  } else {
    document.getElementById("response").textContent =
      "Something went wrong. Try again";
  }

  console.log("signin", response);
}

function loadMainPage(id) {
  localStorage.setItem("registeredUserID", JSON.stringify(id));

  location.hash = "home";
}
