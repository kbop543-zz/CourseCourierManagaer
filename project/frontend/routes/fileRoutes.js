var User = require('../models/user');

var fs = require('fs');

/*helper function to split text file line by line and read*/
function read(file, cb) {
  fs.readFile('./uploads/'+file, 'utf8', function(err, data) {
    var myRegexp = /(CSC[0-9]*)([\w\d\s\W\D\S]*Description\s*Weight\s*Due\s*)([A-Z0-9]*)/g;
	match = myRegexp.exec(data);
	while (match != null) {
	  // matched text: match[0]
	  // match start: match.index
	  // capturing group n: match[n]
	  //console.log(match[3])
	  //match = myRegexp.exec(data);
	  cb(match[1]);
	}
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
      		syllabusObj.push(data[thing]);
      		console.log(syllabusObj);
      	}
      });
  })
})
}




    