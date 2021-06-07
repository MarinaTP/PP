// 3.	Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

function sortAlphabetOrder(string) {
    
    var array = string.split(' ');
    var sorted = array.forEach((number) => {
        console.log(number.sort());
    });
    

    var word = sorted.join('');
    return word;

    
};

var k = sortAlphabetOrder('Republic Of Serbia');
console.log(k);
