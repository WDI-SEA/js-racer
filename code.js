const car1 = document.getElementById("car1");
const car2 = document.getElementById("car2");
let playing = true;

const getRollingRed = () => {
	let moveCar = 20;
	const car = "Red";
	document.onkeyup = (event) => {
		if(playing){
			if(event.keyCode === 37){
				moveCar += 20;
				car1.style.left = moveCar + "px";
				console.log(moveCar, car);
				checkWin(moveCar, car);
			}
		}
	}
}

const getRollingBlue = () => {
	let moveCar = 0;
	const car = "Blue";
	window.onkeyup = (event) => {
		if(playing){
			if(event.keyCode === 39){
				moveCar += 20;
				car2.style.left = moveCar + "px";
				console.log(moveCar, car);
				checkWin(moveCar, car);
			}
		}
	}
}

const getWidth = () => {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

const checkWin = (moveCar, car) => {
	if (moveCar > getWidth()*0.97){
		alert(`${car} player wins!`);
		playing = false;
	}
}

getRollingRed();
getRollingBlue();