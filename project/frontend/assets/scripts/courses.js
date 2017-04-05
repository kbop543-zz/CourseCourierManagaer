function deleteMarkable(courseName, markableName){
     // Send delete AJAX
            $.ajax({
                type: 'delete',
                url: '/deleteMarkable?courseName='+courseName +'&markableName='+markableName,
                success: function(data) {
                    alert("Markable deleted.");
                    location.reload();
                },
                error: function(response){
                    alert(response.responseText);
                }
            });
}

/*  Simply calls backend and prints out the data it recieves now */
function loadCourses () {

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
            //console.log("this is the course", course);

            allCourses.push([course.courseCode, course.courseName]);
            allCoursesColour.push([course.courseCode]);

            var mark = course.markables;

            for (let m in mark) {
                markable = [course.courseCode, mark[m].name, mark[m].weight, mark[m].dueDate, mark[m].dueDate, mark[m].description];
                allMarkables.push(markable);
                //console.log(allMarkables);
            }
        }

        allMarkables.sort(
            function(a,b) {

                var parts1 = a[3].substr(0,a[3].indexOf(' ')).match(/(\d+)/g);
                //console.log(a[3] + "<- original|broken up: " + parts1);
                var date1 = new Date(parts1[0], parts1[1]-1,parts1[2]);

                var parts2 = b[3].substr(0,b[3].indexOf(' ')).match(/(\d+)/g);
                //console.log(b[3] + "<- original|broken up: " + parts2);
                var date2 = new Date(parts2[0], parts2[1]-1,parts2[2]);


              return date1 - date2;
            }
        )

        for (let course in allCoursesColour) {
            courseColour = getRandomColor();

            allCoursesColour[course].push(courseColour);
        }



        $("main").append('<h2 id = "courselist2"> Upcoming Evaluations </h2>');

        for (let j in allMarkables) {
            var markdate;

            markdate = allMarkables[j][4];
            
            icolor = 1;

            for (let i = 0; i < allCourses.length; i++) {
                if (allMarkables[j][0] == allCourses[i][0]) {
                    icolor = i + 1;
                }
            }

        		var parts =allMarkables[j][3].match(/(\d+)/g);
         		var markableDate = new Date(parts[0], parts[1]-1,parts[2], parts[3], parts[4], parts[5]);
        		var todayDate = new Date();

        		if( markableDate > todayDate){
                  $("h2#courselist2").append('<ul id="mark' + icolor + '"><li>' +
                      "Course: " + allMarkables[j][0] + "</li><li>" +
                      "Name: " + allMarkables[j][1] + "</li><li>" +
                      "Description: " + allMarkables[j][5] + "</li><li>" +
                      "Weight: " + allMarkables[j][2] + "</li><li>" +
                      "Due Date: " + markableDate.toString().substr(0, markableDate.toString().length - 18) + "</li><li ><b>"+
                      "Recommended Start Date: " + getReccomendedStartDate(allMarkables[j][2],markdate) +"</b></li>" +
                      '<input id="'+allMarkables[j][1].trim()+'" class="deleteMarkableButton" type="button" value="Delete a markable" '+
                      'onClick="deleteMarkable(\'' + allMarkables[j][0].trim() + '\', \'' + allMarkables[j][1] + '\')"' 
                        +  '</li><li>'+ "</ul><b>"
                      );
              }
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


function getReccomendedStartDate(weight, dueDate) {

    var shouldStartDaysEarly = Math.floor(weight.replace("%", "") / 2);

    var parts = dueDate.substr(0,dueDate.indexOf(' ')).match(/(\d+)/g);
    var date = new Date(parts[0], parts[1]-1,parts[2]);
    date.setDate(date.getDate() - shouldStartDaysEarly);

    var stringDate = date.toString();
    return stringDate.substr(0, stringDate.length - 23);

}

$(document).ready(function(){

    $('#courses').show();
    $('a#profile').show();
    $('a#myMarks').show();
    $('#logout').show();

    loadCourses();
})
