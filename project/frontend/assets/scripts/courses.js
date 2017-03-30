function addMarkable (courseName) {
    // $('.addCourseButton').click(function() {
        console.log(courseName);

        //window.location.replace('/addMarkable');
        $("main").empty();

        $("main").append('<h2 id = "addMarkable"> Add a markable to a course </h2>');

        // // var courseName = $(this).attr("id");

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

        // pretty sure this is for the onclick method of the confirm button
        $('#addMarkable').submit(function(event) {
            console.log("submitting");
            event.preventDefault();
            // Get the data from form
            let formData = $('#addMarkable').serialize();
            // Send post AJAX to create account
            $.post('/addMarkable', formData, function(data) {
                alert('Markable added');
                // // Reset form
                // $('#addMarkable').each(function() {
                //     this.reset();
                //     $('#addMarkable').slideToggle('slow');
                // });
            });
        });

        // serialize form
        // ajax post thing to server file thing 
        // make sure to put name of function and name of post call in server.js
        // in fileRoutes have an add markable or whatever u wanna call it function that 
        // will grab data from the serialized form that u sent ..you can grab it via
        // req.body.<name of form element here>
        // get username by req.session.username to get the courseobj and append to it

    // }
}



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
        console.log(data);
        //console.log(IsJsonString(""+data));


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
                //console.log(allMarkables);
            }
        }

        allMarkables.sort(
            function(a,b) {
                /*console.log(a[3]);
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
                console.log(new Date(secondDate[0], secondDate[1],secondDate[2]));*/

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
                allCourses[course][1] + '</li><li>' + 
                '<input id="'+allCourses[course][0].trim()+'" class="addCourseButton" type="button" value="Add a markable" '+
                'onClick="addMarkable(\'' + allCourses[course][0].trim() + '\');" />');

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
			var parts =allMarkables[j][3].substr(0,allMarkables[j][3].indexOf(' ')).match(/(\d+)/g);
   			 var date = new Date(parts[0], parts[1]-1,parts[2]);
			var todate = new Date();
			if(date>todate){
            $("h2#courselist2").append('<ul id="mark' + icolor + '"><li>' +
                "Course: " + allMarkables[j][0] + "</li><li>" +
                "Name: " + allMarkables[j][1] + "</li><li>" +
                "Description: " + allMarkables[j][5] + "</li><li>" +
                "Weight: " + allMarkables[j][2] + "</li><li>" +
                "Due Date: " + markdate + "</li><li>"+
                "Recommended Start Date: " + getReccomendedStartDate(allMarkables[j][2],markdate)+"</li></ul>");
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
