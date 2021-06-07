// 2.	Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

// “Webmaster” -> “abeemrstw”

function sortAlphabetOrder(string) {
    var small = string.toLowerCase();
    var array = small.split('');
    var sorted = array.sort();
    var word = sorted.join('');
    return word;

    
};

var k = sortAlphabetOrder('Webmaster');
console.log(k);
