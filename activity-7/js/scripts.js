// Javascript file for the page

// Main tasks array
var tasks = [];

// Pseudo enum type for the task status
var taskStatus = {
    active: 'active',
    completed: 'completed'
}

// Constructor for the Task function
function Task (id, name, status) {
    this.id     = id;
    this.name   = name;
    this.status = status;
}

// Function that adds new elements for a new task
function addTaskElement (task) {

    // Create the DOM elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    // Set the attribute for the new element
    taskEl.setAttribute('id', task.id);

    // Add the text element to the new task element
    taskEl.appendChild(textEl);

    // Add the task element to the list element
    listEl.appendChild(taskEl);
}

// Click handler to add a new task
function addTask (event) {
    var inputEl = document.getElementById('input-task');

    if (inputEl.value != '') {
        // Create a new unique ID for the element
        var id = 'item-' + tasks.length;

        // Create a new task and add it to the master array
        var task = new Task(id, inputEl.value, taskStatus.active);
        tasks.push(task);

        // Add the new task to the DOM
        addTaskElement(task);

        // Reset the input field
        inputEl.value = '';
    }
}

// Handler for completing tasks
function completeTask (event) {
    // Retrieve the task element and unique ID
    var taskEl = event.target;
    var id     = taskEl.id;

    // Locate the task from the task array and update its status
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].status = taskStatus.completed;
            break;
        }
    }

    // Remove the task element from the active list, and add it to the completed list
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

// Handler to simulate a button click when the user presses return on the input field
function clickButton (event) {
    if (event.keyCode === 13) {
        document.getElementById('add-task').click();
    }
}

// Main function for the script

function init () {

    // Setup the handlers for the task manipulation
    document.getElementById('add-task').onclick = addTask;
    document.getElementById('active-list').onclick = completeTask;
    document.getElementById('input-task').onkeypress = clickButton;
}

init();