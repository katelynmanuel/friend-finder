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
        console.log("New friend data: " + newFriend);
        let bestFriend;
        let bestFriendDifference = Infinity;
        //Getting total for friends
        for (let i = 0; i < friends.length; i++) {
            let newFriendTotal = 0;
            let friendsTotal = 0;
            for (let j = 0; j < friends[i].scores.length; j++) {
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
            }
        }
        friends.push(newFriend);
        res.json(bestFriend)
    })
};
