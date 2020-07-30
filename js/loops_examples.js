"use strict";

// // simple while loop 1
// var yesNo = true;
//
// while(yesNo) {
//     console.log("Ran loop");
//     yesNo = confirm("Continue?");
// }
//
// console.log("we finished");
//
// // simple while loop 2
// var start = 0;
//
// while(start < 10) {
//     console.log(start);
//     start++;
// }
//
// // simple do-while loop
// var doStart = 10;
//
// do {
//     console.log(doStart);
//     doStart--;
// } while(doStart >= 0)
//
// console.log("we finished");

// "break" loop example
// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }

// var numberToSkip = 3;
// var anotherToSKip = 7;
//
// for (var x = 0 ; x <= 10 ; x++) {
//     // Doesn't skip the console log for 3 when the logging is done prior to the evaluation
//     // console.log("continue example: ", x);
//     if (x === numberToSkip || x === anotherToSKip){
//         continue;
//     }
//     console.log("continue example: ", x);
// }

// // Using a break with a while loop
while(true) {
    var name = prompt("What is your name?");
    if (name.length ===  0) {
        console.log("Empty name is not valid");
        continue;
    }
    console.log(name + " is a valid name!");
}

