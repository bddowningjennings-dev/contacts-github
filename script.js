$(document).ready(function() {
  $("form").submit(function( event ) {
    var user = $("#username").val();
  event.preventDefault();
        console.log("got the jQ")
        var url = "https://api.github.com/users/" + user;
        $.getJSON(url, function(data) {
          console.log(data);
          $("aside").append(
            "<div class='contact'><div> <img src='" + data.avatar_url +
            "'><p>Username: " + user +
            "</p><p>Name: " + data.name +
            "</p></div><div class='hidden'>This was hidden</div></div><br>" 
          );
        $('.hidden').hide();
        $('.contact').off('click');
        $('.contact').click(function() {
            $(this).children().toggle();
            // console.log('clicked');
          })
      })
  })
})