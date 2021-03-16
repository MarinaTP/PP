/* 1. Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console. 
For input 1, output should be “Monday”.

var weekDays = 6;

switch(weekDays){
    case 1:
    console.log("Monday");
break;
    case 2:
    console.log("Tuesday");
break;
    case 3:
    console.log("Wednesday");
break;
    case 4:
    console.log("Tuesday");
break;
    case 5:
    console.log("Friday");
break;
    case 6:
    console.log("Saturday");
break;
    case 7:
    console.log("Sunday");
break;
}*/

/*2.	Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.

var weekDays = 8;

switch(weekDays){
    case 1:
    console.log("Monday");
break;
    case 2:
    console.log("Tuesday");
break;
    case 3:
    console.log("Wednesday");
break;
    case 4:
    console.log("Tuesday");
break;
    case 5:
    console.log("Friday");
break;
    case 6:
    console.log("Saturday");
break;
    case 7:
    console.log("Sunday");
break;
    default:
    console.log("Input must be a number between 1 and 7");
break;
}*/

/*3.	Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
		For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.

var WeekDays = 12;

switch(WeekDays){
    case 1:

    case 2:
    
    case 3:

    case 4:
    
    case 5:
    console.log("It’s weekday");
break;
    case 6:
    
    case 7:
    console.log("It’s weekend");
break;
    default:
    console.log("Input must be number between 1 and 7");
break;
}*/

/*4.	Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12. 
		For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.

var month = 13;

switch(month){
    case 1:
    console.log("January");
break;
    case 2:
    console.log("February");
break;
    case 3:
    console.log("March");
break;
    case 4:
    console.log("April");
break;
    case 5:
    console.log("May");
break;
    case 6:
    console.log("June");
break;
    case 7:
    console.log("July");
break;
    case 8:
    console.log("August");
break;
    case 9:
    console.log("September");
break;
    case 10:
    console.log("October");
break;
    case 11:
    console.log("November");
break;
    case 12:
    console.log("Dicember");
break;
    default:
    console.log("Input must be number between 1 and 12");
break;
}*/

/*5.	Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12.

var month = 17;

switch(month){
    case 1:
    
    case 2:
    console.log("It's a Winter");
break;
    case 3:
    
    case 4:
   
    case 5:
    console.log("It's a Spring");
break;
    case 6:
    
    case 7:
    
    case 8:
    console.log("It's a Summer");
break;
    case 9:
    
    case 10:
    
    case 11:
    console.log("It's a Autumn");
break;
    case 12:
    console.log("It's a Winter");
break;
    default:
    console.log("Input must be number between 1 and 12");
break;
}*/

/*6.	Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that grade in the following manner: A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed". Input different from letters A-F outputs a message "Unknown grade".

var grade = "G";

switch(grade){
    case "A":
        console.log("Good job");
    break;
    case "B":
        console.log("Pretty good");
    break;
    case "C":
        console.log("Passed");
    break;
    case "D":
        console.log("Not so good");
    break;
    case "F":
        console.log("Failed");
    break;
    default:
    console.log("Unknown grade");
    break;
}*/


/*7.	Write a program that takes as input a city name and outputs the country where the city is. You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. Input different from the listed cities should output a message"Please choose a different city".

var city = "Rome";

switch(city){
    case "Rome":
    case "Milano":
    case "Treviso":
    case "Venice":
    case "Genova":
        console.log("Italy");
break;
    case "Belgrade":
    case "Novi Sad":
    case "Sremska Mitrovica":
    case "Ruma":
        console.log("Serbia");
break;
    case "Madrid":
    case "Barcelona":
        console.log("Spain");
break;
    case "Athens":
    case "Thessaloniki":
        console.log("Greece");
break;
    case "Bar":
    case "Podgorica":
        console.log("Montenegro");
break;
default:
    console.log("Please choose a different city");
    break;
}*/


/*8.	Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!*/

var a = 3;
var b = 7;
var operation = "+";
var result;

switch (operation) {
    case "+":
        result = a + b;
        console.log(result);
    break;
    case "-":
        result = a - b;
        console.log(result);
    break; 
    case "*":
    result = a * b;
    console.log(result);
    break;
    case "/":
        switch (a===0 || b===0) {
            case true:
             console.log("You can't divide by zero");
            break;
            case false:
             result = a / b;
             console.log(result);
            break;
        }
    default:
console.log("Something went wrong");
break;
        }