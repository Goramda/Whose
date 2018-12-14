const mongoose = require("mongoose");
const userSchema = require('../model/userModel')
const bcrypt = require("bcrypt-nodejs")
const salt = bcrypt.hashSync("Whose")
const jwt = require('jsonwebtoken')

exports.login = (req,res,next)=>{
    userSchema
        .find({email : req.body.email})
        .exec()
        .then(user=>{
           if(user.length < 1){
                return res.status(401).json({
                    message : "User not found"        
                })
           }
           bcrypt.compare(req.body.password , user[0].password , (err , result)=>{
               if(err){
                   return res.status(401).json({
                       message : "Wrong Password"
                   })
               }if(result){
                   const token = jwt.sign({
                        email : user[0].email,
                        userId : user[0]._id
                   } , "Secret_Key" , { expiresIn : "1h"})
                   return res.status(200).json({
                       message : "Auth successfully",
                       token : token,
                       fName : user[0].fullName,
                       lName : user[0].lName,
                        _id : user[0]._id
                    })   
               }
               res.status(401).json({
                   message : "Auth Failed"
               })
           })
        }).catch(err=>{
            res.status(500).json({
                message : "Something went wrong"
            })
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
                            password : hash,
                            fName : req.body.fName,
                            lName : req.body.lName
                            
                        })
                        User
                            .save()
                            .then(result =>{
                                const token = jwt.sign({
                                    email : req.body.email,
                                    userId : User._id
                               } , "Secret_Key" , { expiresIn : "1h"})
                                res.status(201).json({
                                    message : "Create user successfully",
                                    token ,
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
