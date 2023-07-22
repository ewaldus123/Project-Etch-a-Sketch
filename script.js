// Function to create the grid
function createGrid(size) {
    const main = document.querySelector('#main');
    main.innerHTML = ''; // Clear the existing grid

    for (let i = 0; i < size; i++) {
        const content = document.createElement('div');
        content.setAttribute('class', 'cell'); 
        main.appendChild(content);

        // Changes background color on mouse hover
        content.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "orange";
        });
    }
}

createGrid(16); // Create the initial grid with a default size of 16

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
    let size = prompt('Please pick your desired size');
    createGrid(size);
});