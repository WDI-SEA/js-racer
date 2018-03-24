const carBlack = document.getElementsByClassName('car1')[0]
const carWhite = document.getElementsByClassName('car2')[0]

var moveCar = 0;


function animBlack(e){
	if(e.keyCode === 39){
		moveCar += 10;
		carBlack.style.left = moveCar + 'px';
		if(moveCar >= 300){

		}
	}

}

function animWhite(e){
	if(e.keyCode === 38){
		moveCar += 10;
		carWhite.style.left = moveCar + 'px';
		if(moveCar >= 300){

		}
	}

}
document.onkeydown = animBlack;
window.onkeydown = animWhite;


const getWidth = () => {
 return Math.max(
   document.body.scrollWidth,
   document.documentElement.scrollWidth,
   document.body.offsetWidth,
   document.documentElement.offsetWidth,
   document.documentElement.clientWidth
 );
}

function myFunction() {
    location.reload();
}
