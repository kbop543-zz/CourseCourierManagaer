/* Set up the update user form */
function signupSetup (){

    // Fetch the user's current info
    $.get('/getOneUser', function(data){
        $('a#login').hide();
        $('#courses').show();
        $('a#profile').show();
        $('#logout').show();
		//console.log(data);
		//dataCoursesParse(data);
        $("main").empty();
       //  $("main").append("<div id=profileCard>"+'Welcome      '+"<form id='profileChange'><input type='text' name='firstName'  value="+data.firstName+"><input type='text' name='lastName'  value="+data.lastName+">" +
						 // "<br>"+'UserName :'+data.username +
						 // "<br>" +'Email :' +"<input type='text' name='email'  value="+data.email+">" +
						 // "<br>" +'Courses you are taking :' +	dataCoursesParse(data) +
						 // ' Your projected GPA is :' + gradeCalculator(data)+
						 // "<br><input type='submit' value='make changes'><br></form></div>" );
		
		$("main").append('<div id=profileHeading>Welcome to Courier Course Manager.</div>');

		$("main").append('<div id=profileSubHeading><br>Here is you profile info:</div>');
		$("main").append('<div id=profileBody><br>First Name: ' + data.firstName + '</div>');
		$("main").append('<div id=profileBody>Last Name: ' + data.lastName + '</div>');
		$("main").append('<div id=profileBody>UserName: ' + data.username + '</div>');
		$("main").append('<div id=profileBody>Email: ' + data.email + '</div>');

		$("main").append('<div id=profileSubHeading><br>Courses you are taking:</div>');
		$("main").append('<div id=profileBody>' + dataCoursesParse(data) + '</div>');

		$("main").append('<div id=profileSubHeading><br>Your Projected GPA:</div>');
		$("main").append('<div id=profileBody class="gpaValue"> ' + gradeCalculator(data) + '</div>');

		$("main").append('<div id=profileSubHeading><br>Edit your profile info here:</div>');
		$("main").append("<form id='profileChange'><br>" + 
								"<label for='fname'>First Name</label><br><input type='text' id='fname' name='firstName' placeholder='New first name..'>" +
								"<br><label for='lname'>Last Name</label><br><input type='text' id='lname' name='lastName' placeholder='New last name..'>" +
								"<br><label for='lname'>Email</label><br><input type='text' id='email' name='email' placeholder='New email address..'>" +
								"<br><input type='submit' value='Modify'>" +
								"</form>");


		     // '+"<form id='profileChange'><input type='text' name='firstName'  value="+data.firstName+"><input type='text' name='lastName'  value="+data.lastName+">" +
						 // "<br>"+'UserName :'+data.username +
						 // "<br>" +'Email :' +"<input type='text' name='email'  value="+data.email+">" +
						 // "<br>" +'Courses you are taking :' +	dataCoursesParse(data) +
						 // ' Your projected GPA is :' + gradeCalculator(data)+
						 // "<br><input type='submit' value='make changes'><br></form></div>" );
/*
        $('#username').val(data.username);
        $('#firstName').val(data.firstName);
        $('#lastName').val(data.lastName);
        $('#email').val(data.email);*/

        /*$('#changeGrade').submit(function(event){
        	('.gpaValue').text(gradeCalculator);
        })*/

		$('#profileChange').submit(function(event) {
		console.log("this is called prime");
        event.preventDefault();

        // Get the data from form
        let formData = $('#profileChange').serialize();
		//formData+= "&username="+data.username);
		console.log(formData);
		$.post('/modifyUser',formData,function(data){
			      alert('User modified');
				window.location.reload();
		})
			
			.fail(function(response) {
			console.log("this failed");
            alert(response.responseText);
        });
        return false;
    });
    });
	
}
	
	


function dataCoursesParse(data){
	var ajson_object;

	try { 
		ajson_object= JSON.parse(data.courseObj);
	} catch(e) {
		ajson_object = data.courseObj;	
	}

	// console.log(ajson_object);

	if(ajson_object != null){
		var courses = ajson_object.courses;
		console.log(courses);
		var toReturn = "<br>"

		for(var i in courses){
			// console.log(courses[i].courseCode);
			if(courses[i].grade == null){
				toReturn += ' ' +courses[i].courseCode +"Grade: Not available <br>";
			}
			else{
				toReturn += ' ' +courses[i].courseCode +'      Grade: '+ courses[i].grade + "<br>";
			}
		}
		//toReturn +="<br><input type='submit' value='Test GPA output here'>" +"</form>";
	
		return toReturn;
	} else {
		return '<br>' + 'You are not taking any courses right now.'+"<br>";;
	}
}

function gradeCalculator(data){
	var ajson_object;
	try{ ajson_object= JSON.parse(data.courseObj);
	   }catch(e){
		ajson_object = data.courseObj;	
		}
	if(ajson_object != null){
	var courses = ajson_object.courses;
	var count = 0;
	var toReturn = 0;
	for(var i in courses){
		console.log(courses[i].courseCode);
		console.log(courses[i].grade)
		if(courses[i].grade != null){
			
			toReturn += parseInt(courses[i].grade);
			console.log(toReturn);
			count++;
		}
	}
	console.log(toReturn);
	console.log(count);
	if(count == 0) return 'Not Available';
	console.log(toReturn/count);
	return parseGrade(toReturn/count);
	}else{
	return "<br>"+'No GPA available.'+"<br>";
	}
}

function parseGrade(grade){
	var precentGrade = parseInt(grade);
	var regularGrade = 0;
	if(precentGrade > 49) regularGrade = 0.7;
	if(precentGrade > 52) regularGrade = 1.0;
	if(precentGrade > 56) regularGrade = 1.3;
	if(precentGrade > 59) regularGrade = 1.7;
	if(precentGrade > 62) regularGrade = 2.0;
	if(precentGrade > 66) regularGrade = 2.3;
	if(precentGrade > 69) regularGrade = 2.7;
	if(precentGrade > 72) regularGrade = 3.0;
	if(precentGrade > 76) regularGrade = 3.3;	
	if(precentGrade > 79) regularGrade = 3.7;
	if(precentGrade > 84) regularGrade = 4.0;
	return regularGrade;
}
$(document).ready(function(){

	$('#courses').hide();
    $('#myMarks').show();
    $('#profile').hide();
    $('#logout').hide();
    signupSetup();

})