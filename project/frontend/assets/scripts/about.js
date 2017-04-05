$(document).ready(function(){

	$('#courses').show();
    $('#myMarks').show();
    $('#profile').show();
    $('#logout').show();
    
    $("main").append('<div id=profileHeading>Welcome to Courier Course Manager</div>');
    $("main").append("<div id=profileBody> " + 
                            "<br>Courier Course Manager was developed with one goal in mind - to make sure every student " +
    	                    "<br>can organize assignments and midterms across all their courses with ease. Courier allows " +
                            "<br>students to import multiple syllabi at once, and the application automatically organizes " +
                            "<br>every summative by due date, to make sure the student knows what's comming up. Courier " +
                            "<br>also provides the student with suggested start dates, based on deadlines and how much each " +
                            "<br>course weighs, to make sure the student optimizes their time. Once students receive feedback " +
                            "<br>from their instructors, they can manually input their grades, and Courier determines both " +
                            "<br>course grades, and the student's overall GPA. Finally, if a student wishes to incorportate " +
                            "<br>a calendar of their upcoming summatives, they can do so, by simply exporting their calendar " +
                            "<br> as an ICS file. <br><br><br>" + "</div>");
    $("main").append('<div id=profileHeading>Our Developers:</div>');
    $("main").append("<div id=profileBody> " + 
                            "<br> Kyra Stephen" +
                            "<br> Filip Fabiszak" +
                            "<br> John Axon" +
                            "<br> Hari Sharma" +
                            "<br> Jeremy Gralla" +
                            "<br> Taha Kusculu" +
                    "</div>");

})