// const button = document.getElementbyId("Player1");


var player1 = document.getElementById("player1");
  var pos = 0;
  var id;
            
  function moveRight(){
    player1.style.position = 'relative';
    id = setInterval(animateFrame, 10);
    
    
    function animateFrame(){
      pos = pos + 10;   
      player1.style.right = pos + 'px';    
      console.log(pos);
      if(pos % 200 == 0) {
        clearInterval(id);
      } 
    }
    
  }


var player2 = document.getElementById("player2");
  var pos = 0;
  var id;
            
  function moveRight(){
    player2.style.position = 'relative';
    id = setInterval(animateFrame, 10);
    
    
    function animateFrame(){
      pos = pos + 10;   
      player2.style.right = pos + 'px';    
      console.log(pos);
      if(pos % 200 == 0) {
        clearInterval(id);
      } 
    }
    
  }
