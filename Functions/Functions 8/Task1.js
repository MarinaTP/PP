/*IIFE = Immediately Invoked Function Expressions

1.	Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
	Input array: [4, 5, 11, 9]
	Output array: [ 9, 5, 11, 4]*/

    (
        function (array) {
            var result =[];

            for( var i = 0; i < array.length; i++){
                if (i === 0){
                result[array.length-1] = array[i];
            }
            if(i === array.length-1){
                result[0] = array[i];
            }
            else{
                result[i] = array[i];
            }
        }
        console.log(result);}
    ) ([4, 5, 11, 9]);
