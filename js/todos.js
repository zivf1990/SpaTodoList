console.log("todos.js")
main = document.getElementById("page-container");

const addBtn = document.getElementById("add-todo-btn");
const todoinput = document.getElementById("todo-input");

addBtn.addEventListener("click", createTodo);

function createTodo() {
  const todoCard = document.createElement("div");
  todoCard.className = "to-do-card";
  todoCard.style.background = "yellow";
  todoCard.style.color = "black";
  todoCard.textContent = todoinput.value;
  todoCard.style.width = "20%";
  main.appendChild(todoCard);
  RestAPI.createTodo()


  const todo = {
    title: "title",
    description: todoinput.value,
  };
}
