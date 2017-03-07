var mongoose = require('mongoose');

// Doc for Mongoose Schemas: http://mongoosejs.com/docs/guide
var Schema = mongoose.Schema;

/**
 * Note that the database was loaded with data from a JSON file into a
 * collection called gillers.
 */
var courierSchema = new Schema(
    {
        course: {
            type: String, required: true
        },
        date: {
            type: String, requried: true
        }
    },
    {
        collection: 'courier'
    }
);

// Doc for Mongoose Connections: http://mongoosejs.com/docs/connections
mongoose.connect('mongodb://localhost/couriersdb');

// Doc for Mongoose Models: http://mongoosejs.com/docs/models
module.exports = mongoose.model('Courier', courierSchema);