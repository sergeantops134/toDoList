import {Task} from "./Task.js";
import {validate, addDefault, refreshTasks, getTimeStamp, updateDone, deleteAt} from "./utils.js";
import {Modal} from "./Modal.js";
import {
    textInput,
    modalText,
    plusBtn,
    cancelBtn,
    okButton,
    modalStart,
    modalEnd,
    taskHolder,
    tasksPresent,
    MILISECONDS_IN_DAY
} from "./const.js";

taskHolder.addEventListener("click", (event) => {
    const isChecking = event.target.classList.contains("is-done");
    const isDeleting = event.target.classList.contains("cros-button");
    const isEditing = event.target.classList.contains("pencil-button");

    if (isChecking) {
        updateDone();
    } else if (isDeleting) {
        deleteAt(event.target.value);
    } else if (isEditing) {
        modal.showModal(event.target.value);
    }
});
textInput.addEventListener("input", validate);
modalText.addEventListener("input", validate);
textInput.addEventListener("keyup", addDefault);
plusBtn.addEventListener("click", () => {
    modal.showModal();
});
cancelBtn.addEventListener("click", () => {
    modal.hideModal();
});
okButton.addEventListener("click", () => {
    const start = getTimeStamp(modalStart.value);
    const end = getTimeStamp(modalEnd.value);
    if(start > end || start < Date.now() - MILISECONDS_IN_DAY || end < Date.now() || modalText.value === ""){
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



