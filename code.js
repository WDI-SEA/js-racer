const carRed = document.getElementById("car1");
const carBlue = document.getElementById("car2");
const finish = document.getElementById("finishLine");
const restartBtn = document.getElementById("restartButton");
let playing = true;
let redPos = 120;
let bluePos = 100;
let scoreRed =  document.getElementById("scoreRed");
let scoreBlue = document.getElementById("scoreBlue");

const getRollingRed = (redPos) => {
	const car = "Red";
	document.onkeyup = (event) => {
		if(playing){
			if(event.keyCode === 37){
				redPos += 20;
				carRed.style.left = redPos + "px";
				//console.log(moveCar, car);
				checkWin(redPos, car);
			}
		}
	}
}

const getRollingBlue = (bluePos) => {
	const car = "Blue";
	window.onkeyup = (event) => {
		if(playing){
			if(event.keyCode === 39){
				bluePos += 20;
				carBlue.style.left = bluePos + "px";
				//console.log(moveCar, car);
				checkWin(bluePos, car);
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

const checkWin = (carPos, car) => {
	//console.log(window.getComputedStyle(document.getElementById("finishLine")).left);
	if (carPos > getWidth()*0.88) {
	 //if (moveCar > finish.style.left) {
		//alert(`${car} player wins!`);
		playing = false;
		updateScore(car);
	}
}

const updateScore = (car) => {
	if(car === "Red") {
		let score = Number(scoreRed.innerHTML)+1;
		scoreRed.innerHTML = score;
	} else if (car === "Blue") {
		let score = Number(scoreBlue.innerHTML)+1;
		scoreBlue.innerHTML = score;
	}
}

const restartGame = () => {
	carRed.style.left = redPos;
	carBlue.style.left = bluePos;
	getRollingRed(redPos);
	getRollingBlue(bluePos);
	playing = true;
}

restartBtn.addEventListener("click", restartGame);

restartGame();
getRollingRed(redPos);
getRollingBlue(bluePos);