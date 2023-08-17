const gridObj = document.querySelector('.grid');
const colorPicker = document.querySelector('.colorPicker');
const eraserButton = document.querySelector('.eraser');
const sliderObj = document.querySelector('.slider');        //obj for actual slider
let sliderValueObj = document.querySelector('.sliderValue'); //obj for value of slider displayed on screen
sliderValueObj.textContent = `${sliderObj.value} x ${sliderObj.value}`; 


let mouseDownVar = false;
let currentColor = 	'#000000';

document.addEventListener('mousedown', () => {
    mouseDownVar = true
});

document.addEventListener('mouseup', () => {
    mouseDownVar = false;
});

sliderObj.value = 50;          //creates initial grid of 50x50
gridCreation();


sliderObj.oninput = function() {   //create new grid when slider is adjusted
    gridCreation();
}

//changes color when new color is selected

colorPicker.oninput = function() {
    currentColor = colorPicker.value;
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


    /* Logic for painting squares 
       The second event handler paints a square when an individual square is clicked
    
    */

    const squares = document.querySelectorAll('.gridSquare');
    squares.forEach(gridSquare => gridSquare.addEventListener('mouseover', function(e) {
        if (mouseDownVar) 
            e.target.style.cssText = `background-color: ${currentColor}`;
    }));

    squares.forEach(gridSquare => gridSquare.addEventListener('click', function(e) {
        e.target.style.cssText = `background-color: ${currentColor}`;
    }));
    
}

