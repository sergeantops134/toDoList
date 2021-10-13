import {
    validate,
    addDefault,
    refreshTasks,
    getTimeStamp,
    updateDone,
    deleteAt,
    isDateInvalid,
    getDateFromInput,
    checkChildType,
} from "./utils.js";
import {
    TEXT_INPUT,
    MODAL_TEXT,
    PLUS_BUTTON,
    CANCEL_BUTTON,
    OK_BUTTON,
    MODAL_START_INPUT,
    MODAL_END_INPUT,
    TASKS_HOLDER,
    tasksPresent,
    modal,
    SHOW_ALL_BUTTON, SHOW_ACTIVE_BUTTON, SHOW_COMPLETED_BUTTON, CLEAR_COMPLETED_BUTTON,
} from "./const.js";

TASKS_HOLDER.addEventListener("click", (event) => {
    const isChecking = checkChildType(event.target, "is-done");
    const isDeleting = checkChildType(event.target, "cros-button");
    const isEditing = checkChildType(event.target, "pencil-button");

    if (isChecking) {
        updateDone();
    } else if (isDeleting) {
        deleteAt(event.target.value);
    } else if (isEditing) {
        modal.showModal(event.target.value);
    }
});

TEXT_INPUT.addEventListener("input", validate);
MODAL_TEXT.addEventListener("input", validate);

TEXT_INPUT.addEventListener("keyup", addDefault);

CANCEL_BUTTON.addEventListener("click", () => {
    modal.hideModal();
});
OK_BUTTON.addEventListener("click", () => {
    const start = getTimeStamp(MODAL_START_INPUT.value);
    const end = getTimeStamp(MODAL_END_INPUT.value);
    if(isDateInvalid(start, end)){
        modal.invalidInput();
        return;
    }
    const obj = {
        description: MODAL_TEXT.value,
        start: getDateFromInput(MODAL_START_INPUT),
        end: getDateFromInput(MODAL_END_INPUT),
    }
    modal.getResult(obj);
    modal.hideModal();
    refreshTasks(tasksPresent);
});

PLUS_BUTTON.addEventListener("click", () => {
    modal.showModal();
});
SHOW_ALL_BUTTON.addEventListener("click", () => {
    tasksPresent.forEach( (task) => {
        task.toBeDisplayed = true;
    });

    refreshTasks(tasksPresent);
});
SHOW_ACTIVE_BUTTON.addEventListener("click", () => {
    tasksPresent.forEach( (task) => {
        task.toBeDisplayed = !(task.isCompleted);
    });
    refreshTasks(tasksPresent);
});
SHOW_COMPLETED_BUTTON.addEventListener("click", () => {
    tasksPresent.forEach( (task) => {
        task.toBeDisplayed = task.isCompleted;
    });
    refreshTasks(tasksPresent);
});
CLEAR_COMPLETED_BUTTON.addEventListener("click", () => {
    const tasksActive = tasksPresent.filter( (task) => !(task.isCompleted) );
    tasksPresent.splice(0, tasksPresent.length, ...tasksActive);

    refreshTasks(tasksPresent);
});




