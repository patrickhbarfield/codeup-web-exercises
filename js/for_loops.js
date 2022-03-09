"use strict";

//for loops exercises

// #1 create file
// #2 create showmult funtion
    function showMultiplicationTable(num){
        for (let multiplier = 1; multiplier <= 10; multiplier++)
        {
            //7 * 1 =7
            console.log(num + "x" + multiplier + " = " + num * multiplier);
            console.log(num * multiplier);
        }
    }
    showMultiplicationTable(7);

// HELP with brackets/curly brace placement
// HELP understanding random number generator

// #3 Generate 10 random numbers between 20-200 and output even or odd to the console
/*function randomNumber(max, min) {*/
for (var i = 1; i <= 10; i++) {
    var randomNum = Math.floor(Math.random() * (200 - 20 + 1) + 20);
    if (randomNum % 2 === 0) {
        console.log(randomNum + " is even.")
    } else if (randomNum % 2 !== 0) {
        console.log(randomNum + " is odd.")
    }

}
console.log(randomNum)

//Exercise 4
//Solutiuon 1
var totalNumOfRows = 9
for (var i = 1; i <= totalNumOfRows; i++) {
    console.log((i + "").repeat(i));
}


//Exercise 5

for (var i = 100; i >= 5; i--) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

