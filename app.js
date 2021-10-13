import {
    validate,
    addDefault,
    refreshTasks,
    getInputTimeStamp,
    updateDone,
    deleteAt,
    isDateInvalid,
    getDateFromInput,
    checkChildType, getTimeStamp,
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
    SHOW_ALL_BUTTON,
    SHOW_ACTIVE_BUTTON,
    SHOW_COMPLETED_BUTTON,
    CLEAR_COMPLETED_BUTTON,
    SORT_BUTTON,
    SORT_OPTIONS_HOLDER,
    DOCUMENT_BODY,
    SORT_BY_TEXT_BUTTON,
    SORT_BY_END_BUTTON,
    FILTER_BUTTON,
    FILTER_TEXT_INPUT,
    FILTER_END_INPUT,
} from "./const.js";

DOCUMENT_BODY.addEventListener("click", function hideSortOptions(event) {
    if (event.target.id !== "sortBtn") SORT_OPTIONS_HOLDER.classList.add("hide");
});

TASKS_HOLDER.addEventListener("click", function proceedTask(event) {
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

CANCEL_BUTTON.addEventListener("click", function cancelModalResult() {
    modal.hideModal();
});
OK_BUTTON.addEventListener("click", function addCustomTask() {
    const start = getInputTimeStamp(MODAL_START_INPUT.value);
    const end = getInputTimeStamp(MODAL_END_INPUT.value);
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
    refreshTasks();
});

PLUS_BUTTON.addEventListener("click", function showModalWindow() {
    modal.showModal();
});
SHOW_ALL_BUTTON.addEventListener("click", function showAll() {
    tasksPresent.forEach( (task) => {
        task.toBeDisplayed = true;
    });

    refreshTasks();
});
SHOW_ACTIVE_BUTTON.addEventListener("click", function showOnlyActive() {
    tasksPresent.forEach( (task) => {
        task.toBeDisplayed = !(task.isCompleted);
    });
    refreshTasks();
});
SHOW_COMPLETED_BUTTON.addEventListener("click", function showOnlyCompleted() {
    tasksPresent.forEach( (task) => {
        task.toBeDisplayed = task.isCompleted;
    });
    refreshTasks();
});
CLEAR_COMPLETED_BUTTON.addEventListener("click", function clearCompletedTasks() {
    const tasksActive = tasksPresent.filter( (task) => !(task.isCompleted) );
    tasksPresent.splice(0, tasksPresent.length, ...tasksActive);

    refreshTasks();
});

SORT_BUTTON.addEventListener("click", function showSortOptions() {
    SORT_OPTIONS_HOLDER.classList.remove("hide");
});
SORT_BY_TEXT_BUTTON.addEventListener("click", function sortByDescription() {
    tasksPresent.sort( (previous, next) => {
    if (previous.description === next.description) return 0;
    return previous.description < next.description ? -1 : 1;
    });

    refreshTasks();
});
SORT_BY_END_BUTTON.addEventListener("click", function sortByDeadline() {
    tasksPresent.sort( (previous, next) => getTimeStamp(previous.end) - getTimeStamp(next.end));

    refreshTasks();
});

FILTER_BUTTON.addEventListener("click", function filter(){
    const filterText = FILTER_TEXT_INPUT.value;
    const filterEnd = getDateFromInput(FILTER_END_INPUT);
        tasksPresent.forEach( (task) => {
            const isTextValid = filterText ? task.description.includes(filterText) : true;
            const isEndValid = filterEnd ? task.end === filterEnd : true;

            task.isFiltered = isEndValid && isTextValid;
        });

    refreshTasks();
});


