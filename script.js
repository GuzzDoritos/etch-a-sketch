const generateBtn = document.querySelector("#generate-button");

const drawOptionSelector = document.querySelector("#draw-style");

const gridContainer = document.querySelector("#grid-container");
const gridSize = document.querySelector("#grid-size");
const containerSize = 500;
gridContainer.style.width = containerSize + "px";
gridContainer.style.height = containerSize + "px";

let clickHold = false;

const clearGrid = () => {
    gridContainer.textContent = "";
}

function randomRainbow() {
    const rainbowColors = [
        "#e81416",
        "#ffa500",
        "#faeb36",
        "#79c314",
        "#487de7",
        "#4b369d",
        "#70369d"
    ]
    const random = Math.round(Math.random() * rainbowColors.length - 1);
    return rainbowColors[random];
}

const applyOption = () => {

    const tiles = document.getElementsByClassName("tile")
    switch (drawOptionSelector.value) {
        case "opacity":
            for (let tile of tiles) {
                let opacity = 0;
                tile.addEventListener("mouseover", () => {
                    tile.style.backgroundColor = "black";
                    opacity += 0.1;
                    tile.style.opacity = `${opacity}`;
                })
            };
            break;
        case "color":
            for (let tile of tiles) {
                tile.addEventListener("mouseover", () => {
                    tile.style.backgroundColor = randomRainbow();
                })
            }
            break;
        case "color-and-opacity":
            for (let tile of tiles) {
                let opacity = 0;
                tile.addEventListener("mouseover", () => {
                    tile.style.backgroundColor = randomRainbow();
                    opacity += 0.1;
                    tile.style.opacity = `${opacity}`;
                })
            }
            break;
        case "solid":
            for (let tile of tiles) {
                tile.addEventListener("mouseover", () => {
                    tile.style.backgroundColor = "black";
                })
            }
            break;
    }
}

const drawGrid = (size) => {
    for (let i = 0; i < (size * size); i++) {
        const tile = document.createElement("div");
        gridContainer.appendChild(tile);
        tile.className = "tile";
        tile.style.width = containerSize / size + "px";
        tile.style.height = containerSize / size + "px";
    }
    applyOption();
}

window.addEventListener("load", () => {
    drawGrid(20);
})

generateBtn.addEventListener("click", () => {
    clearGrid();
    const sizeInput = Math.round(parseFloat(gridSize.value));
    if (sizeInput !== parseFloat(gridSize.value) || (sizeInput <= 0 || sizeInput > 100)) { console.log("no"); return }
    console.log("yes")
    drawGrid(sizeInput);
});
