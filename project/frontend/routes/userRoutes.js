var User = require('../models/user');


/* Sign in */
exports.signIn = function(req, res) {
    console.log('signIn');

    // Find if user matches both username AND password
    User.findOne({
        'username': req.body.username,
        'password': req.body.password
    }, function(err, user) {

        if (err) throw err;

        // Return error message if user not found
        if (user == null) {

            res.status(500).send('Username or Password is incorrect');

        } else {

            // Set cookie to be username
            req.session.username = user.username;

            // Redirect to logged in page
            res.send('Success');
        }
    });
};


/* Sign up */
exports.signUp = function(req, res) {
    console.log('addOne');

    /*// Input validation
    req.checkBody({
        'email': {
            isEmail: {
                errorMessage: 'Enter a valid email address.'
            }
        },
        'username': {
            isAlphanumeric: {
                errorMessage: 'Enter a valid username.'
            },
            isLength: {
                options: [{
                    min: 2
                }],
                errorMessage: 'Enter a valid username length.'
            }
        },
        'password': {
            isAlphanumeric: {
                errorMessage: 'Enter a valid username.'
            },
            isLength: {
                options: [{
                    min: 2,
                    max: 32
                }],
                errorMessage: 'Enter a valid username.'
            }
        },
        'firstName': {
            isAlpha: {
                errorMessage: 'Enter a valid name.'
            }
        },
        'lastName': {
            isAlpha: {
                errorMessage: 'Enter a valid name.'
            }
        },
    });

    var errors = req.validationErrors();

    // Return error on validation error
    if (errors) {

        res.status(500).send('Server validation error!');

    } else {*/

        // Find a user
        User.findOne({
            'username': req.body.username
        }, function(err, user) {
            if (err) throw err;

            // If username is not in the databse then create the user
            if (user == undefined) {

                var newUser = new User(req.body);

                // Save user
                newUser.save(function(err, newUser) {
                    if (err) {
                        throw err;
                    } else {
                        res.send('Success');
                    }
                });

            } else {
                // Return error if user not found
                res.status(500).send('A user with that username already exists');
            }
        })
    //}
}




/* Get one user */
exports.getOneUser = function(req, res) {
    console.log('getOneUser');

    // Get the username from current session
    User.findOne({
        'username': req.session.username
    }, function(err, foundUser) {
        if (err) throw err;

        // If user is found, send it back
        if (foundUser != undefined) {
        	console.log(foundUser);
            res.send(foundUser);

        /*} else {
            // Return error if user not found
            res.status(500).send('The user you are trying to edit does not exist');
        }*/
    }
    });
};
exports.modifyUser = function(req,res){
		// Find a user
	console.log("this is called");
        User.findOne({
            'username': req.session.username
        }, function(err, user) {
            if (err) throw err;
			console.log("no error");
			console.log(req.body.username);
            // If username is not in the databse then create the user
            if (user == undefined){
                // Return error if user not found
                res.status(500).send('A user with that username does not exist');
				
            }else {
                // modify user

        		user.firstName = req.body.firstName;
        		user.lastName = req.body.lastName;
        		user.email = req.body.email;
				/*console.log(req.body['grade'+0]+"    160");
					var json_obj;
					try{ json_obj= JSON.parse(user.courseObj);
	 				  }catch(e){
						json_obj = user.courseObj;	
						}
				if(json_obj!=null){
        		for(var i in json_obj.courses){
					if(isNaN(req.body['grade'+i])){
					}
					else{
						json_obj.courses[i].grade = req.body['grade'+i] ;
					}
				}
				user.courseObj = JSON.stringify(json_obj);
				console.log(user.courseObj);*/
				}
				user.save(function(err, newUser) {
                    if (err) {
                        throw err;
                    } else {
                        res.send('Success');
                    }
                });
            })
        }

             
