main = document.getElementById("page-container");
const addBtn = document.getElementById("add-todo-btn");
const todoinput = document.getElementById("todo-input");

let userId = parseInt(JSON.parse(localStorage.getItem('connectedUser'))['id']);

/////making sure that when the page refreshes the lists it wont add the todos again to local storage
let isFromLocalStorage = true;

addBtn.addEventListener("click", createTodo);
let refreshListFromServer = function(){
  let toDolist = (RestAPI.getUser(userId)).data.todosArr;
  for (let li of toDolist) {
    li !== null || li !== '' ? createTodo(li) : '';
  }
}()

/////making sure that when the page refreshes the lists it wont add the todos again to local storage
isFromLocalStorage = false;


function createTodo(li) {
  let todoCard = createToDoStyle();
  if(todoinput.value){
    todoCard.textContent = todoinput.value;
  } else {
    todoCard.textContent = li;
  }
  main.appendChild(todoCard);
  return isFromLocalStorage ? '' : RestAPI.createTodo(userId, todoinput.value);
}

function createToDoStyle(){
  const todoCard = document.createElement("div");
  todoCard.className = "to-do-card";
  todoCard.style.background = "yellow";
  todoCard.style.color = "black";
  todoCard.style.width = "80%";
  todoCard.style.height = "5%";
  todoCard.style.textAlign = "center";
  todoCard.style.fontSize = "25px";
  todoCard.style.margin = "2px";
  return todoCard;
}