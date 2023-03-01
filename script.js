let container = document.querySelector(".grid_container");
let blackButton = document.querySelector(".black");
let rainbowButton = document.querySelector(".rainbow");
let button = document.querySelector(".grid_Sizing");

function makeGrid(gridSize) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for(i=0; i < gridSize * gridSize; i++) {
        let cell = document.createElement("div");
        container.appendChild(cell);
        listen();
    }
    return gridSize;
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

//changes listeners to draw rainbow ink
function listenRainbow() {
    let ind = container.querySelectorAll("div");
    ind.forEach(item => {
        item.addEventListener("mouseenter", function(e) {
            let change = e.target;
            change.style.backgroundColor = rainbow();
        });
    });
}

//black ink
blackButton.addEventListener("click", (e) => {
    container.querySelectorAll("div").forEach((item) => item.remove());
    sizeGrid();
})

//rainbow button logic
rainbowButton.addEventListener("click", (e) => {
    container.querySelectorAll("div").forEach((item) => item.remove());
    sizeGrid();
    listenRainbow(); 
})

//grid sizing button
button.addEventListener("click", (e) => {
    sizeGrid();
});

//function responsible for sizing
function sizeGrid() {
    let size_store = prompt("Input grid size!");
    if (size_store == null) {
        alert("please enter a size")
    }
    else if (size_store <=20) {
        container.querySelectorAll("div").forEach((item) => item.remove());
        makeGrid(size_store);
    }   
    else {
        alert("please enter value less than 20!")
    }
}

//clears grid button 
let clear_button = document.querySelector(".clear_button");
clear_button.addEventListener("click", (e) => {
    let ind = container.querySelectorAll("div");
    ind.forEach(item => {
        item.style.backgroundColor = "white";
    })
});

//generates and then returns random color in string
function rainbow() {
 let colors = ["red", "blue", "green", "yellow", "pink", "purple", "orange"];
 let randomColor = colors[Math.floor(Math.random() * colors.length)];
 return randomColor;
}
