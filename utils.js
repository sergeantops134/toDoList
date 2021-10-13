import {
    MILISECONDS_IN_DAY, MODAL_TEXT,
    TASKS_HOLDER,
    tasksPresent
} from "./const.js";
import {Task} from "./Task.js";

export function validate(event) {
    event.target.value = event.target.value.replace(/[^a-z]/g, '');
}

export function addDefault(event) {
    if (event.code !== "Enter" || event.target.value === "") return;

    const date = new Date();
    const start = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    const end = `${date.getDate() + 1}.${date.getMonth() + 1}.${date.getFullYear()}`;

    tasksPresent.push(new Task({description: event.target.value, start: start, end: end}) );

    refreshTasks(tasksPresent);
    event.target.value = "";
}

export function refreshTasks(tasksToShow) {
    TASKS_HOLDER.innerHTML = "";

    if(!(tasksToShow.length)) {
        TASKS_HOLDER.insertAdjacentHTML("beforeend", `<h2>No tasks present</h2>`);
        return;
    }

    tasksToShow.forEach( (task, index) => {
        TASKS_HOLDER.insertAdjacentHTML("beforeend", task.getTaskMarkup(index) );
    });
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
    getCheckBoxes().forEach((item, index) => {
        tasksPresent[index].isCompleted = item.checked;
    });

    refreshTasks(tasksPresent);
}

export function deleteAt(index) {
    tasksPresent.splice(index, 1);

    refreshTasks(tasksPresent);
}

export function isDateInvalid(start, end) {
    return start > end || start < Date.now() - MILISECONDS_IN_DAY || end < Date.now() || MODAL_TEXT.value === "";
}

export function getDateFromInput(source) {
     return source.value.split("-").reverse().join(".");
}

export function checkChildType(child, type) {
    return child.classList.contains(type);
}