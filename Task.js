export class Task {
    description;
    start;
    end;
    isCompleted;

    constructor(obj) {
        Object.assign(this, obj)

        this.isCompleted = false;
    }

    getTaskMarkup() {
        return `
        <div class="task${this.isCompleted ? " done" : ""}">
            <div class="task-controls">
            <input type="checkbox" class="is-done" ${this.isCompleted ? "checked" : ""}>
            </div>
            <div class="task-text">
                <p>Task: ${this.description}</p>
                <p>Started: ${this.start}</p>
                <p>Ends: ${this.end}</p>
            </div>            
        <div>
    `;
    }

}