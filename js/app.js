let userId;
let signupSubmitBtn;
let signinSubmitBtn;

const server = new Server();

const main = document.getElementById("page-container");
const homeTab = document.querySelector("header #home-a-elm"); //נכתב בצורה הזו בשביל להקל על השותף לפרוייקט.

const homeTemplate = document.getElementById("home");
const signupTemplate = document.getElementById("signup");
const signinTemplate = document.getElementById("signin");
const todolistTemplate = document.getElementById("todolist");
const offlineHomeTemplate = document.getElementById("offline-home");
const offlineTodolistTemplate = document.getElementById("offline-todolist");

const header = document.querySelector("header");

window.addEventListener("DOMContentLoaded", () => {
  // main.appendChild("./templates/homeTemplate.html");
  const connectedUser = localStorage.getItem("connectedUser");
  if (location.hash.length == 0) {
    //Adding an 'active' class(css class) to the main tab.
    homeTab.classList.add("active");

    location.hash = "home";
  } else {
    if (connectedUser) myRouter();
    else offlineUserMyRouter();
  }
});

// Listen for changes in location.hash property.
window.addEventListener("hashchange", () => {
  //Checks if the user has signed in.
  const connectedUser = localStorage.getItem("connectedUser");

  if (connectedUser) myRouter();
  else offlineUserMyRouter();
});

const tabs = document.querySelector(".navbar").querySelectorAll("a");

tabs.forEach((aTag) => aTag.addEventListener("click", turnActive));
// Remove the last active tab style if exist and add 'active' class to the clicked tab.
function turnActive(event) {
  tabs.forEach((aTag) => {
    if (aTag.classList.contains("active")) aTag.classList.remove("active");
  });

  event.target.classList.add("active");
}

//Routing and display templates to an online user.
function myRouter() {
  {
    // Get the value of the location.hash property
    const hash = window.location.hash.substring(1);
    // Dynamically generate the page content based on the hash value
    switch (hash) {
      case "home": {
        document.querySelector('a[href="#signin"]').style.display = "none";
        document.querySelector('a[href="#signup"]').style.display = "none";
        document.querySelector('a[href="#logout"]').style.display = "inline";

        header.style.display = "flex";

        replaceTemplate(homeTemplate);
        break;
      }
      case "todolist": {
        document.querySelector('a[href="#signin"]').style.display = "none";
        document.querySelector('a[href="#signup"]').style.display = "none";
        document.querySelector('a[href="#logout"]').style.display = "inline";
        header.style.display = "flex";

        replaceTemplate(todolistTemplate);
        break;
      }

      case "logout": {
        document.querySelector('a[href="#logout"]').style.display = "none";
        document.querySelector('a[href="#signin"]').style.display = "inline";
        document.querySelector('a[href="#signup"]').style.display = "inline";
        localStorage.removeItem("connectedUser");
        homeTab.classList.add("active");
        location.hash = "home";
        offlineUserMyRouter();
        break;
      }
    }
  }
}

//Routing and display templates to an offline user.
function offlineUserMyRouter() {
  {
    // Get the value of the location.hash property
    const hash = window.location.hash.substring(1);
    // Dynamically generate the page content based on the hash value
    switch (hash) {
      case "home": {
        header.style.display = "flex";
        document.querySelector('a[href="#signup"]').style.display = "none";

        replaceTemplate(offlineHomeTemplate);
        break;
      }
      case "todolist": {
        header.style.display = "flex";
        document.querySelector('a[href="#signup"]').style.display = "none";

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
}

//Remove all html children of 'main' tag and replace them with a template.
//used by myRouter() and offlineUserMyRouter()
function replaceTemplate(template) {
  const content = template.content.cloneNode(true);
  main.replaceChildren(content);
}
