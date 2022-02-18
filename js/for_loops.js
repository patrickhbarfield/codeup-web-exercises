"use strict";

//Loops exercises

// 2.Create a function named showMultiplicationTable
// that accepts a number and console.logs the multiplication table
// for that number
// (just multiply by the numbers 1 through 69)


//function showMultiplicationTable(originalPrice, discountPercent) {

//var showMultiplicationTable(7);

//    for (var i = 1; i <= -1; 7* i++) {

//        console.log("i")
 //   }
  //  Solution:

    function showMultiplicationTable(num){
        for (let multiplier = 1; multiplier <= 10; multiplier++){
            //7 * 1 =7
            console.log(num + "x" + multiplier + " = " + num * multiplier")
            console.log(num * multiplier);
        }
    }
    showMultiplicationTable(7);

showMultiplicationTable()

// 3.  Use a for loop and the code from the
// previous lessons to generate
// 10 random numbers between 20 and 200 and output
// \to the console whether each number is odd or even. For example:



3.

function printRandomNumbers(){
    for(let i = 1; i <=10; i++){
    let randomNum = Math.floor(Math.random() * 180) + 20;
    if (randomNum % 2 === 0) {
        console.log(randomNum + " is even!");
    }else {
        console.log(randomNum + "is odd!");
    }else{
        break;
         }
    }
    console.log("The loop is finished");
}``5r
printRandomNumbers();

var conesInInventory = Math.floor(Math.random() * 50) + 50;



    /*
4.

5. decrementing

6.



// TODO: Use a for loop to print the even numbers between 0 and 30, inclusive.
//  HINT: remember the remainder operator (modulo)

for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

-----



    letters += "z";
    console.log(letters);
}
console.log(letters.length);

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

    /*
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




for (/*control variable*/'; /*test condition*/; /*iterator*/'){
    //code to run for each iteration of the loop
}

test condition gives you t/f back.  the control and the iterator is what makes it truely work
 step one - id control variable.
    2 - test the condition-
    3 - run the code.

/*

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