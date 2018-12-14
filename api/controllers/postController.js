// const mongoose = require('mongoose')

exports.getAllPost =(req,res,next)=>{
    res.status(200).json({
        message : "GetAll"
    })
}

exports.postsDetail =(req,res,next)=>{
    res.status(200).json({
        message : "PostDetail"
    })
}