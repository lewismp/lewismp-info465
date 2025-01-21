/*
Marshall Lewis
INFO 465 - Dr. McGarry
Programming Assignment 1
01/21/2025
*/

// Import required modules
var readLineSync = require(`readline-sync`);

//Turn debugging on/off (true = on, false = off)
var debug = false;

// Declare program variables
var continueInput = true;
var numbersInput = [];


// Display instructions for the program
instructions();

// Loop to gather inputs from user
while (continueInput) {
    var input = takeUserInput();

    // If debugging is enabled, return information about the input
    if (debug) {
        inputDebug(input);
    }

    // Check if input is a valid integer or valid quit character; if not, display an error message
    if (input == 'q' || input == 'Q') {
        continueInput = false;
    }
    else if (input != "" && input != undefined && input != null && Number.isInteger(Number(input))) {
        numbersInput.push(Number(input));
    }
    else {
        console.log(`ERROR: "${input}" is not an integer. Submit a valid integer or 'q' to quit.`);
    }
}

// If debugging is enabled, display all values that are in the input array
if (debug) {
    for (var i=0; i<numbersInput.length; i++) {
        console.log(`Index ${i}: ${numbersInput[i]}`);
    }
}

// Output the mean and median of the input integers
console.log(`Mean: ${calculateMean(numbersInput)}`);


// Provide the program purpose (name) and relevant instructions for using the program
function instructions() {
    console.log(`*********************************************************************************`);
    console.log(`*                            Mean/Median Calculations                           *`);
    console.log(`*********************************************************************************`);
    console.log(`*                   Enter as many integers as you would like.                   *`);
    console.log(`*             When prompted for an integer, input 'q' to exit input.            *`);
    console.log(`*    Upon exiting input, the mean and median will be calculated and provided.   *`);
    console.log(`*********************************************************************************\n`);
}

// Accepts user input and returns the value
function takeUserInput() {
    var input = readLineSync.question(`Enter an integer: `);
    return input;
}

// Calculate the mean of the input integers
function calculateMean(numbersInput) {
    var sum = 0;
    for (var i=0; i<numbersInput.length; i++) {
        sum += numbersInput[i];
    }
    return sum / numbersInput.length;
}

// Debugging function to provide more information about the input value
function inputDebug(input) {
    if (input == 'q') {
        console.log(`${input} is a valid input to quit`);
        console.log(`Exiting input loop`);
    }
    else if (input == undefined) {
        console.log(`Input is undefined`);
    }
    else if (input == null) {
        console.log(`Input is null`);
    }
    else if (input == "") {
        console.log(`Input is an empty string`);
    }
    else if (Number.isInteger(Number(input))) {
        console.log(`${input} is a valid integer`);
    }
    else {
        console.log(`${input} is not a valid integer`);
    }
}