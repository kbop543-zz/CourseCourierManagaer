'use strict'; 

var User = require('../models/user');

var fs = require('fs');

/*helper function to split text file line by line and read*/
function read(file, cb) {
  fs.readFile('./uploads/'+file, 'utf8', function(err, data) {
    var myRegexp = /(.*)\n(.*)([\w\d\s\W\D\S]*Description\s*Weight\s*Due\s*)([\w\d\s\W\D\S]*)/g;
  var match = myRegexp.exec(data);
  var courseCode;
  var courseName;
  var courseData;

  // cT stands for 'course task'.. anyone have a better acronym?
  var cTAcronym =[];
  var cTDescription =[];
  var cTPercentage =[];
  var cTDate = [];

  let i,j,k,l;

 
  while (match != null) {
    courseCode = match[1];
    courseName = match[2]
    courseData = match[4];
    break;

  }
  console.log(courseCode);
  console.log(courseName);
  console.log(courseData);

  var courseData2 = courseData.split("\n");
  console.log(courseData2);

  

  for(i=0, j=0, k = 0, l=0;
   i< courseData.length 
   && j<courseData.length 
   && k<courseData.length 
   && l<courseData.length; i+4,j+4,k+4,l+4){
    cTAcronym.push(courseData2[i]);
    cTDescription.push(courseData2[i]);
    cTPercentage.push(courseData2[i]);
    cTDate.push(courseData2[i]);
  }
  //console.log(cTAcronym);

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
        var syllabusObj = [];
        for(var thing in data){
          //syllabusObj.push(data[thing]);
          //console.log(data[thing]);
        }
      });
  })
})
}