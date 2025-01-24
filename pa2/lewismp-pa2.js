/*
Marshall Lewis
INFO 465 - Dr. McGarry
Programming Assignment 2
01/23/2025
*/


// Import required modules
var readLineSync = require(`readline-sync`);

//Turn debugging on/off (true = on, false = off)
global.debug = false;

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
        console.log(`"${input}" added`);
    }
    else {
        console.log(`ERROR: "${input}" is not an integer. Submit a valid integer or 'q' to quit`);
    }
}

// If debugging is enabled, display all values that are in the input array
if (debug) {
    arrayDebug(numbersInput);
}


// Display the results header
console.log(`\n\nResults`);
console.log(`========`);

// Test the input numbers to see if any two numbers can be multiplied to create a third input number
if (numbersInput.length > 2) {    
    checkForProducts(numbersInput);
}
else {
    console.log(`ERROR: At least three integers are required to check for products`);
}

// Exit the program
exitProgram();




// Provide the program purpose (name) and relevant instructions for using the program
function instructions() {
    console.log(`*********************************************************************************`);
    console.log(`*                             Product Result Checker                            *`);
    console.log(`*********************************************************************************`);
    console.log(`*                   Enter as many integers as you would like.                   *`);
    console.log(`*         When prompted for an integer, input 'q' or 'Q' to exit input.         *`);
    console.log(`*   Upon exiting input, integers will be evaluated to see if any two integers   *`);
    console.log(`*      can be multiplied together, creating another integer that was input.     *`);
    console.log(`*********************************************************************************\n`);
}

// Accepts user input and returns the value
function takeUserInput() {
    var input = readLineSync.question(`Enter an integer: `);
    return input;
}

// Test the input numbers to see if any two numbers can be multiplied to create a third input number
function checkForProducts(numbersInput) {
    // Declare a variable to track if required condition is met at least once
    var productIdentified = false;
    
    // Sort the input numbers in ascending order, so products can be efficiently checked
    numbersInput = numbersInput.sort((a, b) => Math.abs(a) - Math.abs(b));
    
    // If debugging is enabled, initialize debug variables and display sorted array
    if (debug) {
        var debugLoopCount = 1;
        arrayDebug(numbersInput);
    }

    // Loop through all possible combinations of the input numbers to see if any two numbers can be multiplied to create a third number
    for (var i = 0; i < numbersInput.length - 2; i++) { // Start at 0 to compare all triplets, stop at length-2 to avoid arbitrary index comparisons
        for (var j = i + 1; j < numbersInput.length - 1; j++) { // Start at i + 1 to avoid comparing the same indices, stop at length-1 to avoid arbitrary index comparisons
            for (var k = j + 1; k < numbersInput.length; k++) { // Start at j + 1 to avoid comparing the same indices
                
                //If debugging is enabled, display the current loop and the indices being compared
                if (debug) {
                    console.log(`\nLoop ${debugLoopCount}`)
                    console.log(`Index ${i}: ${numbersInput[i]}`);
                    console.log(`Index ${j}: ${numbersInput[j]}`);
                    console.log(`Index ${k}: ${numbersInput[k]}`);
                    debugLoopCount++;
                }
                
                // If the product of the two numbers equals the third number and the loops are not comparing the same indices,
                // display a message indicating the condition was met
                if (numbersInput[i] * numbersInput[j] == numbersInput[k]) {
                    console.log(`Condition is met: ${numbersInput[i]} * ${numbersInput[j]} = ${numbersInput[k]}`);
                    productIdentified = true;
                }
            }
        }
    }

    // If no products were identified, display a message indicating the condition was not met
    if (!productIdentified) {
        console.log(`Condition was not met`);
    }
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

// If debugging is enabled, display all values that are in the array
function arrayDebug(numbersInput) {
    console.log(`\nArray Contents:`)
    for (var i=0; i<numbersInput.length; i++) {
        console.log(`Index ${i}: ${numbersInput[i]}`);
    }
    console.log();
}