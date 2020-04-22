$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newdevour = $(this).data("newdevour");

      var newdevourState = {
        devoured: newdevour
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(
        function() {
          console.log("Burger was Devoured", newdevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log('new burger submited!')
      var newBurger = {
        burger_name: $("#burg").val().trim(),
        devoured: false
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });