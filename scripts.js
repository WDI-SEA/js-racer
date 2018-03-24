const playerOne = document.getElementById("car-one");
const playerTwo = document.getElementById("car-two");

var distance = 0;

const moveAlong = (x) => {
	playerOne.addEventListener('keydown', (distance) => {
		if(x.keyCode === 70) {
			distance = playerOne.setAttribute("style", "left += 5");
	};
	playerTwo.addEventListener('keydown', (distance) => {
		if(x.keyCode === 74) {
			distance = playerTwo.setAttribute("style", "left += 5");
		};
});
});
}

moveAlong();

