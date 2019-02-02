var connection = require("./connection.js");

//create question marks
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

//Building orm for all queries
var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            console.log("selectAll query string: " + queryString);

            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log("InsertOne query string: " + queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb (result);
        });
    },
    // An example of objColVals
    update: function (table, condition, id, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += "devoured"+ condition;
        queryString += " WHERE ";
        queryString += id;

        console.log("Update query string: " + queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
};    
module.exports = orm;
