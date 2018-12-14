const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    email :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    fName :{
        type : String,
        required :true
    },
    lName :{
        type : String,
        required : true
    }
 })
 module.exports = mongoose.model('user' ,userSchema)