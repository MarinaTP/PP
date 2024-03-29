/*1.	Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"

var a = "My random string";
var add = "JS ";
var num = 10;
result = " ";

function insertString(a, add, num) {
    var result = " ";
    for(var i = 0; i < a.length; i++) {
        if(i === (num - 1)) {
            result += add + a[i];
            }else {
                result += a[i];
            }
        }
    return result;
}
    console.log(insertString(a, add, num));*/

/*2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null]*/

/*3.	Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]*/

/*4.	Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number*/

/*5.	Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]*/  

/*6.	Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] */

/*7.	Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.

Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.*/

/*8.	Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

function findString(string, stringToFind) {
    var holder ="";
    counter=0;
    for(var i =0, x=0; i <string.length; i++){
        if(string[i]===stringToFind[x]){
            holder += stringToFind[x];
            x++;
            if(x===stringToFind.length){
                counter+=1;
                x=0;
            }

        }
    }
    return counter;
}
console.log(findString('The quick brown fox', 'fox'));*/

/* 9. Write a function to hide email address.
myemailaddress@bgit.rs - mye...@bgit.rs"

function hideMail(mail){
    var result="";
    var lastPart="";
    for (var i=0; i<mail.length; i++){
​
        if (i<=2){
            result+=mail[i];
        }
        if(i<=5&&i>2){
            result+=".";
        }
       
      if(mail[i]==="@"){
          for (var x=i; x<mail.length; x++){
              
              lastPart+=mail[x];
          }
      }
​
       
    }
    
    return result+ lastPart;
}
​
console.log(hideMail("tanjuska611@gmail.com"));*/

/*10.	Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]*/


function mostFrequent(array) {
   var mostFreq = 0;
   var result = array[0];
    for(var i = 0; i < array.length; i++){
        var counter = 0;
        for(var j = 0; j<array.length; j++){
         if(array[i] === array[j]){
        counter += 1;
        }
    }
    if(mostFreq < counter) {
        result = array[i];
        mostFreq = counter;
    }
    }
    


    return result;
}
console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));