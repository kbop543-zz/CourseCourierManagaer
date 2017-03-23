/*  Simply calls backend and prints out the data it recieves now */
function loadCourses (){


  $.ajax({
      type: "POST",
      dataType: 'json',
      url: "/parsePdf"
    })
    .done(function( data ) {
        $("main").empty();
			var obj = JSON.parse(JSON.stringify(data));
			var course = obj.courses[0][0];
			var mark = course.markables;
        $("main").append('<p id = "courselist">' + course.courseCode + ": " + course.courseName + '</p>');
		for (var i in mark){
			$("p#courselist").append('<ul id = "mark"><li>' +
			"Name: " + mark[i].name + "</li><li>" +
			"Description: " + mark[i].description + "</li><li>" +
			"Weight: " + mark[i].weight + "</li><li>" +
			"Due Date: " + mark[i].dueDate + "</li></ul>");
		}
    });
}

$(document).ready(function(){

    $('a#profile').show();
    $('#courses').show();
    $('#logout').show();

    loadCourses();

})
