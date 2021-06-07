// 1.	Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

var duplicateAllElements = function (array){
    var result = [];
    array.forEach(function(el){
        result.push(el, el);
    })
    return result;
}


console.log(duplicateAllElements([2, 4, 7, 11, -2, 1]));



/* RESENJE PREKO FOR PETLJE
function duplicateArray(array){
    var result = [];
for(var i = 0; i < array.length; i++){
        result.push(array[i], array[i]);
}
    return result;
}

var array2 = duplicateArray([2, 4, 7, 11, -2, 1]);
console.log(array2);*/



/* RESENJE SA INTERNETA
var array = [2, 4, 7, 11, -2, 1];
var duplicated = array.map(function(item){
    return [item,item];
}).reduce(function(array, result){
    return array.concat(result);
});

 console.log(duplicated);*/

