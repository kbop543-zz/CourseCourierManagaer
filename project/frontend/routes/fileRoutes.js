var User = require('../models/user');

var fs = require('fs');

/*helper function to split text file line by line and read*/
function read(file, cb) {
  fs.readFile('./uploads/'+file, 'utf8', function(err, data) {
    if (!err) {
        cb(data.toString().split('\n'))
    } else {
        console.log(err)
    }
  });
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
      		console.log(data[thing]);
      	}
      });
  })
})
}




    