var mysql = require('mysql');
var db;

var settings = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'stock_diwulapitiya_ps',
    multipleStatements: true
    };

function connectDatabase() {
    if(!db){
        db = mysql.createConnection(settings);
        db.connect(function (err){

            if(err){
                console.log("error database conncetion");
            }else{
                console.log("successfull connected database");
            }
        })
    }

    return db;
}

module.exports = connectDatabase();
