/*1.	Write a program that calculates the maximum of two given numbers.*/


function calculatesMax(a, b) {
    if(a < b) {
   return b;
    }else{
        return a;
    }

}

console.log(calculatesMax(9, 15));