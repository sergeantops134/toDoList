import {
    taskHolder,
    tasksPresent
} from "./const.js";
import {Task} from "./Task.js";

export function validate(event) {
    event.target.value = event.target.value.replace(/[^a-z]/g, '');
}

export function addDefault(event) {
    if(event.code !== "Enter" || event.target.value === "") return;
    const date = new Date();
    const start = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    const end = `${date.getDate() + 1}.${date.getMonth() + 1}.${date.getFullYear()}`;

    tasksPresent.push(new Task({description: event.target.value, start: start, end: end}));
    refreshTasks(tasksPresent);
    event.target.value = "";
}

export function refreshTasks(tasksToShow) {
    taskHolder.innerHTML = "";
    if(!(tasksToShow.length)) {
        taskHolder.insertAdjacentHTML("beforeend", `<h2>No tasks present</h2>`);
        return;
    }
    for (let task of tasksToShow) {
        taskHolder.insertAdjacentHTML("beforeend", task.getTaskMarkup());
    }
}

export function getTimeStamp(str) {
    const time = str.split("-");
    time[1] -= 1;
    return new Date(...time).getTime();
}

function getCheckBoxes() {
    return document.querySelectorAll(".is-done");
}

export function updateDone() {
    getCheckBoxes().forEach((item, index)=>{
        tasksPresent[index].isCompleted = item.checked;
    });

    refreshTasks(tasksPresent);
}