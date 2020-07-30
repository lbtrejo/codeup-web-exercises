"use strict";

// // For loops #2
function showMultiplicationTable(x) {
    for(var count = 1; count <= 10 ; count ++) {
        console.log(x.toString() + " x " + count.toString() + " = " + (x * count));
    }
}

// For loops #3

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function oddOrEven(x) {
    if (x % 2 === 0) {
        return console.log(x + " is even");
    }
    return console.log(x + " is odd");
}

// var random = getRandomInt(20, 201);
//
// console.log("Random number: ", random);
// oddOrEven(random);

for (var randomNumber = 1 ; randomNumber <= 10 ; randomNumber++) {
    console.log("Random number count: " + randomNumber);
    var random = getRandomInt(20, 201);
    oddOrEven(random);
    console.log("");
}