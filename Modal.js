import {Task} from "./Task.js"
import {DOCUMENT_BODY, MODAL_END_INPUT, MODAL_START_INPUT, MODAL_TEXT, tasksPresent} from "./const.js";


export class Modal {
    modal;
    body;
    taskIndex;

    constructor() {
        this.modal = document.querySelector(".modal");
        this.body = DOCUMENT_BODY;
    }

    showModal(taskIndex) {
        this.taskIndex = taskIndex;
        this.body.classList.add("no-scroll");
        this.modal.classList.remove("hide");
        if (taskIndex !== undefined) {
            MODAL_TEXT.value = tasksPresent[taskIndex].description;
            MODAL_START_INPUT.value = tasksPresent[taskIndex].getInputDate("start");
            MODAL_END_INPUT.value = tasksPresent[taskIndex].getInputDate("end");
        }
    }

    hideModal() {
        this.body.classList.remove("no-scroll");
        this.modal.classList.add("hide");
        this.taskIndex = undefined;
        MODAL_TEXT.value = "";
        MODAL_START_INPUT.value = "";
        MODAL_END_INPUT.value = "";
        MODAL_START_INPUT.classList.remove("wrong");
        MODAL_END_INPUT.classList.remove("wrong");
    }

    getResult(obj) {
        const task = new Task(obj);
        if (this.taskIndex === undefined) {
            tasksPresent.push(task);
        } else {
            tasksPresent[this.taskIndex] = task;
        }
    }

    invalidInput() {
        MODAL_TEXT.classList.add("wrong");
        MODAL_START_INPUT.classList.add("wrong");
        MODAL_END_INPUT.classList.add("wrong");
    }
}