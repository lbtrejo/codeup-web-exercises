(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = {
    //     firstName: "Levi",
    //     lastName: "Trejo"
    // };
    //
    // console.log("Person's first name: ", person.firstName);
    // console.log("Person's last name: ", person.lastName);
    //
    // /**
    //  * TODO:
    //  * Add a sayHello method to the person object that returns a greeting using
    //  * the firstName and lastName properties.
    //  * console.log the returned message to check your work
    //  *
    //  * Example
    //  * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
    //  */
    //
    // person.sayHello = function(){
    //     return "Hello from " + this.firstName + " " + this.lastName + "!"
    // }
    //
    // console.log(person);
    // console.log(person.sayHello());
    //
    // /** TODO:
    //  * HEB has an offer for the shoppers that buy products amounting to
    //  * more than $200. If a shopper spends more than $200, they get a 12%
    //  * discount. Write a JS program, using conditionals, that logs to the
    //  * browser, how much Ryan, Cameron and George need to pay. We know that
    //  * Cameron bought $180, Ryan $250 and George $320. Your program will have to
    //  * display a line with the name of the person, the amount before the
    //  * discount, the discount, if any, and the amount after the discount.
    //  *
    //  * Uncomment the lines below to create an array of objects where each object
    //  * represents one shopper. Use a foreach loop to iterate through the array,
    //  * and console.log the relevant messages for each person
    //  */
    //
    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    // // // Need a function to check for discount eligibility, return BOOL, store as object property
    // // // Set discount percentage as object property based on ELIG status
    // // // Calculate discount price and final price as functions
    //
    // // function discountEligible(price) {
    // //     return price > 200;
    // // }
    //
    // function discountedPrice(price) {
    //     var discountAmt = price * .12;
    //     var finalPrice = price - discountAmt;
    //     return [discountAmt, finalPrice];
    // }
    // shoppers.forEach(function (shopper){
    //     if (shopper.amount > 200) {
    //         var prices = discountedPrice(shopper.amount);
    //         console.log(shopper.name + " gets a $" + prices[0].toFixed(2) + " discount, for a grand total of $" + prices[1].toFixed(2) + "!");
    //     } else {
    //         console.log(shopper.name + " gets no discount, for a grand total of $" + shopper.amount.toFixed(2) + "!");
    //     }
    // });
    //
    //
    // /** TODO:
    //  * Create an array of objects that represent books and store it in a
    //  * variable named `books`. Each object should have a title and an author
    //  * property. The author property should be an object with properties
    //  * `firstName` and `lastName`. Be creative and add at least 5 books to the
    //  * array
    //  *
    //  * Example:
    //  * > console.log(books[0].title) // "The Salmon of Doubt"
    //  * > console.log(books[0].author.firstName) // "Douglas"
    //  * > console.log(books[0].author.lastName) // "Adams"
    //  */
    //
    // var books = [
    //     {
    //         title: "The Silmarillion",
    //         author: {
    //             firstName: "J.R.R",
    //             lastName: "Tolkien"
    //         }
    //     },
    //     {
    //         title: "1984",
    //         author: {
    //             firstName: "George",
    //             lastName: "Orwell"
    //         }
    //     },
    //     {
    //         title: "War and Peace",
    //         author: {
    //             firstName: "Leo",
    //             lastName: "Tolstoy"
    //         }
    //     },
    //     {
    //         title: "Infinite Jest",
    //         author: {
    //             firstName: "David Foster",
    //             lastName: "Wallace"
    //         }
    //     },
    //     {
    //         title: "The Hitchhiker's Guide to the Galaxy",
    //         author: {
    //             firstName: "Douglas",
    //             lastName: "Adams"
    //         }
    //     }
    // ];
    //
    // console.log(books);

    // Refactor using createBook function

    var books = [];
    createBook("The Silmarillion", "J.R.R", "Tolkien", books);
    createBook("The Hitchhiker's Guide to the Galaxy", "Douglas", "Adams", books);
    createBook("Infinite Jest", "David Foster", "Wallace", books);
    createBook("War and Peace", "Leo", "Tolstoy", books);
    createBook("1984", "George", "Orwell", books);

    console.log(books);



    //
    // /**
    //  * TODO:
    //  * Loop through the books array and output the following information about
    //  * each book:
    //  * - the book number (use the index of the book in the array)
    //  * - the book title
    //  * - author's full name (first name + last name)
    //  *
    //  * Example Console Output:
    //  *
    //  *      Book # 1
    //  *      Title: The Salmon of Doubt
    //  *      Author: Douglas Adams
    //  *      ---
    //  *      Book # 2
    //  *      Title: Walkaway
    //  *      Author: Cory Doctorow
    //  *      ---
    //  *      Book # 3
    //  *      Title: A Brief History of Time
    //  *      Author: Stephen Hawking
    //  *      ---
    //  *      ...
    //  */
    //
    // // books.indexOf()
    //
    // books.forEach(function(book) {
    //     console.log("Book #" + (books.indexOf(book) + 1));
    //     console.log("Title: " + book.title);
    //     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    //     console.log("--");
    // });

    books.forEach(function(bookObject) {
            console.log("Book #" + (books.indexOf(bookObject) + 1));
            showBookInfo(bookObject);
        });




    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(bookTitle, bookAuthorFirst, bookAuthorLast, bookArray) {
        var newBook = {
            title: bookTitle,
            author: {
                firstName: bookAuthorFirst,
                lastName: bookAuthorLast
            }
        }
        bookArray.push(newBook);
    }

    function showBookInfo(bookObject) {
        console.log("Title: " + bookObject.title);
        console.log("Author: " + bookObject.author.firstName + " " + bookObject.author.lastName);
        console.log("--");
    }

})();
