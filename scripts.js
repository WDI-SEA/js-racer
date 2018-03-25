const playerOne = document.getElementById("car-one");
const playerTwo = document.getElementById("car-two");

var distance1 = 0;
var distance2 = 0;


document.addEventListener('keydown', (e) => {
	if(70 === e.keyCode && distance1 < 1100) {
		distance1 += 100;
		playerOne.style.left = distance1 + 'px';
	}
	else if (distance1 === 1100) {
		alert('Green car is the WINNER!');
	}
});

document.addEventListener('keydown', (e) => {
	if(85 === e.keyCode && distance2 < 1100) {
		distance2 += 100;
		playerTwo.style.left = distance2 + 'px';
	}
	else if (distance2 ===1100) {
		alert('Blue car is the WINNER!');
	}
});

// document.addEventListener('keydown', (e) => {
// 	if(70 === e.keyCode && distance < 1200) {
// 		distance += 100;
// 		playerOne.style.left = distance + 'px';
// 	}
// 	else if (distance >= 1100) {
// 		alert('Player One is the WINNER!');
// 	}
// });

	// document.addEventListener('keydown', (e) => {
	// 	if(74 === e.keyCode) {
	// 		distance += 10;
	// 		playerTwo.style.left = distance + 'px';
	// 	};
	// })






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

