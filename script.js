$(document).ready(function() {
  $("form").submit(function( event ) {
    var user = $("#username").val();
  event.preventDefault();
        console.log("got the jQ")
        var url = "https://api.github.com/users/" + user;
        $.getJSON(url, function(data) {
          console.log(data);
          $("aside").append(
            "<div class='contact'> <img src='" + data.avatar_url +
            "'><p>Username: " + user +
            "</p><p>Name: " + data.name +
            "</p></div>" 
          )
        })
  })

})