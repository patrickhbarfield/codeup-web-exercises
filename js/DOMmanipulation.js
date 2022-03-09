"use strict";

/*
what do i want to l isten on
2. add the event listener (fucntion0  functions that are passed
to other functions as an argument are called "callback functions"
3. what are you listening for?

can also access documents on the BOM*/

let handler = function (){
    alert("You clicked on something!");
}

document.addEventListener("click", handler);
    alert("You clicked something!");
})

/*if your event listeners are at the bottom, then it is better
to use a function expression.  it usually puts function at the
(top), handler is what happens when something is trigger.  the handler
is expecting a specific event, usually wrties as an anon function, but you
can write functions and pass them (separation of concerns = what you do is
separate from what you do it. */

document.addEventListener("click", handler);
    {
    alert("You clicked something!")
}
/*

ex. if you have an h1 and you want to get the first one
take it out of an anchor tag in html, it will copmlicate
things as far as selection goes.  give it an id of "main-header"
1. access/grab element*/
let header = document.querySelector("main-header");

//attaach event listener//

header.addEventListener("click", headerClick);
//what happens on header click

function headerClick(){
    header.style.backgroundColor = "yellow";
}
/*the event objecet give you acess to cool stuff
like the code for which key you pressed

useful for instantly updateable search results
keyup is when you release the key*/

let input = document.querySelector("#search");
input.addEventListener("keyup", function (event){
    //PRINT ELEMENT//
    console.log(event.target);
    //PRINT KEYCODE//
    console.log(event.code);

});
//attach another eventlistener//

input.addEventListener("keyup");
function upperCaseTextInput(event){
    event.target.value);
event.target.value = event.target.value.toUpperCase();
}


grab the more button id
let moreBtn = document.querySelector(#more);
moreBtn.addEventListener("click", function (e){
    console.log(e.target.previousElementSibling)
    e.target.previousElementSibling.classList.remove('hidden');
    if (p.classlist.contain("hidden")) {
        e.target.innerText = "Less";

    }
})