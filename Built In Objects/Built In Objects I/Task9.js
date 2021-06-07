// 9.	Write a function that for a given departure and arrival time calculates the time the trip takes.
// 	Input: 8:22:13 11:43:22
// 	Output: 3 hours 21 minutes 9 seconds

function timeOfTrip(departure, arrival) {
    var tripTime = new Time(arrival) - new Time(departure);
    return tripTime;

}

console.log(timeOfTrip(8:22:13, 11:43:22));