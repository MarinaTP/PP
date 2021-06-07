// 5.	Write a function to convert a string to its abbreviated form. 

// 	"John Snow" -> 	"John S."

function abbrString(string){
    var arr = string.split(" ");
    var abbr = arr[1].slice(0,1).concat('.');
    return arr[0] + " " + abbr;
}

console.log(abbrString("John Snow"));
