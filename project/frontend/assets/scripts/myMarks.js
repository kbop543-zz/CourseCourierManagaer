
/*  Calls backend and prints out Current Courses, as well as past markables */
function loadMyMarks () {

    $.ajax({
        type: "POST",
        dataType: 'json',
        url: "/parsePdf"
    })
    .done(function( data ) {

        var allMarkables = [];
        var allCourses = [];
        var allCoursesColour = [];

        var obj = JSON.parse(JSON.stringify(data));

        console.log("this is the obj", obj);

        for(let i = 0; i< obj.courses.length; i++){
            var course = obj.courses[i];

            console.log("this is the course", course);

            allCourses.push([course.courseCode, course.courseName]);
            allCoursesColour.push([course.courseCode]);

            var mark = course.markables;

            for (let m in mark) {
                markable = [course.courseCode, mark[m].name, mark[m].weight, mark[m].dueDate, mark[m].dueDate, mark[m].description];
                allMarkables.push(markable);
            }
        }

        allMarkables.sort(
            function(a,b) {

              var parts1 = a[3].substr(0,a[3].indexOf(' ')).match(/(\d+)/g);
              var date1 = new Date(parts1[0], parts1[1]-1,parts1[2]);

              var parts2 = b[3].substr(0,b[3].indexOf(' ')).match(/(\d+)/g);
              var date2 = new Date(parts2[0], parts2[1]-1,parts2[2]);

              return date1 - date2;
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

            $("h2#courselist").append('<ul id="mark' + icolor + '"><li>' +
                allCourses[course][0] + '</li><li>' +
                allCourses[course][1] + '</li><li>' +
                '<input id="'+allCourses[course][0].trim()+'" class="addCourseButton" type="button" value="Add a markable" '+
                'onClick="addMarkable(\'' + allCourses[course][0].trim() + '\');" />');

            icolor += 1;
        }

        $("main").append('<h2 id = "courselist2"> Past Evaluations </h2>');

        for (let j in allMarkables) {

            var markdate;
            markdate = allMarkables[j][4];
            icolor = 1;

            for (let i = 0; i < allCourses.length; i++) {
                if (allMarkables[j][0] == allCourses[i][0]) {
                    icolor = i + 1;
                }
            }

			var parts =allMarkables[j][3].substr(0,allMarkables[j][3].indexOf(' ')).match(/(\d+)/g);
   		var date = new Date(parts[0], parts[1]-1,parts[2]);
			var todate = new Date();

			if( date < todate ){
            $("h2#courselist2").append('<ul id="mark' + icolor + '"><li>' +
                "Course: " + allMarkables[j][0] + "</li><li>" +
                "Name: " + allMarkables[j][1] + "</li><li>" +
                "Description: " + allMarkables[j][5] + "</li><li>" +
                "Weight: " + allMarkables[j][2] + "</li><li>" +
                "Due Date: " + markdate + "</li><li>"+
                '<input type="button" value="Input Grade"/>' + "</li></ul>");
        }
      }
    }).fail(function(response){
          alert(response.responseText);
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
    $('#myMarks').show();
    $('#logout').show();

    loadMyMarks();

})
