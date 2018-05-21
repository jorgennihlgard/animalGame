const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const router = express.Router();
app.set("view engine", "ejs");
var fs = require("fs"),
    json;
const port = 3000;
var jsonFile = require('jsonfile')
var fileName = './db.json'



jsonFile.readFile(fileName, function(err, jsonData) {
  if (err) throw err;
  
  
  app.get("/",function(req,res){
    res.render("index", {jsonData});
  });

  for (var i = 0; i < jsonData.length; ++i) {

    console.log("Emp ID: "+jsonData[i].id);
    console.log("Emp Name: "+jsonData[i].name);
    console.log("Emp Address: "+jsonData[i].age);
    console.log("Designation: "+jsonData[i].city);
    console.log("----------------------------------");
  }
});

app.use(bodyParser.json({type: function() {return true}}));



app.listen(port,function(){
    console.log("Server körs på port " + port)
    ,port});