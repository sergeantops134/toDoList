import {Task} from "./Task.js";
import {validate, addDefault, refreshTasks, getTimeStamp} from "./utils.js";
import {Modal} from "./Modal.js";
import {textInput, modalText, plusBtn, cancelBtn, okButton, modalStart, modalEnd, taskHolder, tasksPresent} from "./const.js";

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

    console.log(modalStart.value, modalEnd.value, start > end, start < Date.now(), end < Date.now());

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



