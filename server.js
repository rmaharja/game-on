
// Dependencies

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var $ = require('jquery');
var request = require('request');


// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// Router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.use(express.static(path.join(__dirname, 'public'))); //Serves resources from public folder



// Starts the server to begin listening

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});