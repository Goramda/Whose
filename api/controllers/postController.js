const mongoose = require('mongoose')
const postSchema = require("../model/postModel")
const userSchema = require("../model/userModel")

exports.getAllFound =(req,res,next)=>{
    postSchema
    .find({post:1})
    .exec()
    .then(result=>{
        res.status(200).json({
            result
        })

    })
    .catch(err=>{
        res.status(500).json({
            message : "Unifined",
            error : err
        })
    })
}

exports.getAllFind =(req,res,next)=>{
    postSchema
    .find({post:2})
    .exec()
    .then(result=>{
        res.status(200).json({
            result
        })

    })
    .catch(err=>{
        res.status(500).json({
            message : "Unifined",
            error : err
        })
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

exports.getDetail = (req,res,next)=>{
    res.status(200).json({
        message : "ShowDetail"
    })
}