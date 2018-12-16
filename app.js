const express = require("express");
const app = express();
const mongoose = require('mongoose');
const apiRoute = require('./api/routes');
const bodyParser = require("body-parser")

mongoose.connect('mongodb://god:g123456@ds137435.mlab.com:37435/whose', {useNewUrlParser : true})

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

// app.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Origin' , '*'); // Any Host can use API , Parameter 2 is URL you want to allow CORS
//     res.header(
//         'Access-Control-Allow-Headers' , 
//         'Origin , X-Requested-With , Content-Type , Accept , Authorization'
//     ) // Allow Any Header
//     if(req.method === 'OPTIONS'){
//         res.header('Access-Control-Allow-Methods' , 'PUT, POST, PATCH, DELETE , GET')
//         return res.status(200).json({})
//     }
//     next();
// })

app.use('/api' ,apiRoute)

app.use((req,res,next)=>{
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.get('/' , (req,res,next)=>{
    res.status(200).json({
        message : "HelloWorld"
    })
})

module.exports = app;