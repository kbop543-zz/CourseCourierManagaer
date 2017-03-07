var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        username: {
            type: String, required: true
        },
        password: {
            type: String, required: true
        },
        confirmedPassword: {
            type: String, required: true
        },
        firstName : {
            type: String, required: true
        },
        lastName : {
            type: String, required: true
        },
        email: {
            type: String, required: true
        }        
    },
    {
        collection: 'users'
    }
);

mongoose.connect('mongodb://localhost/courierdb');

module.exports = mongoose.model('User', userSchema);