'use strict'

const err = document.querySelector(".err");
const inputTask = document.getElementById("input-task");
const addTaskBtn = document.querySelector("#add-task");
const inputSearch = document.getElementById("search-input");
const taskList = document.querySelector(".task-list");
const clearAllBtn = document.querySelector(".clear-all");

// add task
addTaskBtn.addEventListener('click', (e)=>{
    e.preventDefault();
if(inputTask.value !==''){

const taskText = inputTask.value.trim();

const newLi = document.createElement("li");
newLi.className = "task";

const taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.disabled = true;

taskInput.value = taskText;

newLi.appendChild(taskInput);

const deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
deleteBtn.className = "deleteBtn";

newLi.appendChild(deleteBtn);

const editBtn = document.createElement("button");
editBtn.innerText = "Edit";
editBtn.className = "editBtn";

newLi.appendChild(editBtn);

taskList.appendChild(newLi);

inputTask.value = "";

}else{
    err.style.display = "block";
    setTimeout(()=>{
        err.style.display = "none";
    }, 2000);
}
});

// delete task

taskList.addEventListener("click", (e)=>{
    e.preventDefault();
if(e.target.classList.contains('deleteBtn')){

e.target.parentElement.remove();
}
});

// edit task
taskList.addEventListener("click", (e)=>{
    e.preventDefault();

if(e.target.classList.contains("editBtn")){

const input = e.target.parentElement.querySelector(".disabled-task");

input.disabled = !input.disabled;

if(!input.disabled){
    input.focus();
}

}
});

// delete all task
clearAllBtn.addEventListener("click", (e)=>{
    e.preventDefault();


taskList.innerHTML = "";
});


// search task
inputSearch.addEventListener('keyup', (e)=>{
    e.preventDefault();

const taskText = inputSearch.value.toLowerCase();

const taskItens = document.querySelectorAll('.task');

for(let i = 0; i < taskItens.length; i++){
    const liTask = taskItens[i];

const taskTextItem = liTask
.querySelector(".disabled-task")
.value.toLowerCase();

if(taskTextItem.indexOf(searchText) !== -1){
liTask.style.display = "block";
}else{
liTask.style.display = "none";
}
}
});