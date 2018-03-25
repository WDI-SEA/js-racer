window.onload = function() {
  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var cart1 = document.querySelector("#cart1");
  const easyButton = document.querySelector("#easy");
  const mediumButton = document.querySelector("#medium");
  const hardButton = document.querySelector("#hard");
  var Interval;
  let cart1Left = 0;
  let cart2Left = 0;

  //  check for cart reached the screen
  // const didWin = () => {
  //   if (player.getx() > 1024) {
  //     player.setx(1024);
  //   } else if (player.getx() < 0) {
  //     player.setx(0);
  //   }
  // };

  const moveCart = e => {
    if (e.keyCode === 65 || e.keyCode === 71) {
      cart1Left += 25;
      cart1.style.left = cart1Left + "px";
    } else if (e.keyCode === 39 || e.keyCode === 37) {
      cart2Left += 25;
      cart2.style.left = cart2Left + "px";
    }
  };
  document.addEventListener("keyup", moveCart);

  const moveRoboCart = () => {
    cart2Left += 25;
    cart2.style.left = cart2Left + "px";
  };

  const roboCartDifficulty = difficulty => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    if (difficulty === "easy") {
      setInterval(moveRoboCart, 500);
    } else if (difficulty === "medium") {
      setInterval(moveRoboCart, 300);
    } else if (difficulty === "hard") {
      setInterval(moveRoboCart, 90);
    }
  };

  easyButton.addEventListener("click", () => {
    roboCartDifficulty("easy");
  });

  mediumButton.addEventListener("click", () => {
    roboCartDifficulty("medium");
  });

  hardButton.addEventListener("click", () => {
    roboCartDifficulty("hard");
  });

  buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };
  // Want to implement stop and reset wen cart wins
  //   buttonStop.onclick = function() {
  //     clearInterval(Interval);
  //   };

  //   buttonReset.onclick = function() {
  //     clearInterval(Interval);
  //     tens = "00";
  //     seconds = "00";
  //     appendTens.innerHTML = tens;
  //     appendSeconds.innerHTML = seconds;
  //   };

  function startTimer() {
    tens++;

    if (tens < 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};

//  Trying to find the max width of page to end race
//   const getWidth = () => {
//     return Math.max(
//       document.body.scrollWidth,
//       document.documentElement.scrollWidth,
//       document.body.offsetWidth,
//       document.documentElement.offsetWidth,
//       document.documentElement.clientWidth
//     );
//    }
