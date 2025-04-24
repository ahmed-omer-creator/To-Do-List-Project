// Get stored tasks from localStorage or initialize as an empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let myinput = document.getElementById("missinput");
let mybutt = document.querySelector("#addmissbutton");
let myDiv = document.querySelector("#missList");

// Function to render tasks from localStorage to the DOM
function renderTasks() {
    myDiv.innerHTML = ""; // Clear the list before rendering
    tasks.forEach(task => {
        // Create elements
        let newMisson = document.createElement("li");
        let deleteMisson = document.createElement("button");
        let checkBox = document.createElement("input");
        let lablecheckBox = document.createElement("label");

        // Text content change
        newMisson.textContent = `${task.text}`;
        deleteMisson.textContent = `Delete the mission`;
        lablecheckBox.textContent = `Did you finish the mission ?`;

        // Attributes change
        checkBox.setAttribute("type", "checkbox");
        newMisson.setAttribute("class", task.completed ? "comp" : "notcomp");
        checkBox.checked = task.completed;  // Check if the task is completed

        // Append children
        myDiv.appendChild(newMisson);
        myDiv.appendChild(deleteMisson);
        myDiv.appendChild(checkBox);
        myDiv.appendChild(lablecheckBox);
        lablecheckBox.appendChild(checkBox);

        // Delete the elements
        deleteMisson.addEventListener("click", function() {
            newMisson.remove();
            deleteMisson.remove();
            checkBox.remove();
            lablecheckBox.remove();
            tasks = tasks.filter(t => t.text !== task.text); // Remove task from array
            localStorage.setItem("tasks", JSON.stringify(tasks)); // Update localStorage
        });

        // Change checkbox state
        checkBox.addEventListener("change", function() {
            if (checkBox.checked) {
                newMisson.removeAttribute("notcomp");
                newMisson.setAttribute("class", "comp");
                task.completed = true;
            } else {
                newMisson.removeAttribute("comp");
                newMisson.setAttribute("class", "notcomp");
                task.completed = false;
            }
            localStorage.setItem("tasks", JSON.stringify(tasks)); // Update localStorage
        });
    });
}

// Render stored tasks when the page loads
renderTasks();

// Add new mission to the list
mybutt.addEventListener("click", function() {
    if (myinput.value.trim() === "") return; // Prevent adding empty tasks

    // Create elements
    let newMisson = document.createElement("li");
    let deleteMisson = document.createElement("button");
    let checkBox = document.createElement("input");
    let lablecheckBox = document.createElement("label");

    // Text content change
    newMisson.textContent = `${myinput.value}`;
    deleteMisson.textContent = `Delete the mission`;
    lablecheckBox.textContent = `Did you finish the mission ?`;

    // Attributes change
    checkBox.setAttribute("type", "checkbox");
    newMisson.setAttribute("class", "notcomp");

    // Add task to the tasks array and localStorage
    tasks.push({ text: myinput.value, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Append children
    myDiv.appendChild(newMisson);
    myDiv.appendChild(deleteMisson);
    myDiv.appendChild(checkBox);
    myDiv.appendChild(lablecheckBox);
    lablecheckBox.appendChild(checkBox);
    myinput.value = ""; // Clear input field

    // Delete the elements
    deleteMisson.addEventListener("click", function() {
        newMisson.remove();
        deleteMisson.remove();
        checkBox.remove();
        lablecheckBox.remove();
        tasks = tasks.filter(task => task.text !== myinput.value); // Remove task from array
        localStorage.setItem("tasks", JSON.stringify(tasks)); // Update localStorage
    });

    // Change checkbox state
    checkBox.addEventListener("change", function() {
        if (checkBox.checked) {
            newMisson.removeAttribute("notcomp");
            newMisson.setAttribute("class", "comp");
            tasks.forEach(task => {
                if (task.text === myinput.value) {
                    task.completed = true;
                }
            });
        } else {
            newMisson.removeAttribute("comp");
            newMisson.setAttribute("class", "notcomp");
            tasks.forEach(task => {
                if (task.text === myinput.value) {
                    task.completed = false;
                }
            });
        }
        localStorage.setItem("tasks", JSON.stringify(tasks)); // Update localStorage
    });
});

// delete the placeHolder
myinput.addEventListener("focus",function(){
    if (myinput.value === "Add a misson"){
    myinput.value = "";}
    
    })
