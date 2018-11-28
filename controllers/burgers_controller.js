var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log("This should be all burgers obj: " + hbsObject);
    res.render("index", hbsObject);
  });
});

// Will insert new burger to db
router.post("/api/burgers", function(req, res) {
  burgers.insertOne(["burger_name", "devoured"], 
  [req.body.burger_name, req.body.devoured], function(result) {
    
    // Send back the ID of the new burger
    console.log("This should add a burger: " + result.insertId)
    res.json({ id: result.insertId });
  });
});

// Will update to devoured/true
router.put("/api/burgers/:id", function (req, res) {
  var condition = " = " + req.body.devoured;
  var id = "id = " + req.params.id;

  console.log("This is condition", condition);
  console.log("This id", id);

  burgers.update(condition, id, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    return res.status(200).end();
    
  });
});

// Export routes for server.js to use.
module.exports = router;
