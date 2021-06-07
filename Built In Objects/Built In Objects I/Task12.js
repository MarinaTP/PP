// 12.	 Write a function that shuffles the elements of a given array. 
// 		Input: [3, 6, 11, 2, 9, 1]
// 		Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the given array)

function shufflesNums(array){
    var shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray;
}
 var a = shufflesNums([3, 6, 11, 2, 9, 1]);
console.log(a);