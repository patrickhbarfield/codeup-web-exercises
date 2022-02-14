"use strict";

// taking it out of the main body and putting it into a function
//so he can just look at the main part of the program
//like to write function after he calls them

// control getting out of a loop by using an if statement and a break
// QUESTION - the small grey low and high are reserved words?
// global scope is when it is visible outside of the function

//what does switching a var to a let do?
// for I loops auto fills
//\\ +=2 would do everyother
// coercion, is when Javascript automattically forces something


var oddNumber = promptForOddNumberInRange(1, 50);
oddNumber = parseInt(oddNumber);

printOddNumbersInRangeWithSkip(low, high, addNumber);

function printOddNumbersInRangeWithSkip(low, high, skipNumber);
    for (let i = low; i <= high; i++) {
        if(i === skipNumber || i % 2 === 0) {
            // if I is the skip number output something special
            if(i === skipNumber) {
                console.log("Yikes, Skipping number: " + i);
            }
            continue;
        }
        // if you get here then should be an odd number that is whithin range and not skipnumber
        console.log("Here is an odd  number: " +  i);
}

console.log(oddNumber);

function promptForOddNumberInRange(low, high) {
    //loop until user gives an odd number in the range INCLUSIVE
    var result;
    while(true) {
        result = prompt("enter an odd number from " + low + " to " + high);
    //console.log(result);
    if(result !== null && result % 2 === 1 && result >= low){
        break;


    }
}

// console.log(result);
    return result;
}

// theh more focused a program, the quicker it will do it cleanly and correctly.  So break up into functions.
//its called feature creap
//3.
