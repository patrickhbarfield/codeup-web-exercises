
"use strict";

var person = {
    names: ["Bubba", "Mick", "Chanquantring"],
    DOB: "3/17/1983",
    job: "tightrope walker"
}
//person.names.forEach((name)=> {

var contactinfo = {phoneNum: "911", streetAddy: "245 Da Way Rd", zip: "456734",
        email: "7boi@gmail"};

//defines a contact info object
function ContactInfo(phoneNum, streetAddy, zip, email){
    this.phoneNum = phoneNum;
    this.streetAddy = streetAddy;
    this.zip = zip;
    this.email = email;
}

    console.log(contactinfo);
console.log(contactinfo.streetAddy + contactinfo.zip)
//let person2 = Object.create(person)





/*
(function() {
    "use strict";

    /!**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     *!/
// adding properties and assigning values
        //initializing w/properties vs. withouth
    var person = {};
        person.fname = "Pat";
        person.lname = "Barfield";

    console.log(person.fname);
    console.log(person.lname);

    //defining the value.  methods on n object are considered
    //behaviors on an object
    person.sayHello = function()
    {return "Hello from " + person.fname + " " + person.lname + "!"
    }

    console.log(person.sayHello());


    /!**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     *!/



    /!** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     *!/

    //>=200 gets a 12% discount
        //display name, amount before, discount, amount after
     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];
//loop through
    shoppers.forEach(function (shopper){
        console.log(shopper.amount);
        console.log(shopper.name);

        //% = (part/total * 100
        if(shopper.amount >= 200) {
            let discount = shopper.amount * .12;
            console.log(shopper.name + ", the 12% discount on " +
                "your original bill of" + shopper.amount +
            "comes out to" + shopper.amount +
            "for a total discounted bill of" + (shopper.amount - discount));

        }

    })


    /!** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     *!/
console.log('-----');

var books = [
    {title: "Genesis", author: {fName: "The Man", lname: "Upstairs"}},
    {title: "Inherent Vice", author: {fName: "Thomas", lname: "Pynchon"}},
    {title: "Natural Language Processing with Python", author: {fName: "Steven", lname: "Bird"}},
        {title: "Secret Lives of Great Artists", author: {fName: "Elizabeth", lname: "Lunday"}},
        {title: "IQ84", author: {fName: "Haruki", lname: "Murakami"}}
    ]
books.forEach(function(book){
    console.log('Book # '+ (index + 1));
    console.log('Title: ' + book.title);
    console.log('Author: ' + book.author.fName);
})
    console.log()
    console.log(books[0].title)
    console.log(books[0].author.firstName)
    console.log(books[0].author.lastName)



    /!**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     *!/

    /!**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     *!/

    function createBook(title, authorName){
        let authorNameSplit = authorName.split(' ');
        return {
            title: title,
            author: {
                firstNameSplit[0],
                lastName: authorNameSplit[]
            }
        }
    }

})();
*/
