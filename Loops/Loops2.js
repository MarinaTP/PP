/*1.	Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no

var  e = 3, a = [5, -4.2, 18, 7];
var answ = "no";
for(var i = 0; i < a.length; i++) {
    if(a[i] === e){
        answ = "yes";
    }
}
    console.log(answ);*/
    
/*2.	Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]

var a = [-3, 11, 5, 3.4, -8];
var b = [];
for(var i = 0; i < a.length; i++) {
    b = a;
    if(a[i] > 0){
        a[i] = a[i] * 2;
    }

}console.log(b);*/

/*3.	Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3

var a = [4, 2, 2, -1, 6];
var min = a[0];
var index = 0;

for(var i = 0; i < a.length; i++) {
   if(a[i] < min){
       min = a[i];
       index = i;
}
} console.log("Minimum is " + min + " and index is " + index);*/

/*4.	Write a program that finds the first element larger than minimum and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2

var array = [4, 2, 2, -1, 6];
var min = array[0];
var larger = array[0];

for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
}
        for(var j = 0; j < array.length; j++)
        if (array[j] < larger && array[j] > min ) {
            larger = array[j];
        }
    
} 
console.log(larger);*/

/*5.	Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16

var array = [3, 11, -5, -3, 2];
var sum = 0;
for(var i = 0; i < array.length; i++) {
    if(array[i] > 0){
        sum = sum + array[i];
    }
} console.log(sum);*/


/*6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric.

var array = [3, 4, 12, 8];
var output = "The array isn't symmetric.";

for (var start = 0, end = array.length-1; start < end; start++, end--) {
    if(array[start] === array[end]) {  
        output = "The array is symmetric.";   
    }else{
        output = "The array isn't symmetric.";
    }
        
} console.log(output);*/

/*7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]

var a = [4, 5, 6, 2]; 

var b = [3, 8, 11, 9];

var x = [];

for (var i = 0; i < a.length; i++ ) {
    x[x.length] = a[i];
    x[x.length] = b[i];
}
console.log(x);*/


/*8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var x = [];

for(var i = 0; i < a.length; i++) {

     x[i] = a[i];
}
for(var i = x.length, j = 0; i < a.length + b.length; i++, j++) {
     x[i] = b[j];
}console.log(x);*/

/*9.	Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]

var e = 2;
var a = [4, 6, 2, 8, 2, 2];
var x = [];

for(var i = 0; i < a.length; i++) {
    if(a[i] !== e) {
 x[x.length] = a[i];
}
}console.log(x);*/

/*10.	Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]

var e = 78; 
var p = 3; 
var a = [2, -2, 33, 12, 5, 8];
var x = [];

for(var i = 0; i < a.length; i++) {
     x[x.length] = a[i];
    if(i === p) {
        x[i] = 78;
    }
}console.log(x);*/