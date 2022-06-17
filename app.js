const container = document.querySelector(".container");
const root = document.querySelector(":root");

function cells(row, column){
    root.style.setProperty("--grid-rows", row);
    root.style.setProperty("--grid-cols", column);
    for(let c = 0; c < (row * column); c++){
        let cell = document.createElement("div");
        // cell.textContent = "";
        container.appendChild(cell).className = "grid-item";
    }
}

cells(16, 16);

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach(gridItem =>{
    gridItem.addEventListener("mouseover", (e) =>{
        e.target.style.backgroundColor = colorRandomizer();
    }, {once: true});
});

// gridItems.forEach(gridItem =>{
//     gridItem.addEventListener("mouseout", (e) =>{
//         e.target.style.backgroundColor = "#fff";
//     });
// });

function settingSize(){

}

function colorRandomizer(){
    let r = 0, g = 0, b = 0, a = 0;
    
    r = (Math.random() * 255).toFixed(0);
    g = (Math.random() * 255).toFixed(0);
    b = (Math.random() * 255).toFixed(0);
    a = Math.random().toFixed(3);

    return `rgba(${r}, ${g}, ${b}, ${a})`;

}