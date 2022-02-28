"use strict";

function removeAll(anArr, valueToRemove) {
    let filteredArr = [];
    //looping values with for each
    anArr.forEach(function (ele) {
        if (valueToRemove !== ele) {
            filteredArr.push(ele);
        }
    });
    return filteredArr;
}


/*checking for affirmative logic*/

for (let i = 0; i < anArr.length; i++){
    if (valueToRemove === anArr[i]){
        continue;
    }
}
/*
// pass 2 arguements, array and value to remove
//1st initialize a new array for a bucket that isn't what you want
you can also use the splice parameter (James)
If you can't use "filter" method, the Ry would always just make
a bucket and put everything in it that you aren't looking
for.
Richard uses reduce alot.
in the future we may create an object.

var bikes = ["specialized","giant", "trek", "Impala"];
console.log(removeAll(bikes, "Impala"));

function (notaBike){

}



When making a new array, create a new one, and

Write a function called removeAll that takes two parameters.
One that represents an array and another that represents a
value to be removed from that array. When called this function
should return an array with all the values of the
 original array except the specified value to be removed.
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant",
    "mosquito", "typo", "reference error", "type error"];

console.log(removeAll(bugs, "ant"));

// should print
[
    'mosquito',
    'scorpion',
    'mosquito',
    'typo',
    'reference error',
    'type error'
]*/
