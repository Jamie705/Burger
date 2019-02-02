// Make sure we wait to attach our handlers until the DOM is fully loaded.

// Change burger status to eaten
$(function() {
  $(".change-devoured").on("click", function(event) {
    var burgerId = $(this).data("id");

    var eatenBurger = {
      devoured: "1"
    }
    // Send the PUT request.
    $.ajax("/api/burgers/" + burgerId, {
      type: "PUT",
      data: eatenBurger
    }).then(
      function() {
        console.log("Status changed devoured to", eatenBurger);
        // Reload the page to get the updated list
        location.reload(true);
      }
    );
  });

  //Creating a new burger
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

      //created variable to save the input from form
    var newBurger = {
      burger_name: $("#ca").val().trim(),
    };

    // Send the POST request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Created new burger");
        // Reload the page to get the updated list
        location.reload();
        $("#ca").val("");
      }
    );
  });

  // Adding delete option
  // $(".delete-burger").on("click", function(event) {
  //   var id = $(this).data("burgerId");

  //   // Send the DELETE request.
  //   $.ajax("/api/burgers/" + burgerId, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("Deleted burger: ", burgerId);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});
