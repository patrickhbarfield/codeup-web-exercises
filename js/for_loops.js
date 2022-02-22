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
// HELP understanding random number generator

// #3 Generate 10 random numbers between 20-200 and output even or odd to the console

function printRandomNumbers(){
    for(let i = 1; i >= 20; i++){
        let randomNum = Math.floor(Math.random()*(200 - 20 + 1));
        if (randomNum % 2 === 0) {
            console.log(randomNum + " is even!");
        }
        else
            console.log(randomNum + "is odd!");
    }
    console.log("The loop is finished");}


// "use strict";
//
//
// //Part Zero - Exercise 1: making a file named for_loops.js and link to loops.html
// //DONE
//
// //Part One - Exercise 2
// function showMultiplicationTable(num){
//     for (var i = 1; i <= 10; i++){ //for (let multiplier = 1; multiplier <= 10; multiplier++)
//         console.log(num + "multiplied by " + i + " = " + (num * i));
//     }
// }
// showMultiplicationTable(7);
//
//
// //Part Two - Exercise 3
// function randomNumber(max, min) {
//     return Math.floor(Math.random() * (max - min) + min);
// }
// for (var r = 1; i <= 10; r++) {
//     let random = getRandomNum(200, 20);
//     if (random % 2 === 0){
//         console.log(random + " is even");
//     } else {
//         console.log(random + " is odd");
//     }
// }
//
// //Part Three - Exercise 4 create a for loop that uses console.log to create the output shown
function treeOfNumbers(height) { // created a function
    for (var t = 1; t <= height; t++){
        // initialization of loop and condition
        let tree = t += ''; //assign variable
        // let space = '' + i; don't need this

        for (var h = 1; h <= t; h++){
            tree = i.toString();
        }

        //let gap = space.repeat( i - 1);
        // tree = tree + gap; don't need this
        console.log(tree);
    }
}
treeOfNumbers(9);

// Part Four - create a for loop that uses console.log to create the output shown
// function minusFive() {
//     for (let i = 1; i >= 5; i -= 5)
// }



/*


// TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  -> If it's neither print "I'm not playing"
//  -> Print "marco polo" if it's divisible by 3 and 5.

for (let i = 1; i <= 40; i++) {

    if (i % 3 === 0) {
        console.log("marco");
    } else if (i % 5 === 0) {
        console.log("polo")
    } else if (i % 3 !== 0 && i % 5 !== 0) {
        console.log("I'm not playing... this isn't fun :(");
    else if (i % 3 === 0 && i % 5 === 0){
            console.log("Macro Polo")
        }
    }

    /!*
    function marcoPoloOrNum(maxnum){
    for(let i = 1; i <= maxnum; i++){
        if (i % 3 === 1 && i % 5 === 1){
            console.log('Marco Polo');
        }else if(i % 3 === 1){
            console.log("Marco");
        }else if (i % 5 === 1){
            else{
                console.log(i)
            }
        }
    }
    }
    let (num)
    for ()


    // while and do while are indeterminate.  we know what will stop, but don't know how many
    // for loop we know what will stop the loop and how many iterations it executes

    let letters = "";

    //\\can't use strings as a control variable.  but you can ' +
    //'use it in a different way.  you can use a property on a ' +
    //'string object to see how many characters are in it.  '

    for (let i = letters.length; i <= 36; i++){
    letters += "z";
    console.log(letters);
    }
    console.log(letters.length);

    for (/!*control variable*!/'; /!*test condition*!/; /!*iterator*!/'){
//code to run for each iteration of the loop
    }

    test condition gives you t/f back.  the control and the iterator is what makes it truely work
    step one - id control variable.
    2 - test the condition-
    3 - run the code.

/!*

let num = 8;

for(num; num <= 50; num++){
    console.log(num)

function loopNums() {

    let num = 2;

    while (num <= 65536) {
        num *= 2;
    }
    return num;
}
        console.log(num);
    }
}


let password = "123acc"

for (var i = 1; i < 10; 7*i++) {
    console.log('for loop iteration #' + i);
}

*/
