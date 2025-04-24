let myinput = document.getElementById("missinput");
let mybutt = document.querySelector("#addmissbutton");
let myDiv = document.querySelector("#missList");
let myWarn = document.querySelector("#missWarn")
let mySucc = document.querySelector("#succWarn")


// Add new mission to the list
mybutt.addEventListener("click", function() {
    
    // Prevent adding empty tasks
    
    if (myinput.value.trim() === "") {
    myWarn.textContent = "You cannot add an empty task!"
    myWarn.style.color = "#c0392b"
    return
    }

    if (myinput.value.trim().length > 0 ) {
    mySucc.textContent = "your task has been added successfully !"
    myWarn.textContent = ""
    

}
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
    });

    // Change checkbox state
    checkBox.addEventListener("change", function() {
        if (checkBox.checked) {
            newMisson.removeAttribute("notcomp");
            newMisson.setAttribute("class", "comp");
        } else {
            newMisson.removeAttribute("comp");
            newMisson.setAttribute("class", "notcomp");
        }
    });
});

// delete the placeHolder
myinput.addEventListener("focus",function(){
    if (myinput.value = "Add a misson"){
    myinput.value = "";}
})
