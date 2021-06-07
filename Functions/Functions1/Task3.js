/*3.	Write a program that checks if a given number is a three digit long number.*/

function threeDigitNumber(a) {
    if(a < 1000 && a > 99) {
        return "It's a three digit number";
    }else{
        return "It's not a three digit number";
    }
}
console.log(threeDigitNumber(5505));