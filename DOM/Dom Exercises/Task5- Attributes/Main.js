function validation(){
    var input = document.querySelectorAll('input');
    input.forEach(function (element){
        if((element.hasAttribute('required')) && (element.textContent === '')){
            return element.className = '.redBorder';
        }
    });
}
validation();