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
    loadMainPage(response.id, response.data);
  } else {
    document.getElementById("response").textContent =
      "Something went wrong. Try again";
  }

  console.log("signin", response);
}

function loadMainPage(id, data) {
  localStorage.setItem("connectedUser", JSON.stringify({id: id, data: data}));

  location.hash = "home";
}
