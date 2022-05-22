const inputBox = document.querySelector(".inputfield");
const input = document.querySelector(".input");
const addBtn = document.querySelector(".add");
const todolist = document.querySelector(".todolist");
const deleteAllBtn = document.querySelector(".footer");
const deleteAllBtns = document.querySelector(".clear");
const comp = document.querySelector("#myCheck");

input.onkeyup = () => {
  let Value_Enter = input.value;
  if (Value_Enter.trim() != 0) {
    addBtn.classList.add("active");
  }
};
showTasks();

addBtn.onclick = () => {
  let Value_Enter = input.value;
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  listArray.push(Value_Enter);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
  addBtn.classList.remove("active");
};

function showTasks() {
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li><input type="checkbox" id="myCheck">${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash-o"></i></span></li>`;
  });
  todolist.innerHTML = newLiTag;
  input.value = "";
}

function deleteTask(index) {
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}

deleteAllBtn.onclick = () => {
  listArray = [];
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
};
