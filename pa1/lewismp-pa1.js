/*
Marshall Lewis
INFO 465 - Dr. McGarry
Programming Assignment 1
01/21/2025
*/

// Import required modules
var readLineSync = require("readline-sync");


// Declare program variables
var number_input = [];
var continue_input = true;


// Display instructions for the program
instructions();


// Loop to gather valid integer inputs from user
while (continue_input==true) {
    var input = readLineSync.question("Enter an integer: ");
    
    // Check if the input is an integer or 'q' to quit
    if (input === 'q') {
        continue_input = false;
    }
    else if (Number.isInteger(parseInt(input))) {
        number_input.push(parseInt(input));
    }
    else {
        console.log("ERROR: Input is not an integer. Submit a valid integer or 'q' to quit.");
    }
}


// Calculate the mean and median of the input integers
//for () {
//}


// Provide the program purpose (name) and relevant instructions for using the program
function instructions() {
    console.log("*********************************************************************************");
    console.log("*                            Mean/Median Calculations                           *");
    console.log("*********************************************************************************");
    console.log("*                   Enter as many integers as you would like.                   *");
    console.log("*             When prompted for an integer, input 'q' to exit input.            *");
    console.log("*    Upon exiting input, the mean and median will be calculated and provided.   *");
    console.log("*********************************************************************************");
}