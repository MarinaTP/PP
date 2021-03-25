/*Write a program that will iterate from 0 to 10 and display squares of numbers.

for(var x = 0; x <=10; x++){
    console.log(x * x);
}*/

/*1.	Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

var i = 1;

for(var i = 0; i <= 15; i++){
    if(x % 2 === 0){
    console.log("Number " + x  +  " is even");
    }
    else{
        console.log("Number " + x +  " is odd");
    }
}*/

/*2.	Write a program to sum the multiples of 3 and 5 under 1000.

var sum = 0;
for(var i = 0; i < 1000; i++){
   if(i % 3 === 0 && i % 5 === 0) {
    sum += i;
}
}
    console.log(sum);
*/

/*3.	Write a program to compute the sum and product of an array of integers.

var array = [1, 2, 3, 4, 5, 6, 7];
var sum = 0;
var prod = 1;

for(var i = 0; i < array.length; i++){
    sum += array[i];
    prod *= array[i];
}
console.log("Sum is " + sum + " and product is " + prod);*/

/*4.	Write a program which prints the elements of the following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var b = "";
for(i = 0; i < x.length; i++) {
    b += x[i];
}
    console.log(b);*/


/*5.	Write a program that prints the elements of the following array.

var a = [
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27]
];
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];

    for(var i = 0; i < a.length; i++) {
        for(var j = 0; a[i].length; j++) {
            console.log(a[i][j]);
        }
    }*/
/*6.	Write a program that outputs the sum of squares of the first 20 numbers.

var sum = 0;
for(i = 0; i <= 20; i++) {
    sum = sum + i * i;
}
console.log(sum);*/

/*7.	Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 

var marks = [["David", 80], ["Marko", 77], ["Dany",88], ["John", 95], ["Thomas", 68]];
var avmark = 0;
var avgrade = 0;
for(i = 0; i < marks.length; i++) {
    
    avmark = (avmark + marks[i][1]);
}
    avgrade = avmark / marks.length;
console.log('Average grade of the students is ' + avgrade);

if(avgrade < 60) {
    console.log('Grade is F');
} else if(avgrade < 70) {
    console.log('Grade is D');
} else if(avgrade < 80) {
    console.log('Grade is C');    
} else if(avgrade < 90) {
    console.log('Grade is B');
} else if(avgrade < 100) {
    console.log('Grade is A');
}*/

/*8.	Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

for(i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 !== 0){
        console.log("Fizz");
    }
        else if(i % 5 === 0 && i % 3 !== 0){
            console.log("Buzz");
        }
        else if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
     else{
console.log(i);
     }
    }*/
