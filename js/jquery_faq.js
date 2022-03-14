"use strict";

$('dd').addClass("invisible");
$('dl').after("<button id='Toggle-button'></button>");
$('#toggle-button').click(function (){
    $(this)
        .siblings("dl")
        .children()
    $("dd").toggleClass("invisible");
})

/*
console.log($("dd" ))
    .toggleClass(function() {
    if ( $( this ).parent().is( ".bar" ) ) {
        return "happy";
    } else {
        return "sad";
    }
});*/
