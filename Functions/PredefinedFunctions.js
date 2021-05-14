/*1.	Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]*/



function filter(array) {
	var newArray = [];
    for(var i = 0; i < array.length; i++) {
		var converted = parseFloat(array[i]);
			if(isFinite(converted)) {
		newArray[newArray.length] = converted;
}
}
return newArray;
}
console.log(filter(["1", "21", undefined, "42", "1e+3", "12.6", Infinity]));

/*2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
	Output: “015false-2247”

	var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
	

	function allElements(array){
		for(var i = 0; i < array.length; i++) {
			var newArray = "";
			if(array[i] !== isFinite(array[i]) {
				newArray = 

				}
				
				
			}
		}
		return newArray;
	}
var b = allElements([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(b);*/

/*3.	Write a program to filter out falsy values from the array.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]*/

/*4.	Write a program that calculates a number of integer values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3*/

/*5.	Write a program that calculates a number of float values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2*/




