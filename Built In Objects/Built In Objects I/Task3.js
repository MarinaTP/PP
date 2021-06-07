// 3.	
// a.	Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

function oddNumbers(array){
    var result = (array.length % 2 != 0);
    return result;
}

console.log(oddNumbers([1, 2, 9, 2, 1]));
 
// b.	Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function lessMiddleEl(array){
    var a = oddNumbers(array);
    if(a === false){
        console.log('Error');
    }else{
        var b = array[array.length / 2 - 0.5];
        var c = array.filter(function (array){
            return array < b;

        });
        return console.log(c);
    }

        
}
lessMiddleEl([-1, 8.1, 3, 6, 2.3, 44, 2.11]);



