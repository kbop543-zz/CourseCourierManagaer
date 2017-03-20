/* Set up the update user form */
function loadCourses (){

  $.ajax({
      type: "GET",
      dataType: 'json',
      url: "http://localhost:8080/calendarJson"
    })
    .done(function( data ) {
        $("main").empty();
        $("main").append("<p>Here be the json<p/>" + JSON.stringify(data));
    });
}

$(document).ready(function(){

    $('a#profile').show();
    $('#courses').show();
    $('#logout').show();

    loadCourses();

})
