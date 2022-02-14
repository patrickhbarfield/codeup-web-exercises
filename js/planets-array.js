(function(){

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];
planets.unshift('The Sun');
    {
        console.log('Adding "The Sun" to the beginning of the planets array.');
        console.log(planets);
    }


    planets.push('Pluto');
    {
        console.log('Adding "Pluto" to the end of the planets array.');
        console.log(planets);
    }

    console.log('Removing "The Sun" from the beginning of the planets array.');
    {
        planets.shift("The Sun");
    console.log(planets);
    }

    console.log('Removing "Pluto" from the end of the planets array.');
    {
        planets.pop("Pluto");
        console.log(planets);
    }

    console.log('Finding and logging the index of "Earth" in the planets array.');
    {
        var index = planets.indexOf('Earth');
        console.log(index);
    }

    console.log("Reversing the order of the planets array.");
    {
        planets.reverse();
        console.log(planets);
    }

    console.log("Sorting the planets array.");
    {
planets.sort();
        console.log(planets);
    }
})();
