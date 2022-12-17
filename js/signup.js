signupSubmitBtn = document.getElementById("submit-btn-signup");

console.log("signup");

signupSubmitBtn.addEventListener("click", registerUser);

function registerUser() {
  let signupInputMail = document.getElementById("email-signup");
  let signupInputPassword = document.getElementById("password-signup");

  const user = {
    username: signupInputMail.value,
    password: signupInputPassword.value,
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
}

function loadMainPage(id, data) {
  localStorage.setItem("connectedUser", JSON.stringify({ id: id, data: data }));
  document.querySelector('a[href="#logout"]').style.display = "inline";

  homeTab.classList.add("active");

  location.hash = "home";
}
