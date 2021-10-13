import {Modal} from "./Modal.js";

export const DOCUMENT_BODY = document.querySelector("body");
export const TEXT_INPUT = document.querySelector("#newText");
export const MODAL_TEXT = document.querySelector("#modalText")
export const PLUS_BUTTON = document.querySelector(".plus-button");
export const TASKS_HOLDER = document.querySelector(".task-holder");
export const SORT_OPTIONS_HOLDER = document.querySelector("#sortOptionsHolder");
export const CANCEL_BUTTON = document.querySelector("#cancelBtn");
export const OK_BUTTON = document.querySelector("#okBtn");
export const MODAL_START_INPUT = document.querySelector("#modalStart");
export const MODAL_END_INPUT = document.querySelector("#modalEnd")
export const MILISECONDS_IN_DAY = 8.64e+7;
export const SHOW_ALL_BUTTON = document.querySelector("#allBtn");
export const SHOW_ACTIVE_BUTTON = document.querySelector("#activeBtn");
export const SHOW_COMPLETED_BUTTON = document.querySelector("#completedBtn");
export const CLEAR_COMPLETED_BUTTON = document.querySelector("#clearBtn");
export const SORT_BUTTON = document.querySelector("#sortBtn");
export const SORT_BY_TEXT_BUTTON = document.querySelector("#sortByTextBtn");
export const SORT_BY_END_BUTTON = document.querySelector("#sortByEndBtn");
export const tasksPresent = [];
export const modal = new Modal();