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
        $("main").append("<div id=profileCard>"+'Welcome      '+"<form id='profileChange'><input type='text' name='firstName'  value="+data.firstName+"><input type='text' name='lastName'  value="+data.lastName+">" +
						 "<br>"+'UserName :'+data.username +
						 "<br>" +'Email :' +"<input type='text' name='email'  value="+data.email+">" +
						 "<br>" +'Courses you are taking :' +	dataCoursesParse(data) +
						 ' Your projected GPA is :' + gradeCalculator(data)+
						 "<br><input type='submit' value='make changes'><br></form></div>" );
		
/*
        $('#username').val(data.username);
        $('#firstName').val(data.firstName);
        $('#lastName').val(data.lastName);
        $('#email').val(data.email);*/

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
	try{ ajson_object= JSON.parse(data.courseObj);
	   }catch(e){
		ajson_object = data.courseObj;	
		}
	//console.log(json_obj);
	if(ajson_object != null){
	var courses = ajson_object.courses;
	var toReturn = "<br>" 
	for(var i in courses){
		//console.log(courses[i].courseCode);
		if(courses[i].grade == null){
			toReturn = toReturn + ' ' +courses[i].courseCode +"<input type='text' name='grade" +i+"'  value='Grade: Not available'><br>";
		}
		else{
			toReturn = toReturn + ' ' +courses[i].courseCode +'      Grade: '+"<input type='text' name='grade" +i+"' value="+courses[i].grade+"><br>";
		}
	}
	
	return toReturn;}
	else{
		return "<br>"+'None'+"<br>";;
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
	var toReturn = 0
	for(var i in courses){
		console.log(courses[i].courseCode);
		if(!(courses[i].grade == null)){
			toReturn = toReturn + parseGrade(courses[i].grade);
			count = count + 1;
		}
	}
	console.log(count);
	if(count == 0) return 'Not Available';
	return toReturn/count;
	}else{
	return "<br>"+'None'+"<br>";
	}
}

function parseGrade(grade){
	var precentGrade = parseInt(grade);
	var regularGrade;
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
