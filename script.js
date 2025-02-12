const gridContainer = document.querySelector("#grid-container");
let gridSize = 20;
const containerSize = 600;
gridContainer.style.width = containerSize + "px";
gridContainer.style.height = containerSize + "px";

const drawGrid = (size) => {
    for (let i = 0; i < (size * size); i++) {
       const tile = document.createElement("div");
       gridContainer.appendChild(tile);
       tile.class = ".tile";
       tile.style.width = containerSize / size + "px";
       tile.style.height = containerSize / size + "px";

       tile.addEventListener('mouseover', () => {
           tile.style.backgroundColor = "black";
       })
    }
}

drawGrid(gridSize);
