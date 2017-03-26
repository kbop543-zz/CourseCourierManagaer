'use strict'; 

var User = require('../models/user');

var fs = require('fs');

var dateFormat = require('dateformat');


var courseObj;

fs.readFile('courses.json', 'utf-8', function(err, data) {
    if(err) throw err;
    courseObj = JSON.parse(data);
    
});

/*helper function to split text file line by line and read*/
function read(req,file, cb) {
  var filePath = './uploads/'+file;


  var everything = [];
  var markables =[];
  var courseData2;
  var courseData;

  let i,j,k,l;

  fs.readFile(filePath, 'utf8', function(err, data) {
    var myRegexp = /(.*)\n(.*)([\w\d\s\W\D\S]*Description\s*Weight\s*Due\s*)([\w\d\s\W\D\S]*)/g;
  var match = myRegexp.exec(data);
  var courseCode;
  var courseName;


 
  while (match != null) {
    courseCode = match[1];
    courseName = match[2]
    courseData = match[4];
    break;

  }


  courseData2 = courseData.split("\n");

  //filter out empty strings that are there as a result of spaces between lines
  courseData2 = courseData2.filter(function(element){
    return element !== "";
  })

  for(i=0, j=1, k = 2, l=3;
   i< courseData2.length 
   && j<courseData2.length 
   && k<courseData2.length 
   && l<courseData2.length; i+=4,j+=4,k+=4,l+=4){

    //var now = courseData2[l];

//console.log(now);

    //dateFormat(now, "yyyy-­mm-­dd  HH:MM:ss")

     //var dateTime = courseData2[l].split(" ");
     //var date = dateTime[0].split("/");
     //console.log(date);
     /*console.log(date[1]);
     console.log(date[2]);
     if(date[1][0] == '-'){
      date[1] = date[1]+date[2];
      console.log(date[1]);*/
     //}
     //var time = dateTime[1].split(":");
     //console.log(dateTime);
     //console.log(date);
     //console.log(time);

     //var milliseconds = "00";

    markables.push({
      "name": courseData2[i],
      "description": courseData2[j],
      "weight": courseData2[k],
      "dueDate": courseData2[l]
      //new Date(date[0], date[1],date[2])

    })

    //console.log(new Date(date[0], date[1],date[2]));
    

    
  }

  everything.push({
      "courseCode": courseCode,
      "courseName": courseName,
      "markables": markables
    });

    var temp = {"courses" : everything}
    courseObj.courses.push(temp.courses[0]);
    var json = JSON.stringify(courseObj);

    if(req.session.username != null){
    User.findOne({'username': req.session.username}, function(err, username){
      if(username.courseObj != null){
        console.log(username.courseObj);
        for(let i = 0; i< username.courseObj.courses.length; i++){
          let course = username.courseObj.courses[i];
          if(course == temp.courses[0].courseCode){
            var flag = 1;
            break;
          }
        }
        if(flag != 1){
          username.courseObj.courses.push(temp.courses[0]);
          cb(username.courseObj);
        }else{
          cb(flag);
        }
      }else{
        username.courseObj = json;
        cb(username.courseObj);
      }
      username.save(function(err) {
        if (err) throw err;
      })
  })
  }
  
  fs.unlinkSync(filePath);
})
}

//parse pdf and upload the parsed file to console 
exports.parsePdf = function(req, res) {
    console.log('parsePdf');
    var finalObj;
    var flag;

    fs.readdir('./uploads', function(err, filenames) {

    if (err) {
      throw err;
      return;
    }
    filenames.forEach(function(filename) {
      read(req,filename, function(data) {
        if(data == 1){
          flag = 1;
        }
        
      });
  })

})

    if(flag == 1){
      res.status(500).send("Error: one of the syllabuses you uploaded already exist.");
    }else{
      if(req.session.username != null){
        User.findOne({'username': req.session.username}, function(err, username){
          res.send(username.courseObj);
        });
      }else{
        res.send(courseObj);
      }
    }

}