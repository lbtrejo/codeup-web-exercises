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

// My original do while loop, before I read that I had to use a break
// do {
//     var oddNumber = prompt("Please enter an odd number between 1 and 50: ");
// } while(numberInvalid(oddNumber) || numberOutsideRange(oddNumber) || numberIsEven(oddNumber));

while (true) {
    var oddNumber = prompt("Please enter an odd number between 1 and 50: ");
    if (numberInvalid(oddNumber)) {
        console.log("You did not enter a valid number, please try again")
    } else if (numberOutsideRange(oddNumber)) {
        console.log("You number is outside the allowed range, please try again")
    } else if (numberIsEven(oddNumber)) {
        console.log("Your number is even, please try again")
    } else {
        console.log("Number to skip is: " + oddNumber);
        break;
    }
}

console.log("");

for (var i = 1 ; i < 50 ; i += 2) {
    if (i == oddNumber) {
        console.log("Yikes! Skipping number: " + oddNumber);
        continue;
    }
    console.log("Here is an odd number: " + i);
}