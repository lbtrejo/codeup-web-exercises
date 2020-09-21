"use strict";

const ghbaseURL = 'https://api.github.com/users';
let ghUser = 'lbtrejo'
let resultObject = {};

const userInfo = (username) => {
    let requestURL = ghbaseURL + `/${username}/events/public`
    fetch(requestURL, {headers: {'Authorization': `token ${ghToken}`}})
        .then(response => response.json()
            .then((data) => {
                resultObject = {
                    username: data[0].actor.display_login,
                    date: data[0].created_at,
                    sha: data[0].payload.commits[0].sha,
                    message: data[0].payload.commits[0].message,
                    repo: data[0].repo.name
                };
                console.log("Result from Data callback", resultObject);
                return resultObject;
    }))
        .catch((error) => console.log(error));
}

let loggingTimeout = setTimeout(() => {
    console.log("Result object after delay: ", resultObject);
}, 2000)

console.log("initial Result object: ", resultObject);
userInfo(ghUser);
console.log(loggingTimeout);


