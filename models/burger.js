// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
    selectAll: function (cb) {
        // This is like: SELECT * FROM burgers
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (condition, id, cb) {
        orm.update("burgers", condition, id, function (res) {
            cb(res);
        });
    },
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;
