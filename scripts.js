const playerOne = document.getElementById("car-one");
const playerTwo = document.getElementById("car-two");

var distance = 75;


	document.addEventListener('keydown', (e) => {
		if(70 === e.keyCode) {
			distance += 10;
			playerOne.style.left = distance + 'px';
		};
	})

	document.addEventListener('keydown', (e) => {
		if(74 === e.keyCode) {
			distance += 10;
			playerTwo.style.left = distance + 'px';
		};
	})






//const moveAlong = (e) => {
		//keep the information of the key pressed to pass through the if loop to see if it's the key we're looking for(the purpose for the e)
	//	if(e.keyCode === 70) {
	//playerTwo.addEventListener('keydown', (e) => {
	//	if(e.keyCode === 74) {
	//		distance = playerTwo.setAttribute("style", "left += 5");
	//	};
//});
//};
//}

//moveAlong();

