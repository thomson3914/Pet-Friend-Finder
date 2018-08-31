// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
// var methodOverride = require("method-override");
var db = require("./models");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// app.get('/', function(req, res) {
//     res.redirect('/signin');
// });


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

// // Sets up Express Engine Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
var routes = require("./controllers/friend_controller.js");
app.use("/", routes);


// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
