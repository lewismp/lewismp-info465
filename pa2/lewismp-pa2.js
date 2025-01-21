/*
Marshall Lewis
INFO 465 - Dr. McGarry
Programming Assignment 2
01/21/2025
*/


// Import required modules
var readLineSync = require(`readline-sync`);

//Turn debugging on/off (true = on, false = off)
var debug = false;


// ADD PROGRAM CODE HERE
// ADD PROGRAM CODE HERE
// ADD PROGRAM CODE HERE
// ADD PROGRAM CODE HERE
// ADD PROGRAM CODE HERE
// ADD PROGRAM CODE HERE
// ADD PROGRAM CODE HERE

// Exit the program
exitProgram();


// Provide the program purpose (name) and relevant instructions for using the program
function instructions() {
    console.log(`*********************************************************************************`);
    console.log(`*                             Product Result Checker                            *`);
    console.log(`*********************************************************************************`);
    console.log(`*                   UPDATE THIS SECTION WITH SOMETHING USEFUL                   *`);
    console.log(`*********************************************************************************\n`);
}

// Exit the mean/median program
function exitProgram() {
    console.log(`\n\nPress ENTER to exit the program.`);
    readLineSync.question(``);
    process.exit();
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