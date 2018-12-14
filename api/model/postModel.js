const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title : {
        type : String,
        required : true
    },
    auther : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'user',
        required :true
    },
    tag :{
        type : String
    },
    detail : {
        type : String
    }
    // image : {
    //     type : 
    // }
})

module.exports = mongoose.model('post' , postSchema)