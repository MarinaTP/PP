
var img1 = document.querySelector('.img-1');
var img2 = document.querySelector('.img-2');
var img3 = document.querySelector('.img-3');
var img4 = document.querySelector('.img-4');
var img5 = document.querySelector('.img-5');
var img6 = document.querySelector('.img-6');
var ul = document.querySelector('ul');
var div1 = document.querySelector('.firstDiv');
var div2 = document.querySelector('.secondDiv');
var par = document.querySelector('p');


function addRedBorder1(){
    img1.classList.add('redBorder');
}

function addRedBorder2(){
    img2.classList.add('redBorder');
}

function addRedBorder3(){
    img3.classList.add('redBorder');
}

function addRedBorder4(){
    img4.classList.add('redBorder');
}

function addRedBorder5(){
    img5.classList.add('redBorder');
}

function addRedBorder6(){
    img6.classList.add('redBorder');
}

function addGreenBorder(){
    ul.classList.add('greenBorder');
}

function addOrangeBorder(){
    div1.classList.add('orange');
}

function addBlueBorder(){
    div2.classList.add('blue');
}

function addWhiteBorder(){
    par.classList.add('white');
}


img1.addEventListener('click', addRedBorder1);
img2.addEventListener('click', addRedBorder2);
img3.addEventListener('click', addRedBorder3);
img4.addEventListener('click', addRedBorder4);
img5.addEventListener('click', addRedBorder5);
img6.addEventListener('click', addRedBorder6);

ul.addEventListener('click', addGreenBorder);
div1.addEventListener('click', addOrangeBorder);
div2.addEventListener('click', addBlueBorder);
par.addEventListener('click', addWhiteBorder);

document.addEventListener('click', function (event) {
    console.log(event.target);
});

// DRUGACIJE RESENJE:

// var main=document.querySelector(".main");
// var img=document.querySelectorAll('img');
// var document=document.documentElement;
// img.forEach(function(el){
//     el.addEventListener('click',addRedBorder);
// })
// function addRedBorder(e){
//      this.classList.add('red-border'); 
//     if(this.width>=300){
//         e.stopPropagation();
//     }
// }
// function elementClicked(e){
//   console.log(e.target.tagName)
// }
// function element(e){
//     console.log("main"+e.target)
//   }
// document.addEventListener('click',elementClicked);
// document.addEventListener('click',element);