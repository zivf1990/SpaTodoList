const submitSignupBtn = document.getElementById("submit-signup-btn");
const response = document.getElementById("response");

const signupForm = document.forms["signup-form"];

console.log("signup");

let users = [];

signupForm.addEventListener("submit", registerUser);

function registerUser(event) {
  event.preventDefault();

  const password = signupForm["password"];
  const username = signupForm["email"];

  const user = {
    username: username.value,
    password: password.value,
  };

  // No users at all.
  if (JSON.parse(localStorage.getItem("users") === null)) {
    if (signupForm.checkValidity()) {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      // location.reload();
      console.log("created user ever");
    }
  } else {
    users = JSON.parse(localStorage.getItem("users"));
    //user with the same username already exists in localStorage
    const checkIfUsernameExists = users.some(
      (user) => user.username === username.value
    );

    if (checkIfUsernameExists) {
      // console.log(username.value);

      response.textContent = "Username is already exists";

      console.log(username.reportValidity());
    } else {
      //user does not exist in users(create new user)

      users.push(user);

      localStorage.setItem("users", JSON.stringify(users));
      // location.reload();
      console.log("created user");
    }
  }
}
