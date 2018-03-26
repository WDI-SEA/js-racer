const square = document.getElementById('carOne');
const square2 = document.getElementById('carTwo');
const button = document.getElementById('resetButton');

// const turtlePic = document.getElementById('carOne');
// turtlePic.setAttribute('src', 'images/turtle.png');

let pos1 = 150;
let pos2 = 150;


button.addEventListener("click", (resetButton) => {
    // pos1 = 150;
    // pos2 = 150;
    square.style.left = 150 + 'px';
    square2.style.left = 150 + 'px';
});


// const moveAlong = (e) => {
    document.addEventListener('keydown', (e) => {
        if (74 === e.keyCode) {
            if (pos1 < 1100){
            pos1 += 100;
            square.style.left = pos1 + 'px';
        }
            else {
                if (pos1 >= 1050){
                alert('Tortoise wins!'); 
            // square.style.left = 1100 + 'px';
             }
        }
    }
    if (70 === e.keyCode) {
        if (pos2 < 1100){
        pos2 += 100;
        square2.style.left = pos2 + 'px';
    }
        else { 
            if (pos2 >= 1050){
        // square2.style.left = 1100 + 'px';
        alert('Hare wins!'); 
    }
}
}
});


