var button = document.querySelector('button');
var msgValue = document.querySelector('input');
var mainArea = document.querySelector('.main-area');

function myFunction(){

    var newParagraph = document.createElement("P");
    var text = msgValue.value;
    newParagraph.textContent = text;
    mainArea.append(newParagraph);  
    msgValue.focus();
    text = "";
    if (!text) {
        return;
    }
}

button.addEventListener('click', function() {
    myFunction()
});

msgValue.addEventListener('keypress', function(e) {
    if (eventKey === 'Enter') {
        myFunction()
    }
})
// function clearAll () {
//     mainArea.remove(children);
// }

// button.onclick = clearAll();