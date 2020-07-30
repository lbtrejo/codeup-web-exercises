"use strict";

// simple while loop 1
var yesNo = true;

while(yesNo) {
    console.log("Ran loop");
    yesNo = confirm("Continue?");
}

console.log("we finished");

// simple while loop 2
var start = 0;

while(start < 10) {
    console.log(start);
    start++;
}

// simple do-while loop
var doStart = 10;

do {
    console.log(doStart);
    doStart--;
} while(doStart >= 0)

console.log("we finished");