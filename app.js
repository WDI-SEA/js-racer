

        var keysPressed1 = false;
    var keysPressed2 = false;
    window.onkeydown = keyDownHandler;
    window.onkeyup = keyUpHandler;

    function keyDownHandler(e) {
        if (e.keyCode == 39)
            keysPressed1 = true;
        else if (e.keyCode == 68)
            keysPressed2 = true;
        updateKeys();
    }

    function keyUpHandler(e) {
        if (e.keyCode == 39)
            keysPressed1 = false;
        else if (e.keyCode == 68)
            keysPressed2 = false;
        updateKeys();
    }

    var left1 = 0;
    var left2 = 0;
    var speed = 2;

    function updateKeys() {

        var container1 = document.getElementById("container1").clientWidth;
        var moveDiv1 = document.getElementById("moveDiv1");
        var container1Limit = container1 - (moveDiv1.clientWidth);

        var container2 = document.getElementById("container2").clientWidth;
        var moveDiv2 = document.getElementById("moveDiv2");
        var container2Limit = container2 - (moveDiv2.clientWidth);
        if (keysPressed1) {
            if (container1Limit > left1)
                left1 += speed;
            else {
                alert(" You are winner!!");
            }
        }
        if (keysPressed2) {
            if (container1Limit > left2)
                left2 += speed;
            else {
                alert("You are winner!!");
            }
        }

        moveDiv1.style.left = left1 + "px";
        moveDiv2.style.left = left2 + "px";

    }

    setInterval(updateKeys, 1);



 