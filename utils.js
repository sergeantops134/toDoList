export function validate(event){
    event.target.value = event.target.value.replace(/[^a-z]/g, '');
}
export function getTaskMarkup(task){
    return `
    <div class="task">
    <p>Task: ${task.description}</p>
    <p>Started: ${task.start}</p>
    <p>Ends: ${task.end}</p>
    <div>
    `;
}

