/* Set up the update user form */
function signupSetup (){

    // Fetch the user's current info
    $.get('/getOneUser', function(data){

        $('a#login').hide();
        $('a#courses').show();
        $('a#myMarks').show();
        $('a#profile').show();
        $('#logout').show();



/*
        $('#username').val(data.username);
        $('#firstName').val(data.firstName);
        $('#lastName').val(data.lastName);
        $('#email').val(data.email);*/

    })

}

/*function handleUpload(){

    $('#uploadPdf').submit(function(event) {

        event.preventDefault();

        // Get the data from form
        let formData = $('#uploadPdf').serialize();

        $.get('/uploadSyllabus', formData, function(data) {
            alert('Syllabus added.');
        })

        return false;
    });
}*/

$(document).ready(function(){

    $('a#courses').hide();
    $('a#myMarks').hide();
    $('a#profile').hide();
    $('#logout').hide();
		$('#info').hide();

    $('#upload').click(function () {
        $('#uploadPdf').show();
        $('#info').hide();
    });
    $('#about').click(function () {
        $('#about').show();
        $('#uploadPdf').hide();
    });
    $('#home').click(function () {
        $("main").empty();
    });

    signupSetup();

    //handleUpload();

})
