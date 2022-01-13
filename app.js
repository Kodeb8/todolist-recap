// Express
const express = require("express");
const app = express();
app.use(express.static("public"));

// Bodyparser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// EJS
app.set("view engine", "ejs");

// Date
const date = require(__dirname + "/date.js");

// Global variables
let items = [];
let workItems = [];

// List webpage
app.get("/", function(req, res){
	let day = date.getDate();
	res.render("list", {listHeader: day, listArray: items, listValue: "list"}); 
});

// Work webpage
app.get("/work", function(req, res){
	res.render("list", {listHeader: "Work List", listArray: workItems, listValue: "work"});
});

// Post requests
app.post("/", function(req, res){
	// Todo list
	const item = req.body.listItem;
	
	// Send user to the correct list
	if(req.body.list === "work"){
		workItems.push(item);
		res.redirect("/work");
	} else {
		items.push(item);
		res.redirect("/");
	};
	
});

app.listen(3000, function(){
	console.log("Server started at port 3000");
});
