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
      console.log("this is the obj", JSON.stringify(data));
      for(let i = 0 ;i< obj.courses.length;i++){
  			var course = obj.courses[i];
        console.log("this is the course", course);
  			var mark = course.markables;
			mark.sort(function(a,b){
					var c = new Date(a.dueDate);
					var d = new Date(b.dueDate);
					return c-d;
			});
          $("main").append('<h2 id = "courselist">' + course.courseCode + ": " + course.courseName + '</h2>');
  		for (let j in mark){
			var markdate;
			if(mark[j].dueDate == null){
				markdate = null;
			}
			else if (mark[j].dueDate.split(' ').length > 1){
				markdate = mark[j].dueDate.split(' ')[0].split('-')[1] +
				' ' + mark[j].dueDate.split(' ')[0].split('-')[2] + ', '
				+ mark[j].dueDate.split(' ')[0].split('-')[0];
			}else{
				markdate = mark[j].dueDate;
			}
  			$("h2#courselist").append('<ul id = "mark"><li>' +
  			"Name: " + mark[j].name + "</li><li>" +
  			"Description: " + mark[j].description + "</li><li>" +
  			"Weight: " + mark[j].weight + "</li><li>" +
  			"Due Date: " + markdate + "</li></ul>");
  		}
     }

       //ICS FILE YO
       console.log("jsonCalendar", data)
       $.ajax({
           type: 'GET',
           url: "http://localhost:8080/calendarFrontend",
           dataType: 'application/json',
           data: JSON.stringify(data)
       })
       .done(function( calendarFromBackend ){
         console.log("this is the cal", JSON.stringify(calendarFromBackend));
       });


   });

}

$(document).ready(function(){

    $('a#profile').show();
    $('#courses').show();
    $('#logout').show();

    loadCourses();

})
