const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set("view engine", "ejs");
const port = 3000;
var jsonFile = require('jsonfile')
var dbFile = './animaldb.json'

//app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({type: function() {return true}}));



  app.get("/",function(req,res){
    jsonFile.readFile(dbFile, function(err, jsonData) {
  if (err) throw err;
    var answerYesNo = req.query.answer;
    console.log("är denn ");
    res.render("index", {jsonData});
  });

  app.post("/",function(req,res){
   
    console.log(req.body);
    var answ=req.body;
    
    
    jsonFile.writeFile(dbFile,answ,function(err){
      if(err){console.log(err);}
    });
    res.redirect("/");
  });

});



app.listen(port,function(){
    console.log("Server körs på port " + port)
    ,port});