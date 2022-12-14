const homeTemplate = document.getElementById("home");
const signupTemplate = document.getElementById("signup");
const signinTemplate = document.getElementById("signin");
const todolistTemplate = document.getElementById("todolist");

const offlineHomeTemplate = document.getElementById("offline-home");
const offlineTodolistTemplate = document.getElementById("offline-todolist");

main = document.getElementById("page-container");
const header = document.querySelector("header");

window.addEventListener("DOMContentLoaded", () => {
  // main.appendChild("./templates/homeTemplate.html");
  const connectedUser = localStorage.getItem("connectedUser");
  if (location.hash.length == 0) location.hash = "main";
  else if (connectedUser) myRouter();
  else offlineUserMyRouter();
});

// Listen for changes to the location.hash property
window.addEventListener("hashchange", () => {
  //Check if the user is loged in.
  const connectedUser = localStorage.getItem("connectedUser");
  if (connectedUser) myRouter();
  else offlineUserMyRouter();
});

function myRouter() {
  {
    // Get the value of the location.hash property
    const hash = window.location.hash.substring(1);
    // Dynamically generate the page content based on the hash value
    switch (hash) {
      case "home": {
        document.querySelector('a[href="#signin"]').style.display = "none";
        document.querySelector('a[href="#signup"]').style.display = "none";
        header.style.display = "flex";

        replaceTemplate(homeTemplate);
        break;
      }
      case "todolist": {
        header.style.display = "flex";

        replaceTemplate(todolistTemplate);
        break;
      }
      case "signin": {
        replaceTemplate(signinTemplate);
        break;
      }
      case "signup": {
        replaceTemplate(signupTemplate);
        break;
      }
    }
  }

  function replaceTemplate(template) {
    const content = template.content.cloneNode(true);
    main.replaceChildren(content);
  }
}

function offlineUserMyRouter() {
  {
    // Get the value of the location.hash property
    const hash = window.location.hash.substring(1);
    // Dynamically generate the page content based on the hash value
    switch (hash) {
      case "home": {
        header.style.display = "flex";
        replaceTemplate(offlineHomeTemplate);
        break;
      }
      case "todolist": {
        header.style.display = "flex";

        replaceTemplate(offlineTodolistTemplate);
        break;
      }
      case "signin": {
        header.style.display = "none";

        replaceTemplate(signinTemplate);
        break;
      }
      case "signup": {
        header.style.display = "none";

        replaceTemplate(signupTemplate);
        break;
      }
    }
  }

  function replaceTemplate(template) {
    const content = template.content.cloneNode(true);
    main.replaceChildren(content);
  }
}
