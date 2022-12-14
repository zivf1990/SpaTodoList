const inputMail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const submitBtn = document.querySelector(".submit");

const signupForm = document.querySelector(".input-box");

console.log("signup");

let users = [];

signupForm.addEventListener("submit", registerUser);

function registerUser(event) {
  event.preventDefault();

  const user = {
    username: inputMail.value,
    password: inputPassword.value,
  };

  // No users at all.
  if (JSON.parse(localStorage.getItem("users") === null)) {
    if (signupForm.checkValidity()) {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      loadMainPage();
      console.log("created user ever");
    }
  } else {
    users = JSON.parse(localStorage.getItem("users"));
    //user with the same username already exists in localStorage
    const checkIfUsernameExists = users.some(
      (user) => user.username === user.username
    );

    if (checkIfUsernameExists) {
      // console.log(username.value);

      response.textContent = "Username already exists";

      console.log(inputMail.reportValidity());
    } else {
      //user does not exist in users(create new user)

      users.push(user);

      localStorage.setItem("users", JSON.stringify(users));
      loadMainPage();

      console.log("created user");
    }
  }
}

function loadMainPage() {
  localStorage.setItem("connectedUser", {
    username: inputMail.value,
    password: inputPassword.value,
  });
  location.hash = "home";
}
