"use strict";
console.log("Hello from external JavaScript");
alert("Welcome to my Website!");

var response = prompt("What is your favorite color?");

alert("Great, " + response + " is my favorite color too!");

// 3.1
var mermaid = prompt("How may days rental for the Little Mermaid?");
var bear = prompt("How may days rental for the Brother Bear?");
var herc = prompt("How may days rental for the Hercules?");
var total = (Number(mermaid) + Number(bear) + Number(herc)) * 3;

alert("Your total price for the rentals is: $" + total.toFixed(2));

// 3.2

var gRate = prompt("What is the hourly rate for Google?");
var gHours = prompt("How many hours working for Google?");
var aRate = prompt("What is the hourly rate for Amazon?");
var aHours = prompt("How many hours working for Amazon?");
var fbRate = prompt("What is the hourly rate for Facebook?");
var fbHours = prompt("How many hours working for Facebook?");
var pay = (Number(gRate) * Number(gHours)) + (Number(aRate) * Number(aHours)) + (Number(fbRate) * Number(fbHours));

alert("You will receive the following total pay for the week: $" + pay.toFixed(2));

// 3.3

var classLimit = confirm("Is the class currently full?  OK = no, Cancel = yes...");
var schedConflict = confirm("Is there a scheduling conflict with the class? OK = no, Cancel = yes...")
var enrolled = (classLimit && schedConflict);  // needs to be a boolean

if (enrolled == true) {
    alert("You can enroll in this class!  Your poor wallet...")
} else {
    alert("Sorry, you cannot enroll in this class.  Try bribing a dean.")
}

// 3.4

var premium = confirm("Hit OK if you are premium member.");
var expired = confirm("Hit OK if your offer code is valid.");
var userCart = parseInt(prompt("How many items are in your cart?"));

if ((premium || (userCart > 2)) && expired) {
    alert("Congratulations, your offer code is valid!")
} else {
    alert("You do not qualify for this offer code or the code is invalid.")
}