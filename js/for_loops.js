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
    showMultiplicationTable(10);

// HELP with brackets/curly brace placement
// HELP understanding randwom number generator

// #3 Generate 10 random numbers between 20-200 and output even or odd to the console

function printRandomNumbers(){
    for(let i = 1; i >= 20; i++){
        let randomNum = Math.floor(Math.random() * 180) + 20;
        if (randomNum % 2 === 0) {
            console.log(randomNum + " is even!");
        }
        else
            console.log(randomNum + "is odd!");
    }
    console.log("The loop is finished");}