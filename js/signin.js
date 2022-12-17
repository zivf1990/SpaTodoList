signinSubmitBtn = document.getElementById("submit-btn-signin");

// const signinForm = document.querySelector(".input-box");

// let users = [];

signinSubmitBtn.addEventListener("click", logUser);

function logUser() {
  let signinInputMail = document.getElementById("email-signin");
  let signinInputPassword = document.getElementById("password-signin");

  const user = {
    username: signinInputMail.value,
    password: signinInputPassword.value,
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
  localStorage.setItem("connectedUser", JSON.stringify({ id: id, data: data }));
  document.querySelector('a[href="#logout"]').style.display = "inline";

  homeTab.classList.add("active");

  location.hash = "home";
}
