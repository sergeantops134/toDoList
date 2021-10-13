export class Task {
    description;
    start;
    end;
    isCompleted;
    toBeDisplayed;

    constructor(obj) {
        Object.assign(this, obj);
        this.isCompleted = false;
        this.toBeDisplayed = true;
    }

    getTaskMarkup(index) {
        return `
        <div class="task${this.isCompleted ? " done" : ""}${this.toBeDisplayed ? "" : " hide"}">
            <div class="task-controls">
                <input type="checkbox" class="is-done" ${this.isCompleted ? "checked" : ""}>
            </div>
            <div class="task-text">
                <p>Task: ${this.description}</p>
                <p>Started: ${this.start}</p>
                <p>Ends: ${this.end}</p>
            </div>  
            <div class="task-delete">
                <button class="pencil-button ${this.isCompleted ? " hide" : ""}" value="${index}"></button>
                <button class="cros-button" value="${index}">X</button>
            </div>          
        <div>
    `;
    }

    getInputDate(selector) {
        return this[selector].split(".").reverse().join("-");
    }
}


