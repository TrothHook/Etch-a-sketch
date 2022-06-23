// const container = document.querySelector(".container");
// const button = document.querySelector(".btn");

// let defaultSize = 16;

// container.addEventListener("mouseover", hoverEvent);

// createGrid();

// function createGrid(userInputSize = defaultSize) {

//     let gridSize = Math.pow(userInputSize, 2);

//     container.style.gridTemplateRows = `repeat(${userInputSize}, 1fr)`;
//     container.style.gridTemplateColumns = `repeat(${userInputSize}, 1fr)`;

//     for(let i = 0; i < gridSize; i++){
//         let cell = document.createElement("div");
//         container.appendChild(cell).className = "grid-item";
//     }
// }

// // function userInput(){
// //     var size = parseInt(prompt(`Enter the desired size of the layout`));
// //     createGrid(size);
// // }

// // button.addEventListener("click", (e)=>{
// //     userInput();
// // });


// function hoverEvent(event){

//     event.target.style.backgroundColor = `rgba(0, 0, 0, ${alphaValue(event.target)})`;
// }


// function alphaValue(){
//     var charObj = Number(window.getComputedStyle(event.target).backgroundColor.match(/[.?\d]+/g)[3]);
    
//     if(charObj <= 1){
//     return charObj += 0.1;
//     }
//     return charObj;
// }

// button.addEventListener("click", newGrid);

// function newGrid(){

//     var newGridSize = newGridSizes();

//     if(newGridSize === "any") {
//         return;
//     }

//     createGrid(newGridSize);
// }

// function newGridSizes(){

//     let  userSelection = prompt(`Enter the new size`);

//     if(typeof Number(userSelection) === "number" && Number(userSelection) > 0){
//         return Number(userSelection);
//     } else if(userSelection == null || userSelection === ""){
//         return "any";
//     } else {
//         return newGridSizes();
//     }

// }

let outerContainer = document.querySelector('.container');
let defaultGridSize = 16;

outerContainer.addEventListener("mouseover", hoverOver);

drawGrid();

function drawGrid(userSelection = defaultGridSize) {
    let gridSize = userSelection ** 2;
    outerContainer.innerHTML = "";
    
    outerContainer.style.gridTemplateColumns = `repeat(${userSelection}, 1fr)`;
    outerContainer.style.gridTemplateRows = `repeat(${userSelection}, 1fr)`;

    for (let i = 1; i <= gridSize; i++) {
        outerContainer.appendChild(document.createElement("div"));
    }
}

function hoverOver(event) {
    if (event.target !== outerContainer) {
        event.target.style.backgroundColor = `rgba(0, 0, 0, ${getAlpha(event.target)}`;
    }
}

function getAlpha(element) {
    // regex targeted at numbers with digits taken from this StackOverflow comment
    // https://stackoverflow.com/questions/3751877/how-to-extract-r-g-b-a-values-from-css-color#comment79938383_3752026
    let alphaTag = Number(window.getComputedStyle(element).backgroundColor.match(/[.?\d]+/g)[3]);

    if (alphaTag <= 1) {
        return alphaTag += 0.1;
    }

    return alphaTag;
}

let resetButton = document.querySelector('#reset-sketchbook');
resetButton.addEventListener("click", resetSketchbook);

function resetSketchbook() {
    let newGridSize = requestGridSize();

    if (newGridSize === "cancel") {
        return;
    }

    let gridChildren = getGridChildren();

    for (const child of gridChildren) {
        child.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    }

    let keepGridlines = gridChildren[0].classList.contains("add-gridlines");

    drawGrid(newGridSize);
    adjustGridlines(keepGridlines);
}

function requestGridSize() {
    userSelection = prompt("How many rows would you like the sketchbook to have?");
    
    if (typeof Number(userSelection) === "number" && Number(userSelection) > 0) {
        return Number(userSelection);
    } else if (userSelection == null || userSelection === '') {
        return "cancel";
    } else {
        return requestGridSize();
    } 
}

let gridlineButton = document.querySelector('#display-gridlines');
gridlineButton.addEventListener("click", adjustGridlines);

function adjustGridlines(keepGridlines = true) {
    let gridChildren = getGridChildren();

    if (gridChildren[0].classList.contains("add-gridlines") || !keepGridlines) {
        for (const child of gridChildren) {
            child.classList.remove("add-gridlines");
            gridlineButton.textContent = "Show Gridlines";
        }
    } else {
        for (const child of gridChildren) {
            child.classList.add("add-gridlines");
            gridlineButton.textContent = "Remove Gridlines";
        }
    }
}

function getGridChildren() {
    return document.querySelector('.container').children;
}