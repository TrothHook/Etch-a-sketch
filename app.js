const container = document.querySelector(".container");

function cells(row, column){
    // container.style.setProperty("--grid-rows", row);
    // container.style.setProperty("--grid-columns", column);
    for(let c = 0; c < (row * column); c++){
        let cell = document.createElement("div");
        cell.textContent = "";
        container.appendChild(cell).className = "grid-item";
    }
}

cells(16, 16);