
(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,
        getArea: function () {

            // TODO: complete this method
            // hint: area = pi * radius^2

            return Math.PI * this.radius ^ 2; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            if (doRounding){
                return Math.round(this.getArea())
            }
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
circle.radius = 5
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    console.log(circle.logInfo(true));

    console.log(circle.getArea())
})();




/*
let randomNum = Math.random();
console.log("Before multiplying: " + randomNum);
console.log("After: " + (randomNum * 100));
*/

// you can set  min by adding 20 in the arguement.