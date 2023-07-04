const gridObj = document.querySelector('.grid');

for (let i = 0; i < 16; i++) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    
    for (let x = 0; x < 16; x++) {
        const squareObj = document.createElement('div');
        squareObj.classList.add('gridSquare');   
        newRow.appendChild(squareObj);
    }
    
    gridObj.appendChild(newRow);
}

const squares = document.querySelectorAll('.gridSquare');
squares.forEach(gridSquare => gridSquare.addEventListener('mouseover', hover));

function hover() {
    this.style.cssText = 'background-color: lightblue';
}