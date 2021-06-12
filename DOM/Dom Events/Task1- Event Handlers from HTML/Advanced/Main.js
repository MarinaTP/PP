var element = document.querySelector("body");

function changeColor() {
    element.classList.toggle("blue");
 }

 function removeClass(){
     var yellowBtn = document.querySelector(".yellowButton");
     var redBtn = document.querySelector(".redButton");
    if(redBtn.hasAttribute('onclick') === true ) {
        redBtn.removeAttribute("onclick");
        yellowBtn.textContent = 'Turn On';
      } else {
        redBtn.setAttribute('onclick' , 'changeColor()')
        yellowBtn.textContent = 'Turn Off';
      }
      }