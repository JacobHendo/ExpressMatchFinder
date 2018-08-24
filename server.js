//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express Setup
var app = express();
var PORT = process.env.PORT || 3000;
// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Data Parsing
app.use(express.static('app/public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Start up the Server
app.listen(PORT, ()=> {
    console.log("App listening on PORT: " + PORT);
  });