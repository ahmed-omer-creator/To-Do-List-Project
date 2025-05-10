    const input = document.getElementById("missinput");
    const addButton = document.getElementById("addmissbutton");
    const missList = document.getElementById("missList");
    const missWarn = document.getElementById("missWarn");
    const succWarn = document.getElementById("succWarn");
    const delwarn = document.getElementById("delWarn");

    addButton.addEventListener("click", () => {
    const value = input.value.trim();

    missWarn.textContent = "";
    succWarn.textContent = "";

    if (value === "") {
        missWarn.textContent = "Please enter a mission.";
        return;
    }

    const li = document.createElement("li");
    li.textContent = value;
    missList.appendChild(li);

    const delbtn = document.createElement("button")
    delbtn.textContent ="Delete";
    delbtn.style.cssText = "border:none;border-radius:4px; padding:9px; background-color:#4a90e2;color:white;"
    li.appendChild(delbtn)

    
    delbtn.addEventListener("click",() => {
        li.remove()
        delwarn.textContent = "Mission Deleted successfully!"
        
        if (delwarn.textContent.trim() != "" ) {
        succWarn.textContent = ""
    }    
        setTimeout(() => {
        delWarn.textContent = "";

    },5000)
    })

    
    
    succWarn.textContent = "Mission added successfully!";
    input.value = "";

    setTimeout(() => {
        succWarn.textContent = "";
        
    },5000)
    


});
