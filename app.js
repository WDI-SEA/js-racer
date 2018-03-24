window.onload = function() {
  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var cart1 = document.querySelector("#cart1");
  var Interval;
  let cart1Left = 0;
  let cart2Left = 0;

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

  const moveCart = e => {
    if (e.keyCode === 65 || e.keyCode === 71) {
      cart1Left += 25;
      cart1.style.left = cart1Left + "px";
    } else if ( e.keyCode === 39 || e.keyCode === 37 ) {
      cart2Left += 25;
    cart2.style.left = cart2Left + "px";
    }
  };
  document.addEventListener("keyup", moveCart);

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
