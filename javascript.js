let newColour = "";

function createGrid() {
    const gridContainer = document.querySelector(".grid");
    gridContainer.style.gridTemplateColumns = `repeat(16, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(16, 1fr)`;
    gridContainer.style.borderColor = "black";
    gridContainer.style.borderWidth = "thin";

    for (let i = 0; i < 16*16; i++) {
        const div = document.createElement("div");
        div.classList.add('grid-item');
        gridContainer.appendChild(div);
    }
}

function updateColour(colour) {
    newColour = colour;
    fillSquares(newColour);
}

function fillSquares(colour) {
    console.log(squares);
    squares.forEach((square) => {
        square.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = `${colour}`;
        });
    });
}

function clearGrid() {
    squares.forEach((square) => square.style.backgroundColor = "white");
}

//actually running the etchasketch

createGrid();

const normalBtn = document.getElementById('normal');
const eraserBtn = document.getElementById('eraser');
const clearBtn = document.getElementById('clear');
const squares = document.querySelectorAll('.grid-item');

normalBtn.addEventListener('click', () => {
    updateColour("black");
});
eraserBtn.addEventListener('click', () => {
    updateColour("white");
});
clearBtn.addEventListener('click', clearGrid);
