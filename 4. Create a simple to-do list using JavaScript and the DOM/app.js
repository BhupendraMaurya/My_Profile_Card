// Waiting for the DOM to be fully loaded before executing javascript
document.addEventListener("DOMContentLoaded", () => {

    // Attaching event listener to the "Add Task" button
    document.querySelector("button").addEventListener("click", addTask);
});

// Function to add a new task to the list
function addTask() {
    // Get the input field
    let taskInput = document.getElementById("taskInput"); 

    // Trim any leading or trailing spaces
    let taskText = taskInput.value.trim(); 
    
    // Prevent adding empty tasks
    if (taskText === "") return;

    // Create a new <li> element for the task
    let li = document.createElement("li");
    
    // Set the inner HTML of <li>, including a remove button
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;
    
    // Append the new task to the task list
    document.getElementById("taskList").appendChild(li);
    
    // Clear the input field after adding the task
    taskInput.value = "";
}

// Function to remove a task when the "Remove" button is clicked
function removeTask(button) {
    let li = button.parentElement; // Get the parent <li> of the clicked button
    li.remove(); // Remove the task from the list
}
