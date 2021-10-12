import {Task} from "./Task.js"
import {modalEnd, modalStart, modalText, tasksPresent} from "./const.js";


export class Modal {
    modal;
    body;
    taskIndex;
    tasksReference;

    constructor() {

        this.modal = document.querySelector(".modal");
        this.body = document.querySelector("body");
    }

    showModal(taskIndex) {
        this.taskIndex = taskIndex;
        this.body.classList.add("no-scroll");
        this.modal.classList.remove("hide");
        if (taskIndex !== undefined){
            modalText.value = tasksPresent[taskIndex].description;
            modalStart.value = tasksPresent[taskIndex].getInputDate("start");
            modalEnd.value = tasksPresent[taskIndex].getInputDate("end");
        }
    }

    hideModal() {
        this.body.classList.remove("no-scroll");
        this.modal.classList.add("hide");
        this.taskIndex = undefined;
        modalText.value = "";
        modalStart.value = "";
        modalEnd.value = "";
        modalStart.classList.remove("wrong");
        modalEnd.classList.remove("wrong");
    }

    getResult(obj) {
        const task = new Task(obj);
        if (this.taskIndex === undefined){
            tasksPresent.push(task);
        } else {
            tasksPresent[this.taskIndex] = task;
        }
    }

    invalidInput() {
        modalStart.classList.add("wrong");
        modalEnd.classList.add("wrong");
    }
}