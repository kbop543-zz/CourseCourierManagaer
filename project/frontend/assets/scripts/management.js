function addGrade (courseThings){

        var courseThingsSplitted = courseThings.split(",");
        var courseName = courseThingsSplitted[0];
        var markableName = courseThingsSplitted[1];
        var markableWeight = courseThingsSplitted[2];

        console.log(courseName + ',' +markableName + ',' +markableWeight);
        $("main").empty();
        $("main").append('<h2 id = "addGrade"> Add a grade to course '+courseName +
        'for the markable ' + markableName
        + 'which is worth '+markableWeight + '</h2>');
        //$("h2#addGrade").append('<ul><li>' + courseName);

        //append form to h2#courselist here
        $("h2#addGrade").append('<form id="addGradeForm">' +
            '<input type="text" placeholder ="Markable grade" name="markableGrade">' +
            '<br>' +
            '<input type="submit" value="Confirm">' +
            '<input type="reset" value="Reset">' +
            '<br>' +
            '</form>');

        $('#addGradeForm').submit(function(event) {
            console.log("submitting");
            event.preventDefault();
            // serialize form
            let formData = $('#addGradeForm').serialize();
            // ajax post thing to server file thing
            $.post('/addMarkableGrade?courseName='+courseName+'&markableName='
                +markableName+'&markableWeight='+markableWeight, formData, function(data) {
                alert('Markable grade added');
                window.location.replace('/management');
            })
            .fail(function(response) {
                alert(response.responseText);
            });

            return false;
        });
}

function addMarkable (courseName) {
        console.log(courseName);
        $("main").empty();
        $("main").append('<h2 id = "addMarkable"> Add a markable to a course </h2>');
        $("h2#addMarkable").append('<ul><li>' + courseName);

        //append form to h2#courselist here
        $("h2#addMarkable").append('<form id="addMarkableForm">' +
            '<input type="text" placeholder ="Markable name" name="markableName">' +
            '<br>' +
            '<input type="text" placeholder ="Description" name="description">' +
            '<br>' +
            '<input type="text" placeholder ="Weight" name="weight">' +
            '<br>' +
            '<input type="text" placeholder ="Due Date" name="dueDate">' +
            '<br>' +
            '<input type="submit" value="Confirm">' +
            '<input type="reset" value="Reset">' +
            '<br>' +
            '</form>');

        $('#addMarkable').submit(function(event) {
            console.log("submitting");
            event.preventDefault();
            // serialize form
            let formData = $('#addMarkable').serialize();
            // ajax post thing to server file thing
            $.post('/addMarkable', formData, function(data) {
                alert('Markable added');
                window.location.replace('/courses');
            })
            .fail(function(response) {
                alert(response.responseText);
            });
          // return false;
        });
}

function delCourse(courseName){
     // Send delete AJAX
            $.ajax({
                type: 'delete',
                url: '/delCourse?courseName='+courseName,
                success: function(data) {
                    alert("Markable deleted.");
                    location.reload();
                },
                error: function(response){
                    alert(response.responseText);
                }
            });


}



/*  prints markables that have passed */
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

            if(course.grade == null){
                allCourses.push([course.courseCode, course.courseName]);
            }else{
                allCourses.push([course.courseCode, course.courseName, course.grade]);
            }
            allCoursesColour.push([course.courseCode]);

            console.log(allCourses);

            var mark = course.markables;

            for (let m in mark) {
                markable = [course.courseCode, mark[m].name, mark[m].weight, mark[m].dueDate, mark[m].grade, mark[m].description];
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

            if(allCourses[course][2] == null){

                $("h2#courselist").append('<ul id="mark' + icolor + '"><li>' +
                allCourses[course][0] + '</li><li>' +
                allCourses[course][1] + '</li><li style="float: right;padding-right: 35px;" >' 
                +  '</li><li>'+
                '<input id="'+allCourses[course][0].trim()+'" class="addCourseButton" type="button" value="Add a markable" '+
                'onClick="addMarkable(\'' + allCourses[course][0].trim() + '\')"' 
                +  '</li><li>'+
                '<input class="delCourseButton" type="button" value="Delete this course" '+
                'onClick="delCourse(\'' + allCourses[course][0].trim() + '\')"/>');
            }else{

            $("h2#courselist").append('<ul id="mark' + icolor + '"><li>' +
                allCourses[course][0] + '</li><li>' +
                allCourses[course][1] + '</li><li style="float: right;padding-right: 35px;" >' +
                'Overall grade: ' + allCourses[course][2] +  '</li><li>'+
                '<input id="'+allCourses[course][0].trim()+'" class="addCourseButton" type="button" value="Add a markable" '+
                'onClick="addMarkable(\'' + allCourses[course][0].trim() + '\')"' 
                +  '</li><li>'+
                '<input class="delCourseButton" type="button" value="Delete this course" '+
                'onClick="delCourse(\'' + allCourses[course][0].trim() + '\');"/>');
        }

            icolor += 1;
            }
            $("main").append('<h2 id = "courselist2"> Past Markables </h2>');

              for (let j in allMarkables) {

                  var markdate;
                  markdate = allMarkables[j][3];
                  icolor = 1;

                  for (let i = 0; i < allCourses.length; i++) {
                      if (allMarkables[j][0] == allCourses[i][0]) {
                          icolor = i + 1;
                      }
                  }

              var parts =allMarkables[j][3].match(/(\d+)/g);
              var markableDate = new Date(parts[0], parts[1]-1,parts[2], parts[3], parts[4], parts[5]);
              var todate = new Date();

              if(allMarkables[j][4]){
                if( markableDate < todate ){
                    $("h2#courselist2").append('<ul id="mark' + icolor + '"><li>' +
                        "Course: " + allMarkables[j][0] + "</li><li>" +
                        "Name: " + allMarkables[j][1] + "</li><li>" +
                        "Description: " + allMarkables[j][5] + "</li><li>" +
                        "Weight: " + allMarkables[j][2] + "</li><li>" +
                        "Due Date: " + markableDate.toString().substr(0, markableDate.toString().length - 23) + "</li><li>"+
                        "Grade: "+ allMarkables[j][4] + "</li><li>"+
                    '<input id="'+allMarkables[j][0]+'" class="addGradeButton" type="button" value="Change this grade" '+
                    'onClick="addGrade(\'' + allMarkables[j][0]+ ',' + allMarkables[j][1] + ',' +allMarkables[j][2] + '\')" /></ul>');

                }

              }else{
                if( markableDate < todate ){
                    $("h2#courselist2").append('<ul id="mark' + icolor + '"><li>' +
                        "Course: " + allMarkables[j][0] + "</li><li>" +
                        "Name: " + allMarkables[j][1] + "</li><li>" +
                        "Description: " + allMarkables[j][5] + "</li><li>" +
                        "Weight: " + allMarkables[j][2] + "</li><li>" +
                        "Due Date: " + markableDate.toString().substr(0, markableDate.toString().length - 23) + "</li><li>"+
                    '<input id="'+allMarkables[j][0]+'" class="addGradeButton" type="button" value="Add a Grade" '+
                    'onClick="addGrade(\'' + allMarkables[j][0]+ ',' + allMarkables[j][1] + ',' +allMarkables[j][2] + '\')" /></ul>');

                }
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

    //display marks by courses

})
