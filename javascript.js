function createGrid() {
    const gridContainer = document.querySelector(".grid");
    gridContainer.style.gridTemplateColumns = `repeat(16, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(16, 1fr)`;
    gridContainer.style.borderColor = "black";
    gridContainer.style.borderWidth = "thin";

    for (let i = 0; i < 16*16; i++) {
        const div = document.createElement("div");
        // div.style.borderColor = "black";
        // div.style.borderWidth = "thin";
        div.classList.add('grid-item');
        gridContainer.appendChild(div);
    }
}

createGrid();