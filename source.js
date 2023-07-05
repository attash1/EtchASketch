const gridObj = document.querySelector('.grid');
const colorPicker = document.querySelector('.colorPicker');
const eraserButton = document.querySelector('.eraser');
const sliderObj = document.querySelector('.slider');        //obj for actual slider
let sliderValueObj = document.querySelector('.sliderValue'); //obj for value of slider displayed on screen
sliderValueObj.textContent = `${sliderObj.value} x ${sliderObj.value}`; 

sliderObj.value = 50;          //creates initial grid of 50x50
gridCreation();


sliderObj.oninput = function() {   //create new grid when slider is adjusted
    gridCreation();
}
colorPicker.oninput = function() {
    const squares = document.querySelectorAll('.gridSquare');
    squares.forEach(gridSquare => gridSquare.addEventListener('mouseover', function() {
        this.style.cssText = `background-color: ${colorPicker.value}`;
    }));
}

eraserButton.addEventListener('click', gridCreation); //erase just creates a new grid of same size


function gridCreation() {
    while(gridObj.firstChild) {
        gridObj.removeChild(gridObj.firstChild);
    }

    sliderValueObj.textContent = `${sliderObj.value} x ${sliderObj.value}`;

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
    squares.forEach(gridSquare => gridSquare.addEventListener('mouseover', function() {
        this.style.cssText = `background-color: ${colorPicker.value}`;
    }));
}

