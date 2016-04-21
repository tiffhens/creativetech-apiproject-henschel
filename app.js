// Build a basic web server

var express = require("express"); // web server
var http = require("http"); // access to HTTP
var path = require("path"); // tools for directory listing
var mongoDB = require('mongodb').Db; // MongoDB Database
var mongoServer = require('mongodb').Server; // MongoDB Server reference
var ObjectID = require('mongodb').ObjectID; // MongoDB ObjectID which will be necessary later

var app = express(); // creates a web server and stores it in the variable named app
var server = http.createServer(app); // creates an HTTP server

// Create a reference to this due to JavaScripts shifting contexts. We won't have to worry about this for this class so we'll take this line as a necessary given.
var self = this;

this.db = new mongoDB('gdp', new mongoServer("localhost", 27017, {auto_reconnect: true}, {}));
//this above connects us to the database. copy and paste it into your project as is
// GET, PUT, USE, DELETE, UPDATE, POST all have Two arguments: path, function

var whatToReturn = function(request, resource) {  // This function is what we return from the server.
    resource.sendFile(__dirname + "/index.html");
}

app.use(express.static("static")); // this is so it will use the static file inside your folder with all the shit in there

app.get("/", whatToReturn); // endpoint is where data is exposed/given to user. if the user is looking for a directory called blah, we execute a function called whatToReturn

app.get("/pageTwo", function(request, resource) {
        resource.sendFile(__dirname + "/static/page2.html");
}); 
app.get("/pageThree", function(request, resource) {
        resource.sendFile(__dirname + "/static/page3.html");
}); 

// Create a new endpoint that serves up ALL the information from the database
app.get("/gdpData", function(request, resource) {
	resource.set("Content-Type", "application/json");

	// Open the DB. self.db is the same as this.db
	self.db.open(function() {
		// Load the specific Collection
		self.db.collection('gdp-us', function(error, collection) {
			// Find "EVERYTHING" and turn it into an array
			collection.find().toArray(function(e, results) { // results is a placeholder for an event
				// Send the array to the client/Front-end

				var currentLevels = [];
				for (var i=0; i<results.length; i++) {
					currentLevels.push(results[i]["level-current"]);
				};

				resource.send(currentLevels); // instead of just sending raw results.
			});
		});
	});
});




//two arguments below: what port to listen on, and a function to do stuff
var whatToDoWhenServerIsReady = function() {
    // does some stuff when the server is ready
    console.log("You can DOOO EEEEEET.");
};
 
server.listen(9001, whatToDoWhenServerIsReady);




