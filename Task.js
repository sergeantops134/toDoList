export class Task{
    description;
    start;
    end;
    isCompleted;

    constructor(obj) {
        Object.assign(this, obj)

        this.isCompleted = false;
    }

}