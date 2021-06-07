// 1.	Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

// 	12345 -> 54321

function reverseNums(n){
    var n = n + "";
	return Number(n.split("").reverse().join(""));
    
}
var k = reverseNums(12345);
console.log(k);
console.log(typeof k);