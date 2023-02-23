let container = document.querySelector(".grid_container");

function makeGrid(gridSize) {

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for(i=0; i < gridSize * gridSize; i++) {
        let cell = document.createElement("div");
        container.appendChild(cell);
    }
}

makeGrid(4);

//responsible for hover draw effect
let ind = container.querySelectorAll("div");
ind.forEach(item => {
    item.addEventListener("mouseenter", function(e) {
        let change = e.target;
        change.style.backgroundColor = "black";
    });
});







