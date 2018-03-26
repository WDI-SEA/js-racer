const carRed = document.getElementById("car1");
const carBlue = document.getElementById("car2");
const finish = document.getElementById("finishLine");
const restartBtn = document.getElementById("restartButton");
const resetBtn = document.getElementById("resetButton");
const scoreRed =  document.getElementById("scoreRed");
const scoreBlue = document.getElementById("scoreBlue");
const feedbackField = document.getElementById("disFeed");
let playing = true;
let redPos = 120;
let bluePos = 100;


const getRollingRed = (redPos) => {
	const car = "Red";
	document.onkeyup = (event) => {
		if(playing){
			if(event.keyCode === 68 || event.keyCode === 37){
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
			if(event.keyCode === 76 || event.keyCode === 39){
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
		feedbackField.innerHTML = `${car} player wins!`;
		setTimeout(restartGame, 3000);
	}
}

const updateScore = (car) => {
	if(car === "Red") {
		let score = Number(scoreRed.innerHTML)+1;
		scoreRed.innerHTML = score;
	} else if (car === "Blue") {
		let score = Number(scoreBlue.innerHTML)+1;
		scoreBlue.innerHTML = score;
	} else if (car === "reset") {
		scoreBlue.innerHTML = 0;
		scoreRed.innerHTML = 0;
	}
}

const restartGame = () => {
	feedbackField.innerHTML = "Go!";
	carRed.style.left = redPos + "px";
	carBlue.style.left = bluePos + "px";
	getRollingRed(redPos);
	getRollingBlue(bluePos);
	playing = true;
}

const resetGame = () => {
	updateScore("reset");
	restartGame();
}

restartBtn.addEventListener("click", restartGame);
resetBtn.addEventListener("click", resetGame);

restartGame();
getRollingRed(redPos);
getRollingBlue(bluePos);