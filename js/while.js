"use strict";

var x = 1;

while (x < 50000) {
    x *= 2;
    console.log(x);
}

// Do While exercise

var totalCones = Math.floor(Math.random() * 50) + 50;;  // use random value from 50-100
console.log("Total cones to sell: " + totalCones);

do {
    var customerCones = Math.floor(Math.random() * 5) + 1;
    if (totalCones >= customerCones) {
        console.log(customerCones + " cones sold");
        totalCones = totalCones - customerCones;
        console.log(totalCones + " are left.");
        console.log("====================");
        console.log("");
    } else {
        console.log("Cannot sell  you " + customerCones + " I only have " + totalCones + "...")
        console.log("====================");
        console.log("");
    }
} while (totalCones > 0);

console.log("Yay, I sold them all!")