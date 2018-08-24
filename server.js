//Dependencies
var express = require("express");
var bodyParser = require("body-parser");


// Express Setup
var app = express();
var PORT = process.env.PORT || 3000;

// Data Parsing
app.use(express.static('app/public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//use static files
app.use(express.static('public'));

// Routes

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// Start up the Server
app.listen(PORT, ()=> {
    console.log("App listening on PORT: " + PORT);
  });