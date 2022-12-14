const inputMail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const submitBtn1 = document.getElementById("submit-btn-signup");

const signupForm = document.querySelector(".input-box");

console.log("signup");

let users = [];

submitBtn1.addEventListener("click", registerUser);

function registerUser(event) {
  event.preventDefault();

  const user = {
    username: inputMail.value,
    password: inputPassword.value,
  };

  const response = RestAPI.createNewUser(user);
  console.log("signup", response);
  console.log(response.status);

  if (response.status === 201) {
    loadMainPage(response.id, response.data);
  } else {
    document.getElementById("response").textContent =
      "Something went wrong. Try again";
  }

  // No users at all.
  // if (JSON.parse(localStorage.getItem("users") === null)) {
  //   if (signupForm.checkValidity()) {
  //     users.push(user);
  //     localStorage.setItem("users", JSON.stringify(users));
  //     loadMainPage();
  //     console.log("created user ever");
  //   }
  // } else {
  //   users = JSON.parse(localStorage.getItem("users"));
  //   //user with the same username already exists in localStorage
  //   const checkIfUsernameExists = users.some(
  //     (user) => user.username === user.username
  //   );

  //   if (checkIfUsernameExists) {
  //     // console.log(username.value);

  //     response.textContent = "Username already exists";

  //     console.log(inputMail.reportValidity());
  //   } else {
  //     //user does not exist in users(create new user)

  //     users.push(user);

  //     localStorage.setItem("users", JSON.stringify(users));
  //     loadMainPage();

  //     console.log("created user");
  //   }
  // }
}

function loadMainPage(id, data) {
  localStorage.setItem("connectedUser", JSON.stringify({ id: id, data: data }));
  document.querySelector('a[href="#logout"]').style.display = "inline";

  location.hash = "home";
}
