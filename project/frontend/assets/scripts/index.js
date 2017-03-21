/* Set up the update user form */
function signupSetup (){

    // Fetch the user's current info
    $.get('/getOneUser', function(data){
		
        $('#login').hide();
        $('#courses').show();
        $('#profile').show();
        $('#logout').show();



/*
        $('#username').val(data.username);
        $('#firstName').val(data.firstName);
        $('#lastName').val(data.lastName);
        $('#email').val(data.email);*/

    })

}

$(document).ready(function(){
	$('#courses').hide();
    $('#profile').hide();
    $('#logout').hide();
    $('#upload').click(function () {
        $('#uploadPdf').show();
        $('#info').hide();
    });
    $('#about').click(function () {
        $('#info').show();
        $('#uploadPdf').hide();
    });
    $('#home').click(function () {
        $("main").empty();
    });

    signupSetup();

})
