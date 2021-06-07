// 5.	
// a.	Write a function that finds all the elements in a given array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]

// function lessEl (array, a){
    //     var c = array.filter(function (array){
    //     return array < a;
    
    // });
    // return console.log(c);
    // }
    
    // lessEl([2, 3, 8, -2, 11, 4], 6);


// b.	Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
// 		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// 	Output: [’Programming’, ‘product’]


function allEl (array){
    var result = [];
    array.forEach(function (word){
        if((word.charAt(0) === 'p' || word.charAt(0) ==='P') && (word.charAt(1) === 'r' || word.charAt(1) ==='R') && (word.charAt(2) === 'o' || word.charAt(2) ==='O')){
        result.push(word);
    }
    return result;
});
}
console.log(allEl(['JavaScript', 'Programming', 'fun', 'product']));


// c.	Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it.

