'use strict'; 

var User = require('../models/user');

var fs = require('fs');

var dateFormat = require('dateformat');


var courseObj;
var flag = 0;

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


    markables.push({
      "name": courseData2[i],
      "description": courseData2[j],
      "weight": courseData2[k],
      "dueDate": courseData2[l]
      //new Date(date[0], date[1],date[2])

    })
    
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
        var usernameCourses = JSON.parse(username.courseObj);
        for(let i = 0; i< usernameCourses.courses.length; i++){
          let course = usernameCourses.courses[i].courseCode;
          if(course == temp.courses[0].courseCode){
            flag = 1;
            break;
          }else{
            flag = 0;
          }
        }
        if(flag != 1){
          
          usernameCourses.courses.push(temp.courses[0]);
          username.courseObj = usernameCourses;
          cb(username.courseObj);
        }else{
          cb(flag);
        }
      }else{
        username.courseObj = json;
        cb(username.courseObj);
        flag = 0;
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
    fs.readdir('./uploads', function(err, filenames) {

    if (err) {
      throw err;
      return;
    }
    filenames.forEach(function(filename) {
      read(req,filename, function(data) {
        
        
      });
  })

})
    fs.readdir('./uploads', function(err, files) {
    if (err) {
       throw err;
    } else {
       if (!files.length) {
           flag=0;
       }
    }
});

    if(flag == 1){
      res.status(500).send("Error: duplicate syllabus course");
    }else{
      if(req.session.username != null){
        User.findOne({'username': req.session.username}, function(err, username){
          res.send(username.courseObj);
        });
      }
    }

}