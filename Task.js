export class Task{
    description;
    start;
    end;
    isCompleted;

    constructor(obj) {
        Object.assign(this, obj)

        this.isCompleted = false;
    }

    getTaskMarkup(){
        return `
        <div class="task">
            <p>Task: ${this.description}</p>
            <p>Started: ${this.start}</p>
            <p>Ends: ${this.end}</p>
        <div>
    `;
    }

}