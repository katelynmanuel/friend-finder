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
    })
};
