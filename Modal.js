import {Task} from "./Task.js"


export class Modal{
    modal;
    body;
    taskIndex;
    tasksReference;
    constructor(arr) {
        this.tasksReference = arr;
        this.modal = document.querySelector(".modal");
        this.body = document.querySelector("body");
    }
    showModal(taskIndex){
        this.taskIndex = taskIndex;
        this.body.classList.add("no-scroll");
        this.modal.classList.remove("hide");
    }
    hideModal(){
        this.body.classList.remove("no-scroll");
        this.modal.classList.add("hide");
        this.taskIndex = undefined;
    }
    getResult(obj){
        const task = new Task(obj);
        if (this.taskIndex === undefined){
            this.tasksReference.push(task);
        }
    }
}