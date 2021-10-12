import {Task} from "./Task.js";
import {validate, getTaskMarkup} from "./utils.js";
import {Modal} from "./Modal.js";

const textInput = document.querySelector("#newText");
const modalText = document.querySelector("#modalText")
const plusBtn = document.querySelector(".plus-button");
const taskHolder = document.querySelector(".task-holder");
const cancelBtn = document.querySelector("#cancelBtn");
const okButton = document.querySelector("#okBtn");
const modalStart = document.querySelector("#modalStart");
const modalEnd = document.querySelector("#modalEnd")

textInput.addEventListener("input", validate);
modalText.addEventListener("input", validate);
textInput.addEventListener("keyup", addDefault);
plusBtn.addEventListener("click", ()=>{
    modal.showModal();
});
cancelBtn.addEventListener("click", ()=>{
    modal.hideModal();
});
okButton.addEventListener("click", ()=>{
    const obj = {description: modalText.value,
        start: modalStart.value.split("-").reverse().join("."),
        end: modalEnd.value.split("-").reverse().join(".")}
    modal.getResult(obj);
    modal.hideModal();
    refreshTasks(tasksPresent);
});

const tasksPresent = [];
const modal = new Modal(tasksPresent);



















//================== utils

function addDefault(event){
    if(event.code !== "Enter" || event.target.value === "") return;
    const date = new Date();
    const start = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    const end = `${date.getDate() + 1}.${date.getMonth() + 1}.${date.getFullYear()}`;

    tasksPresent.push(new Task({description: event.target.value, start: start, end: end}));
    refreshTasks(tasksPresent);
    event.target.value = "";
}

function refreshTasks(tasksToShow){
    taskHolder.innerHTML = "";
    if(!(tasksToShow.length)) {
        taskHolder.insertAdjacentHTML("beforeend", `<h2>No tasks present</h2>`);
        return;
    }
    for (let task of tasksToShow){
        taskHolder.insertAdjacentHTML("beforeend", getTaskMarkup(task));
    }
}






