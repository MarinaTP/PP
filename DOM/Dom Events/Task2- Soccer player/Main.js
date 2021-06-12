var player = document.querySelector('#playerImg');
var background = document.querySelector('.soccerField');
var button = document.querySelector('button');


function movePlayer(event){
    var xPosition = event.clientX;
    var yPosition = event.clientY;

    player.style.top = yPosition -50 + "px";
    player.style.left = xPosition -50 + "px";
}


background.addEventListener('click', movePlayer);


function stopMoving() {
background.removeEventListener('click', movePlayer);
    player.style.top = 0 + "px";
    player.style.left = 0 + "px";
    
  }

