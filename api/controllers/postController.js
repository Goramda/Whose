const mongoose = require('mongoose')
const postSchema = require("../model/postModel")
const userSchema = require("../model/userModel")
const jwtDecode = require('jwt-decode');
exports.getAllFound =(req,res,next)=>{
    postSchema
    .find({post:1})
    .select('title author')
    .populate('author' , 'fName')
    .exec()
    .then(result=>{
        res.status(200).json({
            count : result.length,
            event : result.map(doc =>{
                return{
                    postId : doc._id,
                    title :doc.title,
                    author :doc.author,
                    datePost : doc.datePost,
                    tag : doc.tag
                }
            })
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
    .populate('author' , 'fName')
    .exec()
    .then(result=>{
        res.status(200).json({
            count : result.length,
            event : result.map(doc =>{
                return{
                    postId : doc._id,
                    title :doc.title,
                    author :doc.author,
                    datePost : doc.datePost,
                    tag : doc.tag
                }
            })
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
    let bearerToken = req.headers["authorization"]
    let myUserId = ""
    if (typeof bearerToken !== "undefined"){
        const bearer = bearerToken.split(" ")
        
        const token = bearer[1]
        
         myUserId = jwtDecode(token)
        console.log(myUserId)
    }
    userSchema
    .find({_id : myUserId.userId})
    .exec()
    .then(user=>{
        if(user.length == 0){
            return res.status(404).json({
                message : "User doesn't found"
            })
        }
        else { console.log(user , " n  puouo")
            const Post = new postSchema({
                _id : new mongoose.Types.ObjectId(),
                 title : req.body.title,
                 tag : req.body.tag,
                 detail : req.body.detail,
                 author : myUserId.userId,
                 post : req.body.post,
                 datePost : new Date()
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

exports.getDetail = (req,res,next)=>{console.log(req.params.postID,"GG")
    postSchema
    .find({_id:req.params.postID})
    .populate("author","fName lName")
    .exec()
    .then(docs=>{
        if(docs.length == 0){
            return res.status(404).json({
                message : "Don't have Detail"
            })
        }
        else{
            res.status(200).json({
                docs
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            error : err
        })
    })
    
}

//For Found Item
exports.getFoundKey=(req,res,next)=>{
    postSchema
    .find({post:1,tag:1})
    .populate('author' , 'fName')
    .exec()
    .then(result=>{
        res.status(200).json({
            event : result.map(doc =>{
                return{
                    postId : doc._id,
                    title :doc.title,
                    author :doc.author,
                    datePost : doc.datePost,
                    tag : doc.tag
                }
            })
        })

    })
    .catch(err=>{
        res.status(500).json({
            message : "postnotfound",
            error : err
        })
    })
}

exports.getFoundCard=(req,res,next)=>{
    postSchema
    .find({post:1,tag:2})
    .populate('author' , 'fName')
    .exec()
    .then(result=>{
        res.status(200).json({
            event : result.map(doc =>{
                return{
                    postId : doc._id,
                    title :doc.title,
                    author :doc.author,
                    datePost : doc.datePost,
                    tag : doc.tag
                }
            })
        })

    })
    .catch(err=>{
        res.status(500).json({
            message : "postnotfound",
            error : err
        })
    })
}

exports.getFoundWallet=(req,res,next)=>{
    postSchema
    .find({post:1,tag:3})
    .populate('author' , 'fName')
    .exec()
    .then(result=>{
        res.status(200).json({
            event : result.map(doc =>{
                return{
                    postId : doc._id,
                    title :doc.title,
                    author :doc.author,
                    datePost : doc.datePost,
                    tag : doc.tag
                }
            })
        })

    })
    .catch(err=>{
        res.status(500).json({
            message : "postnotfound",
            error : err
        })
    })
}

exports.getFoundPhone=(req,res,next)=>{
    postSchema
    .find({post:1,tag:4})
    .populate('author' , 'fName')
    .exec()
    .then(result=>{
        res.status(200).json({
            event : result.map(doc =>{
                return{
                    postId : doc._id,
                    title :doc.title,
                    author :doc.author,
                    datePost : doc.datePost,
                    tag : doc.tag
                }
            })
        })

    })
    .catch(err=>{
        res.status(500).json({
            message : "postnotfound",
            error : err
        })
    })
}

exports.getFoundOther=(req,res,next)=>{
    postSchema
    .find({post:1,tag:5})
    .populate('author' , 'fName')
    .exec()
    .then(result=>{
        res.status(200).json({
            event : result.map(doc =>{
                return{
                    postId : doc._id,
                    title :doc.title,
                    author :doc.author,
                    datePost : doc.datePost,
                    tag : doc.tag
                }
            })
        })

    })
    .catch(err=>{
        res.status(500).json({
            message : "postnotfound",
            error : err
        })
    })
}

//For Find Item
exports.getFindKey=(req,res,next)=>{
    postSchema
    .find({post:2,tag:1})
    .populate('author' , 'fName')
    .exec()
    .then(result=>{
        res.status(200).json({
            event : result.map(doc =>{
                return{
                    postId : doc._id,
                    title :doc.title,
                    author :doc.author,
                    datePost : doc.datePost,
                    tag : doc.tag
                }
            })
        })

    })
    .catch(err=>{
        res.status(500).json({
            message : "postnotfound",
            error : err
        })
    })
}

exports.getFindCard=(req,res,next)=>{
    postSchema
    .find({post:2,tag:2})
    .populate('author' , 'fName')
    .exec()
    .then(result=>{
        res.status(200).json({
            event : result.map(doc =>{
                return{
                    postId : doc._id,
                    title :doc.title,
                    author :doc.author,
                    datePost : doc.datePost,
                    tag : doc.tag
                }
            })
        })

    })
    .catch(err=>{
        res.status(500).json({
            message : "postnotfound",
            error : err
        })
    })
}

exports.getFindWallet=(req,res,next)=>{
    postSchema
    .find({post:2,tag:3})
    .populate('author' , 'fName')
    .exec()
    .then(result=>{
        res.status(200).json({
            event : result.map(doc =>{
                return{
                    postId : doc._id,
                    title :doc.title,
                    author :doc.author,
                    datePost : doc.datePost,
                    tag : doc.tag
                }
            })
        })

    })
    .catch(err=>{
        res.status(500).json({
            message : "postnotfound",
            error : err
        })
    })
}

exports.getFindPhone=(req,res,next)=>{
    postSchema
    .find({post:2,tag:4})
    .populate('author' , 'fName')
    .exec()
    .then(result=>{
        res.status(200).json({
            event : result.map(doc =>{
                return{
                    postId : doc._id,
                    title :doc.title,
                    author :doc.author,
                    datePost : doc.datePost,
                    tag : doc.tag
                }
            })
        })

    })
    .catch(err=>{
        res.status(500).json({
            message : "postnotfound",
            error : err
        })
    })
}

exports.getFindOther=(req,res,next)=>{
    postSchema
    .find({post:2,tag:5})
    .populate('author' , 'fName')
    .exec()
    .then(result=>{
        res.status(200).json({
            event : result.map(doc =>{
                return{
                    postId : doc._id,
                    title :doc.title,
                    author :doc.author,
                    datePost : doc.datePost,
                    tag : doc.tag
                }
            })
        })

    })
    .catch(err=>{
        res.status(500).json({
            message : "postnotfound",
            error : err
        })
    })
}