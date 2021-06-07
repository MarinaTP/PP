// Math
// ●	Random
// Create a function that builds an array of 10 random numbers between 1 and 50.
// The function prints that array out in the console and then returns it.

   
   function randomNums(max){
        var array = [];
  while(array.length < 10){
      array.push(Math.ceil(Math.random() * max));
}
   return array;
}

var array2 = randomNums(50);
  console.log(array2);

 

//     function generator(start,end){
//    return Math.floor(Math.random()* (end - start + 1) + start);

