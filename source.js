const gridObj = document.querySelector('.grid');

const sliderObj = document.querySelector('.slider');
let sliderValueObj = document.querySelector('.sliderValue');
sliderValueObj.textContent = sliderObj.value; 

sliderObj.oninput = function() {   //delete old grid, create new grid when slider is adjusted
    while(gridObj.firstChild) {
        gridObj.removeChild(gridObj.firstChild);
    }

    sliderValueObj.textContent = sliderObj.value;

    for (let i = 0; i < sliderObj.value; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        
        for (let x = 0; x < sliderObj.value; x++) {
            const squareObj = document.createElement('div');
            squareObj.classList.add('gridSquare');   
            newRow.appendChild(squareObj);
        }
        
        gridObj.appendChild(newRow);
    }
    const squares = document.querySelectorAll('.gridSquare');
    squares.forEach(gridSquare => gridSquare.addEventListener('mouseover', hover));

}

function initialSetup() {
    for (let i = 0; i < 50; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        
        for (let x = 0; x < 50; x++) {
            const squareObj = document.createElement('div');
            squareObj.classList.add('gridSquare');   
            newRow.appendChild(squareObj);
        }
        
        gridObj.appendChild(newRow);
    }

const squares = document.querySelectorAll('.gridSquare');
squares.forEach(gridSquare => gridSquare.addEventListener('mouseover', hover));
}

initialSetup();

squares.forEach(gridSquare => gridSquare.de)
function hover() {
    this.style.cssText = 'background-color: lightblue';
}