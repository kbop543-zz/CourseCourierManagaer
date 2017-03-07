/* Set up the update user form */
function signupSetup (){

    // Fetch the user's current info
    $.get('/getOneUser', function(data){

        $('a#login').hide();
        $('a#profile').show();
        $('#logout').show();

        $("main").empty();
        $("main").append("<p>Welcome<p/>" + data.username);


/*
        $('#username').val(data.username);
        $('#firstName').val(data.firstName);
        $('#lastName').val(data.lastName);
        $('#email').val(data.email);*/

    })
    
}

$(document).ready(function(){
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