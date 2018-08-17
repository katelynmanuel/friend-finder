// Dependencies
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("/routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


// When user goes to root path, displays home page.
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

// When user goes to survey path, displays survey page.
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

// Starts server to being listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});