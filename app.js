import {Task} from "./Task.js";
import {validate, addDefault, refreshTasks, getTimeStamp, updateDone, deleteAt} from "./utils.js";
import {Modal} from "./Modal.js";
import {textInput, modalText, plusBtn, cancelBtn, okButton, modalStart, modalEnd, taskHolder, tasksPresent} from "./const.js";

taskHolder.addEventListener("click", (event)=>{
    if (event.target.classList.contains("is-done")) {
        updateDone();
    } else {
        console.log(event.target.value);
        deleteAt(event.target.value);
    }
});
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
    const start = getTimeStamp(modalStart.value);
    const end = getTimeStamp(modalEnd.value);


    if(start > end || start < Date.now() || end < Date.now()){
        modal.invalidInput();
        return;
    }
    const obj = {description: modalText.value,
        start: modalStart.value.split("-").reverse().join("."),
        end: modalEnd.value.split("-").reverse().join(".")}
    modal.getResult(obj);
    modal.hideModal();
    refreshTasks(tasksPresent);
});


const modal = new Modal(tasksPresent);



