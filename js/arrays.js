"use strict";

/*
dogNames.forEach(function (dogName) {
    // this function will be eecuted on each element
    // as the forEach iterates over the array
    //if(a certain record) {
    //skip that record. the element is given to the function as a parameter
    // work with that element directly in each for loop.

    console.log(dogNames);
    //one other parameter you can access in this function in the foreach loop,
    //index: gives the element and the index in the array.
    // you can use this in a for and a foreach loop.  he's not a big fan
    //  you can't exit a foreach loop early.

    //can say output the odd dogs.  index 0 is an odd dog.
    // if(index % 2 === 0) {
    console.log("Dog at  index " + index + " is " + dogname){

        // break works inside a for loop or for while,

        if(dogName === "Spot"){
            return;
        }
        // if you need to exit a loop early don't use a foreach loop.
        // if you want to change an element, then don't dogName = "Zantor";
        // only use forEach loop to read, not modify.  Reasons are good that this is so.



//in order to alter the array you have to use the index.
        dogNames[index] = "Zantor";//the element that is given to you in the foreach, the parameter can't be re-assigned.

        console.log(dogNames)
    }
})
*/

//indexOF ollows you to X
// -1 means that it does not exist in the array
// reverse and sort will modify the contents of the original array
//slice will get you a sub-set
// what does a forEah do?  you can chain if with a period after the ()

function dogNames();
{
    var dogNames = ["Fido", "Spot", "Fifi", "Lola", "Fido"]
    console.log(dogNames.reverse())
    console.log(dogNames.indexOf("Fido", 1));
}

