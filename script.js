let container = document.querySelector(".grid_container");

function makeGrid(gridSize) {
    //need to create a row of size grid size 
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
   
    //then create column of grid size
    for(i=0; i < gridSize * gridSize; i++) {
        let cell = document.createElement("div");
        container.appendChild(cell);
    }
}

makeGrid(7);


        
