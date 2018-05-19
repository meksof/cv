//feedBack model

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var feedBackSchema = new Schema({
    message : {type: String, required: true},
    createdOn: {type: Date, default: Date.now},
    
});




var FeedBack = mongoose.model('FeedBack', feedBackSchema);

module.exports = FeedBack;