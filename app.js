

// element.addEventListener('nameOfEvent', functionToRun);


let player1 = document.getElementById("car1");
let player2 = document.getElementById("car2");

var car1Progress = 0;
var car2Progress = 0;


let player1Advance = () => {
		if (car1Progress < 90) {
			car1Progress = (car1Progress + 5)
		}
		player1.style.left = car1Progress + "%";
	}


let player2Advance = () => {
		if (car2Progress < 90) {
			car2Progress = (car2Progress + 5)
		}
		player2.style.left = car2Progress + "%";
	}

document.addEventListener("click", player1Advance);
document.addEventListener("keydown", player2Advance);