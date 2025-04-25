/*
Marshall Lewis
INFO 465 - Dr. McGarry
GitLab Pipeline Project
04/24/2025
*/


// Import required modules
var readLineSync = require(`readline-sync`);

//Turn debugging on/off (true = on, false = off)
global.debug = false;

// Declare program variables
var continueInput = true;
var normalizedInput = [];

// Display instructions for the program
instructions();

while (continueInput) {
    var input = takeUserInput();

    // Check if input loop should continue
    if (input == "") {
        continueInput = false;
        console.log(`\n`);
        break;
    }

    // Normalize the input to all lowercase characters and add to the normalizedInput array
    input = input.toLowerCase(); // Converts all characters to lowercase
    input = input.replace(/\s+/g, ''); // Removes all spaces in the input, even if there are multiple
    normalizedInput.push(input);d
}

// If debugging is enabled, display all values that are in the input array
if (debug) {
    for (var i=0; i<normalizedInput.length; i++) {
        console.log(`Index ${i}: ${normalizedInput[i]}`);
    }
}

// Check if the inputs are a palindrome
for (var i=0; i<normalizedInput.length; i++) {
    var palindromeTest = normalizedInput[i];
    if (isPalindrome(palindromeTest)) {
        console.log(`"${palindromeTest}" is a palindrome.`);
    } else {
        console.log(`"${palindromeTest}" is not a palindrome.`);
    }
}

// Exit the program
exitProgram();



// Provide the program purpose (name) and relevant instructions for using the program
function instructions() {
    console.log(`*********************************************************************************`);
    console.log(`*                               Validate Palandrome                             *`);
    console.log(`*********************************************************************************`);
    console.log(`*           Input a series a strings, pressing ENTER between entries.           *`);
    console.log(`*       To exit the input loop, press ENTER without any other characters.       *`);
    console.log(`*********************************************************************************\n`);
}

// Accepts user input and returns the value
function takeUserInput() {
    var input = readLineSync.question(`Enter a string: `);
    return input;
}

// Function to check if the input is a palindrome
function isPalindrome(input) {
    var reversedInput = input.split('').reverse().join('');
    return input === reversedInput;
}

// Exit the program
function exitProgram() {
    console.log(`\n\nPress ENTER to exit the program.`);
    readLineSync.question(``);
    process.exit();
}