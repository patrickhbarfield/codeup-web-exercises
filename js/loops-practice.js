"use strict";

// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
//

let numSpaces = 30;
console.log("welcome to the parking garage")
do {
    console.log("There are" + numSpaces + "remaining!");
    numSpaces -= 2;
}while (numSpaces)
console.log("Garage full!");


let availParking = 30;
var parkingSpaces = prompt("There are 30 spaces left, please proceed") {
 //decrement by 2 until you hit 0
    while (parkingSpaces >= 2)
    alert("Please proceed to park")
    return userAnswer;

    alert("This is your name: " + names);

    TODO: using prompt() and alert(), write a while loop that will continue to ask for the correct password until the
//  correct password is given.

    let password = "123";
    let isCorrect = false;
    let attempt = "";{

        attempt = prompt("enter your password")

        isCorrect = attempt === password;
    }
}


 */
/*
let num = 8;
while (num <= 50) {
   if (num % 2 === 1){
    console.log(num);
    }
   num++
}

let fullNameEntered = false;
let names = "";
// WE DON'T KNOW HOW MANY NAMES THEY HAVE!
while (!fullNameEntered){
    names += prompt("Please enter or add to your name");
    while (fullNameEntered)
    fullNameEntered = confirm("Is this your full name?");
}
alert("This is your name: " + names);

=============

let fullNameEntered = false;
let names = ""
while (!fullNameEntered) {
    names += prompt("Please enter or add to your name");

    fullNameEntered = confirm("Is this your full name?")
}
alert("This is your name: " )

//use while loop to output numbers form 8-50