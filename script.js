
function createGrid(grid_size) {
    for (let i=0; i<grid_size; i++) {
        let gridRow = document.createElement("div");
        gridRow.className = "row";
        for(let j=1; j<=grid_size; j++) {
            let gridCell = document.createElement("div");
            gridCell.className = "cell";
            gridRow.appendChild(gridCell);
        }
        document.getElementById("grid_container").appendChild(gridRow);
    }
}

createGrid(6);

console.log(gridRow, gridCell);