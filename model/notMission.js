//notMission model

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var notMissionSchema = new Schema({
    email : {type: String, required: true},
    createdOn: {type: Date, default: Date.now},
    
});




var NotMission = mongoose.model('NotMission', notMissionSchema);

module.exports = NotMission;