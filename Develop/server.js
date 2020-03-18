



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
app.use(express.static(path.join(__dirname,"/public")));





// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});


//app.get("*", function (req, res) {
    //res.sendFile(path.join(__dirname, "/public/index.html"));
//});



app.get("/api/notes", function (req, res) {
    fs.readFile(__dirname + "/db/db.json", "utf-8", function read(err, data) {
        console.log(data)
    });
});



    // Starts the server to begin listening
    // =============================================================
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });













    