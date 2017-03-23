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
      console.log("this is the obj" + obj);
      for(let i = 0 ;i< obj.courses.length;i++){
  			var course = obj.courses[i];
        console.log("this is the course" +course);
  			var mark = course.markables;
          $("main").append('<p id = "courselist">' + course.courseCode + ": " + course.courseName + '</p>');
  		for (let j in mark){
  			$("p#courselist").append('<ul id = "mark"><li>' +
  			"Name: " + mark[j].name + "</li><li>" +
  			"Description: " + mark[j].description + "</li><li>" +
  			"Weight: " + mark[j].weight + "</li><li>" +
  			"Due Date: " + mark[j].dueDate + "</li></ul>");
  		}
  }
    });
}

$(document).ready(function(){

    $('a#profile').show();
    $('#courses').show();
    $('#logout').show();

    loadCourses();

})
