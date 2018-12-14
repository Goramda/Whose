const mongoose = require('mongoose')
const postSchema = require("../model/postModel")
const userSchema = require("../model/userModel")

exports.getAllFound =(req,res,next)=>{
    res.status(200).json({
        message : "GetAllFound"
    })
}

exports.getAllFind =(req,res,next)=>{
    res.status(200).json({
        message : "GetAllFind"
    })
}

exports.postsDetail =(req,res,next)=>{
    // req.headers.authorization.slice(8)
    userSchema
    .find({_id : req.body.userID})
    .exec()
    .then(user=>{
        if(user.length == 0){
            return res.status(404).json({
                message : "User doesn't found"
            })
        }
        else { 
            const Post = new postSchema({
                _id : new mongoose.Types.ObjectId(),
                 title : req.body.title,
                 tag : req.body.tag,
                 detail : req.body.detail,
                 author : req.body.userID,
                 post : req.body.post
            })
            Post
                .save()
                .then(result => {
                    console.log(result)
                    res.status(201).json({
                        message : "Saved"
                    })
                })
                .catch(err=>{
                    console.log(err)
                    res.status(500).json({
                        message : "Create Event Error ",
                        err : err
                    })
                })
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            message : "Internal Server Error",
            err : err
        })
    })
}