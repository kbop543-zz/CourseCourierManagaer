/*  Simply calls backend and prints out the data it recieves now */
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
