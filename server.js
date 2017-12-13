var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "expedia"
});

var userID = '1';

var output = new Array(5);

get_info(userID, function(result){
    console.log(result);
});


function get_info(userID, callback){
          var sql = "select *" + " from expedia where id = "+userID;
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
    

    
