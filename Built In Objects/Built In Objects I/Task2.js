// 2.	Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

var a = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
function removeDuplicate(value, index, self) {
    return self.indexOf(value) === index;
  }
var unique = a.filter(removeDuplicate).sort(function(a, b){return a-b});

console.log(unique);

/*sort(function(a, b){return a-b} -sortira niz i vraca od najmanjeg do najveceg elementa, a ako zamenimo b-a onda vraca od najveceg do najmanjeg*/

// Slobodanovo resenje
// var arr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
// function removeDuplicates(data) {
//     return data.filter((value, index) => data.indexOf(value) === index);
// }
// console.log(removeDuplicates(arr).sort(function(a, b){return a-b}));