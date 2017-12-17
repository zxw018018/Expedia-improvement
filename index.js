var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require('mysql'); 




app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var userID = [-1,-1,-1,-1,-1,-1];

var connection = mysql.createConnection({  
    host: "big-data-expedia-recommendation-improvement.c9s0bldix8vs.us-east-2.rds.amazonaws.com",   
    user: "root",   
    password: "12345678",  
    database: "expedia"  
    });    

    var userID = [-1,-1,-1,-1,-1,-1];

app.get("/", function(req, res){
    res.render("home", {userID: userID});
});


app.post("/search", function(req, res){
    userID.push(req.body.newUserID);
    userID.shift();

    get_info(userID[5], function(result){   
        
        userID.push(result[0]);
        userID.shift();
        userID.push(result[1]);
        userID.shift();
        userID.push(result[2]);
        userID.shift();
        userID.push(result[3]);
        userID.shift();
        userID.push(result[4]);
        userID.shift();
        res.render("search", {userID: userID});
    });   

    
});

app.get("*", function(req, res){
    res.send("wrong website");
});

app.listen(3000, function(){
    console.log("running");
});

function get_info(userID, callback){    
    var sql = "select *" + " from expedia_data where id = "+userID;   
    connection.query(sql, function(err, results){    
          if (err){    
            throw err; 
          }     
          var cluster1 = results[0].cluster1;   
          var cluster2 = results[0].cluster2;    
          var cluster3 = results[0].cluster3;    
          var cluster4 = results[0].cluster4;   
          var cluster5 = results[0].cluster5;    
          var result = [cluster1, cluster2, cluster3, cluster4, cluster5];   
          return callback(result);   
  });  
}    
