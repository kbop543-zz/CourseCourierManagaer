/*  Simply calls backend and prints out the data it recieves now */
function loadCourses () {

    $.ajax({
        type: "POST",
        dataType: 'json',
        url: "/parsePdf"
    })

    .done(function( data ) {
        // $("main").empty();

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
                markable = [course.courseCode, mark[m].name, mark[m].weight, mark[m].dueDate, mark[m].dueDate, mark[m].description];
                allMarkables.push(markable);
            }
        }

        allMarkables.sort(
            function(a,b) {
                console.log(a[3]);
                console.log(b[3]);
                var dateA = a[3].split(" ");
                var dateB = b[3].split(" ");
                console.log(dateA);
                console.log(dateB);
                var firstDate = dateA[0].split("-");
                var secondDate = dateB[0].split("-");
                console.log(firstDate);
                console.log(secondDate);
                console.log(new Date(firstDate[0], firstDate[1],firstDate[2]));
                console.log(new Date(secondDate[0], secondDate[1],secondDate[2]));


              return firstDate[2] - secondDate[2];
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
            //  allCourses[course][0] + '</li><li>' +
            //  allCourses[course][1] + '</li><li>'
            //  )

            $("h2#courselist").append('<ul id="mark' + icolor + '"><li>' +
                allCourses[course][0] + '</li><li>' +
                allCourses[course][1] + '</li><li>'
            )

            icolor += 1;
        }

        $("main").append('<h2 id = "courselist2"> Upcoming Evaluations </h2>');

        for (let j in allMarkables) {
            var markdate;

            /*if (allMarkables[j][4] == null) {
                markdate = null;
            } else if (allMarkables[j][4].split(' ').length > 1) {
                markdate = allMarkables[j][4].split(' ')[0].split('-')[1] +
                ' ' + allMarkables[j][4].split(' ')[0].split('-')[2] + ', '
                + allMarkables[j][4].split(' ')[0].split('-')[0];
            } else {*/
                markdate = allMarkables[j][4];
            //}

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
                "Due Date: " + markdate + "</li><li>"+
                "Recommended Start Date: " + getReccomendedStartDate(allMarkables[j][2],markdate)+"</li></ul>");
        }

        $.ajax({
            type: 'POST',
            url: "http://localhost:8080/frontendCalendar",
            contentType: "application/json; charset=UTF-8",
            data: JSON.stringify(data)
        })
        .done(function(){
          console.log("SUCCESSFULLY UPLOADED THE JSON, CAN NOW DOWNLOAD A CAL FILE IF YOU CLICK THE BUTTON");
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


function getReccomendedStartDate(weight, dueDate) {
    var shouldStartDaysEarly = Math.floor(weight.replace("%", "")/2);
    var parts = dueDate.substr(0,dueDate.indexOf(' ')).match(/(\d+)/g);
    var date = new Date(parts[0], parts[1]-1,parts[2]);
    date.setDate(date.getDate() - shouldStartDaysEarly);
    return date.toLocaleDateString();
}

$(document).ready(function(){

    $('a#profile').show();
    $('#courses').show();
    $('#logout').show();

    loadCourses();

})
