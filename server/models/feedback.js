const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({

    //xtasyid : { type: String , default: "unassigned"},
    name : { type : String , unique : true, required : true},
    comment : { type : String , required : true},
    emailid : { type : String , unique : true, required : true },
    read : {type : Boolean , default : false},
    messages : {type : String}
});

const feedbackModel = mongoose.model('feedback', feedbackSchema );

module.exports = feedbackModel;
