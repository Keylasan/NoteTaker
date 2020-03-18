// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});



app.get("/api/notes", function (req, res) {
    fs.readFile("db.json",function(err,data)
});

app.post("/", function (req, res) {
    fs.File("db.json",function(err,data))
}
app.get("/", function (req, res) {
}
            // Displays all characters
            app.get("/api/characters", function (req, res) {
                return res.json(characters);
            });

            

            // Create New Characters - takes in JSON input
            app.post("/api/characters", function (req, res) {
                // req.body hosts is equal to the JSON post sent from the user
                // This works because of our body parsing middleware
                var newCharacter = req.body;

                // Using a RegEx Pattern to remove spaces from newCharacter
                // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
                newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

                console.log(newCharacter);

                characters.push(newCharacter);

                res.json(newCharacter);
            });

            // Starts the server to begin listening
            // =============================================================
            app.listen(PORT, function () {
                console.log("App listening on PORT " + PORT);
            });