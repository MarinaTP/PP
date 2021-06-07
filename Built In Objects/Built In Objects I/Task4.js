// 4.	Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

function lastIndex(array){
    var a = Math.min(...array);
    var b = array.lastIndexOf(a);
    var c = {minValue: a, minLastIndex: b};
    return c;
}
console.log(lastIndex([1, 4, -2, 11, 8, 1, -2, 3]));

