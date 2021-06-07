/*5.	Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
*****
*    *
*    *
*    *
*****   */

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
console.log(result);