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

// let threeLangs = users.filter(function(element){
//     return element.languages.length > 2;
// })

let threeLangs = users.filter((element) => {return element.languages.length > 2})

console.log("Users with Three Languages or more: ", threeLangs);

// let userEmails = users.map(function(element){
//     return element.email;
// })

let userEmails = users.map((element) => element.email);

console.log("User simplified emails: ", userEmails)

// let totalYears = users.reduce(function(currentTotal, user){
//     return currentTotal + user.yearsOfExperience;
// }, 0);

let totalYears = users.reduce((currentTotal, user) => { return currentTotal + user.yearsOfExperience }, 0)

console.log("Total Years: ", totalYears);
console.log("Average experience: ", (totalYears / users.length))

let longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length){
        return user.email;
    } else {
        return longest
    }
}, "")

console.log("Longest Email: ", longestEmail);

let singleString = users.reduce((accumulator, currentValue, index) => {
    if (index === users.length - 1){
        return `${accumulator} ${currentValue.name}.`
    } else {
        return `${accumulator} ${currentValue.name},`
    }
}, "Your instructors are:")

console.log("String interpolation: ", singleString);

