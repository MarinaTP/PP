/*1.	Write a program that calculates the maximum of two given numbers.


function calculatesMax(a, b) {
    if(a < b) {
   return b;
    }else{
        return a;
    }

}

console.log(calculatesMax(9, 15));*/

/*2.	Write a program that checks if a given number is odd.


function evenOdd(a) {
if(a % 2 === 0) {
    return "The number is even";
}
else{
    return "The number is odd";
}
}

console.log(evenOdd(55));*/

/*3.	Write a program that checks if a given number is a three digit long number.

function threeDigitNumber(a) {
    if(a < 1000 && a > 99) {
        return "It's a three digit number";
    }else{
        return "It's not a three digit number";
    }
}
console.log(threeDigitNumber(5505));*/

/*4.	Write a program that calculates an arithmetic mean of four numbers.

function arithmeticMean(a, b, c, d) {
    return (a + b + c + d) /4;
}
console.log(arithmeticMean(4, 3, 4, 5));*/
 
/*5.	Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
*****
*    *
*    *
*    *
*****   

function square(number){

    var i = 1;
    var x = 1;
    var y = 1;
    var space = "";
    var res = "";
    var s = 0; 
    var counter = number - 2;
while(i < number){
    res = res + "*";
    i++;
}
res = res + "*" + "\n";

while(s < counter){
    space = space + " ";
    s++;
}
while(x <= counter){
    
res = res + "*"+ space + "*" + "\n";
x++;
}
    
while(y <= number){
   
    res = res + "*";
    y++;
}
return res;
}
var result = square(7);
console.log(result);*/

/*6.	Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *  


function chart(a, b, c){
    var pict = "";
    for(var i = 0, j = 0, k = 0; i <= a; i++){
            pict += "*";
        }
    for(var i = 0, j = 0, k = 0; i <= a; i++){
            pict += "*";
        }
        
    }
    return pict;   
}


console.log(chart(5, 3, 7));*/


/*7.	Write a program that calculates a number of digits of a given number. */

/*8.	Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3*/


 
/*9.	Write a program that calculates the sum of odd elements of a given array. */


/*10.	Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.*/

/*11.	Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. */
