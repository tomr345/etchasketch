let newColour = "";
let DEFAULT_SIZE = 16;
let newSize = "";

function createGrid(size) {
    const gridContainer = document.querySelector(".grid");
    newSize = size;
    gridContainer.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
    gridContainer.style.borderWidth = 0;
    gridContainer.style.borderColor = "black";
    gridContainer.style.borderWidth = "thin";

    for (let i = 0; i < newSize*newSize; i++) {
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
    // console.log(squares);
    
    // squares.forEach((square) => {
    //     square.addEventListener('mouseover', e => {
    //         e.target.style.backgroundColor = `${colour}`;
    //     });
    // });

    const newGrid = document.querySelectorAll('.grid-item');
    newGrid.forEach((grid) => {
        grid.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = `${colour}`;
        })
    })
}

function clearGrid() {
    grid.innerHTML = '';
    createGrid(newSize);
}

//actually running the etchasketch

createGrid(DEFAULT_SIZE);

const normalBtn = document.getElementById('normal');
const eraserBtn = document.getElementById('eraser');
const clearBtn = document.getElementById('clear');
const changeBtn = document.getElementById('size');
const squares = document.querySelectorAll('.grid-item');
const grid = document.querySelector('.grid');

normalBtn.addEventListener('click', () => {
    updateColour("#7f8eb5");
});
eraserBtn.addEventListener('click', () => {
    updateColour("white");
});
clearBtn.addEventListener('click', clearGrid);
changeBtn.addEventListener('click', () => {
    let answer = prompt("Enter new grid size:");
    if (answer < 65) {
        clearGrid();
        createGrid(answer);
    }
})
