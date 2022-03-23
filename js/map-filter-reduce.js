"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
var threeLang = users.filter(function (user) {
    return user.languages >= 3;
});
threeLang.forEach(function (user)
console.log(user.languages);

  //  Use .map to create an array of strings where each element is a user's email address
// let emailAddresses = users.map(   =>
let emails = users.map(function (user)){
    return user.email;
}

console.log(emails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let totalYrsExperience = users.reduce((totalYrsExperience:)=> {
    return totalYrsExperience + user.totalYrsExperience;
}, 0);

let averageYearsExp=totalYrsExperience/users.length;
console.log(averageYearsExp)

  //  Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce((longest:)) => {
    if  (user.email.length > longest.length) {
    longest = user.email;
    }
    return longest;
}, '')
console.log(longestEmail);

//    Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let instructorString = users.reduce((resultString , user) => {
    return resultString += user.name + ', ';
}, 'Your instructors are: ');
console.log(instructorString);

//BONUS: use .reduce to get the unique list of languages from the list of users.

let uniqueLangs = users.reduce((listOfLanguages, user) =>{
    user.languages.forEach(function (lang){
        if (!listOfLanguages.includes(lang)) {
            listOfLanguages.push(lang);
        }
    })
    return listOfLanguages;
}, [])
console.log(uniqueLangs);