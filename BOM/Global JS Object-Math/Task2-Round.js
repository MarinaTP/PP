// Math
// ●	Round
// Create a function that uses the passed array of numbers and rounds all its elements to two decimals.
// Print out the modified array in the console.
// Use the first function for generating the input array.


    
    function randomNums(max){
        var array = [];
  while(array.length < 10){
      array.push(Math.random() * max);
}
   return array;
}

var array2 = randomNums(50);
  console.log(array2);

  function roundedNums(array){
    var result = [];
    result = array.forEach(function (el){
        Math.round(el)});
      return result;
  }
  var array3 = roundedNums(array2);
  console.log(array3);