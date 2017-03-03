$(document).ready(function(){
    $('#upload').click(function () {
        $("main").empty(); 
        $("main").append('<form action="/actiononfile"> Course: <input type="file" name="Upload Here!"><br><input type="submit" value="Upload"><input type="reset" value="Reset"><br></form>');
    });
    $('#login').click(function () {
        $("main").empty();
        $("main").append('<form action="/actiononfile"> Username: <input type="text" name="Username"><br> Password: <input type="text" name="Username"><br><input type="submit" value="Log In"><input type="reset" value="Reset"><br></form>');
    });
    $('#about').click(function () {
        $("main").empty();
        $("main").append("<p>This is where the about information goes<p/>");
    });
    $('submit').click(function () {
        $("main").append('<p>This is where the about information goes<p/>');
    });
});