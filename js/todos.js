/////making sure that when the page refreshes the lists it wont add the todos again to local storage
// let isFromLocalStorage = true;

userId = parseInt(JSON.parse(localStorage.getItem("connectedUser")).id);

printTodosToTheUI();

document
  .getElementById("add-todo-btn")
  .addEventListener("click", addTodoToServer);

// let refreshListFromServer = (function () {
//   let userId = parseInt(JSON.parse(localStorage.getItem("connectedUser")).id);

//   let toDolist = RestAPI.getUser(userId).data.todosArr;
//   for (let li of toDolist) {
//     li !== null || li !== "" ? createTodo(li) : "";
//   }
// })();

function printTodosToTheUI() {
  const todosContainer = document.querySelector(".todos-list-container");

  todosContainer.innerHTML = "";

  refreshListFromServer().forEach((item) => todosContainer.appendChild(item));
}

//ziv changes
// Download an array of todo list texts from the server and
// returns an array of html divs using createTodoCard() function.
function refreshListFromServer() {
  let toDolist = RestAPI.getUser(userId).data.todosArr;

  return toDolist.map((todo) => createTodoCard(todo));
}

//ziv changes
function addTodoToServer() {
  const todoinput = document.getElementById("todo-input");

  RestAPI.createTodo({userId: userId, value: todoinput.value});

  printTodosToTheUI();
}

function createTodoCard(todo) {
  let todoCard = createToDoStyle();

  todoCard.textContent = todo;

  return todoCard;
  //ziv changes
}

function createToDoStyle() {
  const todoCard = document.createElement("div");
  todoCard.className = "to-do-card";
  return todoCard;
  // All of the css rules have been moved to the todos.css file.
}
