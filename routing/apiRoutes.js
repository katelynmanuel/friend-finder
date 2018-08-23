// Requiring friends.js file.
let friends = require("../app/data/friends");

//
module.exports = function (app) {
    //Get route with url /api/firends. This will be used to display all possible friends.
    app.get("/api/friends", function (req, res) {
        return res.json(friends)
    });

    //Post route to handle incoming survey results and handle combatibility results.
    app.post("/api/friends", function (req, res) {
        let newFriend = req.body;
        console.log("New friend data: " + JSON.stringify(newFriend));
        let bestFriend;
        let bestFriendDifference = Infinity;
        console.log("This is right before for loop on line 17.")
        //Getting total for friends
        for (let i = 0; i < friends.length; i++) {
            console.log("This is the top of the for loop at line 19" + JSON.stringify(friends[i]));
            let newFriendTotal = 0;
            let friendsTotal = 0;
            for (let j = 0; j < friends[i].scores.length; j++) {
                console.log("Top of the second for loop: " + JSON.stringify(friends[i].length));
                friendsTotal += parseInt(friends[i].scores[j]);
                newFriendTotal += parseInt(newFriend.scores[j]);
                console.log("New Friend Score" + newFriend.scores[j]);
            }
            console.log("Friends Total: " + friendsTotal);
            console.log("new Friend total: " + newFriendTotal);
            let difference = Math.abs(friendsTotal - newFriendTotal);
            console.log("Difference: " + difference);
            if (difference < bestFriendDifference) {
                bestFriend = friends[i];
                bestFriendDifference = difference;
                console.log("Below both for loops if statement: " + bestFriendDifference);
            }
        }
        console.log("Outside of for loops")
        friends.push(newFriend);
        console.log("Below push for api data: " + JSON.stringify(newFriend));
        res.json(bestFriend)
        console.log("res.json: " + JSON.stringify(bestFriend));
    })
};
