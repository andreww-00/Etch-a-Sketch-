let container = document.querySelector(".grid_container");

function makeGrid(gridSize) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for(i=0; i < gridSize * gridSize; i++) {
        let cell = document.createElement("div");
        container.appendChild(cell);
        listen();
    }
}
makeGrid(10);

//responsible for adding listeners and hover draw effect
function listen() {
    let ind = container.querySelectorAll("div");
    ind.forEach(item => {
        item.addEventListener("mouseenter", function(e) {
            let change = e.target;
            change.style.backgroundColor = "black";
        });
    });
}

//grid sizing button
let button = document.querySelector(".grid_Sizing");
button.addEventListener("click", (e) => {
    let size_store = prompt("Input grid size!");
    if (size_store <= 20) {
        container.querySelectorAll("div").forEach((item) => item.remove());
        makeGrid(size_store);
    }
    else {
        alert("please enter value less than 50!")
    }   
});

//clears grid button 
let clear_button = document.querySelector(".clear_button");
clear_button.addEventListener("click", (e) => {
    let ind = container.querySelectorAll("div");
    ind.forEach(item => {
        item.style.backgroundColor = "white";
    })
});




