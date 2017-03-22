/*  Simply calls backend and prints out the data it recieves now */
function loadCourses (){


  $.ajax({
      type: "POST",
      dataType: 'json',
      url: "/parsePdf"
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
