'use strict'; 

var User = require('../models/user');

var fs = require('fs');
var courseObj;

fs.readFile('courses.json', 'utf-8', function(err, data) {
    if(err) throw err;
    courseObj = JSON.parse(data);
    console.log(courseObj.courses);
});

/*helper function to split text file line by line and read*/
function read(file, cb) {
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


console.log(courseData2);


  

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

    })
  console.log(markables);
    
  }

  everything.push({
      "courseCode": courseCode,
      "courseName": courseName,
      "markables": markables
    });

  console.log(everything);
  console.log(courseObj.courses);
  courseObj.courses.push(everything);
  cb(courseObj);
  })

  


}

//parse pdf and upload the parsed file to console 
exports.parsePdf = function(req, res) {
    console.log('parsePdf');

    fs.readdir('./uploads', function(err, filenames) {
    if (err) {
      throw err;
      return;
    }
    filenames.forEach(function(filename) {
      read(filename, function(data) {

        //console.log(data)
        res.send(data);
      });
  })
})
//fs.unlinkSync('./uploads');
    
}


