
/*6.	Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *  */


function chart(a, b, c){
    var pict = "";
    for(var i = 0, j = 0, k = 0; i <= a; i++){
            pict += "*";
        }
    for(var i = 0, j = 0, k = 0; i <= a; i++){
            pict += "*";
        }
        
    
    return pict;   
}


console.log(chart(5, 3, 7));