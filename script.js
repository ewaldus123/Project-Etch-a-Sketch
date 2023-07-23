// Function to create the grid
function createGrid(rows, columns) {
    const main = document.querySelector('#main');
    main.innerHTML = ''; // Clear the existing grid

    const cellSize = 500 / Math.max(rows, columns); // Calculate the cell size based on the larger dimension

    for (let i = 0; i < rows * columns; i++) {
        const content = document.createElement('div');
        content.setAttribute('class', 'cell');
        content.style.width = cellSize + 'px';
        content.style.height = cellSize + 'px';
        main.appendChild(content);

        // Changes background color on mouse hover
        content.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "orange";
        });
    }
}

createGrid(16, 16); // Create the initial grid with a default size of 16x16

// Reset the Etch-a-Sketch when pressing the reset button
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function onClick(event) {
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "white";
    }
});

// Choose grid size
const layoutButton = document.getElementById('layout');
layoutButton.addEventListener('click', function onClick(event) {
    let rows = prompt('Set the number of rows and columns (must be lower than 16):');
    let columns = rows;
    if (rows <= 16 && columns <= 16) {
        createGrid(rows, columns);
    } else {
        alert("Please pick a number lower than 16!");
    }
});

// display rules
const rulesButton = document.getElementById('rules');
rulesButton.addEventListener('click', function onClick(event) {
        alert("Simply move your mouse over the board to start drawing. Press reset to erase.");
    }
);