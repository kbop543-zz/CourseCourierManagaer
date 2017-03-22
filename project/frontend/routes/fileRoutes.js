var User = require('../models/user');

var fs = require('fs');

/*helper function to split text file line by line and read*/
function read(file, cb) {

	var readline = require('linebyline'),
      rl = readline('./uploads/' + file);

    rl.on('line', function(line, lineCount, byteCount) {

      // Used to store all the parsed values
      var parsedValues = [];
      
      // First extract course code
      var courseCodeRegex = /([a-z]{3}|[A-Z]{3})[0-9]{3}/g;

      var courseCode = courseCodeRegex.exec(line);

      // if (courseCode == null) {
      // 	console.log("No course code found.");
      // 	return;
      // }

      console.log(courseCode[0]);
      parsedValues.push(courseCode[0]);

      

    })
    .on('error', function(e) {
      console.log("No syllabus file found.");
      return;
    });






  // fs.readFile('./uploads/'+file, 'utf8', function(err, data) {

  // 	// console.log(data);

  // 	// Array to store syllabus values
  // 	match = []

  // 	// First extract course code
  // 	var courseCodeRegex = /([a-z]{3}|[A-Z]{3})[0-9]{3}/g;
  
  // 	var courseCode = courseCodeRegex.exec(data);

  // 	if (courseCode == null) {
  // 		throw err;
  // 		return;
  // 	}

  // 	match.push(courseCode);

  // 	console.log(match);

  	// 



  	// cb(match);

 //    var myRegexp = /(CSC[0-9]*)([\w\d\s\W\D\S]*Description\s*Weight\s*Due\s*)([A-Z0-9]*)/g;
	// match = myRegexp.exec(data);
	// while (match != null) {
	//   // matched text: match[0]
	//   // match start: match.index
	//   // capturing group n: match[n]
	//   //console.log(match[3])
	//   //match = myRegexp.exec(data);
	//   cb(match[1]);
	// }
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
      	// var syllabusObj = [];
      	// syllabusObj.push(data[1][1]);
      	// console.log(syllabusObj);
      	// for(var thing in data){
      	// 	syllabusObj.push(data[thing]);
      	// 	console.log(syllabusObj);
      	// }
      });
  })
})
}




    