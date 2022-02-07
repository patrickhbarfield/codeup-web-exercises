"use strict";

function getToDestination (age, isInsured, hasCar, canGetRideshare){

    if (age <= 16 && isInsured && hasCar) {
        console.log("That's good you have a car, you can go!");
    } else if (age <= 16 && (isInsured === false || hasCar === false) && canGetRideshare) {
        console.log("ok,use a rideshare then")
    if (age>16) alert("You are old enough to either drive or get a rideshare")
    //console.log()
    else alert("Sorry, you must be 16 years or older to drive or get a rideshare")}

var isInsured = alert("Great, you can drive because you have insurance")
    else alert("Sorry, you must have insurance to go")}

/*
{
        if (hasCar = true) alert("That's good you have a car, you can go!")}
        else alert("Sorry you don't have a car, perhaps a rideshare is an option")
        if (canGetRideshare = true) alert("ok,use a rideshare then")
        else alert("Sorry,you can't go unless you consider other alternative, like other " +
            "forms of transportion or calling a friend")

        var isInsured = prompt("do you have insurance?")
        var hasCar = prompt("Do you have a car?")
        var canGetRideshare = prompt("can you get a rideshare?")}
}

 F / ELSE IF / ELSE
Create a function called getToDestination which will help determine
how a person can get to their destination!
    It will accept 4 arguments and the parameter names are:

    age - the age of the rider
isInsured - a boolean telling the function if the rider has insurance
hasCar - a boolean describing if the rider has a car
canGetRideshare - boolean describing if the rider can get a ride share
(Uber, etc)

If the rider is over 16, has insurance, and has a car then they can use
their own vehicle
If the rider is not over 16, has no insurance, OR has no car but they CAN
get a rideshare, then they call up a rideshare service
If the rider meets none of the above, they should call a friend for
    a ride!

    This getToDestination should not return any value, but rather console
log based on the conditions met.
    */