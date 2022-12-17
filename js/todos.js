userId = parseInt(JSON.parse(localStorage.getItem("connectedUser")).id);

printTodosToTheUI();

document
  .getElementById("add-todo-btn")
  .addEventListener("click", addTodoToServer);

//Prints any todos existing in the server to the screen.
function printTodosToTheUI() {
  const todosContainer = document.querySelector(".todos-list-container");

  todosContainer.innerHTML = "";

  refreshListFromServer().forEach((item) => todosContainer.appendChild(item));
}

// Download an array of todo list content from the server and
// returns an array of html divs using createTodoCard() function.
function refreshListFromServer() {
  let toDolist = RestAPI.getUser(userId).data.todosArr;

  return toDolist.map((todoContent) => createTodoCard(todoContent));
}

//Add a new todo data to the array in the server.
function addTodoToServer() {
  const todoinput = document.getElementById("todo-input");

  RestAPI.createTodo({ userId: userId, value: todoinput.value });

  printTodosToTheUI();
}

// creating a div card to wrap the todo item and text.
function createTodoCard(todo) {
  const todoCard = document.createElement("div");
  todoCard.className = "to-do-card";

  todoCard.textContent = todo;

  return todoCard;
}
