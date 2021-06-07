// 6.	Write a function that adds string to the left or right of string, by replacing it’s characters.

// 	'0000', ‘123’, 'l' -> 0123 
// '00000000', ‘123’, 'r' -> 12300000

function addingStrings(toChange, toAdd, x){
    var lengthtoCut = toAdd.length;

    if(x === 'l'){
        return editedText = toChange.slice(0,- lengthtoCut) + toAdd;
    }else if(x === 'r'){
        return editedText2 = toAdd + toChange.slice(lengthtoCut);

    }


}
console.log(addingStrings('00000000', '123', 'r'));