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







