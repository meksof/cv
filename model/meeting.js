//meeting model

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var meetingSchema = new Schema({
    name: {type: String, required: true},
    email : {type: String, required: true},
    tel : {type: String, required: true},
    message : String,
    createdOn: {type: Date, default: Date.now},
    
});




var Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;