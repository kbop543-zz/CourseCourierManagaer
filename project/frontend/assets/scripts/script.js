$(document).ready(function(){
    $('#upload').click(function () {
        $("main").empty(); 
        $("main").append('<form action="/actiononfile">Course: <input type="file" name="coursefile"><br><input type="submit" value="Upload"><input type="reset" value="Reset"><br></form>');
    });
    $('#login').click(function () {
        $("main").empty();
        $("main").append('<form action="/actiononfile"><input type="text" placeholder ="Username" name="Username"><br><input type="text" placeholder ="Password" name="Password"><br><input type="submit" value="Log In"><input type="reset" value="Reset"><br></form>');
    });
    $('#about').click(function () {
        $("main").empty();
        $("main").append("<p>Courier Course Manager is an easy way for instructors and students to create, maintain, and update their schedules.<p/>");
    });
});