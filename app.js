// import ClientRequest from ""

const homeTemplate = document.getElementById("home");
const signupTemplate = document.getElementById("signup");
const signinTemplate = document.getElementById("signin");
const todolistTemplate = document.getElementById("todolist");

const main = document.getElementById("page-container");

window.addEventListener("DOMContentLoaded", () => {
  // main.appendChild("./templates/homeTemplate.html");

  if (location.hash.length == 0) location.hash = "main";
  else myRouter();
});

// Listen for changes to the location.hash property
window.addEventListener("hashchange", () => {
  //Check if the user is loged in.
  // const user = Client
  // if()
  if (true) {
    myRouter();
  } else {
    //{createElement("h1")}
    //you are not logged in
  }
});

function myRouter() {
  {
    // Get the value of the location.hash property
    const hash = window.location.hash.substring(1);
    // Dynamically generate the page content based on the hash value
    switch (hash) {
      case "home": {
        replaceTemplate(homeTemplate);
        break;
      }
      case "todolist": {
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
