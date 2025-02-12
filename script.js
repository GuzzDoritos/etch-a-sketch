const generateBtn = document.querySelector("#generate-button");

const gridContainer = document.querySelector("#grid-container");
const gridSize = document.querySelector("#grid-size");
const containerSize = 600;
gridContainer.style.width = containerSize + "px";
gridContainer.style.height = containerSize + "px";

let clickHold = false;

const clearGrid = () => {
    gridContainer.textContent = "";
}



const drawGrid = (size) => {
    for (let i = 0; i < (size * size); i++) {
        const tile = document.createElement("div");
        gridContainer.appendChild(tile);
        tile.className = "tile";
        tile.style.width = containerSize / size + "px";
        tile.style.height = containerSize / size + "px";
    }
    const tiles = document.getElementsByClassName("tile")
    console.log(tiles);
    for (let tile of tiles) {
        let opacity = 0;
        tile.addEventListener("mouseover", () => {
            tile.style.backgroundColor = "black";
            opacity += 0.1;
            tile.style.opacity = `${opacity}`;
        })
    }
}

generateBtn.addEventListener("click", () => {
    clearGrid();
    const sizeInput = Math.round(parseFloat(gridSize.value));
    if (sizeInput !== parseFloat(gridSize.value) || (sizeInput <= 0 || sizeInput > 100)) { console.log("no"); return }
    console.log("yes")
    drawGrid(sizeInput);
});
