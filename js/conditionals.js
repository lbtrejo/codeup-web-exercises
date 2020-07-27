"use strict";
(function () {
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    console.log("==================================================");
    console.log(" ");
    console.log("If/Else Example:");
    console.log("Your color input is: " + color + ".");
    if (color === "blue") {
        return "blue is the color of the sky";
    } else if (color === "red") {
        return "Strawberries are red";
    } else if (color === "cyan") {
        return "I don't know anything about cyan";
    } else {
        return "Your color choice is not known";
    }
}

console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("cyan"));
console.log(analyzeColor("green"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColorSwitch(color) {
    console.log("==================================================");
    console.log(" ");
    console.log("Switch/Case Example:");
    console.log("Your color input is: " + color + ".");
    switch(color) {
        case "blue" :
            return "blue is the color of the sky";
        case "red" :
            return "Strawberries are red";
        case "cyan" :
            return "I don't know anything about cyan";
        default :
            return "Your color choice is not known";
    }
}

console.log(analyzeColorSwitch(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var promptColor = prompt("Please enter a color: ");
// console.log(analyzeColor(promptColor));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(lucky, totalAmt) {
    console.log("==================================================");
    console.log(" ");
    console.log("Calc Total Example:");
    var discountPer = 0;
    var subTotal = 0;
    if (parseInt(lucky) === 0) {
        discountPer += 0;
        subTotal += totalAmt - (totalAmt * discountPer);
        return subTotal;
    } else if (parseInt(lucky) === 1) {
        discountPer += 0.1;
        subTotal += totalAmt - (totalAmt * discountPer);
        return subTotal;
    } else if (parseInt(lucky) === 2) {
        discountPer += 0.25;
        subTotal += totalAmt - (totalAmt * discountPer);
        return subTotal;
    } else if (parseInt(lucky) === 3) {
        discountPer += 0.35;
        subTotal += totalAmt - (totalAmt * discountPer);
        return subTotal;
    } else if (parseInt(lucky) === 4) {
        discountPer += 0.5;
        subTotal += totalAmt - (totalAmt * discountPer);
        return subTotal;
    }  else if (parseInt(lucky) === 5) {
        discountPer += 1;
        subTotal += totalAmt - (totalAmt * discountPer);
        return subTotal;
    } else {
        alert("Your lucky number is invalid, please enter a whole number between 0 and 5!")
    }
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(2, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));
console.log(calculateTotal(3, 100));



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var price = parseFloat(prompt("Please enter a total price for your bill: "));

alert("Your lucky number is :" + luckyNumber + "!");
alert("Your entered total was: $" + price + ".");
alert("Your discounted price is: $" + calculateTotal(luckyNumber, price));


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function evenOdd(number) {
    if (number % 2 === 0) {
        return alert("The number of " + number + " is: Even.");
    } else {
        return alert("The number of " + number + " is: Odd.");
    }
}

function plusHundred(number) {
    var result = number + 100;
    return alert("The result of number, " + number + ", plus 100 is " + result.toFixed(2) + ".");
}

function posOrNeg(number) {
    if (number >= 0) {
        return alert("The sign of number, " + number + ", is: Positive.");
    } else {
        return alert("The sign of number, " + number + ", is: Negative.");
    }
}

function numberProperties() {
    var inputChoice = confirm("Would you like to enter a number?");
    if (inputChoice) {
        var inputNumber = Number.parseFloat(prompt("What is the number you have in mind?"));
        if (isNaN(inputNumber)) {
            return alert("The value entered is not a number.");
        } else {
            evenOdd(inputNumber);
            plusHundred(inputNumber);
            posOrNeg(inputNumber);
        }
    } else {
        alert("Please refresh the page if you would like to enter a number.")
    }
}

numberProperties();

})();