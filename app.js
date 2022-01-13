const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
		res.render("list", {helloWorld: "hello world"});
});

app.listen(3000, function(){
	console.log("Server started at port 3000");
});
