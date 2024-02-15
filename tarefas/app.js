'use strict'

// get variables

const err = document.querySelector(".err");
const inputTask = document.getElementById("input-task");
const addTaskBtn = document.querySelector("#add-task");
const inputSearch = document.getElementById("search-input");
const taskList = document.querySelector(".task-list");
const clearAllBtn = document.querySelector(".clear-all");

// add task
//? click on add task
addTaskBtn.addEventListener('click', (e)=>{
    e.preventDefault();
//! check if the input task is not empty
if(inputTask.value !==''){

//! get out input value and trim
const taskText = inputTask.value.trim();

//! create a new li
const newLi = document.createElement("li");
newLi.className = "task";

//! create an input filed -> type of text, disabled, class name of disabletask
const taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.disabled = true;

//! put the input trimmed value into the disabled task input
taskInput.value = taskText;

//! put the input filed that contain the task into the new li
newLi.appendChild(taskInput);

//! create the delete btn -> class of delete btn
const deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
deleteBtn.className = "deleteBtn";

//! put the delete btn into the li
newLi.appendChild(deleteBtn);

//! create an edit btn with class of edit btn
const editBtn = document.createElement("button");
editBtn.innerText = "Edit";
editBtn.className = "editBtn";

//! put the delete btn into the li too
newLi.appendChild(editBtn);

//! put the new li that contains all the information into the trask list
taskList.appendChild(newLi);

//! clear the input task
inputTask.value = "";

}else{
    err.style.display = "block";
    setTimeout(()=>{
        err.style.display = "none";
    }, 2000);
}
});

// delete task

//! onclick on the parent
taskList.addEventListener("click", (e)=>{
    e.preventDefault();
//! check if the clicked target is a delete button
if(e.target.classList.contains('deleteBtn')){

//! get the parent of that delete button
//! remove the parent
e.target.parentElement.remove();
}
});

// edit task
//! click on the taskList
taskList.addEventListener("click", (e)=>{
    e.preventDefault();

//! check if the target is having a class name of editBtn
if(e.target.classList.contains("editBtn")){

//! get the parent of the editBtn
//! get the child of that parent that has a class name of disabled-task or HTML tag of input
const input = e.target.parentElement.querySelector(".disabled-task");

//! check if the input filed of the task is disabled
input.disabled = !input.disabled;

//! check again if the input field is disabled
if(!input.disabled){
    input.focus();
}

//!make the input filed to be in focus
}
});

// delete all task
//! click
clearAllBtn.addEventListener("click", (e)=>{
    e.preventDefault();

//! target all the innerHTML tasklist and make them empty string
taskList.innerHTML = "";
});

// search task
//! add a keyup event on the search input field
inputSearch.addEventListener('keyup', (e)=>{
    e.preventDefault();

//! get the value from the search input
//turn the search value or text to lowerCase
const taskText = inputSearch.value.toLowerCase();

//! get all the Li or task
const taskItens = document.querySelectorAll('.task');

//! loop through the Li or tasks
for(let i = 0; i < taskItens.length; i++){
    const liTask = taskItens[i];

//! target the child of each looped li of type input or class of disabled task
//! get the value of the input or value of disabled task
// turn the value or text into lowercase
const taskTextItem = liTask
.querySelector(".disabled-task")
.value.toLowerCase();

//! check if the search word is in the looped input filed
if(taskTextItem.indexOf(searchText) !== -1){
//! display it block or display it none
liTask.style.display = "block";
}else{
liTask.style.display = "none";
}
}
});