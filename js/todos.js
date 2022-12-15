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
    console.log(li)
  }
}()

/////making sure that when the page refreshes the lists it wont add the todos again to local storage
isFromLocalStorage = false;


function createTodo(li) {
  const todoCard = document.createElement("div");
  todoCard.className = "to-do-card";
  todoCard.style.background = "yellow";
  todoCard.style.color = "black";
  if(todoinput.value){
    todoCard.textContent = todoinput.value;
  } else {
    todoCard.textContent = li;
  }
  todoCard.style.width = "20%";
  main.appendChild(todoCard);
  return isFromLocalStorage ? '' : RestAPI.createTodo(userId, todoinput.value);

  const todo = {
    title: "title",
    description: todoinput.value,
  };
}
