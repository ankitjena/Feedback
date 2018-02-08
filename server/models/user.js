const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    //xtasyid : { type: String , default: "unassigned"},
    name : { type : String , unique : true, required : true},
    emailid : { type : String , required : true},
    password : {type : String , required : true}
});

const userModel = mongoose.model('user', userSchema );

module.exports = userModel;
