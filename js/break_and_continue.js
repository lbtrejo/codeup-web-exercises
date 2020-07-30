"use strict";

// Break and Continue 2 and 3

function numberInvalid(x) {
    return isNaN(parseFloat(x));
}

function numberOutsideRange(x) {
    return (x < 1 || x > 50);
}

function numberIsEven(x) {
    return (x % 2 === 0);
}

do {
    var oddNumber = prompt("Please enter an odd number between 1 and 50: ");
} while(numberInvalid(oddNumber) || numberOutsideRange(oddNumber) || numberIsEven(oddNumber));

console.log("Number to skip is: " + oddNumber);
console.log("");

for (var i = 1 ; i < 50 ; i += 2) {
    if (i == oddNumber) {
        console.log("Yikes! Skipping number: " + oddNumber);
        continue;
    }
    console.log("Here is an odd number: " + i);
}