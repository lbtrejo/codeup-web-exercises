(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = [];

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsStringBr = planetsArray.join("<br>");
    console.log(planetsStringBr);
    document.write(planetsStringBr);

    // BONUS:
    // Create a for_each function that wraps each element in <li> and </li> tags and outputs an array with these new string values
    // Join that array into a string
    // Wrap that resulting string in the <ul> / </ul> tags to create the final string value required

    // New solution using push
    var planetsListArr = [];
    // console.log("Orig Planet List arr: ", planetsListArr);
    planetsArray.forEach(planet => {
        //console.log("Curr Planet List arr: ", planetsListArr);
        var planetList = "<li>" + planet + "</li>";
        // console.log("Adding: ", planetList);
        return planetsListArr.push(planetList);
    })

    //console.log("Updated Planet List arr: ", planetsListArr);
    //  Update the array with a <ul> at index[0] and </ul> at the final index

    planetsListArr.unshift("<ul>");
    planetsListArr.push("</ul>");

    //  Join the result

    var planetsList = planetsListArr.join("");
    console.log(planetsList);
    document.write(planetsList);

    // Pre-work solution
    //  Update each element in the array and wrap them in <li></li> tags
    // planetsArray.forEach(function (element, index) {
    //     planetsArray.splice(index, 1, "<li>" + element + "</li>");
    // });
    //
    // //  Update the array with a <ul> at index[0] and </ul> at the final index
    //
    // planetsArray.unshift("<ul>");
    // planetsArray.push("</ul>");
    //
    // //  Join the result
    //
    // var planetsList = planetsArray.join("");
    // console.log(planetsList);

})();
