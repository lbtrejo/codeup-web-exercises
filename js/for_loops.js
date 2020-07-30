"use strict";

// For loops #2
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

for (var randomNumber = 1 ; randomNumber <= 10 ; randomNumber++) {
    console.log("Random number count: " + randomNumber);
    var random = getRandomInt(20, 201);
    oddOrEven(random);
    console.log("");
}

// For loops #4

for (var x = 1 ; x < 10 ; x++) {
    console.log(x.toString().repeat(x))
}

// Math-y solution that I couldn't figure out, Skyler found a good one
for (var i = 1; i < 10; i++){
    var display = "";
    for(var j = 0; j < i; j++){
        display += i;
    }
    console.log(display);
}


// For loops #5

for (var x = 100 ; x > 0 ; x -= 5) {
    console.log(x);
}