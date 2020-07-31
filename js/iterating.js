(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["Edward", "Crystal", "James", "Roger"]

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("Manual iteration:");
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log("For Loop:");
    for (var i = 0; i < names.length ; i++) {  // Initially made i = 1, arrays start at [0], so I had to change to i = 0
        console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log("For Each Loop:");
    names.forEach(function(name) {
        console.log(name);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    var first = function(arr){
        console.log(arr[0]);
    }
    var second = function(arr){
        console.log(arr[1]);
    }
    var last = function(arr){
        console.log(arr[arr.length - 1]);
    }

    var data = [1, 7, 2, 3, 4, 5, 32];
    first(data);
    second(data);
    last(data);

})();
