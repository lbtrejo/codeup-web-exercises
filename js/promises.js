"use strict";

const ghbaseURL = 'https://api.github.com/users';
let ghUser = 'lbtrejo'

const userInfo = (username) => {
    let requestURL = ghbaseURL + `/${username}/events/public`
    fetch(requestURL, {headers: {'Authorization': `token ${ghToken}`}})
        .then(response => response.json()
            .then((data) => {
                let resultArray = [];
                data.forEach((eventObject) => {
                    if (eventObject.type === "PushEvent"){
                        resultArray.push(eventObject)
                    }
                })

                console.log("Original Data", data);
                console.log("Result Array", resultArray)
                console.log("Latest Commit Timestamp: ", resultArray[0].created_at)
                return resultArray[0].created_at;
            }))
        .catch((error) => console.log(error));
}

userInfo(ghUser);

$("#submitBtn").click(function(){
    console.log($("#userInput").val());
    userInfo($("#userInput").val());
})


