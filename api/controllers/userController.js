const mongoose = require("mongoose");
const userSchema = require('../model/userModel')
const bcrypt = require("bcrypt-nodejs")
const salt = bcrypt.hashSync("Whose")

exports.login = (req,res,next)=>{
    res.status(200).json({
        message : "Login Success"
    })
}

exports.register = (req,res,next)=>{
    userSchema
        .find({email : req.body.email})
        .exec()
        .then(user=>{console.log("ss")
            if(user.length > 0){
                return res.status(409).json({
                    message : "Mail exists"
                })
            }else{
                bcrypt.hash(req.body.password , salt , null , (err, hash)=>{
                 
                    if(err){
                        return res.status(500).json({
                            message : "Something went wrong"
                        })
                    }else{
                        const User = new userSchema({
                            _id : new mongoose.Types.ObjectId(),
                            email : req.body.email,
                            password : req.body.password,
                            fName : req.body.fName,
                            lName : req.body.lName
                            
                        })
                        User
                            .save()
                            .then(result =>{
                                res.status(201).json({
                                    message : "Create user successfully",
                                    result  
                                })
                            }).catch(err=>{
                                console.log(err)
                                res.status(500).json({
                                    message : "Something went wrong",
                                    error : err
                                })
                            })
                    }
                })
            }
        })
        .catch(err=>{
            
            res.status(500).json({
                message : "Something went wrong",
                error : err
            })
        })
    }
