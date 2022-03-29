'use strict';

const baseURL = "https://api.github.com";

function getUserLastPushEvent(username) {
    return fetch('${baseURL}/users/${username}/events/public')
        .then(res => res.json())
        .then(events => {
            for (let event of events) {
                if (event.type === 'PushEvent') {
                }
            }
        })
}

if (event.type === "PushEvent") {

getUserLastPushEvent(username: 'Mojombo').then(event => {
    $('body').html('<h1>' + 'Mojombos last push event was created at' + event.created_at + '<h1>');
    console.log(event)
}

console.log(event.actor.login))
//


    .then(users => console.log(users))

//make it an event string so you can drop interpolated  alues usin gthe $ setup


const MessageUrl = 'https://api.github.com/users/patrickhbarfield/events';
const url = 'https://api.github.com/repos/patrickhbarfield/codeup-web-exercises/commits';

fetch('url', {headers: {'Authorization': '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'}})
    .then(data => data.json())
    .then(data => console.log(data[0].commit.committer.date, date[0].commit.message))

    /*  users.forEach( userObj  => {*/
    // do something with the username login
    /*            console.log(userObj.login);
});*/
    console.log(users)  });
