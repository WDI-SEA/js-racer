const carBlack = document.getElementsByClassName('car1')[0]
const carWhite = document.getElementsByClassName('car2')[0]
var moveCar = 0;
function animBlack(e){
    if(e.keyCode === 39){
        moveCar += 20;
        carBlack.style.left = moveCar + 'px';
        if(moveCar >= 1400){
        	alert("Black Car Wins!");
        }
    }
}
function animWhite(e){
    if(e.keyCode === 38){
        moveCar += 20;
        carWhite.style.left = moveCar + 'px';
        if(moveCar >= 1400){
        	alert("White Car Wins!");
        }
    
    }
}
document.onkeydown = animBlack;
window.onkeydown = animWhite;

function myFunction() {
    location.reload();
}

