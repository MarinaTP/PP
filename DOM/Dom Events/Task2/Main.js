var button = document.querySelector('button');
var msgValue = document.querySelector('input').value;
var mainArea = document.querySelector('.main-area');

button.onclick = function(){
    var msg = document.createElement('p');
    mainArea.appendChild(msg);
    msg.textContent=msgValue;
    msgValue.textContent='';

}
