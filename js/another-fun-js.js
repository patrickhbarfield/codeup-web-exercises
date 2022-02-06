"use strict";

// */
// works properly
// *   -> Now, write a function named showName(username).
// *       -> It takes in 'username' as an argument and alerts the user to their name
// *       -> Pass an invocation of getName() as an argument to the invocation of showName()
// *       -> showName() should be void function. That is, it should not return a value - only execute code
// *   -> Test to ensure your code is working as expected



// /*alert()function username()
// /*let showName =

function showName(username) {
    alert(username);

    showName(getName());
}
