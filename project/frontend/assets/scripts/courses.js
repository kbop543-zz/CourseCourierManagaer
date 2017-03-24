/*  Simply calls backend and prints out the data it recieves now */
function loadCourses () { 

    $.ajax({
        type: "POST",
        dataType: 'json',
        url: "/parsePdf"
    })

    .done(function( data ) {
        $("main").empty();

        var allMarkables = [];
        var allCourses = [];
        var allCoursesColour = [];

        var obj = JSON.parse(JSON.stringify(data));
      	console.log("this is the obj" + obj);

      	for(let i = 0; i< obj.courses.length; i++){
  			    var course = obj.courses[i];
            console.log("this is the course" +course);

        	  allCourses.push([course.courseCode, course.courseName]);
        	  allCoursesColour.push([course.courseCode]);

  			    var mark = course.markables;

  			    for (let m in mark) {
  				      markable = [course.courseCode, mark[m].name, mark[m].weight, new Date(mark[m].dueDate), mark[m].dueDate, mark[m].description];
  				      allMarkables.push(markable);
  			    }
  		  }

  		  allMarkables.sort(
  			    function(a,b) {
  				      var firstDate = a[3];
  				      var secondDate = b[3];

  				    return firstDate - secondDate;
  			    }
  		  )

  		  for (let course in allCoursesColour) {
  			    courseColour = getRandomColor();

  			    allCoursesColour[course].push(courseColour);
  		  }

        $("main").append('<h2 id = "courselist"> Courses You Are Taking </h2>');

        var icolor = 1;

        for (let course in allCoursesColour) {

        	  var colour = allCoursesColour[course][1];

        	  // $("h2#courselist").append('<ul id="mark"' + 'style="color:' + colour + '><li>' +
        	  // 	allCourses[course][0] + '</li><li>' +
        	  // 	allCourses[course][1] + '</li><li>'
        	  // 	)

        	  $("h2#courselist").append('<ul id="mark' + icolor + '"><li>' +
        		    allCourses[course][0] + '</li><li>' +
        		    allCourses[course][1] + '</li><li>'
        	  )

        	  icolor += 1;
        }

        $("main").append('<h2 id = "courselist2"> Upcoming Evaluations </h2>');

        for (let j in allMarkables) {
        	  var markdate;

        	  if (allMarkables[j][4] == null) {
        		    markdate = null;
        	  } else if (allMarkables[j][4].split(' ').length > 1) {
        		    markdate = allMarkables[j][4].split(' ')[0].split('-')[1] +
        		    ' ' + allMarkables[j][4].split(' ')[0].split('-')[2] + ', '
        		    + allMarkables[j][4].split(' ')[0].split('-')[0];
        	  } else {
        		    markdate = allMarkables[j][4];
        	  }

        	  icolor = 1;

        	  for (let i = 0; i < allCourses.length; i++) {
        		    if (allMarkables[j][0] == allCourses[i][0]) {
        			      icolor = i + 1;
        		    }
        	  }      	

        	  //icolor = 1;

        	  $("h2#courselist2").append('<ul id="mark' + icolor + '"><li>' +
        		    "Course: " + allMarkables[j][0] + "</li><li>" +
        		    "Name: " + allMarkables[j][1] + "</li><li>" +
  				      "Description: " + allMarkables[j][5] + "</li><li>" +
  				      "Weight: " + allMarkables[j][2] + "</li><li>" +
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

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$(document).ready(function(){

    $('a#profile').show();
    $('#courses').show();
    $('#logout').show();

    loadCourses();

})
