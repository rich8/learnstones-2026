  var mario = document.getElementById("Mario");  //why must this be in btnStartGame 

  var id = setInterval(gameloop, 10)  ;
  document.addEventListener('keydown', keyDownHandler);

  var x = 0;
  var y = 40;
  var g = 0.2;
  var dx = 0.5;
  var dy = 0;


  //This sets the delay for the gameloop (could call it step or frame)
  // 10ms = 10 fps
  //  2ms = 50 fps
 
function btnStartGame() {

  
}

 // This is the game loop
    function gameloop() {
		
	//Movement Equations
      x = x +dx ; 
      y = y +dy ;
	  dy = dy + g;
	  
	//max speed
	  if (dx > 3) {
		  dx = 3
		  }
	  if (dx < -3) {
		  dx = -3
	  }
		  
		  

	// Draw (Move) Mario in new location
      mario.style.top = y + 'px' ; 
      mario.style.left = x + 'px'; 
	  
	//Character facing direction - flip
	  if (dx > 0) {mario.src = "Mario2Right.gif" } else {mario.src = "Mario2Left.gif" 	  }
	  
	//Bounce on walls & Floor/Ceiling
      if (x >1155 || x <0){
      	dx = -dx
      }
      if (y >300 || y <0){
      	dy = -0.6 *dy
      }

  }

  //These are the arrow keys
function keyDownHandler(event) {
    if(event.keyCode == 39) {
        rightPressed = true;
		dx = dx +1;

    }
    else if(event.keyCode == 37) {
        leftPressed = true;
		dx = dx - 1;
    }
    if(event.keyCode == 40) {
    	downPressed = true;
    }
    else if(event.keyCode == 38) {
    	upPressed = true;
		if (y > 290) {
		dy = -5;
		}
    }
}

