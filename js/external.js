"use strict";
(function() {

console.log("Hello from external JavaScript");
alert("Welcome to my Website!");

var response = prompt("What is your favorite color?");

alert("Great, " + response + " is my favorite color too!");

// 3.1
// initial solution
// var mermaid = prompt("How may days rental for the Little Mermaid?");
// var bear = prompt("How may days rental for the Brother Bear?");
// var herc = prompt("How may days rental for the Hercules?");
// var total = (Number(mermaid) + Number(bear) + Number(herc)) * 3;
//
// alert("Your total price for the rentals is: $" + total.toFixed(2));

// Updating to use array objects
var movies = [
    {title: "The Little Mermaid", days: 3},
    {title: "Brother Bear", days: 5},
    {title: "Hercules", days: 1}
]
var pricePerDay = 3;
var subTotal = 0;

movies.forEach(function(movie){
    subTotal += pricePerDay * movie.days;
})

alert("Your total price for the rentals is: $" + subTotal.toFixed(2));

// 3.2
// Initial solution
// var gRate = prompt("What is the hourly rate for Google?");
// var gHours = prompt("How many hours working for Google?");
// var aRate = prompt("What is the hourly rate for Amazon?");
// var aHours = prompt("How many hours working for Amazon?");
// var fbRate = prompt("What is the hourly rate for Facebook?");
// var fbHours = prompt("How many hours working for Facebook?");
// var pay = (Number(gRate) * Number(gHours)) + (Number(aRate) * Number(aHours)) + (Number(fbRate) * Number(fbHours));
//
// alert("You will receive the following total pay for the week: $" + pay.toFixed(2));

// Updating to use object arrays

var companies = [
    {name: "Google", rate: 400, hours: 6},
    {name: "Amazon", rate: 380, hours: 4},
    {name: "Facebook", rate: 350, hours: 10}
]

var grossPay = 0;

companies.forEach(function(companies) {
    var amountPaid = (companies.hours * companies.rate);
    console.log(companies.name + "'s gross pay is: $" + amountPaid);
    grossPay += amountPaid;
})

console.log("The final pay for the week is: $" + grossPay.toFixed(2));

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

})();